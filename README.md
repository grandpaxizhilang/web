# 补环境框架

学习志远大佬的补环境课程实现的此框架

# 日志更新

### 2024-03-30

- 简单实现`HTMLScriptElement`、`HTMLAnchorElement`、`HTMLButtonElement`、`HTMLInputElement`、`HTMLLabelElement`、`HTMLLinkElement`、`HTMLImageElement`、`HTMLAudioElement`接口

### 2024-03-31

- 简单实现`XMLHttpRequestEventTarget`、`XMLHttpRequest`、`MediaDevices`、`NodeList`接口

- 补充了部分接口里面的属性和方法

### 2024-04-14

- 改错了`Event`、`UIEvent`接口多次new时，导致前面new出来实例中的type会跟着改变

- 简单实现了`ImageData`、`CanvasRenderingContext2D`、`TextMetrics`、`MouseEvent`、`HTMLOptionElement`、`Option`、`AudioContext`、`BaseAudioContext`、`External`、`WebGLRenderingContext`、`WebGL2RenderingContext`、`ImageBitmapRenderingContext`、`Scheduling`、`UserActivation`、`NetworkInformation`、`Geolocation`、`Bluetooth`、`Clipboard`、`CredentialsContainer`、`Keyboard`、`NavigatorManagedData`、`StorageManager`、`ServiceWorkerContainer`、`VirtualKeyboard`、`WakeLock`、`Ink`、`HID`、`LockManager`、`MediaCapabilities`、`MediaSession`、`Permissions`、`Serial`、`GPU`、`USB`、`WindowControlsOverlay`、`XRSystem`、`NavigatorUAData`、`CSSStyleDeclaration`、`HTMLParagraphElement`、`HTMLHeadingElement`、`HTMLSpanElement`、`HTMLUListElement`、`HTMLLIElement`、`DOMImplementation`、`WebGLDebugRendererInfo`接口

- 完善`HTMLCanvasElement`接口中getContext方法

- 完善`Document`接口中createEvent、createElement方法

- 完善补充`Navigator`接口中的部分属性和方法

- 实现将`navigator`冻结，防止`navigator`里面的属性的值被更改

- 实现了`Object`接口，把`Object`大概率会被检测的方法进行了hook

- 实现了`RegExp`接口，对RegExp进行代理。如果有调用正则来检测堆栈等等可以被捕获到

- 实现了`DOMException`接口，实现throw弹出报错

- 完善了`Node`接口中的appendChild方法，实现在实际的`DOM`结构中，一个元素不能成为其自身的子元素，也不能成为其子元素的子元素

- 补充`CanvasRenderingContext2D`接口部分方法

### 2024-04-23

- 简单实现`NamedNodeMap`、`Attr`、`TextEncoder`、`TextDecoder`、`IDBFactory`、`HTMLAllCollection`、`DOMTokenList`、`ScreenOrientation`、`Performance`、`Audio`、`Selection`、`CustomEvent`、`DocumentType`、`TimeRanges`、`DOMParser`、`Range`、`AbstractRange`、`DataTransfer`、`CDATASection`、`Text`、`CharacterData`、`CSSStyleRule`、`CSSRule`、`StyleSheet`、`SVGElement`、`CSSRuleList`、`CSSMediaRule`、`CSSConditionRule`、`CSSGroupingRule`、`MessageEvent`接口

- 补充了`window`接口的部分属性和方法

- 完善`Node`接口中removeChild方法

- 实现完善`Blob`、`URL`接口

- 完善`TextEncoder`接口中的encode方法

### 2024-05-04

- 简单实现`Crypto`、`HTMLMetaElement` 、`IDBOpenDBRequest`、`IDBRequest`接口

- 收录简单吐环境代码

- 补充部分接口中的属性和方法

### 2024-06-01

- 补充了常用接口对于原型上的获取会报错的问题

### 2024-07-30

- 增加了有关各类标签的检测，检测代码如下：

```javascript
    function test_action() {
        let form = document.createElement("form");
        let input1 = document.createElement("input");
        input1.id = "username";
        input1.content = "action";
        input1.name = "action";
        form.appendChild(input1);
        let input2 = document.createElement("input");
        input2.name = "textContent";
        input2.id = "password";
        form.appendChild(input2);
        let input3 = document.createElement("input");
        input3.id = "innerText";
        input3.type = "submit";
        input3.name = "id";
        form.appendChild(input3);
        a = form.action;
        b = form.textContent;
        c = form.id;
        d = form.innerText;
        form.id='yq'
        form.name='yqName'
        document.body.appendChild(form)
        
        if (a.name == 'action' && a.id == 'username' && b.name == 'textContent' && b.id == 'password' && c.id == "innerText" && c.name == 'id' && d.id == 'innerText' && d.name == 'id' &&globalThis.yq==form &&globalThis.yqName==form) {
            console.log(`test_action 检测通过`)
        } else {
            console.log(`test_action 被检测`);
```

### 2024-08-06

- 补充了一些接口的方法和属性
- 优化了部分方法的代码逻辑
- 使用插件解决`typeof(document.all)`为undefined的问题,J检测代码如下：

``` js
var text = document.all;
if(text != undefined){
    console.log('被1检测到')
}else if(text.length == 0){
    console.log('被2检测到')
}
else if(text.toString() != '[object HTMLAllcollection]'){
    console.log('被3检测到')
}else if(text.toString.toString() != "function toString() { [native code] }"){
    console.log('被4检测到')
}else
    console.log('通过了document.all检测!!!')

console.log(text)
```



# 目前存在的问题

- 大部分接口中对于原型上的获取会报错的问题没有实现

- 大部分接口的属性和方法没有实现

- 框架里面还缺少所需的接口

- 接口中输入错误的参数产生的报错输出( 比如new一个对象没有传入参数的报错 )

- document.all的检测还没过  —— 已解决

- 有些属性或者方法的定义在window作用域里面，放到内存中才是正确的做法

- 可枚举/不可枚举属性可能会被检测

- Error异常打印出来的调用栈（输出的文本不一样）可能会有检测