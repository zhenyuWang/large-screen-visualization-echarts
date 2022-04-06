export const toThousands = (num: string | number) => {
  if (!num) return 0
  if (typeof num === "number") {
    num = num + ""
  }
  let [integer, fractions] = num.split(".")
  integer = integer.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
  if (fractions) fractions = "." + fractions
  else fractions = ""
  return integer + fractions
}
export const addZero = (num: string | number) => {
  if (!num) return ""
  num = num + ""
  if (num.length > 1) return num
  return `0${num}`
}

export const getChartFontSize = () => {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth
  if (htmlWidth < 1920) htmlWidth = 1920
  return (htmlWidth / 192) * 1.2
}
