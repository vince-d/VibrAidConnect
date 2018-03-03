//var serverURL = "http://VINCE-MAIN:8080/test";
//var serverURL = "http://MACBOOK-VINCENT:8080/test";
var serverURL = "http://192.168.43.214:8080/test";

// Start listening for deviceready event.
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	// For this plugin, we'd have to use the CLI or PhoneGap Build
	// (https://github.com/katzer/cordova-plugin-background-mode)
	// window.plugin.backgroundMode.enable();
}

// Check if BLE is enabled and available, then start BLE scan.
function scanAndConnect() {
		$.ajax({url: serverURL, success: function(result){
			$("#data").html(result);
		}});
}
