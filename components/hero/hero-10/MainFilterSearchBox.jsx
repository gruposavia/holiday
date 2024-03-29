import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import FlyCompleteSearch from './components/FlyCompleteSearch';
import BookingSearch from './components/BookingSearch';
import CheckInSearch from './components/CheckInSearch';
import FlyStatusSearch from './components/FlyStatusSearch';
import { useTranslation } from 'react-i18next';

const MainFilterSearchBox = ({locale}) => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  const { t } = useTranslation();


  const handleTabClick = (tabName) => {
    dispatch(addCurrentTab(tabName));
  };

  return (
    <>
      <div className="tabs -bookmark js-tabs mt-40">
        <div className="tabs__controls d-flex items-center js-tabs-controls">
          {tabs?.map(({ id, name, icon }) => (
            <button
              key={id}
              className={`tabs__button px-10 py-10 rounded-top-3 fw-600 text-dark-1 js-tabs-button ${
                name === currentTab ? "is-tab-el-active underline bg-yellow-1" : ""
              }`}
              onClick={() => handleTabClick(name)}
            >
              <i className={`${icon} text-20 mr-10`}></i>
              {t(`main-filter-search:${name}`)}
            </button>
          ))}
        </div>
      </div>
      <div className="mainSearch -col-4 -w-1070 bg-white shadow-1 rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 ">
        {currentTab === 'flights' && <FlyCompleteSearch locale={locale}/>}
        {currentTab === 'booking' && <BookingSearch locale={locale}/>}
        {currentTab === 'check-in' && <CheckInSearch locale={locale}/>}
        {currentTab === 'status' && <FlyStatusSearch locale={locale}/>}
      </div>
    </>
  );
};

export default MainFilterSearchBox;
