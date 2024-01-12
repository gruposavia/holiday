import { send } from 'emailjs-com';

export const sendEmailContact = async (name, email, subject, message) => {
    try {
        await send(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_CONTACT_ID,
            {
                name, email, subject, message
            },
            process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY
        );
    } catch (error) { return }
};

export const subscribeNewsletter = async (email) => {
    try {
        await send(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_NEWSLETTER_ID,
            {
                email
            },
            process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY
        );
    } catch (error) { return }
};