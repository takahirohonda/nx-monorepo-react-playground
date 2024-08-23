import '../index.css'
import { MY_FAVOURITE } from './const/sentences'
import { createSentenceList } from './utils'
;(function () {
  createSentenceList([...MY_FAVOURITE], 'my-favourite-phrases')
})()

// Need to use spread like [...MY_FAVOURITE] because
// Argument of type '
// readonly ["Wir Suchen Dich.", "Döner macht schöner."]'
// is not assignable to parameter of type 'string[]'.
//   The type 'readonly ["Wir Suchen Dich.", "Döner macht schöner."]'
//   is 'readonly'
//   and cannot be assigned to the mutable type 'string[]'.
