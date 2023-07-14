export function toggleFullscreen(canvas) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (!document.fullscreenElement && canvas.requestFullscreen) {
    canvas.requestFullscreen();
  }
  // safari does't support 👇
  else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (!document.webkitFullscreenElement && canvas.webkitRequestFullscreen) {
    canvas.webkitRequestFullscreen();
  }
}
