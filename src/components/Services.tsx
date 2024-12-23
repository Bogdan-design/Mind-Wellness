import React from 'react';
import { Brain, Heart, Users, MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const icons = {
  'Індивідуальна терапія': Brain,
  'Сімейна консультація': Heart,
  'Групова терапія': Users,
  'Онлайн сеанси': MessageCircle,
};

export default function Services() {
  const { t } = useTranslation();
  const services = t('services.items');

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = icons[service.title as keyof typeof icons];
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}