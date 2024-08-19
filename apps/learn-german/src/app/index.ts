import { sentences } from './sentences'

// instantiate utterance once
const utterance = new SpeechSynthesisUtterance()
utterance.lang = 'de'
;(function () {
  createSentenceList(sentences)
})()

function createSentenceList(sentences: string[]) {
  const fragment = new DocumentFragment()
  sentences.map((sentence) => {
    fragment.appendChild(createSentenceRow(sentence))
  })
  const liContainer = document.getElementById('list-container')
  liContainer?.appendChild(fragment)
}

function createSentenceRow(sentence: string) {
  const liElem = document.createElement('li')
  const sentenceSpan = document.createElement('span')
  const sentenceSpanContent = document.createTextNode(sentence)
  sentenceSpan.appendChild(sentenceSpanContent)
  liElem.appendChild(sentenceSpan)
  liElem.appendChild(createSpeakButton(sentence))
  liElem.appendChild(createSpeechTestButton(sentence))
  return liElem
}

function createSpeakButton(sentence: string) {
  const btn = document.createElement('button')
  const btnContent = document.createTextNode('Speak')
  btn.appendChild(btnContent)
  btn.onclick = () => {
    speakGerman(sentence)
  }
  btn.classList.add('text-indigo-800')
  return btn
}

function createSpeechTestButton(sentence: string) {
  const btn = document.createElement('button')
  const btnContent = document.createTextNode('Test Speech')
  btn.appendChild(btnContent)
  btn.onclick = () => {
    matchSpeech(sentence)
  }
  return btn
}

function speakGerman(sentence: string) {
  utterance.text = sentence
  speechSynthesis.speak(utterance)
}

function sayGenau() {
  speakGerman('Genau')
}

function sayNein() {
  speakGerman('Nein')
}

function matchSpeech(targetSentence: string) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.continuous = false
  recognition.lang = 'de'
  recognition.start()

  recognition.onresult = (event) => {
    const recongnisedOutcome = event.results[0][0].transcript

    console.log(`checking the recognised outcome: ${recongnisedOutcome}`)
    console.log(
      `checking target sentence: ${targetSentence.toLowerCase().replace(/[^a-z0-9\säöüß]/g, '')}`
    )

    if (
      recongnisedOutcome.toLowerCase() ===
      targetSentence.toLowerCase().replace(/[^a-z0-9\säöüß]/g, '')
    ) {
      sayGenau()
    } else {
      sayNein()
    }
    recognition.stop()
  }
}
