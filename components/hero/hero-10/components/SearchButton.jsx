import { useTranslation } from 'react-i18next';

export default function SearchButton({ onSearch , standard = true , disabled}) {
    const { t } = useTranslation();

    return (
      <div className="button-item">
        <button
          className="mainSearch__submit button -yellow-2 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-white"
          onClick={onSearch}
          disabled={disabled}
        >
         { standard && <i className={`icon-search text-20 mr-10`} />}
          {t(`fly-complete-search:button-${standard ? 'search' : 'check-in'}`)}
          { ! standard && <i className={` icon-arrow-top-right text-16 ml-10 `} />}
        </button>
      </div>
    );
  }