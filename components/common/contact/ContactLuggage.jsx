
'use client'
import React, { useEffect } from 'react';

const ContactLuggage = () => {
  useEffect(() => {
    // Crea un elemento script
    const script = document.createElement('script');
    
    // Configura las propiedades del script
    script.src = 'https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js';
    script.id = 'tcx-callus-js';
    script.async = true;
    script.charset = 'utf-8';

    // Agrega el script al final del body
    document.body.appendChild(script);

    // Cleanup: Remueve el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecute una vez, equivalente a componentDidMount

  return (
    <>
      <call-us-selector phonesystem-url="https://holidayair.3cx.lat:5001" party="LiveChat204566"></call-us-selector>
    </>
  );
};

export default ContactLuggage;
