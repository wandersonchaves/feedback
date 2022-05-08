import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "060218042f2073",
    pass: "2a7b116256cd07",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: { type, comment, screenshot },
  });

  transport.sendMail({
    from: "Equipe Chav3x <oi@feed.com>",
    to: "Wanderson Chaves <wanderson@teste.com>",
    subject: "Test Feedback",
    html: [
      `<div style='font-family: sans-serif; font-size: 16px; color: #111;'>`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentario: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});
