import '../index.css'
import { RESPONSES, FEELINGS, QUESTIONS } from './const/simple-expressions'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...RESPONSES], 'responses')
  createSentenceList([...FEELINGS], 'feelings')
  createSentenceList([...QUESTIONS], 'questions')
})()
