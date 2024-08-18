;(function () {
  const mainElem = document.getElementById('main')
  const div = document.createElement('div')
  const divContent = document.createTextNode('Hello from vanilla JS')
  div.appendChild(divContent)
  mainElem?.appendChild(div)
})()
