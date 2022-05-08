import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "884ab0cc5c509c",
        pass: "fc3f45dab58265"
    }
});


export class NodeMailerMailAapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Rakel Moreira <rakelmoreiramendonca@gmail.com>',
        subject,
        html: body,
    });

    };
}