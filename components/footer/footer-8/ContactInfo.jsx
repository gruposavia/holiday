const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      actionUS: "tel:(+1)786-673-0640",
      textUSCountry: "United State:",
      textUSPhone: "(+1)786-673-0640",
      actionCR: "tel:(+506)400-19419",
      textCRCountry: "Costa Rica:",
      textCRPhone: "(+506)400-19419",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:assistance@holidayair.net",
      text: "assistance@holidayair.net",
    },
  ];
  return (
    <>
      <div className="col-sm-6" key={contactContent[0].id}>
        <div className={"text-14 "}>{contactContent[0].title}</div>
        <p className="text-18 fw-500 mt-5">{contactContent[0].textUSCountry}</p>
        <a href={contactContent[0].actionUS} className="text-18 fw-500 mt-5">
          {contactContent[0].textUSPhone}
        </a>
        <p className="text-18 fw-500 mt-5">{contactContent[0].textCRCountry}</p>
        <a href={contactContent[0].actionCR} className="text-18 fw-500 mt-5">
          {contactContent[0].textCRPhone }
        </a>
      </div>
      <div className="col-sm-6" key={contactContent[1].id}>
        <div className={"text-14"}>{contactContent[1].title}</div>
        <a href={contactContent[1].action} className="text-18 fw-500 mt-5">
          {contactContent[1].text}
        </a>
      </div>
    </>
  );
};

export default ContactInfo;
