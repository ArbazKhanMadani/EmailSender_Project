import { createTransport } from "nodemailer";

let mailTranspoter = createTransport({
  service: "gmail",
  auth: {
    user: "guyvagabond758@gmail.com",
    pass: "ktmwbrbkbbbtfokc",
  },
});

let mailDetail = {
  from: "guyvagabond758@gmail.com",
  to: ["arbazmadani25@gmail.com", "arbazkhan03092001@gmail.com"],
  subject: "Email by Nodejs",
  html: `<h1 style="color:red;">This email is sent by nodejs for the testing purpose.<h1>
            <img src="burger1.jpg">`,
};

mailTranspoter.sendMail(mailDetail, (error, info) => {
  if (error) console.error("Somthing went wrong...!!! " + error);
  else console.log("Email sent sussesfully " + info.response);
});
