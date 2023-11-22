import { contactFormEmail } from "email-templates/contact-form-email";

export default async function handler(req, res) {
  res.headers = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
  };
  const { name, email, phone, message } = req.body;
  try {
    contactFormEmail(name, email, phone, message);
    res.status(200).json({
      message: "Email sent successfully.",
    });
  } catch (e) {
    res.status(400).json({
      error_code: "get_funfacts",
      message: e.message,
    });
  }
}
