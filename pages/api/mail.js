


import sgMail from '@sendgrid/mail';


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
  const body = JSON.parse(req.body);
  try {
    const msg = {
      to: body.email, // Ajusta la dirección de correo del destinatario aquí
      from: 'customerservice@holidayair.net', // Ajusta la dirección de correo del remitente aquí
      subject: body.subject,
      text: body.message,
      html: `<strong>Contenido del correo ${body.message} en formato HTML</strong>`,
    };

    if (!msg.to) {
      throw new Error('El campo "to" en el objeto msg es obligatorio.');
    }

    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

// export async function emailNewsletterHandler(req, res) {
//   const { method } = req;

//   if (method !== 'POST') {
//     return res.status(405).json({ success: false, message: 'Method Not Allowed' });
//   }
//   const body = JSON.parse(req.body);
//   try {
//     const msg = {
//       to: body.email, // Ajusta la dirección de correo del destinatario aquí
//       from: 'customerservice@holidayair.net', // Ajusta la dirección de correo del remitente aquí
//       subject: 'Asunto del correo',
//       text: 'Contenido del correo en formato de texto',
//       html: '<strong>Contenido del correo en formato HTML</strong>',
//     };

//     if (!msg.to) {
//       throw new Error('El campo "to" en el objeto msg es obligatorio.');
//     }

//     await sgMail.send(msg);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// }




