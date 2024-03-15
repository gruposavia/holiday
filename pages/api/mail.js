import sgMail from "@sendgrid/mail";
import authenticate from "@/middleware/auth";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function handleContactEmail(body, res) {
  try {
    if (!body.email || !body.subject || !body.message) {
      throw new Error("Missing required fields for contact email.");
    }
    let emailFromUser = {
      from: {
        email: process.env.SENDGRID_EMAIL,
        name: "Holiday Air",
      },
      personalizations: [
        {
          to: [
            {
              email: body.email,
            },
          ],
          dynamic_template_data: {
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
          },
        },
      ],
      template_id: process.env.SENDGRID_TEMPLATE_CONTACT_USER,
    };
    let emailFromAdmin = {
      from: {
        email: process.env.SENDGRID_EMAIL,
      },
      personalizations: [
        {
          to: [
            {
              email: process.env.SENDGRID_EMAIL,
            },
          ],
          dynamic_template_data: {
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
          },
        },
      ],
      template_id: process.env.SENDGRID_TEMPLATE_CONTACT_ADMIN,
    };

    await Promise.all([
      sgMail.send(emailFromUser),
      sgMail.send(emailFromAdmin),
    ]);

    res
      .status(200)
      .json({ success: true, message: "Contact email sent successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error sending the contact email. ${error.message}`,
    });
  }
}

async function handleNewsletterEmail(body, res) {
  try {
    if (!body.email) {
      throw new Error("Missing required fields for contact email.");
    }
    let emailFromUser = {
      from: {
        email: process.env.SENDGRID_EMAIL,
        name: "Holiday Air",
      },
      personalizations: [
        {
          to: [
            {
              email: body.email,
            },
          ],
          dynamic_template_data: {
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
          },
        },
      ],
      template_id: process.env.SENDGRID_TEMPLATE_NEWSLETTER_USER,
    };
    let emailFromAdmin = {
      from: {
        email: process.env.SENDGRID_EMAIL,
      },
      personalizations: [
        {
          to: [
            {
              email: process.env.SENDGRID_EMAIL,
            },
          ],
          dynamic_template_data: {
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
          },
        },
      ],
      template_id: process.env.SENDGRID_TEMPLATE_NEWSLETTER_ADMIN,
    };

    await Promise.all([
      sgMail.send(emailFromUser),
      sgMail.send(emailFromAdmin),
    ]);

    res
      .status(200)
      .json({ success: true, message: "Newsletter email sent successfully." });
  } catch (error) {
    res.status(error.status).json({
      success: false,
      message: `Error sending the newsletter email. ${error.message}`,
    });
  }
}

export default async function handleEmail(req, res) {
  authenticate(req, res, async () => {
    const body = req.body;

    if (!body.type) {
      return res.status(400).json({
        success: false,
        message: 'Missing "type" field in the request body.',
      });
    }

    if (!body.email) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields for newsletter email.",
      });
    }

    try {
      if (body.type === "contact") {
        await handleContactEmail(body, res);
      } else if (body.type === "newsletter") {
        await handleNewsletterEmail(body, res);
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid request type." });
      }
    } catch (error) {
      res.status(error.status).json({
        success: false,
        message: `Internal Server Error: ${error.message}`,
      });
    }
  });
}
