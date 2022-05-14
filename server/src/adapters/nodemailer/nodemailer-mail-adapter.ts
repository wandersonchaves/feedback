import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '060218042f2073',
    pass: '2a7b116256cd07',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Chav3x <oi@feed.com>',
      to: 'Wanderson Chaves <wanderson@teste.com>',
      subject,
      html: body,
    })
  }
}
