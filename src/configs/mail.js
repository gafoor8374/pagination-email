const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "nau82350834@gmail.com", // generated ethereal user
    pass: "password", // generated ethereal password
  },
});
