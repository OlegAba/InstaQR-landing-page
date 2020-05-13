(this["webpackJsonpinstaqr-landing-page"]=this["webpackJsonpinstaqr-landing-page"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"question":"What does InstaQR do?","answer":["InstaQR generates a live wallpaper by combining an image of your choice with a scannable QR code. The QR code stores your share action (any link such as a social media profile) and stays hidden until the live wallpaper is activated by pressing into the screen.","Most smartphones nowadays natively support the scanning of QR codes which allows you to share anything, all without leaving your lock screen. Simply ask the person you would like to share your action with to open their camera app and point it at the QR code."]},{"question":"How do I set my generated live wallpaper as my lock screen wallpaper?","answer":["Once you have generated a live wallpaper and saved it to your phone do the following,","1. Open the \\"Settings\\" app","2. Scroll down and tap on \\"Wallpaper\\"","3. Tap on \\"Choose on a New Wallpaper\\"","4. Find and tap the saved live wallpaper","5. Press on the screen and make sure the QR code is clearly visible","6. Tap on \\"Set\\"","7. Tap on \\"Set Lock Screen\\" or \\"Set Both\\""]},{"question":"How do I share my data with another person using the generated live wallpaper?","answer":["Your data or the share action is stored in the hidden QR code that is part of your live wallpaper. While your phone is locked, press into the screen to reveal the QR code. Ask the person you would like to share the data with to open their camera app or favorite QR code scanner app and point it at code.","If the other person has an iPhone or iPad with iOS 11 or higher, then all they have to do is launch their camera app and point it at the QR code. The share action will automatically launch on their phone.","Not all Android devices natively support the scanning of QR codes from the camera app. Additional services or third-party apps might be required."]},{"question":"Why is my wallpaper blurry when the QR code is revealed?","answer":["When setting a live photo as a wallpaper, the phone\'s operating system processes the video portion of the live photo and downscales it to optimize memory. Unfortunately, there is nothing we can do to stop or mitigate this process."]},{"question":"I have accidentally denied photo or camera permission to InstaQR. How can i fix this?","answer":["You will need to change the permission from your \\"Settings\\" app by doing the following,","1. Open the \\"Settings\\" app","2. Scroll down and tap on \\"InstaQR\\"","3. Tap on \\"Photos\\" and make sure \\"Read and Write\\" is selected","4. Make sure the \\"Camera\\" row is toggled on as well"]},{"question":"Why is nothing happening when I press into my live wallpaper on the lock screen?","answer":["When setting the generated live wallpaper as your lock screen wallpaper, make sure \\"Live Photo\\" is on. The button to toggle this option is located at the bottom-center of the screen (second from the left). If the QR code is still not showing after this, you likely have an older device that does not support live photos. An iPhone 6S/Plus or above is required."]},{"question":"Why does the QR code expand and get cropped when my live wallpaper is activated?","answer":["The video portion (where the QR code is located) of a live photo expands by about 8%. Make sure to preview the QR code when setting the wallpaper and make sure it is not getting cropped."]}]')},18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),r=a.n(i),s=(a(23),a(1)),l=a(2),c=a(4),h=a(3),p=a(11),d=a.n(p),u=a(12),m=a.n(u),w=(a(38),function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"AccordionItem",onClick:function(){return e.props.handleClick(e.props.index)}},o.a.createElement("div",{className:"header"},o.a.createElement("h2",null,this.props.header),o.a.createElement(m.a,{className:"arrow-icon "+(this.props.isOpen?"open":""),color:"#c7c7cd"})),o.a.createElement(d.a,{duration:400,height:this.props.isOpen?"auto":0},o.a.createElement("div",{className:"body-container"},this.props.body.map((function(e,t){return o.a.createElement("p",null,e)})))))}}]),a}(n.Component)),v=a(15),y=(a(39),function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={activeIndex:-1},e.handleClick=function(t){var a=e.state.activeIndex===t?-1:t;e.setState({activeIndex:a})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"navbar"}),o.a.createElement("div",{className:"max-width-container"},o.a.createElement("div",{className:"header-container"},o.a.createElement("h1",null,"Frequently Asked Questions")),v.map((function(t,a){return o.a.createElement(w,{header:t.question,body:t.answer,isOpen:e.state.activeIndex===a,key:a,index:a,handleClick:e.handleClick.bind(e)})}))),o.a.createElement("div",{className:"max-width-container"},o.a.createElement("div",{className:"header-container"},o.a.createElement("h1",null,"Contact Us"))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6e3de867.chunk.js.map