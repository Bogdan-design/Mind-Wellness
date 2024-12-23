import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t('contact.info.phone')}</h4>
                    <p className="mt-1 text-gray-500">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t('contact.info.email')}</h4>
                    <p className="mt-1 text-gray-500">contact@mindwellness.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t('contact.info.location')}</h4>
                    <p className="mt-1 text-gray-500">вул. Терапевтична 123, офіс 100<br />Київ, 01001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}