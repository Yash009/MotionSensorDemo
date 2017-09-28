/**
 * Created by yasho on 9/28/2017.
 */
function handleMotionEvent(n){var t=n.accelerationIncludingGravity.x,e=n.accelerationIncludingGravity.y,a=n.accelerationIncludingGravity.z;setBarLength("X",t),setBarLength("Y",e),setBarLength("Z",a)}function setBarLength(n,t){var e=Math.round(t);document.getElementById(n).style.width=e*maxBarLength/30+"px"}var maxBarLength=.8*window.innerWidth;window.addEventListener("devicemotion",handleMotionEvent,!0);
