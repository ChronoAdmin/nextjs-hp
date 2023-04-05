import nodemailer from "nodemailer";

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const toHostMailData = {
    from: req.body.email,
    to: process.env.GMAIL_USER,
    subject: `${req.body.name}様(${req.body.phone})`,
    text: `${req.body.message} Send From ${req.body.email}`,
    html: `
    <p>【名前】</p>
    <p>${req.body.name}</p>
    <span>--------------------------------</span>
    <p>【電話番号】</p>
    <p>${req.body.phone}</p>
    <span>--------------------------------</span>
    <p>【email】</p>
    <p>${req.body.email}</p>
    <span>--------------------------------</span>
    <p>【内容】</p>
    <p>${req.body.message}</p>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) {
      console.error(`エラー内容（${err}）`);
      res.status(500).send(`Error: ${err}`);
    } else {
      console.log(info);
      res.status(200).send("Success!");
    }
  });
}
