import * as nodemailer from 'nodemailer';

interface EmailSenderProps {
  to: string;
  subject: string;
  message: string;
}

export class EmailSender {
  private props: EmailSenderProps;
  private from: string = process.env.MAIL_OPTION_FROM;
  private transporter: nodemailer.Transporter;

  constructor (props: EmailSenderProps) {
    this.props = props;
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_TRANSPORT_HOST,
      port: +process.env.MAIL_TRANSPORT_PORT,
      auth: {
        user: process.env.MAIL_TRANSPORT_USER,
        pass: process.env.MAIL_TRANSPORT_PASS
      }
    });
  }

  async send () {
    this.transporter.sendMail({
      from: this.from,
      to: this.props.to,
      subject: this.props.subject,
      text: this.props.message
    });
  }
}
