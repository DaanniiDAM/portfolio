import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { submitContactForm } from '@/lib/contact-form'
import { pageTranslations, useLanguage } from '@/lib/i18n'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { language } = useLanguage()
  const copy = pageTranslations[language]

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {copy.messageSent}
          </h2>
          <p className="text-gray-600 mb-6">
            {copy.messageSentText}
          </p>
          <button
            onClick={() => {
              setError('')
              setSubmitted(false)
            }}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {copy.sendAnother}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {copy.contactTitle}
        </h1>
        <p className="text-gray-600 mb-8">
          {copy.contactIntro}
        </p>

        <form
          name="contact"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault()
            setIsSubmitting(true)
            setError('')

            try {
              await submitContactForm(e.currentTarget)
              setSubmitted(true)
            } catch (err) {
              setError(
                err instanceof Error
                  ? err.message
                  : copy.fallbackError,
              )
            } finally {
              setIsSubmitting(false)
            }
          }}
          className="space-y-6"
        >
          <p hidden>
            <label>
              {copy.botField} <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {copy.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder={copy.namePlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {copy.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder={copy.emailPlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {copy.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
              placeholder={copy.messagePlaceholder}
            />
          </div>

          {error ? (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={16} />
            {isSubmitting ? copy.sending : copy.sendMessage}
          </button>
        </form>
      </div>
    </div>
  )
}
