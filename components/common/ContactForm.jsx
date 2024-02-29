'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Toaster, toast } from 'sonner';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    try {

       const response = await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify({
            type: 'contact',
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            name: formData.name,
          }),
        });
      
      if (response.status === 200) toast.success(t('common:sent-success'));
    } catch (error) {
      toast.error(t('common:sent-error'));
    }
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      {/* <Toaster position="top-right" richColors /> */}
      {['name', 'email', 'subject'].map((field) => (
        <div key={field} className="col-12">
          <div className="form-input">
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              required
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            <label htmlFor={field} className="lh-1 text-16 text-light-1">
              {t(`contact:form-${field}`)}
            </label>
          </div>
        </div>
      ))}
      <div className="col-12">
        <div className="form-input">
          <textarea
            id="message"
            required
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            {t('contact:form-request-message')}
          </label>
        </div>
      </div>
      <div className="col-auto">
        <button type="submit" className="button px-24 h-50 -dark-1 bg-blue-1 text-white">
          {t('contact:form-send-button')} <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
