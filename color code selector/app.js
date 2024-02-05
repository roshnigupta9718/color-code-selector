const getcolor = () => {
  const randomn = Math.floor(Math.random() * 167777215)
  console.log(randomn)
  const hexcode = '#' + randomn.toString(16)
  console.log(randomn, hexcode)
  document.body.style.backgroundColor = hexcode
  document.getElementById('color').innerText = hexcode
  navigator.clipboard.writeText(hexcode)
}
document.getElementById('btn').addEventListener('click', getcolor)
getcolor()
