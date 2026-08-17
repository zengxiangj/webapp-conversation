import type { AppInfo } from '@/types/app'
export const APP_ID = `c3be0eaf-5980-4b00-ab73-5fdfcbd5b932`
export const API_KEY = `app-3v0AeYOcatAspjMFjMi2Klnm`
export const API_URL = `http://10.12.180.2/v1`
export const APP_INFO: AppInfo = {
  title: '科睿合同审查助手',
  description: '我可以审查合同、起草合同、答疑',
  copyright: 'kvvit',
  privacy_policy: '',
  default_language: 'zh-Hans',
  disable_session_same_site: false, // set it to true if you want to embed the chatbot in an iframe
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
