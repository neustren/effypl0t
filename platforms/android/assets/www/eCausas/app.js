// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('eCausasApp', ["ionic","ArautoSvc", "CasosControllers", "UsuarioControllers"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
	    .state("app", {
		url:"/app",
		abstract:"true",
		templateUrl: "ecausas/app/menu.html"
	    })
            .state("app.casos", {
                url: "/casos",
		views:
		{
		    "menuContent":
		    {
			templateUrl: "eCausas/casos/listaCasos.html",
			controller: 'casosRender'
		    }
		}
            })
            .state("app.casoView", {
                url: "/casoView/:casoID",
		views:
		{
		    "menuContent":
		    {
			templateUrl: "eCausas/casos/caso.html",
			controller: "casoViewCtrl"
		    }
		}
            })
	    .state("app.novoCaso", {
                url: "/novoCaso",
		views:
		{
		    "menuContent":
		    {
			templateUrl: "eCausas/casos/novoCaso.html",
			controller: 'casosRender'
		    }
		}
            })
	    .state("app.registrarUsuario",{
		url:"/registrarUsuario",
		views:
		{
		    "menuContent":
		    {
			templateUrl: "eCausas/usuarios/registrar.html",
			controller: 'perfilController'
		    }
		}
	    });

        // if none of the above states are matched, use this as the fallbac
        $urlRouterProvider.otherwise('/app/casos');

    })

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            /* if (window.cordova && window.cordova.plugins.Keyboard) {
cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
}  */

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });

