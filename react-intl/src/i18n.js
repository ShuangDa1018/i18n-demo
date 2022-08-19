import { createIntl, createIntlCache } from 'react-intl'
import en from './locales/en_US.js'
import zh_TW from './locales/zh_TW.js'

const cache = createIntlCache()

let locale = navigator.language
  let messages;
  locale = 'en'
  if (locale === 'zh_TW') {
    messages = zh_TW;
  } else {
    messages = en
  }
  console.log(messages,locale,cache)

  const intl = createIntl({
    locale: locale,
    messages: messages
  }, cache)

export {
  locale,
  messages,
  intl
}
