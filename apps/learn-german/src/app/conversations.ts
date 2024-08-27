import '../index.css'
import { FLUGZEUG, TAXI } from './const/conversations'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...FLUGZEUG], 'flugzeug')
  createSentenceList([...TAXI], 'taxi')
})()
