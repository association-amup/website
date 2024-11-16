import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    code: 'en',
    name: 'common.languages.english',
    flag: '🇬🇧'
  },
  {
    code: 'fr',
    name: 'common.languages.french',
    flag: '🇫🇷'
  },
  {
    code: 'ar',
    name: 'common.languages.arabic',
    flag: '🇲🇦'
  }
];

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="relative"
    >
      <button
        className="flex items-center px-3 py-2 text-gray-200 hover:bg-darker-blue hover:text-white rounded-t-md text-sm font-medium"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="me-2">{currentLanguage.flag}</span>
        <span>{t(currentLanguage.name)}</span>
      </button>

      <div 
        className={`absolute right-0 bg-deep-blue rounded-b-md shadow-lg z-50 min-w-full overflow-hidden transition-all duration-200 ${
          isExpanded ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        }`}
      >
        {languages
          .filter(lang => lang.code !== i18n.language)
          .map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setTimeout(() => {
                  i18n.changeLanguage(lang.code);
                  setIsExpanded(false);
                }, 0);
              }}
              className="flex items-center w-full px-3 py-2 text-sm text-gray-200 hover:bg-darker-blue hover:text-white whitespace-nowrap"
            >
              <span className="me-2">{lang.flag}</span>
              <span>{t(lang.name)}</span>
            </button>
          ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher; 