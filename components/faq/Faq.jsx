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
        'cambios', 'vuelo', 'reprogramación', 'tarifas', 'costos', 'adicionales',
        'fecha', 'vuelo', 'validez', 'boleto', 'membresía', 'condiciones', 'flex',
        'flexibilidad', 'flight', 'changes', 'rebooking', 'fare', 'basis', 'additional',
        'costs', 'flight', 'date', 'ticket', 'validity', 'membership', 'flex', 'conditions',
        'flexibility'
      ],
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "faq:title-two",
      content: "section2",
      tags: [
        'holiday', 'air', 'fares', 'non-refundable', 'date', 'changes', 'year', 'validity',
        'ticket', 'penalties', 'fare', 'differences', 'extraordinary', 'force', 'majeure',
        'situations', 'contact', 'travel', 'agent', 'commercial', 'department', 'reservation',
        'email', 'reservation@holidayair.net', 'analyse', 'detail', 'request',
        'tarifas', 'no reembolsables', 'cambios', 'fecha', 'año', 'validez', 'boleto',
        'penalidades', 'tarifa', 'diferencias', 'extraordinarias', 'fuerza', 'mayor',
        'situaciones', 'contactar', 'agente', 'viajes', 'departamento', 'comercial', 'reserva',
        'correo', 'reserva@holidayair.net', 'analizar', 'detalle', 'solicitud'
      ]

    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "faq:title-three",
      content: "section3",
      tags: [
        'make', 'best', 'efforts', 'ensure', 'passengers', 'arrive', 'destinations', 'schedule',
        'various', 'circumstances', 'may', 'face', 'eventual', 'alterations', 'programming',
        'flight', 'delay', 'updated', 'information', 'holiday', 'air', 'provide', 'new', 'estimated',
        'departure', 'time', 'compensation', 'cases', 'depending', 'delay', 'offer', 'food',
        'vouchers', 'reimbursement', 'additional', 'expenses', 'incurred', 'waiting',
        'flight', 'cancellation', 'relocation', 'holiday', 'air', 'allocate', 'next', 'available',
        'flights', 'destinations', 'additional', 'charge', 'refund', 'passengers', 'accept',
        'alternative', 'prefer', 'travel', 'possibility', 'requesting', 'tickets', 'via', 'original',
        'purchase', 'channel', 'flight', 'rescheduling', 'rescheduling', 'options', 'holiday', 'air',
        'offer', 'different', 'alternative', 'flight', 'options', 'accommodate', 'affected',
        'passengers', 'compensation', 'cases', 'depending', 'delay', 'offer', 'food', 'vouchers',
        'reimbursement', 'additional', 'expenses', 'incurred', 'waiting',
        'esfuerzos', 'asegurar', 'pasajeros', 'lleguen', 'destinos', 'horario', 'varias', 'circunstancias',
        'enfrentar', 'eventuales', 'alteraciones', 'programación', 'retraso', 'vuelo', 'información',
        'actualizada', 'holiday', 'air', 'proporcionará', 'nuevo', 'hora', 'salida', 'compensación',
        'algunos', 'casos', 'dependiendo', 'retraso', 'ofrecer', 'vales', 'alimentación',
        'reembolso', 'gastos', 'adicionales', 'incurridos', 'espera', 'cancelación', 'reubicación',
        'holiday', 'air', 'asignará', 'próximos', 'vuelos', 'destinos', 'cargo', 'adicional',
        'reembolso', 'pasajeros', 'aceptan', 'alternativa', 'prefieren', 'viajar', 'posibilidad',
        'solicitud', 'boletos', 'canal', 'original', 'reprogramación', 'opciones', 'holiday', 'air',
        'ofrecerá', 'diferentes', 'opciones', 'vuelo', 'alternativas', 'acomodar', 'afectados',
        'pasajeros', 'compensación', 'algunos', 'casos', 'dependiendo', 'retraso', 'ofrecer', 'vales',
        'alimentación', 'reembolso', 'gastos', 'adicionales', 'incurridos', 'espera'
      ]
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "faq:title-four",
      content: "section4",
      tags: [
        'planning', 'travel', 'infant', '2', 'years', 'old', 'essential', 'keep', 'mind', 'following',
        'guidelines', 'ensure', 'comfortable', 'safe', 'trip', 'travel', 'infants', '2', 'years',
        'old', 'babies', '2', 'years', 'age', 'right', 'seat', 'travel', 'lap', 'parent', 'responsible',
        'adult', 'flight', 'carry', 'personal', 'item', 'necessary', 'baby', 'care', 'elements', 'diapers',
        'milk', 'bottle', 'also', 'transport', 'folding', 'stroller', 'travel', 'children', '2', '11',
        'years', 'old', 'occupy', 'seat', 'must', 'pay', '75%', 'adult', 'rate', 'recommended', 'request',
        'special', 'childrens', 'menu', 'satisfy', 'dietary', 'needs', 'flight', 'travelling', 'important',
        'review', 'required', 'documentation', 'childs', 'birth', 'certificate', 'current', 'passport',
        'valid', 'visa', 'traveling', 'united', 'states', 'required', 'permits', 'additionally', 'recommend',
        'contact', 'customer', 'service', 'department', 'email', 'reservation@holidayair.net', 'specific',
        'information', 'requirements', 'procedures', 'related', 'childrens', 'travel', 'ensuring', 'flight',
        'experience', 'smooth', 'enjoyable', 'possible', 'family', 'committed', 'providing', 'service',
        'fulfills', 'needs', 'passengers', 'including', 'little', 'ones',
        'planificación', 'viaje', 'bebé', '2', 'años', 'esencial', 'tener', 'cuenta', 'siguientes',
        'pautas', 'asegurar', 'viaje', 'cómodo', 'seguro', 'viaje', 'bebés', '2', 'años',
        'bebés', '2', 'años', 'edad', 'derecho', 'asiento', 'viajar', 'regazo', 'padre', 'adulto',
        'responsable', 'vuelo', 'llevar', 'artículo', 'personal', 'necesario', 'elementos', 'cuidado',
        'bebé', 'pañales', 'leche', 'biberón', 'también', 'transportar', 'cochecito', 'plegable',
        'viaje'
      ]
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "faq:title-five",
      content: "section5",
      tags: [
        'planes', 'individual', 'screens', 'chargers', 'electronic', 'devices', 'pleased', 'inform',
        'implemented', 'onboard', 'highspeed', 'wifi', 'service', 'inflight', 'entertainment',
        'enhance', 'flight', 'experience', 'strongly', 'recommend', 'check', 'ensure', 'carry',
        'extra', 'battery', 'electronic', 'devices', 'flight', 'provide', 'chargers', 'on', 'board',
        'onboard', 'wifi', 'offers', 'opportunity', 'access', 'variety', 'online', 'content',
        'flight', 'including', 'entertainment', 'news', 'webbased', 'services',
        'aviones', 'pantallas', 'individuales', 'cargadores', 'dispositivos', 'electrónicos', 'complacidos',
        'informarle', 'implementado', 'servicio', 'wifi', 'alta', 'velocidad', 'entretenimiento',
        'vuelo', 'mejorar', 'experiencia', 'vuelo', 'recomendamos', 'encarecidamente', 'verificar',
        'asegurarse', 'llevar', 'batería', 'extra', 'dispositivos', 'electrónicos', 'vuelo', 'proporcionamos',
        'cargadores', 'bordo', 'wifi', 'ofrece', 'oportunidad', 'acceder', 'variedad', 'contenido',
        'línea', 'vuelo', 'incluyendo', 'entretenimiento', 'noticias', 'servicios', 'web'
      ]
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: "faq:title-six",
      content: "section6",
      tags: [
        'planes', 'individual', 'screens', 'chargers', 'electronic', 'devices', 'pleased', 'inform',
        'implemented', 'onboard', 'highspeed', 'wifi', 'service', 'inflight', 'entertainment',
        'enhance', 'flight', 'experience', 'strongly', 'recommend', 'check', 'ensure', 'carry',
        'extra', 'battery', 'electronic', 'devices', 'flight', 'provide', 'chargers', 'on', 'board',
        'onboard', 'wifi', 'offers', 'opportunity', 'access', 'variety', 'online', 'content',
        'flight', 'including', 'entertainment', 'news', 'webbased', 'services',
        'aviones', 'pantallas', 'individuales', 'cargadores', 'dispositivos', 'electrónicos', 'complacidos',
        'informarle', 'implementado', 'servicio', 'wifi', 'alta', 'velocidad', 'entretenimiento',
        'vuelo', 'mejorar', 'experiencia', 'vuelo', 'recomendamos', 'encarecidamente', 'verificar',
        'asegurarse', 'llevar', 'batería', 'extra', 'dispositivos', 'electrónicos', 'vuelo', 'proporcionamos',
        'cargadores', 'bordo', 'wifi', 'ofrece', 'oportunidad', 'acceder', 'variedad', 'contenido',
        'línea', 'vuelo', 'incluyendo', 'entretenimiento', 'noticias', 'servicios', 'web'
      ]

    },
    {
      id: 7,
      collapseTarget: "Seven",
      title: "faq:title-seven",
      content: "section7",
      tags: [
        'event', 'notice', 'checked', 'baggage', 'arrived', 'ask', 'take', 'following', 'actions',
        'ensure', 'prompt', 'resolution', 'contact', 'holiday', 'air', 'staff', 'soon', 'luggage',
        'missing', 'recommend', 'look', 'team', 'available', 'provide', 'assistance', 'guide',
        'process', 'reporting', 'situation', 'complete', 'claim', 'form', 'provided', 'leaving',
        'airport', 'step', 'crucial', 'start', 'searching', 'recovering', 'efficiently', 'start',
        'search', 'process', 'filed', 'claim', 'quickly', 'begin', 'finding', 'dedicated', 'team',
        'work', 'diligently', 'locate', 'return', 'property', 'soon', 'possible', 'claim', 'status',
        'tracking', 'provide', 'updated', 'information', 'status', 'location', 'progresses', 'goal',
        'keep', 'informed', 'reassure', 'working', 'solve', 'situation', 'effectively',
        'caso', 'note', 'equipaje', 'facturado', 'llegado', 'pedimos', 'tome', 'siguientes', 'acciones', 'valija', 'bolso',
        'asegurar', 'resolución', 'pronta', 'contacte', 'personal', 'holiday', 'air', 'así', 'note',
        'equipaje', 'extraviado', 'recomendamos', 'busque', 'personal', 'holiday', 'air', 'aeropuerto',
        'nuestro', 'equipo', 'disponible', 'proporcionar', 'asistencia', 'guiarlo', 'proceso', 'informar',
        'situación', 'complete', 'formulario', 'reclamo', 'proporcionado', 'personal', 'antes', 'abandonar',
        'aeropuerto', 'paso', 'crucial', 'iniciar', 'proceso', 'búsqueda', 'recuperación', 'eficientemente',
        'inicio', 'proceso', 'búsqueda', 'presentado', 'reclamo', 'rápidamente', 'iniciaremos', 'proceso',
        'localizar', 'devolver', 'propiedad', 'pronto', 'posible', 'estado', 'reclamo', 'seguimiento',
        'proporcionaremos', 'información', 'actualizada', 'estado', 'ubicación', 'progreso', 'objetivo',
        'mantenerlo', 'informado', 'tranquilizarlo', 'trabajando', 'resolver', 'situación', 'eficazmente'
      ]

    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: "faq:title-eight",
      content: "section8",
      tags: [
        'convenience', 'offer', 'several', 'payment', 'options', 'purchasing', 'tickets', 'available',
        'forms', 'payment', 'credit', 'cards', 'debit', 'cards', 'accept', 'credit', 'debit', 'cards',
        'major', 'brands', 'including', 'visa', 'mastercard', 'american', 'express', 'option', 'provides',
        'fast', 'secure', 'way', 'make', 'purchase', 'online', 'wire', 'transfer', 'also', 'accept',
        'payments', 'via', 'bank', 'transfer', 'obtain', 'necessary', 'details', 'complete', 'transaction',
        'recommend', 'contact', 'customer', 'service', 'department', 'reservation', 'holidayair', 'net',
        'cash', 'payment', 'offices', 'prefer', 'pay', 'cash', 'designated', 'important', 'note', 'apply',
        'additional', 'fee', 'fee', 'ticketing', 'carried', 'facilities',
        'comodidad', 'ofrecemos', 'varias', 'opciones', 'pago', 'compra', 'boletos', 'formas', 'pago',
        'tarjetas', 'crédito', 'débito', 'aceptamos', 'tarjetas', 'crédito', 'débito', 'principales',
        'marcas', 'incluyendo', 'visa', 'mastercard', 'american', 'express', 'opción', 'proporciona',
        'manera', 'rápida', 'segura', 'realizar', 'compra', 'línea', 'transferencia', 'bancaria', 'también',
        'aceptamos', 'pagos', 'mediante', 'transferencia', 'bancaria', 'obtener', 'detalles', 'necesarios',
        'completar', 'transacción', 'recomendamos', 'contactar', 'departamento', 'servicio', 'cliente',
        'reservación', 'holidayair', 'net', 'pago', 'efectivo', 'oficinas', 'prefiere', 'pagar', 'efectivo',
        'puede', 'hacerlo', 'nuestras', 'oficinas', 'importante', 'notar', 'aplicamos', 'tarifa', 'adicional',
        'tarifa', 'emisión', 'boletos', 'realizada', 'nuestras', 'instalaciones'
      ]

    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: "faq:title-nine",
      content: "section9",
      tags: [
        'passengers', 'purchasing', 'base', 'fare', 'important', 'keep', 'mind', 'following', 'baggage',
        'considerations', 'economy', 'class', 'ticket', 'economy', 'class', 'fares', 'include', 'one',
        'free', 'charge', 'personal', 'item', 'board', 'wish', 'also', 'purchase', 'baggage', 'allowance',
        'best', 'suits', 'needs', 'special', 'advance', 'purchase', 'prices', 'carryon', 'hand', 'luggage',
        '10', 'kg', '22', 'lb', 'checked', 'luggage', '23', 'kg', '50', 'lb', 'alternative', 'may',
        'purchase', 'one', 'memberships', 'available', 'business', 'class', 'ticket', 'business', 'class',
        'fares', 'include',  '23', 'kg', '50lb', 'checked', 'luggage', 'carryon', 'personal', 'item',
        'board', 'top', 'holiday', 'air', 'offers', 'complimentary', 'diamond', 'membership', 'business',
        'class', 'passengers', 'allow', 'check', 'two', 'additional', 'bag', '23', 'kg', '50', 'lb', 'free',
        'charge', 'pasajeros', 'comprando', 'tarifa', 'base', 'importante', 'tener', 'cuenta', 'siguientes',
        'consideraciones', 'equipaje', 'boleto', 'clase', 'económica', 'boleto', 'clase', 'económica','valija', 'bolso',
        'incluyen', 'solo', 'un', 'artículo', 'personal', 'bordo', 'desea', 'también', 'comprar', 'derecho',
        'equipaje','necesidades', 'precios', 'especiales', 'compra', 'anticipada',
        'equipaje', 'mano', 'hasta', '10', 'kg', '22', 'lb', 'equipaje', 'documentado', 'hasta', '23', 'kg',
        '50', 'lb', 'alternativa','comprar', 'nuestros', 'membresías', 'disponibles',
        'boleto', 'clase', 'negocios', 'boleto', 'clase', 'negocios', 'incluyen', 'un', 'equipaje', 'documentado',
        '23', 'kg', '50lb', 'uno', 'equipaje', 'mano', 'artículo', 'personal', 'bordo', 'además', 'holiday', 'air',
        'ofrece', 'membresía', 'diamante', 'gratuita', 'todos', 'nuestros', 'pasajeros', 'clase', 'negocios',
        'permite', 'verificar', 'dos', 'bolsas', 'adicionales', '23', 'kg', '50', 'lb',  'cargo'
      ]

    },
    {
      id: 10,
      collapseTarget: "Ten",
      title: "faq:title-ten",
      content: "section10",
      tags: [
        'personal', 'item', 'transported', 'board', 'aircraft', 'free', 'charge', 'long', 'dimensions',
        'exceed', 'maximum', 'size', 'acceptable', 'personal', 'items', 'include', 'purse', 'small', 'bag',
        'wallet', 'backpack', 'diaper', 'laptop', 'bag', 'allowed', 'carry', 'long', 'meets', 'established',
        'dimensions', 'important', 'take', 'account', 'maximum', 'measurements', 'allowed', 'personal', 'item',
        'additionally', 'essential', 'ensure', 'personal', 'item', 'placed', 'seat', 'front', 'flight',
        'additionally', 'recommended', 'carry', 'following', 'items', 'hand', 'luggage', 'electronic',
        'items', 'electronic', 'devices', 'prefer', 'hand', 'flight', 'liquids', 'less', 'liquids', 'must',
        'placed', 'transparent', 'plastic', 'bag', 'zipper', 'closure', 'maximum', 'capacity', 'bag', 'please',
        'note', 'personal', 'items', 'responsibility', 'must', 'handled', 'care', 'questions', 'specific',
        'item', 'recommend', 'contact', 'customer', 'service', 'department', 'additional', 'assistance',
        'committed', 'ensuring', 'comfortable', 'safe', 'trip', 'passengers', 'objeto', 'personal', 'puede',
        'transportarse', 'abordo', 'aeronave', 'cargo', 'dimensiones', 'exceden', 'tamaño', 'máximo',
        'objetos', 'personales', 'aceptables', 'incluir', 'bolso', 'pequeño', 'cartera', 'mochila',
        'pañalera', 'diseñado', 'llevar', 'elementos', 'esenciales', 'bolso', 'portátil', 'permitido',
        'llevar', 'bolso', 'portátil', 'siempre', 'cumpla', 'dimensiones', 'establecidas', 'importante',
        'tener', 'cuenta', 'mediciones', 'permitidas', 'objeto', 'personal', 'además', 'esencial', 'asegurar',
        'objeto', 'personal', 'colocado', 'asiento', 'delante', 'vuelo', 'recomendable', 'llevar', 'siguientes',
        'elementos', 'equipaje', 'mano', 'artículos', 'electrónicos', 'dispositivos', 'electrónicos','valija', 'bolso',
        'prefiera', 'mano', 'vuelo', 'líquidos', 'menos', 'líquidos', 'deben', 'colocarse', 'bolsa', 'plástico',
        'transparente', 'cremallera', 'cierre', 'capacidad', 'máxima', 'bolsa', 'favor', 'notar', 'objetos',
        'personales', 'responsabilidad', 'deben', 'manejarse', 'cuidado', 'preguntas', 'objeto', 'específico',
        'recomendable', 'ponerse', 'contacto', 'departamento', 'servicio', 'al', 'cliente', 'asistencia',
        'adicional', 'comprometidos', 'asegurar', 'viaje', 'cómodo', 'seguro', 'todos', 'pasajeros'
      ]
    },
    {
      id: 11,
      collapseTarget: "Eleven",
      title: "faq:title-eleven",
      content: "section11",
      tags: [
        'option', 'add', 'checked', 'baggage', 'reservation', 'even', 'subscribed', 'membership', 'applicable',
        'costs', 'carryon', 'hand', 'luggage', 'add', 'additional', 'carryon', 'maximum', 'weight', 'cost',
        'additional', 'carryon', 'usd', '50', 'per', 'flight', 'leg', 'usd', '40', 'purchased', 'advance',
        'checked', 'luggage', 'prefer', 'carry', 'weight', 'add', 'additional', 'checked', 'baggage', 'cost',
        'first', 'checked', 'baggage', 'weight', 'limit', 'usd', '100', 'airport', 'usd', '75', 'purchased',
        'advance', 'flight', 'leg', 'checked', 'baggage', 'exceeds', 'usd', '200', 'fee', 'charged', 'piece',
        'excess', 'important', 'take', 'additional', 'costs', 'account', 'planning', 'trip', 'selecting',
        'luggage', 'options', 'best', 'suit', 'needs', 'possibility', 'adding', 'luggage', 'provides',
        'flexibility', 'allows', 'customize', 'travel', 'experience', 'order', 'fulfil', 'specific', 'requirements',
        'opción', 'agregar', 'equipaje', 'verificación', 'incluso', 'suscrito', 'membresía', 'aplicables', 'costos',
        'equipaje', 'mano', 'añadir', 'adicional', 'equipaje', 'mano', 'máximo', 'peso', 'costo', 'adicional',
        'equipaje', 'mano', 'usd', '50', 'por', 'pierna', 'vuelo', 'usd', '40', 'comprado', 'anticipación','valija', 'bolso',
        'equipaje', 'verificación', 'preferir', 'llevar', 'peso', 'añadir', 'adicional', 'equipaje', 'verificación',
        'costo', 'primer', 'equipaje', 'verificación', 'peso', 'límite', 'usd', '100', 'aeropuerto', 'usd', '75',
        'comprado', 'anticipación', 'pierna', 'vuelo', 'equipaje', 'verificación', 'excede', 'usd', '200', 'cargo',
        'cobrará', 'pieza', 'exceso', 'importante', 'tener', 'cuenta', 'costos', 'adicionales', 'planificación',
        'viaje', 'selección', 'opciones', 'equipaje', 'mejor', 'se', 'adapten', 'necesidades', 'posibilidad',
        'agregar', 'equipaje', 'proporciona', 'flexibilidad', 'permite', 'personalizar', 'experiencia', 'viaje',
        'fin', 'cumplir', 'requisitos', 'específicos'
      ]

    },
    {
      id: 12,
      collapseTarget: "Twelve",
      title: "faq:title-twelve",
      content: "section12",
      tags: [
        'reason', 'forgot', 'object', 'plane', 'inform', 'steps', 'follow', 'facilitate', 'recovery', 'belongings',
        'immediate', 'communication', 'realize', 'forgotten', 'something', 'plane', 'contact', 'holiday', 'air',
        'staff', 'airport', 'leaving', 'terminal', 'forgotten', 'object', 'record', 'team', 'record', 'document',
        'forgotten', 'items', 'record', 'include', 'details', 'object', 'description', 'flight', 'number', 'date',
        'time', 'found', 'retention', 'period', 'store', 'forgotten', 'items', 'whether', 'personal', 'items',
        'luggage', 'period', 'months', 'date', 'found', 'claim', 'recovery', 'recover', 'belongings', 'contact',
        'lost', 'found', 'service', 'soon', 'possible', 'provide', 'assistance', 'coordinate', 'recovery', 'lost',
        'items', 'retention', 'conditions', 'important', 'keep', 'mind', 'objects', 'especially', 'perishable',
        'personal', 'use', 'medicines', 'food', 'specific', 'retention', 'conditions', 'vary', 'country', 'local',
        'regulations', 'destruction', 'unclaimed', 'objects', 'month', 'retention', 'period', 'passed', 'one',
        'claimed', 'forgotten', 'items', 'submitted', 'destruction', 'perishable', 'personal', 'use', 'items',
        'discarded', 'immediately', 'urge', 'contact', 'team', 'soon', 'possible', 'increase', 'chances', 'recovering',
        'belongings', 'goal', 'facilitate', 'process', 'provide', 'best', 'possible', 'assistance', 'recovering',
        'forgotten', 'items', 'razón', 'olvidó', 'objeto', 'avión', 'informar', 'pasos', 'seguir', 'facilitar',
        'recuperación', 'pertinencias', 'comunicación', 'inmediata', 'darse', 'cuenta', 'olvidó', 'algo', 'avión',
        'contactar', 'equipo', 'holiday', 'air', 'aeropuerto', 'dejando', 'terminal', 'objeto', 'olvidado',
        'registro', 'equipo', 'registro', 'documento', 'objetos', 'olvidados', 'registro', 'incluir', 'detalles',
        'descripción', 'objeto', 'número', 'vuelo', 'fecha', 'hora', 'encontrado', 'período', 'retención', 'almacenar',
        'objetos', 'olvidados', 'ya', 'sean', 'objetos', 'personales', 'equipaje', 'período', 'meses', 'fecha', 'encontrado',
        'reclamación', 'recuperación', 'recuperar', 'pertenencias', 'contactar', 'servicio', 'perdido', 'encontrado',
        'pronto', 'posible', 'proporcionar', 'asistencia', 'coordinar', 'recuperación', 'objetos', 'perdidos', 'condiciones',
        'retención', 'importante', 'tener', 'cuenta', 'objetos', 'especialmente', 'perecederos', 'uso', 'personal',
        'como', 'medicinas', 'alimentos', 'condiciones', 'retención', 'específicas', 'varían', 'país', 'reglamentaciones',
        'locales', 'destrucción', 'objetos', 'no', 'reclamados', 'mes', 'período', 'retención', 'transcurrido', 'nadie',
        'reclamó', 'objetos', 'olvidados', 'serán', 'sometidos', 'destrucción', 'objetos', 'perecederos', 'uso',
        'descartados', 'inmediatamente', 'instamos', 'contactar', 'equipo', 'pronto', 'posible', 'aumentar', 'posibilidades',
        'recuperar', 'pertenencias', 'objetivo', 'facilitar', 'proceso', 'proporcionar', 'mejor', 'posible', 'asistencia',
        'recuperación', 'objetos', 'olvidados','valija', 'bolso',
      ]
    },
    {
      id: 13,
      collapseTarget: "Thirteen",
      title: "faq:title-thirteen",
      content: "section13",
      tags: [
        'possible', 'travel', 'pregnancy', 'important', 'take', 'account', 'specific', 'recommendations',
        'ensure', 'safety', 'wellbeing', 'mother', 'future', 'baby', 'general', 'guidelines', 'travel', '36',
        'weeks', 'pregnancy', 'without', 'complications', 'recommended', 'pregnant', 'women', 'travel', '36',
        'weeks', 'pregnancy', 'presented', 'complications', 'essential', 'contact', 'healthcare', 'provider',
        'planning', 'travel', 'pregnancy', 'health', 'professional', 'able', 'evaluate', 'specific', 'situation',
        'pregnant', 'woman', 'provide', 'personalized', 'guidance', 'additionally', 'traveling', 'pregnancy',
        'advised', 'take', 'precautions', 'flight', 'take', 'steps', 'ensure', 'comfort', 'safety', 'flight',
        'getting', 'moving', 'regularly', 'prevent', 'swelling', 'wearing', 'comfortable', 'clothing', 'staying',
        'hydrated', 'bring', 'medical', 'history', 'documentation', 'carry', 'medical', 'history', 'relevant',
        'documentation', 'case', 'need', 'medical', 'attention', 'trip', 'check', 'destination', 'restrictions',
        'countries', 'specific', 'regulations', 'check', 'destination', 'restrictions', 'requirements', 'pregnancy',
        'remember', 'pregnancy', 'unique', 'recommendations', 'may', 'vary', 'open', 'communication', 'healthcare',
        'professional', 'airline', 'essential', 'ensure', 'safe', 'comfortable', 'travel', 'pregnancy',
        'posible', 'viajar', 'embarazo', 'importante', 'tener', 'cuenta', 'recomendaciones', 'específicas',
        'asegurar', 'seguridad', 'bienestar', 'madre', 'futuro', 'bebé', 'pautas', 'generales', 'viaje', '36',
        'semanas', 'embarazo', 'complicaciones', 'recomendado', 'mujeres', 'embarazadas', 'viajen', '36',
        'semanas', 'embarazo', 'complicaciones', 'esencial', 'contactar', 'proveedor', 'atención', 'médica',
        'planificar', 'viaje', 'embarazo', 'profesional', 'salud', 'capaz', 'evaluar', 'situación', 'específica',
        'cada', 'mujer', 'embarazada', 'proporcionar', 'orientación', 'personalizada', 'además', 'viajar', 'embarazo',
        'aconsejado', 'tomar', 'precauciones', 'vuelo', 'tomar', 'medidas', 'asegurar', 'comodidad', 'seguridad',
        'vuelo', 'levantarse', 'moverse', 'regularmente', 'prevenir', 'hinchazón', 'vestir', 'ropa', 'cómoda',
        'mantenerse', 'bien', 'hidratado', 'llevar', 'historial', 'médico', 'documentación', 'lleva', 'historial',
        'médico', 'documentación', 'relevante', 'caso', 'necesitar', 'atención', 'médica', 'viaje', 'verificar',
        'restricciones', 'destino', 'países', 'regulaciones', 'específicas', 'verificar', 'restricciones',
        'requisitos', 'embarazo', 'recordar', 'cada', 'embarazo', 'único', 'recomendaciones', 'pueden', 'variar',
        'comunicación', 'abierta', 'profesional', 'salud', 'aerolínea', 'esencial', 'asegurar', 'viaje', 'seguro',
        'cómodo', 'embarazo'
      ]

    },
    {
      id: 14,
      collapseTarget: "Fourteen",
      title: "faq:title-fourteen",
      content: "section14",
      tags: [
        'oferta', 'transporte', 'mascotas', 'servicio', 'viaje', 'perro', 'gato', 'vuelos', 'operados', 'exclusivamente',
        'holiday', 'air', 'detalles', 'opciones', 'requisitos', 'cabina', 'mascota', 'debe', 'viajar', 'bolsa', 'transportadora',
        'jaula', 'vuelo', 'peso', 'máximo', '7', 'kg', '15', 'lb', 'total', 'mascota', 'bolsa', 'jaula', 'medidas', 'máximas',
        'bolsa', 'jaula', '36', 'cm', 'largo', '33', 'cm', 'ancho', '19', 'cm', 'alto', 'estructura', 'rígida', '36', 'cm', 'largo',
        '33', 'cm', 'ancho', '23', 'cm', 'alto', 'bolsa', 'flexible', 'debe', 'tener', 'boleto', 'mascota', 'viajar', 'cabina',
        'clase', 'económica', 'bodega', 'mascota', 'puede', 'viajar', 'bodega', 'si', 'su', 'tamaño', 'y/o', 'peso', 'exceden',
        'condiciones', 'permitidas', 'transporte', 'cabina', 'peso', 'máximo', 'total', 'suma', 'mascota', 'jaula', '45', 'kg',
        '99', 'lb', '32', 'kg', '70', 'lb', 'viaja', 'argentina', 'dimensiones', 'máximas', 'jaula', '300', 'cm', 'lineales',
        'ancho', 'alto', 'largo', 'máximo', '115', 'cm', 'alto', 'distancia', 'entre', 'cabeza', 'mascota', 'techo', 'debe',
        'ser', 'mínima', '5', 'cm', 'mascota', 'no', 'debe', 'ser', 'parte', 'lista', 'razas', 'peligrosas', 'braquiocefálicas',
        'condiciones', 'generales', 'mascota', 'no', 'puede', 'viajar', 'sedada', 'debe', 'tener', 'al', 'menos', '16', 'semanas',
        'saludable', 'y', 'comportamiento', 'dócil', 'recomendado', 'revisar', 'razas', 'no', 'aceptadas', 'bodega', 'sección',
        'transporte', 'requisitos', 'solicitar', 'servicio', 'puede', 'solicitar', 'oficinas', 'venta', 'llamando', 'centro',
        'contacto', '17866730640', 'correo', 'electrónico', 'reservationholidayairnet', 'momento', 'reserva', '48', 'horas',
        'antes', 'vuelo', 'aplica', 'restricción', 'mascotas', 'viajando', 'cabina', 'reservas', 'deben', 'realizarse',
        'confirmarse', 'mínimo', '48', 'horas', 'antes', 'partida', 'servicio', 'sujeto', 'disponibilidad', 'espacio', 'avión',
        'consideraciones', 'especiales', 'importante', 'tener', 'cuenta', 'restricciones', 'ingreso', 'salud', 'mascotas', 'países',
        'recomendado', 'contactar', 'autoridad', 'salud', 'consulado', 'país', 'destino', 'obtener', 'información', 'actualizada',
        'restricciones', 'específicas', 'estados', 'unidos', 'julio', '14', '2021', 'cdc', 'restringe', 'ingreso', 'perros',
        'países', 'alto', 'riesgo', 'transmisión', 'rabia', 'restricciones', 'aplican', 'perros', 'cabina', 'perros', 'asistencia',
        'perros', 'perros', 'bodega', 'independientemente', 'raza', 'excepciones', 'perros', 'países', 'alto', 'riesgo', 'rabia',
        'cumplen', 'requisitos', 'importante', 'revisar', 'cuidadosamente', 'offer', 'pet', 'transportation', 'service', 'travel',
        'dog', 'cat', 'flights', 'operated', 'exclusively',
        'holiday', 'air', 'detail', 'options', 'requirements', 'cabin', 'pet', 'must', 'travel', 'carrying', 'bag',
        'kennel', 'flight', 'maximum', 'weight', '7', 'kg', '15', 'lb', 'total', 'pet', 'bag', 'kennel', 'maximum',
        'measurements', 'bag', 'kennel', '36', 'cm', 'long', '33', 'cm', 'wide', '19', 'cm', 'high', 'rigid', 'structure',
        '36', 'cm', 'long', '33', 'cm', 'wide', '23', 'cm', 'high', 'flexible', 'bag', 'must', 'ticket', 'pet', 'travel',
        'cabin', 'economy', 'class', 'hold', 'pet', 'can', 'travel', 'hold', 'size', 'andor', 'weight', 'exceed',
        'permitted', 'conditions', 'cabin', 'transportation', 'maximum', 'weight', 'total', 'sum', 'pet', 'kennel',
        '45', 'kg', '99', 'lb', '32', 'kg', '70', 'lb', 'travel', 'argentina', 'maximum', 'dimensions', 'kennel', '300',
        'linear', 'cm', 'width', 'height', 'length', 'maximum', '115', 'cm', 'height', 'distance', 'pet', 'head', 'ceiling',
        'minimum', '5', 'cm', 'pet', 'part', 'list', 'dangerous', 'brachiocephalic', 'breeds', 'general', 'conditions',
        'pet', 'cannot', 'travel', 'sedated', 'must', 'least', '16', 'weeks', 'old', 'must', 'healthy', 'docile', 'behaviour',
        'recommended', 'review', 'breeds', 'cannot', 'accepted', 'hold', 'pet', 'transport', 'section', 'requirements',
        'request', 'service', 'request', 'service', 'sales', 'offices', 'calling', 'contact', 'center', '17866730640',
        'email', 'reservationholidayairnet', 'time', 'booking', '48', 'hours', 'flight', 'departure', 'restriction',
        'applies', 'pets', 'travelling', 'cabin', 'bookings', 'must', 'made', 'confirmed', 'least', '48', 'hours',
        'departure', 'service', 'subject', 'availability', 'space', 'plane', 'special', 'considerations', 'important',
        'take', 'account', 'pets', 'health', 'entry', 'restrictions', 'countries', 'recommended', 'contact', 'health',
        'authority', 'consulate', 'destination', 'country', 'obtain', 'updated', 'information', 'specific', 'restrictions',
        'united', 'states', 'july', '14', '2021', 'cdc', 'restricts', 'entry', 'dogs', 'countries', 'high', 'risk',
        'rabies', 'transmission', 'restrictions', 'apply', 'dogs', 'cabin', 'assistance', 'dogs', 'dogs', 'hold',
        'regardless', 'breed', 'exceptions', 'dogs', 'coming', 'high', 'risk', 'rabies', 'countries', 'meet', 'requirements',
        'important', 'carefully', 'review', 'requirements', 'conditions', 'planning', 'trip', 'pet', 'assist', 'provide',
        'safe', 'comfortable', 'travel', 'experience', 'furry', 'companion', 'link', 'interest',
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
