import React from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const testimonials = [
  {
    id: 1,
    content: 'Др. Джонсон допомогла мені подолати тривожність і знайти внутрішній спокій. Її професійний підхід та емпатія створюють дійсно комфортну атмосферу.',
    author: 'Марія К.',
    role: 'Клієнт',
  },
  {
    id: 2,
    content: 'Завдяки онлайн-сеансам я зміг отримати якісну психологічну допомогу, не виходячи з дому. Це було особливо важливо під час пандемії.',
    author: 'Олександр П.',
    role: 'Клієнт',
  },
  {
    id: 3,
    content: 'Групова терапія відкрила мені очі на те, що я не самотній у своїх проблемах. Це було неймовірно цілюще відчуття.',
    author: 'Ірина М.',
    role: 'Клієнт',
  },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <Quote className="h-8 w-8 text-indigo-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="mt-4">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}