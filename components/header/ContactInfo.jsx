const ContactInfo = ({t}) => {
  const contactContent = [
    {
      id: 1,
      title: t('footer:contact-phone'),
      action: "tel:(+1)786-673-0640",
      text: "(+1)786-673-0640",
    },
    {
      id: 2,
      title: t('footer:need-assistance'),
      action: "mailto:assistance@holidayair.net",
      text: "assistance@holidayair.net",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
