import { useTranslation } from 'react-i18next';

export default function LanguageSelectorModal({ onSelect }: { onSelect: (lang: string) => void }) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center text-white z-50">
      <h1 className="text-3xl mb-6">{t('selectLanguage')}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => onSelect('es')}
          className="px-4 py-2 bg-yellow-500 rounded"
        >
          {t('spanish')}
        </button>
        <button
          onClick={() => onSelect('en')}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          {t('english')}
        </button>
      </div>
    </div>
  );
}
