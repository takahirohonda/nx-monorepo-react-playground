import '../index.css'
import { GEBEN } from './const/verbs'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...GEBEN], 'geben')
})()
