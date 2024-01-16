
'use client'
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import FlyCompleteSearch from './components/FlyCompleteSearch'
import { useTranslation } from 'react-i18next';
import BookingSearch from './components/BookingSearch'
import CheckInSearch from './components/CheckInSearch'
import FlyStatusSearch from './components/FlyStatusSearch'

const MainFilterSearchBox = () => {

  const { tabs, currentTab } = useSelector((state) => state.hero) || {};

  const dispatch = useDispatch();
  const Router = useRouter()
  const { t } = useTranslation()
  const tabObject = tabs.filter((e) => e.id === currentTab)
  return (
    <>
      <div className="tabs -bookmark js-tabs mt-40">
        <div className="tabs__controls d-flex items-center js-tabs-controls">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              className={`tabs__button px-10
               py-10 rounded-top-3 fw-600 text-dark-1 js-tabs-button ${tab?.name === currentTab ? "is-tab-el-active underline bg-yellow-1" : ""
                }`}
              onClick={() => dispatch(addCurrentTab(tab?.name))}
            >
              <i className={`${tab.icon} text-20 mr-10`}></i>
              {t(`main-filter-search:${tab?.name}`)}
            </button>
          ))}
        </div>
      </div>
      <div className="mainSearch -col-4 -w-1070 bg-white shadow-1 rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 ">
        {currentTab === 'flights' && <FlyCompleteSearch />}
        {currentTab === 'booking'&& <BookingSearch/>}
        {currentTab === 'check-in'&& <CheckInSearch/>}
        {currentTab === 'status'&& <FlyStatusSearch/>}
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
