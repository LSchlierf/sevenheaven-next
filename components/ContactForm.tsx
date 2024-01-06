"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css'

const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default function ContactForm() {

  function handleServerReply(reply: any) {
    if (!reply || reply['status'] !== 'success') {
      setForm(errorTemplate)
      return
    }
    setForm(successTemplate)
  }

  function sendMail(data: { mail: string, mesg: string }) {
    fetch('/api/kontakt', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(handleServerReply)
      .catch((_) => setForm(errorTemplate))
  }

  function submit() {
    const mailInput: any = document.getElementsByClassName(styles.contactMail)[0]
    const mesgInput: any = document.getElementsByClassName(styles.contactMsg)[0]
    const mail = mailInput.value
    const mesg = mesgInput.value
    if (mesg.length === 0) {
      alert('Bitte gib eine Nachricht ein.')
      return
    }
    if (!mailRegex.test(mail)) {
      setForm(formTemplateInvalid)
      alert('Bitte überprüfe Deine Mail-Adresse.')
      return
    }
    mailInput.value = ''
    mesgInput.value = ''
    setForm(waitingTemplate)
    sendMail({ mail: mail, mesg: mesg })
  }

  function checkMail() {
    const mailInput: any = document.getElementsByClassName(styles.contactMail)[0]
    const mail = mailInput.value
    const valid = mailRegex.test(mail)
    if (valid) {
      setForm(formTemplateValid)
    } else {
      setForm(formTemplateInvalid)
    }
  }

  function mailFinished() {
    checkMail()
  }

  function formTemplate(mailInputField: React.ReactNode) {
    return (
      <form className={styles.contactForm} onSubmit={(event) => { event.preventDefault(); submit() }}>
        <div className={styles.contactMailWrapper}>
          {mailInputField}
        </div>
        <div style={{ height: '20px' }} />
        <textarea placeholder='Deine Nachricht an uns...' className={styles.contactMsg} />
        <div style={{ height: '20px' }} />
        <div className={styles.contactSubmitWrapper}>
          <input type='button' onClick={submit} value='Senden' className={styles.contactSubmit} />
        </div>
      </form>
    )
  }

  const formTemplateDefault = formTemplate(
    <input type='email' placeholder='Deine Mail-Adresse...' className={styles.contactMail} onBlur={mailFinished} />
  )

  const formTemplateValid = formTemplate(
    <>
      <input type='email' placeholder='Deine Mail-Adresse...' className={styles.contactMail} onBlur={mailFinished} onInput={checkMail} />
      <div className={styles.contactMailIconWrapper}>
        <img src='/valid.svg' alt='' />
      </div>
    </>
  )

  const formTemplateInvalid = formTemplate(
    <>
      <input type='email' placeholder='Deine Mail-Adresse...' className={styles.contactMail} onBlur={mailFinished} onInput={checkMail} />
      <div className={styles.contactMailIconWrapper}>
        <img src='/invalid.svg' alt='' />
      </div>
    </>
  )

  function waitingCircles() {
    //creates array containing 8 divs as loading circle
    return Array.from({ length: 8 }, (_, i) => <div className={styles.loadingCircleWrapper} key={i}><div className={styles.loadingCircle} /></div>)
  }

  const waitingTemplate = (
    <div className={styles.contactForm}>
      <div className={styles.contactFeedback}>
        <div className={styles.loadingAnimation}>
          {waitingCircles()}
        </div>
      </div>
    </div>
  )

  function feedbackTemplate(text: React.ReactNode) {
    return (
      <div className={styles.contactForm}>
        <div className={styles.contactFeedback}>
          <div className={styles.feedbackText}>
            {text}
          </div>
        </div>
      </div>
    )
  }

  const successTemplate = feedbackTemplate(
    <>
      Vielen Dank für deine Nachricht!
      <br /><br />
      Wir melden uns so schnell wie möglich.
    </>
  )

  const errorTemplate = feedbackTemplate(
    <>
      Das hat leider nicht geklappt.
      <br /><br />
      Versuch es doch später nochmal, oder probiere einen unserer anderen Kanäle.
    </>
  )
  const [form, setForm] = useState(formTemplateDefault)
  return form
}