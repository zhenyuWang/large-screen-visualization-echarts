function setRootFontsize() {
  // 得到手机屏幕的宽度
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth
  if (htmlWidth < 1920) htmlWidth = 1920
  // 得到html的Dom元素
  const htmlDom = document.getElementsByTagName("html")[0]
  const bodyDom = document.getElementsByTagName("body")[0]
  // 设置根元素字体大小
  htmlDom.style.fontSize = htmlWidth / 192 + "px"
  bodyDom.style.fontSize = htmlWidth / 192 + "px"
}
setRootFontsize()
window.addEventListener("resize", setRootFontsize)
