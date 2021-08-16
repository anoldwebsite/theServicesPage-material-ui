const nodemailer = require("nodemailer");
const functions = require("firebase-functions");
const config = functions.config();
const cors = require("cors")({origin: true});
const admin = require("firebase-admin");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

const mailOptions = {
  from: "Shadsoft",
  to: "mejlbox@yahoo.com",
  subject: "Email from customer using nodemail and firebase",
  text: "Dilshad Rana wants you to develop an app for him.",
};

exports.sendMyMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
