import '../index.css'
import { FLUGZEUG } from './const/conversations'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...FLUGZEUG], 'flugzeug')
})()
