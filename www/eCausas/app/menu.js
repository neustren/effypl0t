angular.module("MenuControllers", ["UsuarioControllers", "ArautoSvc", "ionic", 'ionic.contrib.frostedGlass'])
	.controller("MenuController", function($scope, $ionicFrostedDelegate, $ionicScrollDelegate, Autenticador, Arauto, $ionicModal, $timeout ) {
 
    this.loginFormData=Autenticador.loginData
    
        // Update the scroll area and tell the frosted glass to redraw itself
    $ionicFrostedDelegate.update();
    $ionicScrollDelegate.scrollBottom(true);
    
 // Create the login modal that we will use later
     $ionicModal.fromTemplateUrl('/eCausas/usuarios/login.html', { scope: $scope }).then(function (modal) {
         $scope.modal = modal;
     });

     // Triggered in the login modal to close it
     $scope.closeLogin = function () {
         $scope.modal.hide();
     };

     // Open the login modal
     $scope.login = function () {
         $scope.modal.show();
     };

     // Perform the login action when the user submits the login form
     $scope.doLogin = function () {
         console.log('Doing login', $scope.loginData);

         // Simulate a login delay. Remove this and replace with your login
         // code if using a login system
         Arauto.userLogin(Autenticador.loginData);
         $timeout(function () {
             $scope.closeLogin();
         }, 0);
         
     };
	});