import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ja']
})

export default NextI18NextInstance

export const {
  appWithTranslation,
  useTranslation,
} = NextI18NextInstance
