const $ = require('NodObjC');
$.framework('Cocoa');

const pool = $.NSAutoreleasePool('alloc')('init');

// Type boxing and unboxing https://msdn.microsoft.com/en-us/library/yz2be5wk.aspx

// Reference https://developer.apple.com/reference/coregraphics/1455137-cgwindowlistcopywindowinfo?language=objc
const boxedWindowListBuffer = $.CGWindowListCopyWindowInfo(($.kCGWindowListOptionAll | $.kCGWindowListExcludeDesktopElements), $.kCGNullWindowID);
// console.dir(windowList);

// Reference https://developer.apple.com/reference/foundation/1587932-cfbridgingrelease
const unboxedWindowList = $.CFBridgingRelease(boxedWindowListBuffer);
console.log(typeof unboxedWindowList);

// Reference http://tootallnate.github.io/NodObjC/.
console.log(unboxedWindowList.ancestors());
console.log(unboxedWindowList.methods());

const count = unboxedWindowList('count');
console.log('There\'re totally ' + count + ' windows.');

for (let i = 0; i < count; ++i) {
  const single = unboxedWindowList('objectAtIndex', i);
  console.log(single);
}

pool('drain');
