import { uk } from '../i18n/uk';

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
        : never;
    }[keyof T]
  : never;

export function useTranslation() {
  const t = (key: NestedKeyOf<typeof uk>) => {
    const keys = key.split('.');
    let value: any = uk;
    
    for (const k of keys) {
      value = value[k];
    }
    
    return value || key;
  };

  return { t };
}