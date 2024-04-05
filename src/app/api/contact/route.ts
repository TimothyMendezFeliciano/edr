import {NextRequest, NextResponse} from "next/server";
import * as nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    const res = await request.json()
    const {body} = request

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: process.env.NEXT_GMAIL_APP_MAIL,
            pass: process.env.NEXT_GMAIL_APP_PSWD
        }
    })

    try {
        await transporter.sendMail({
            from: process.env.NEXT_GMAIL_APP_MAIL,
            to: [res.email, 'connect@edrpr.com'],
            subject: res.subject,
            text: res.message,
            html: `
                <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            <style>
                body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
    .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
        }
        h1 {
            color: #333;
        }
        p {
            margin: 10px 0;
        }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>Message from ${res.firstName} ${res.lastName}</h1>
        <p><strong>Phone Number:</strong> ${res.phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${res.message}</p>
        </div>
        </body>
        </html>
            `,
            replyTo: res.email
        })

        return NextResponse.json({status: 200})
    } catch (error) {
        return NextResponse.json({status: 500})
    }
}