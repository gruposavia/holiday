

import Copyright from "./Copyright";


const index = ({t, locale}) => {

  return (
    locale && <footer className="footer -type-1">
      <div className="container">
        <div className="py-20 border-top-light">
          <Copyright t={t} locale={locale}/>
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
