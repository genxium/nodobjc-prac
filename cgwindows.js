const $ = require('NodObjC');
$.framework('Cocoa');

const pool = $.NSAutoreleasePool('alloc')('init');

// Type boxing and unboxing https://msdn.microsoft.com/en-us/library/yz2be5wk.aspx

// Reference https://developer.apple.com/reference/coregraphics/1455137-cgwindowlistcopywindowinfo?language=objc
const boxedWindowListBuffer = $.CGWindowListCopyWindowInfo($.kCGWindowListOptionAll, $.kCGNullWindowID);
// console.dir(windowList);

// Reference https://developer.apple.com/reference/foundation/1587932-cfbridgingrelease
const unboxedWindowList = $.CFBridgingRelease(boxedWindowListBuffer);
console.log(unboxedWindowList);

pool('drain');