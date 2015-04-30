angular.module("ArautoSvc", ["angular-websql"])
    .service("Arauto", function ($webSql, $http) {
        this.elune=function() { alert("hi");};
        this.db = $webSql.openDatabase("eCausasT", "1.0", "ecausasT", 5 * 1024 * 1024, true);

        this.db.createTable('usuario', {
            'ID': { 'primary': true, 'type': 'INTEGER', 'null': "NOT NULL" },
            'PrimeiroNome': { 'type': 'TEXT', "null": "NOT NULL" },
            'UltimoNome': { 'type': 'TEXT', "null": "NOT NULL" },
            'Email': { 'type': 'TEXT', "null": "NOT NULL" },
            'Telefone': { 'type': 'TEXT', "null": "NOT NULL" },
            'Vip': { 'type': 'BOOLEAN' },
            'ContaType': { 'type': 'INTEGER' },
            'Status': { 'type': 'INTEGER' },
            'Ip': { 'type': 'TEXT' },
            'Senha': { 'type': 'TEXT' },
            'SenhaSalt': { 'type': 'TEXT' },
            'ComentarioEFFY': { 'type': 'TEXT' },
            'UltimoLogin': { 'type': 'DATETIME' },
            'DataAniversario': { 'type': 'DATETIME' },
            'DataCadastro': { 'type': 'DATETIME' },
            'FotoPerfil': { 'type': 'TEXT' },
            'Banido': { 'type': 'BOOLEAN' },
            'AdvogadoID': { 'type': 'INTEGER' },
            'AuthToken': { 'type': 'TEXT' }
        })
            .then(function (done) {
               // alert("h");
            });

        this.db.createTable('casos', {
            'ID': { 'primary': true, 'type': 'INTEGER', 'null': "NOT NULL" },
            'UsuarioID': { 'type': 'INTEGER', 'null': "NOT NULL" },
            'AdvogadoID': { 'type': 'INTEGER' },
            'Reu': { 'type': 'TEXT', 'null': "NOT NULL" },
            'Titulo': { 'type': 'TEXT', 'null': "NOT NULL" },
            'NomeUsuario': { 'type': 'TEXT', 'null': "NOT NULL" },
            'DataInclusao': { 'type': 'DATETIME' },
            'DataUltimaConversa': { 'type': 'DATETIME' },
            'DataAssumido': { 'type': 'DATETIME' },
            'DataResolucao': { 'type': 'DATETIME' },
            'UltimaAlteracao': { 'type': 'DATETIME' },
            'Status': { 'type': 'INTEGER' },
            'Visualizações': { 'type': 'INTEGER' },
            'Indenização': { 'type': 'DECIMAL' },
            'Descricao': { 'type': 'TEXT', 'null': "NOT NULL", 'required': true },
            'ComentarioEFFY': { 'type': 'TEXT' },
            'Anexos': { 'type': 'TEXT' }
        })
    .then(function (done) {
        //alert(done);
    });

        this.cadastrarUsuario = function (usuario) {
            this.db.insert("usuario", usuario)
                .then(function (done) {
                    console.log(done);
                });
        };


        this.inserirCaso = function (caso, callback) {
            this.db.insert("casos", caso)
                .then(function (done) {
                    //alert(done.rows.item(0));
		    callback();
                });    
        };

	this.puxarCasos=function(x) {
	    this.db.selectAll("casos").then(x);
	};

        this.userLogin = function (data) {

        };

    });
