const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Create a transporter using your SMTP settings
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail' or use SMTP settings
  auth: {
    user: "roy2000pushkar@gmail.com",
    pass: "Roy2@pushkar",
  },
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/submit-form", (req, res) => {
  const { name, email, number, college } = req.body;

  const mailOptions = {
    from: "roy2000pushkar@gmail.com",
    to: "roy2006bhaskar@gmail.com", // Replace with the recipient's email address
    subject: "New Join Request",
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nCollege: ${college}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Success");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
