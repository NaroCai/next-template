export const getTiming = (val: number) => {
  if (val < 60) {
    return `${val}秒`
  }
  return `${Math.floor(val / 60)}分钟`
}
