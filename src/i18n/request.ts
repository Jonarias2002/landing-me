import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

const messageCache = new Map<string, Record<string, unknown>>()

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as 'es' | 'en')) {
    locale = routing.defaultLocale
  }

  if (!messageCache.has(locale)) {
    const messages = (await import(`../messages/${locale}.json`)).default
    messageCache.set(locale, messages)
  }

  return {
    locale,
    messages: messageCache.get(locale),
  }
})
