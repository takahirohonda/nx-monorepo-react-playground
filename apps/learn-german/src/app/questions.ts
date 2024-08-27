import '../index.css'
import { WAS } from './const/questions'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...WAS], 'was')
})()
