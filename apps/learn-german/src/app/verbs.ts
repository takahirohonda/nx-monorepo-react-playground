import '../index.css'
import { GEBEN, SEIN, HABEN, WERDEN } from './const/verbs'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...GEBEN], 'geben')
  createSentenceList([...SEIN], 'sein')
  createSentenceList([...HABEN], 'haben')
  createSentenceList([...WERDEN], 'werden')
})()
