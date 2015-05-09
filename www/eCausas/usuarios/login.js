angular.module("UsuarioControllers", ["ArautoSvc"])
    .controller("perfilController", function($scope, Arauto) {
        $scope.usuario = { PrimeiroNome: "", UltimoNome: "", Email: "", Telefone: "", DataCadastro: "" };
        $scope.nome = function(val) {
            if (angular.isDefined(val)) {
                var l = val.length;
                var x = val.split(" ");
                if (x.length < 2 || x[1] === "") {
                    $scope.usuario.PrimeiroNome = val;
                    $scope.usuario.UltimoNome = "";
                    return(val);
                } else {
                    $scope.usuario.PrimeiroNome = x[0];
                    $scope.usuario.UltimoNome = val.slice(x[0].length);
                }
            }
            return ($scope.usuario.PrimeiroNome + $scope.usuario.UltimoNome);
        };

        $scope.nomeForm = "";

        $scope.cadastrar = function() {
            var x = $scope.usuario.UltimoNome;
            $scope.usuario.UltimoNome = x.trim();
            var y = new Date();
            $scope.usuario.DataCadastro = y;

            Arauto.cadastrarUsuario($scope.usuario);
        };


    })

 .service('Autenticador', function (Arauto) {

        this.loginData = { email: "", senha: "" };


     if (typeof FB !== "undefined") {
         this.fbLoginSuccess = function (userData) {
             alert("UserInfo: " + JSON.stringify(userData));
             facebookConnectPlugin.getAccessToken(function (token) {
                 alert("Token: " + token);
             }, function (err) {
                 alert("Could not get access token: " + err);
             });
         };

         this.fbLogin = function () {
             FB.login(function (response) {
                 if (response.status === 'connected') {
                     alert('logged in');
                 } else {
                     alert('not logged in');
                 }
             }, { scope: "email" });
         };
     } else {
         this.fbLogin = function () {
             openFB.login(
     function (response) {
         if (response.status === 'connected') {
             alert('Facebook login succeeded, got access token: ' + response.authResponse.token);
         } else {
             alert('Facebook login failed: ' + response.error);
         }
     }, { scope: 'email' });
         };
     }

 });
