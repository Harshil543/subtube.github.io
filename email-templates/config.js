import nodemailer from "nodemailer";
console.log("*********", process.env.NEXT_PUBLIC_AWS_SES_USER);
export const transport = nodemailer.createTransport({
  // Yes. SMTP!
  // service: "SMTP",
  host: "smtp.gmail.com", // Amazon email SMTP hostname
  secure: true, // use SSL
  port: 465, // port for secure SMTP
  auth: {
    user: process.env.NEXT_PUBLIC_AWS_SES_USER, // Use from Amazon Credentials
    pass: process.env.NEXT_PUBLIC_AWS_SES_PASSWORD // Use from Amazon Credentials
  }
});
