
window = this;


var Window = function Window(){
    throw new TypeError("Illegal constructor");
};catchvm.func_set_natvie(Window)
Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});

///////////////////////////////////////////////////////////////
window.setTimeout = function setTimeout(){
    //x有可能是方法，也有可能是文本
    typeof(x) === 'function'?x():undefined;
    typeof(x) === 'string'?x():undefined;
    //正确的应该 生成uuid（每个id都不一样） 并且保存到内存中
    return 0;
};catchvm.func_set_natvie(window.setTimeout)


Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;


window.outerHeight = 834;
window.outerWidth = 1536;
window.chrome = catchvm.proxy(class chrome{})
window.DeviceOrientationEvent = function DeviceOrientationEvent(){
    debugger;
};catchvm.func_set_natvie(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent(){
    debugger;
};catchvm.func_set_natvie(window.DeviceMotionEvent);


///////////////////////////////////////////////////////////////

Window.prototype.__proto__ = WindowProperties.prototype
window.__proto__ = Window.prototype;


window = catchvm.proxy(window)













