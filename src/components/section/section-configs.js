const delay = 400
const basicConfig = {
  flex: 1,
  sat: "100%",
  backgroundPosition: "50% 50%",
}
const onHoverConfig = {
  flex: 2,
  sat: "0%",
  backgroundPosition: "50% 50%",
}
const onClickConfig = {
  flex: 12,
  sat: "0%",
  backgroundPosition: "100% 50%",
}
const openConfig = {
  transform: "translate(0%,0%)",
  opacity: 1,
}
const closedConfig = {
  transform: "translate(0%,2%)",
  opacity: 0,
}
export {
  delay,
  basicConfig,
  onHoverConfig,
  onClickConfig,
  openConfig,
  closedConfig,
}
