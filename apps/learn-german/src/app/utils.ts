// instantiate utterance once
const utterance = new SpeechSynthesisUtterance()
utterance.lang = 'de'

export function createSentenceList(sentences: string[], targetId: string) {
  const fragment = new DocumentFragment()
  sentences.map((sentence, index) => {
    fragment.appendChild(createSentenceRow(`(${index + 1}) ${sentence}`))
  })
  const liContainer = document.getElementById(targetId)
  liContainer?.appendChild(fragment)
}

function createSentenceRow(sentence: string) {
  const liElem = document.createElement('li')
  const sentenceSpan = document.createElement('span')
  const sentenceSpanContent = document.createTextNode(sentence)
  sentenceSpan.appendChild(sentenceSpanContent)
  liElem.appendChild(sentenceSpan)

  const formattedSentence = sentence.replace(/^\(\d+\)/, '')

  const btnGroup = createButtonGroup([
    createSpeakButton(formattedSentence),
    createSpeechTestButton(formattedSentence),
  ])
  liElem.appendChild(btnGroup)
  liElem.classList.add('flex', 'justify-between', 'gap-[4px]')
  return liElem
}

function createSpeakButton(sentence: string) {
  const btn = document.createElement('button')
  const btnContent = document.createTextNode('Speak')
  btn.appendChild(btnContent)
  btn.onclick = () => {
    speakGerman(sentence)
  }
  btn.classList.add(
    'min-w-[100px]',
    'max-h-[32px]',
    'p-[4px]',
    'bg-red-600',
    'border-1',
    'rounded',
    'border-red-800',
    'hover:bg-red-900'
  )
  return btn
}

function createSpeechTestButton(sentence: string) {
  const btn = document.createElement('button')
  const btnContent = document.createTextNode('Test Speech')
  btn.classList.add(
    'min-w-[100px]',
    'max-h-[32px]',
    'p-[4px]',
    'bg-emerald-600',
    'border-1',
    'rounded',
    'border-emerald-700',
    'hover:bg-cyan-800'
  )
  btn.appendChild(btnContent)
  btn.onclick = () => {
    matchSpeech(sentence)
  }
  return btn
}

function createButtonGroup(buttons: HTMLButtonElement[]) {
  const btnGroupWrapper = document.createElement('div')
  btnGroupWrapper.classList.add('flex', 'flex-col', 'gap-[8px]', 'md:flex-row')
  const btnFragment = new DocumentFragment()
  buttons.map((button) => {
    btnFragment.appendChild(button)
  })
  btnGroupWrapper.appendChild(btnFragment)
  return btnGroupWrapper
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
    const recognisedOutcome = event.results[0][0].transcript
    const formattedTargetSentence = targetSentence
      .toLowerCase()
      .replace(/[^a-z0-9\säöüß]/g, '')
      .trim()

    console.log(`checking the recognised outcome: ${recognisedOutcome}`)
    console.log(`checking target sentence: ${formattedTargetSentence}`)

    if (recognisedOutcome.toLowerCase() === formattedTargetSentence) {
      sayGenau()
    } else {
      sayNein()
      alert(`That sounded like ${recognisedOutcome}. Target sentense is `)
    }
    recognition.stop()
  }
}
