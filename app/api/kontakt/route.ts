import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function getCredentials() {
  if (process.env.MAIL && process.env.PASS) {
    return { MAIL: process.env.MAIL, PASS: process.env.PASS }
  }
  return false
}

function htmlencode(rawstr: string) {
  return rawstr.replace(/[\u00A0-\u9999<>()\[\]{}\\+-;*\&%"'$]/g, i => '&#' + i.charCodeAt(0) + ';')
}

export async function POST(request: Request) {
  const secrets = getCredentials()

  // verify credentials are set
  if (!secrets) {
    console.log(' \u001b[31m✗\u001b[0m No mail credentials loaded for API')
    return NextResponse.json({ 'status': 'error', 'error': 'internal sever error' }, { status: 500 })
  }

  // create mail transport
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: secrets.MAIL,
      pass: secrets.PASS
    }
  })

  const json = await request.json()

  // verify requesst fields
  if (!json) {
    return NextResponse.json({ 'status': 'error', 'error': 'missing request body' }, { status: 400 })
  }

  const mail = json.mail

  if (!mail) {
    return NextResponse.json({ 'status': 'error', 'error': 'missing email address' }, { status: 400 })
  }

  if (!mailRegex.test(mail)) {
    return NextResponse.json({ 'status': 'error', 'error': 'malformed email address' }, { status: 400 })
  }

  const mesg = json.mesg

  if (!mesg) {
    return NextResponse.json({ 'status': 'error', 'error': 'missing message' }, { status: 400 })
  }

  try {

    // send mails
    const info = await Promise.all([
      transporter.sendMail({
        from: "kontakt@sevenheaven.band",
        to: "kontakt@sevenheaven.band",
        subject: "Neue Kontaktanfrage",
        text: "Neue Nachricht von " + mail + " :\n\n" + mesg + "\n"
      }),
      transporter.sendMail({
        from: "Seven Heaven <kontakt@sevenheaven.band>",
        to: mail,
        subject: "Deine Kontaktanfrage",
        html: "Hi!<br/>Vielen Dank für deine Kontaktanfrage:<br/>" + htmlencode(mesg) + "<br/><br/>Wir melden uns so schnell wie möglich!<br/><br/>Mit freundlichen Grüßen<br/>Seven Heaven"
      })
    ])

    // verify mails sent
    if (!info[0].response.startsWith('2') || info[0].rejected.length > 0 || !info[1].response.startsWith('2') || info[1].rejected.length > 0) {
      return NextResponse.json({ 'status': 'error', 'error': 'internal sever error' }, { status: 500 })
    }

    return Response.json({ status: 'success' })

  } catch(e) {
    console.log(e)
    return NextResponse.json({ 'status': 'error', 'error': 'internal sever error' }, { status: 500 })
  }

}