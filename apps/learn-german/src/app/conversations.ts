import '../index.css'
import {
  FLUGZEUG,
  TAXI,
  ZUG,
  REZEPTION,
  HOTELZIMMER,
  MARKT,
  KAUFHAUS,
} from './const/conversations'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...FLUGZEUG], 'flugzeug')
  createSentenceList([...TAXI], 'taxi')
  createSentenceList([...ZUG], 'zug')
  createSentenceList([...REZEPTION], 'rezeption')
  createSentenceList([...HOTELZIMMER], 'hotelzimmer')
  createSentenceList([...MARKT], 'markt')
  createSentenceList([...KAUFHAUS], 'kaufhaus')
})()
