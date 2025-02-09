var Navigator = function Navigator(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Navigator)
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
});
///////////////////////////////////////////////////////////////
Navigator.prototype.webdriver = false;
Navigator.prototype.plugins = catchvm.memory.PluginArray._;
Navigator.prototype.mimeTypes = catchvm.memory.MimeTypeArray._;
Navigator.prototype.mediaDevices = catchvm.memory.mediaDevices;
Navigator.prototype.language = "zh-CN";
Navigator.prototype.languages = ["zh-CN","en","en-GB","en-US"];
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'
Navigator.prototype.vendor = 'Google Inc.'
Navigator.prototype.appName = 'Netscape';
Navigator.prototype.appVersion = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0'
Navigator.prototype.cookieEnabled = true;
Navigator.prototype.deviceMemory = 8;
Navigator.prototype.maxTouchPoints = 0;
Navigator.prototype.doNotTrack = null;
Navigator.prototype.productSub = '20030107';
Navigator.prototype.vendorSub = '';
Navigator.prototype.pdfViewerEnabled = true;
Navigator.prototype.appCodeName = 'Mozilla';
Navigator.prototype.onLine = true;


Navigator.prototype.scheduling = catchvm.memory.scheduling
Navigator.prototype.userActivation = catchvm.memory.userActivation
Navigator.prototype.geolocation = catchvm.memory.geolocation
Navigator.prototype.connection = catchvm.memory.connection
Navigator.prototype.bluetooth = catchvm.memory.bluetooth
Navigator.prototype.clipboard = catchvm.memory.clipboard
Navigator.prototype.credentials = catchvm.memory.credentials
Navigator.prototype.keyboard = catchvm.memory.keyboard
Navigator.prototype.managed = catchvm.memory.managed
Navigator.prototype.storage = catchvm.memory.storage
Navigator.prototype.serviceWorker = catchvm.memory.serviceWorker
Navigator.prototype.virtualKeyboard = catchvm.memory.virtualKeyboard
Navigator.prototype.wakeLock = catchvm.memory.wakeLock
Navigator.prototype.ink = catchvm.memory.ink
Navigator.prototype.hid = catchvm.memory.hid
Navigator.prototype.locks = catchvm.memory.locks
Navigator.prototype.mediaCapabilities = catchvm.memory.mediaCapabilities
Navigator.prototype.mediaSession = catchvm.memory.mediaSession
Navigator.prototype.permissions = catchvm.memory.permissions
Navigator.prototype.presentation = catchvm.memory.presentation
Navigator.prototype.serial = catchvm.memory.serial
Navigator.prototype.gpu = catchvm.memory.gpu
Navigator.prototype.usb = catchvm.memory.usb
Navigator.prototype.windowControlsOverlay = catchvm.memory.windowControlsOverlay
Navigator.prototype.xr = catchvm.memory.xr
Navigator.prototype.userAgentData = catchvm.memory.userAgentData

//↓↓↓↓↓↓↓↓↓↓↓↓↓可删↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

Navigator.prototype.vendorSubs ={
    "ink": 1720244657743
}

//↑↑↑↑↑↑↑↑↑↑↑↑↑可删↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



Navigator.prototype.registerProtocolHandler = function registerProtocolHandler(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.registerProtocolHandler)

Navigator.prototype.setAppBadge = function setAppBadge(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.setAppBadge)

Navigator.prototype.getUserMedia = function getUserMedia(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.getUserMedia)

Navigator.prototype.getBattery = function getBattery(){
	// debugger; 
	// return {
	// 	then: function (func) {
	// 		func({charging:false,chargingTime:Infinity, dischargingTime:8378,level:0.75, onchargingchange:null, onchargingtimechange:null,ondischargingtimechange:null,onlevelchange:null})
	// 	}
	// }
};catchvm.func_set_natvie(Navigator.prototype.getBattery)

Navigator.prototype.clearAppBadge = function clearAppBadge(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.clearAppBadge)

Navigator.prototype.vibrate = function vibrate(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.vibrate)

Navigator.prototype.sendBeacon = function sendBeacon(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.sendBeacon)

Navigator.prototype.getGamepads = function getGamepads(){
    debugger;
    return [null,]
};catchvm.func_set_natvie(Navigator.prototype.getGamepads)


//网站自己新定义的方法和属性(可删除)↓↓↓↓↓↓↓↓↓↓
Navigator.prototype.hardwareConcurrency = 12;
Navigator.prototype.platform = 'Win32';
Navigator.prototype.product = 'Gecko';
Navigator.prototype.webkitTemporaryStorage = {}
Navigator.prototype.webkitPersistentStorage = {}


Navigator.prototype.unregisterProtocolHandler = function unregisterProtocolHandler(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.unregisterProtocolHandler)

Navigator.prototype.getInstalledRelatedApps = function getInstalledRelatedApps(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.getInstalledRelatedApps)

Navigator.prototype.webkitGetUserMedia = function webkitGetUserMedia(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.webkitGetUserMedia)

Navigator.prototype.requestMediaKeySystemAccess = function requestMediaKeySystemAccess(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.requestMediaKeySystemAccess)

Navigator.prototype.requestMIDIAccess = function requestMIDIAccess(){
    debugger;
};catchvm.func_set_natvie(Navigator.prototype.requestMIDIAccess)

Navigator.prototype.javaEnabled = function javaEnabled(){
    debugger;
    return false;
};catchvm.func_set_natvie(Navigator.prototype.javaEnabled)

//网站自己新定义的方法和属性(可删除)↑↑↑↑↑↑↑↑↑↑


navigator = {};
navigator.__proto__ = Navigator.prototype;


for (let temp in Navigator.prototype) {
    navigator[temp] = Navigator.prototype[temp];
    if(!(typeof Navigator.prototype[temp] === 'function')){       
        Navigator.prototype.__defineGetter__(temp, function () {
            throw new TypeError("Illegal invocation");
        });
    }  
}

///////////////////////////////////////////////////////////////

navigator = catchvm.proxy(navigator);

window.clientInformation = navigator;

///////////////////////////////////////////////////////////////
// Navigator.prototype.__defineGetter__("webdriver",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("plugins",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("mimeTypes",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("mediaDevices",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("language",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("languages",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("userAgent",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("vendor",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("appName",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("appVersion",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("cookieEnabled",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("deviceMemory",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("maxTouchPoints",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("doNotTrack",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("productSub",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("vendorSub",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("pdfViewerEnabled",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("appCodeName",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("onLine",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("scheduling",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("userActivation",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("geolocation",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("connection",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("bluetooth",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("clipboard",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("credentials",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("keyboard",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("managed",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("storage",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("serviceWorker",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("virtualKeyboard",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("wakeLock",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("ink",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("hid",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("locks",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("mediaCapabilities",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("mediaSession",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("permissions",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("presentation",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("serial",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("gpu",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("usb",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("windowControlsOverlay",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("xr",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("userAgentData",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("vendorSubs",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("hardwareConcurrency",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("platform",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("product",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("webkitTemporaryStorage",function(){
// 	throw TypeError("Illegal invocation")
// })
// Navigator.prototype.__defineGetter__("webkitPersistentStorage",function(){
// 	throw TypeError("Illegal invocation")
// })