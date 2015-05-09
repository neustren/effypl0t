
(function() {

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        /*document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);  */

        //alert('AMEM');


        openFB.init({ appId: "890067351046241" });
    }

        //  if (window.cordova.platformId === "browser") {
        //facebookConnectPlugin.browserInit(890067351046241);
        // version is optional. It refers to the version of API you may want to use.
        // }
    //}
})();