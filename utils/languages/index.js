import * as pt from './pt.json'
import * as en from './en.json'
import * as nl from './nl.json'

import {useRouter} from "next/router";

const languages = { pt, en, nl }

function simplifyLanguageStringsPart(ref, value, prefix = null){
  Object.entries(value).forEach(([childKey, childValue]) => {
    const newPrefix = prefix ? `${prefix}.${childKey}` : childKey
    if(childValue && typeof(childValue) !== 'object') return ref[newPrefix] = childValue

    simplifyLanguageStringsPart(ref, childValue, newPrefix)
  })
}
function simplifyLanguageStrings(obj){
  const newObj = {}
  simplifyLanguageStringsPart(newObj, obj)
  return newObj
}

export const useI18n = () => {
  const router = useRouter()
  const { locale } = router
  const languageStrings = simplifyLanguageStrings(languages[locale])

  const getString = name => {

    return languageStrings[name]
  }
  return { getString }
}
export default { pt, en }