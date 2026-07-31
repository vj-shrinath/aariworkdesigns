'use client';
import { FormEvent, useState } from 'react';
import styles from './CompliancePage.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`AARI Work Designs support: ${data.get('subject') || 'General enquiry'}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:vjshrinath2@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <form onSubmit={submit} className={styles.section} aria-label="Contact support form">
    <h2>Send a message</h2>
    <div className={styles.grid}>
      <label className={styles.card}>Name<input name="name" required autoComplete="name" style={{display:'block',width:'100%',marginTop:'.5rem',padding:'.7rem',background:'var(--bg-primary)',color:'var(--text-primary)',border:'1px solid var(--border)',borderRadius:8}} /></label>
      <label className={styles.card}>Email<input name="email" type="email" required autoComplete="email" style={{display:'block',width:'100%',marginTop:'.5rem',padding:'.7rem',background:'var(--bg-primary)',color:'var(--text-primary)',border:'1px solid var(--border)',borderRadius:8}} /></label>
    </div>
    <label className={styles.card} style={{display:'block',marginTop:'1rem'}}>Subject<input name="subject" required style={{display:'block',width:'100%',marginTop:'.5rem',padding:'.7rem',background:'var(--bg-primary)',color:'var(--text-primary)',border:'1px solid var(--border)',borderRadius:8}} /></label>
    <label className={styles.card} style={{display:'block',marginTop:'1rem'}}>Message<textarea name="message" required rows={6} style={{display:'block',width:'100%',marginTop:'.5rem',padding:'.7rem',background:'var(--bg-primary)',color:'var(--text-primary)',border:'1px solid var(--border)',borderRadius:8,resize:'vertical'}} /></label>
    <button type="submit" style={{marginTop:'1rem',padding:'.8rem 1.4rem',border:0,borderRadius:8,background:'var(--accent-gradient)',color:'var(--bg-primary)',fontWeight:800,cursor:'pointer'}}>Open email</button>
    {sent && <p role="status" style={{marginTop:'1rem',color:'var(--accent)'}}>Your email app should open with the enquiry ready to send.</p>}
  </form>;
}
