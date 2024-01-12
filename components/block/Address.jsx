const Address = ({ t }) => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: t('contact:address'),
      content: (
        <>6303 Blue Lagoon Drive, Suite 400, Miami FL 33126</>
      ),
    },
    {
      id: 2,
      colClass: "contact-phone",
      title: t('contact:contact-phone'),
      content: (
        <>
          <a href="tel:(+1)786-673-0640">(+1)786-673-0640</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: t('contact:need-assistance'),
      content: (
        <>
          {" "}
          <a href="mailto:assistance@holidayair.net">assistance@holidayair.net</a>
        </>
      ),
    },
  ];
  return (
<>
      {addressContent.map((item) => (
          <div className={`${item.colClass} col-lg-4 `} key={item.id}>
            <div className="text-14 text-light-1">{item.title}</div>
            <div className="text-18 fw-500 mt-10">{item.content}</div>
          </div>
      ))}
</>
  );
};

export default Address;
