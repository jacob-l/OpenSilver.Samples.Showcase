

/*===================================================================================
*
*   Copyright (c) Userware (OpenSilver.net, CSHTML5.com)
*
*   This file is part of both the OpenSilver Runtime (https://opensilver.net), which
*   is licensed under the MIT license (https://opensource.org/licenses/MIT), and the
*   CSHTML5 Runtime (http://cshtml5.com), which is dual-licensed (MIT + commercial).
*
*   As stated in the MIT license, "the above copyright notice and this permission
*   notice shall be included in all copies or substantial portions of the Software."
*
\*====================================================================================*/



//new Element("link",   { rel:"stylesheet", src: "cshtml5.css", type: "text/css" });
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'libs/cshtml5.css');
document.getElementsByTagName('head')[0].appendChild(link);

//new Element("script", { src: "cshtml5.js", type: "application/javascript" });
var cshtml5Script = document.createElement('script');
cshtml5Script.setAttribute('type', 'application/javascript');
cshtml5Script.setAttribute('src', 'libs/cshtml5_with_browser_check.js');
document.getElementsByTagName('head')[0].appendChild(cshtml5Script);

//new Element("script", { src: "fastclick.js", type: "application/javascript" });
var fastclickScript = document.createElement('script');
fastclickScript.setAttribute('type', 'application/javascript');
fastclickScript.setAttribute('src', 'libs/fastclick.js');
document.getElementsByTagName('head')[0].appendChild(fastclickScript);

//new Element("script", { src: "velocity.js", type: "application/javascript" });
var velocityScript = document.createElement('script');
velocityScript.setAttribute('type', 'application/javascript');
velocityScript.setAttribute('src', 'libs/velocity.js');
document.getElementsByTagName('head')[0].appendChild(velocityScript);

window.onCallBack = {}
window.onCallBack.OnCallbackFromJavaScript = function (callbackId, idWhereCallbackArgsAreStored, callbackArgsObject) {
    try {
        DotNet.invokeMethod("OpenSilver", "OnCallbackFromJavaScript", callbackId, idWhereCallbackArgsAreStored, "");
    } catch (e) {
        DotNet.invokeMethod("OpenSilver.UWPCompatible", "OnCallbackFromJavaScript", callbackId, idWhereCallbackArgsAreStored, "");
    }
};

window.callJS = function (javaScriptToExecute) {
    //console.log(javaScriptToExecute);

    var result = eval(javaScriptToExecute);
    //console.log(result);
    var resultType = typeof result;
    if (resultType == 'string' || resultType == 'number' || resultType == 'boolean') {
        //if (typeof result !== 'undefined' && typeof result !== 'function') {
        //console.log("supported");
        return result;
    }
    else {
        //console.log("not supported");
        return result + " [NOT USABLE DIRECTLY IN C#] (" + resultType + ")";
    }
};