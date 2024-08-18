import '../index.css'
;(function () {
  const mainElem = document.getElementById('main')
  const div = document.createElement('div')
  const divContent = document.createTextNode('Hello from vanilla JS')
  div.appendChild(divContent)

  mainElem?.appendChild(div)
})()

function speakGerman() {
  const sentence = document.getElementById('sentence')?.textContent
  if (sentence) {
    utterance = new SpeechSynthesisUtterance()
    utterance.lang = 'de'
    utterance.text = sentence
    speechSynthesis.speak(utterance)
  }
}

const sayGenau = () => {
  utterance = new SpeechSynthesisUtterance()
  utterance.lang = 'de'
  utterance.text = 'Genau'
  speechSynthesis.speak(utterance)
}

const sayNein = () => {
  utterance = new SpeechSynthesisUtterance()
  utterance.lang = 'de'
  utterance.text = 'Nein'
  speechSynthesis.speak(utterance)
}

const matchSpeech = (targetSentence = 'Wir Suchen Dich') => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.continuous = false
  recognition.lang = 'de'
  recognition.start()

  recognition.onresult = (event) => {
    const recongnisedOutcome = event.results[0][0].transcript
    console.log(`checking event object: ${JSON.stringify(event.results)}`)
    console.log(
      `checking event object, results[0]: ${JSON.stringify(event.results[0])}`
    )
    console.log(
      `checking event object, results[0][0]: ${JSON.stringify(event.results[0][0])}`
    )
    console.log(`checking the recognised outcome: ${recongnisedOutcome}`)

    if (
      recongnisedOutcome.toLowerCase() === targetSentence.toLowerCase().trim()
    ) {
      sayGenau()
    } else {
      sayNein()
    }
    recognition.stop()
  }
  // recognition.addEventListener('result', (event) => {
  //   if ((event.type = 'result')) {
  //     event.results.forEach((result) => {
  //       const confidence = result.confidence * 100
  //       const text = result.transcript
  //       console.log(`checking text: ${text}`)
  //       console.log(`checking target text: ${targetSentence}`)
  //       if (text.lower() === tagetSentence.lower().trim()) {
  //         recognition.stop()
  //         sayGenau()
  //       }
  //     })
  //   }
  // })
}

window.speakGerman = speakGerman
window.sayGenau = sayGenau
window.matchSpeech = matchSpeech
