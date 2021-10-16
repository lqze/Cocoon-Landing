/* eslint-disable global-require */
export default async function (req, res) {
  require("dotenv").config();
  const { EMAIL_PW, EMAIL_USER } = process.env;
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.ethereal.email",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PW,
    },
    secure: process.env.NODE_ENV === "production",
  });
  const mailData = {
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: `Lead from Cocoon Medical Australia contact form`,
    text: `
      ${Object.keys(req.body)
        .map((key) => `${key}: ${req.body[key]}`)
        .join("\n")}
    `,
    html: `
<h1>New lead</h1>
<table>
  <tr>
    <td>First Name</td>
    <td>${req.body.first_name}</td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td>${req.body.last_name}</td>
  </tr>
  <tr>
    <td>Company</td>
    <td>${req.body.company}</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>${req.body.email}</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>${req.body.phone}</td>
  </tr>
  <tr>
    <td>City</td>
    <td>${req.body.city}</td>
  </tr>
  <tr>
    <td>State</td>
    <td>${req.body.state}</td>
  </tr>
  <tr>
    <td>Devices interested in Cooltech Define</td>
    <td>${req.body["Cooltech Define"] ? "YES" : "NO"}</td>
  </tr>
  <tr>
    <td>Interested in Primelase?</td>
    <td>${req.body.Primelase ? "YES" : "NO"}</td>
  </tr>
  <tr>
    <td>Devices interested in Elysion-Pro?</td>
    <td>${req.body["Elysion-Pro"] ? "YES" : "NO"}</td>
  </tr>
  <tr>
    <td>Enquiry Type</td>
    <td>${req.body["enquiry-type"]}</td>
  </tr>
</table>
`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      res.status(200).send("Success");
    }
  });
}
