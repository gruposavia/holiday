'use client'
import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';


const Faq = ({ t, locale, searchText }) => {
  const initialFaqContent = useMemo(() => [
    {
      id: 1,
      collapseTarget: "One",
      title: "faq:title-one",
      content: "section1",
      tags: [
        'cambiar', 'cambios', 'vuelos', 'minimo', 'plazo', 'minimo', '48', 'anticipacion', 'penalidad', 'usd150', 'pasaje', 'flex', 'change', 'changes', 'flights', 'minimum', 'term', 'minimum', '48', 'advance', 'penalty', 'USD150', 'ticket', 'flex' 
      ],
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "faq:title-two",
      content: "section2",
      tags: [
        'solicitar', 'devolucion', 'pasaje', 'original', 'regreso', 'incluida', 'clientes', 'membresias', 'penalidades', 'devolucion', 'reembolsables', 'extraordinarias', 'fuerza', 'departamento', 'comercial', 'reservation', 'solicit', 'refund', 'ticket', 'original', 'return', 'included', 'customers', 'memberships', 'penalties', 'refundable', 'extraordinary', 'force', 'commercial', 'department', 'reservation'
      ]

    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "faq:title-three",
      content: "section3",
      tags: [
        'retrase', 'cancele', 'reprograme', 'retraso', 'informacion', 'compensaciones', 'cancelacion', 'reubicacion', 'reembolso', 'Reprogramación', 'opciones', 'vales', 'alimentos', 'pasajes', 'alternativos', 'acomodar', 'retraso', 'planeando', 'delay', 'cancel', 'reschedule', 'delay', 'information', 'compensations', 'cancellation', 'relocation', 'refund', 'rescheduling', 'options', 'vouchers', 'food', 'tickets', 'alternatives', 'accommodate', 'delay', 'planning'
      ]
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "faq:title-four",
      content: "section4",
      tags: [
        'consideraciones', 'menor', 'niño', '11', '2', 'infante', 'bebes', 'butaca', 'falda', 'padres', 'adulto', 'articulo', 'personal', 'cochecito', 'paraguita', 'menu', 'especial', 'partida', 'nacimiento', 'experiencia', 'vuelo', 'pequeño', 'documentacion', 'visa', 'vigente', 'requisitos', 'procedimientos', 'obligatorio', 'considerations', 'minor', 'child', '11', '2', 'infant', 'babies', 'seat', 'lap', 'parents', 'adult', 'article', 'personal', 'stroller', 'umbrella', 'special', 'menu', 'birth', 'experience', 'flight', 'small', 'documentation', 'visa', 'valid', 'requirements', 'procedures', 'mandatory'
      ]
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "faq:title-five",
      content: "section5",
      tags: [
        'opciones', 'carga', 'dispositivos', 'electrónicos', 'vuelos', 'pantallas', 'individuales', 'cargadores', 'teléfono', 'tablet', 'celular', 'wi-fi', 'batería', 'extra', 'banco', 'entrenamiento', 'noticias', 'películas', 'web', 'whatsapp', 'redes', 'sociales', 'netflix', 'hbo', 'disney', 'amazon', 'prime', 'options', 'charging', 'electronic devices', 'flights', 'individual screens', 'phone chargers', 'phone', 'tablet', 'cell phone', 'Wi-Fi', 'extra battery', 'power bank', 'entertainment', 'news', 'movies', 'web', 'WhatsApp', 'social media', 'Netflix', 'HBO', 'Disney', 'Amazon', 'Prime'
      ]
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: "faq:title-six",
      content: "section6",
      tags: [
        'ofrecen', 'wifi', 'wi-fi', 'servicio', 'alta', 'velocidad', 'sin', 'cargo', 'conectado', 'vuelo', 'acceder', 'internet', 'peliculas', 'redes', 'sociales', 'netflix', 'whatsapp', 'instagram', 'facebook', 'twitter', 'X', 'tik', 'tok', 'hbo', 'disney', 'prime', 'spotify', 'musica', 'offer', 'WiFi', 'Wi-Fi', 'service', 'high', 'speed', 'free', 'connected', 'flight', 'access', 'internet', 'movies', 'social media', 'Netflix', 'WhatsApp', 'Instagram', 'Facebook', 'Twitter', 'X', 'TikTok', 'HBO', 'Disney', 'Prime', 'Spotify', 'music'
      ]

    },
    {
      id: 7,
      collapseTarget: "Seven",
      title: "faq:title-seven",
      content: "section7",
      tags: [
        'equipaje', 'despachado', 'llega', 'llegue', 'destino', 'bodega', 'acciones', 'garantizar', 'personal', 'ausencia', 'aeropuerto', 'asistencia', 'situacion', 'reclamo', 'equipaje', 'formulario', 'busqueda', 'localizar', 'devolver', 'seguimiento', 'checked', 'luggage', 'arrives', 'reaches', 'destination', 'hold', 'actions', 'ensure', 'personnel', 'absence', 'airport', 'assistance', 'situation', 'claim', 'baggage', 'form', 'search', 'locate', 'return', 'tracking'
      ]

    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: "faq:title-eight",
      content: "section8",
      tags: [
        'formas', 'pagos', 'credito', 'debito', 'tarjeta', 'visa', 'mastercard', 'amex', 'american', 'express', 'transferencia', 'bancaria', 'pago', 'deposito', 'efectivo', 'zele', 'reservation@holidayair.net', 'oficinas', 'fee', 'emision', 'boletos', 'instalaciones'
      ]

    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: "faq:title-nine",
      content: "section9",
      tags: [
        'ticket', 'aereo', 'incluido', 'tarifa', 'base', 'equipaje', 'ticket', 'economy', 'domestico', 'articulo', 'personal', 'Business', 'empresarial', 'carry-on', '10Kg', '23Kg', 'bolso', 'mano', 'valijas', 'membresias', 'mano', 'bodega', 'airfare', 'included', 'base fare', 'luggage', 'ticket', 'economy', 'domestic', 'personal item', 'Business', 'business', 'carry-on', '10Kg', '23Kg', 'handbag', 'hand luggage', 'suitcases', 'memberships', 'carry-on', 'hold'
      ]

    },
    {
      id: 10,
      collapseTarget: "Ten",
      title: "faq:title-ten",
      content: "section10",
      tags: [
        'articulo', 'personal', 'dimensiones', 'aeronave', 'cartera', 'bolso', 'pequeño', 'laptop', 'pañalera', 'electronico', 'liquidos', 'cremallera', 'maxima', 'capacidad', 'pasajero', 'orientacion', 'litro', '100 ml', 'bolsa', 'plastico', 'contacto', 'personal item', 'dimensions', 'aircraft', 'wallet', 'small bag', 'laptop', 'diaper bag', 'electronic', 'liquids', 'zipper', 'maximum', 'capacity', 'passenger', 'guidance', 'liter', '100 ml', 'plastic bag', 'contact'
      ]
    },
    {
      id: 11,
      collapseTarget: "Eleven",
      title: "faq:title-eleven",
      content: "section11",
      tags: [
        'equipaje', 'bodega', 'reserva', 'costo', 'asociado', 'reserva', 'membresia', 'suscripta', 'carry-on', 'maximo', 'peso', '10kg', '22lb', '23kg', '50lb', 'tramo', 'dimensiones', 'maximo', 'permitido', 'planificar', 'equipaje', 'flexibilidad', 'equipaje', 'anticipada', 'checked baggage', 'reservation', 'cost', 'associated', 'reservation', 'membership', 'subscribed', 'carry-on', 'maximum', 'weight', '10kg', '22lb', '23kg', '50lb', 'segment', 'dimensions', 'maximum', 'allowed', 'plan', 'baggage', 'flexibility', 'baggage', 'advance'
      ]

    },
    {
      id: 12,
      collapseTarget: "Twelve",
      title: "faq:title-twelve",
      content: "section12",
      tags: [
        'olvido', 'objeto', 'avión', 'comunicación', 'inmediata', 'olvidado', 'registro', 'informar', 'abandonar', 'registrara', 'numero', 'vuelo', 'encontró', 'buscar', 'retencion', 'periodo', 'guardaremos', 'olvidados', '2', 'meses', 'encontrados', 'reclamo', 'recuperación', 'asistencia', 'perdidos', 'retención', 'medicamentos', 'alimentos', 'regulación', 'no', 'reclamados', 'destrucción', 'perecederos', 'comunicarte', 'forgotten', 'object', 'airplane', 'immediate communication', 'forgotten', 'record', 'inform', 'abandon', 'register', 'flight number', 'found', 'search', 'retention', 'period', 'we will keep', 'forgotten', '2', 'months', 'found', 'claim', 'recovery', 'assistance', 'lost', 'retention', 'medications', 'food', 'regulation', 'unclaimed', 'destruction', 'perishables', 'contact'
      ]
    },
    {
      id: 13,
      collapseTarget: "Thirteen",
      title: "faq:title-thirteen",
      content: "section13",
      tags: [
        'viajar', 'embarazada', 'garantizar', 'bienestar', 'recomendaciones', 'bebe', 'pautas', '36', 'semanas', 'embarazo', 'múltiple', 'mellizos', 'trillizos', 'medica', 'atencion', 'precaución', 'historial', 'documentación', 'restricciones', 'destino', 'peligroso', 'profesionales', 'médicos', 'enfermo', 'travel', 'pregnant', 'ensure', 'well-being', 'recommendations', 'baby', 'guidelines', '36', 'weeks', 'pregnancy', 'multiple', 'twins', 'triplets', 'medical', 'attention', 'caution', 'medical history', 'documentation', 'restrictions', 'destination', 'dangerous', 'medical professionals', 'sick'
      ]

    },
    {
      id: 14,
      collapseTarget: "Fourteen",
      title: "faq:title-fourteen",
      content: "section14",
      tags: [
        'mascota', 'avion', 'perro', 'gato', 'viajar', 'cabina', 'bodega', 'kennel', 'bolso', 'vuelo', '7Kg', '15lb', 'economy', 'razas', 'peligrosas', 'condiciones', 'generales', '16 semanas', 'vida', 'docil', 'comportamiento', 'mascotas', 'requisitos', 'solicitar', 'servicio', 'disponibilidad', 'especiales', 'consideraciones', 'restricciones', 'especificas', 'cdc', 'alto riesgo', 'contagio', 'raza', 'comida', 'excepciones', 'peludo', 'amigo fiel', 'perra', 'gata', 'pet', 'airplane', 'dog', 'cat', 'travel', 'cabin', 'hold', 'kennel', 'bag', 'flight', '7Kg', '15lb', 'economy', 'dangerous breeds', 'general conditions', '16 weeks', 'life', 'docile', 'behavior', 'pets', 'requirements', 'apply', 'service', 'availability', 'special', 'considerations', 'specific restrictions', 'CDC', 'high risk', 'contagion', 'breed', 'food', 'exceptions', 'furry', 'loyal friend' 
      ]
    },
  ], []);

  const [faqContent, setFaqContent] = useState(initialFaqContent);


  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const fetchedData = await Promise.all(
          initialFaqContent.map(async (item) => {
            const response = await fetch(`/api/getFaqcontent?section=${item.content}&locale=${locale}`);
            const data = await response.json();
            return { ...item, faqContent: data.faqContent };
          })
        );

        setFaqContent(fetchedData);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };
    fetchFaqData();
  }, [initialFaqContent, locale]);

  const filteredQuestions = faqContent.filter((item) =>
    searchText
      ? item.tags?.some(tag => tag.toLowerCase().startsWith(searchText.toLowerCase()))
      : true
  );




  return (
    <>
      {filteredQuestions.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{t(`${item.title}`)}</div>
            </div>

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <ReactMarkdown>{item.faqContent}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
