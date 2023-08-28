#Documentation

1. you have nodejs and npm[node package manager] in your system.
   <br/><br/>

2. install "nodemailer" module in your project directory by command
   <br/> "npm install --global nodemailer"
   <br/><br/>

3. createTransport() -> use for email configuration.
   <br/><br/>

4. You have a Active internat connection in your system
   <br/><br/>

5. let mailTranspoter = createTransport({
   <br/>service: "gmail",
   <br/>auth: {
   <br/>user: Email through you want to send mail,
   <br/>pass: password of this email,
   <br/>},
   <br/>});
   <br/><br/>

6. let mailDetail = {
   <br/> from: "Email through you want to send mail",
   <br/>to: "Email(s) to which you want to send mail{ for 1 email write email in "" for <br/>multiple emails use array[] }",
   <br/>subject: "subject of email",
   <br/>html:"content of html which you have to send.",
   <br/>text:"Text content which you have to send."
   <br/>};
   <br/><br/>

7. sendMail() -> use to send email
