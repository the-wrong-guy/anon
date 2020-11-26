import React,{useState,useEffect,useRef} from 'react'
import {Paper,Button} from '@material-ui/core'
import styles from './ContactUs.module.css'
export default function ContactUs() {

  const [Name,setName] = useState('')
  const [Email,setEmail] = useState('')
  const [Message,setMessage] = useState('')
  const [Submitted,setSubmitted] = useState(false)
  const name = useRef()
  const message = useRef()
  const email = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(Name===""){
      name.current.style.backgroundColor = "rgb(255, 201, 188)"
      return
    }

    if(Email===""){
      email.current.style.backgroundColor = "rgb(255, 201, 188)"
      return
    }
    
    if(Message===""){
      message.current.style.backgroundColor = "rgb(255, 201, 188)"
      return
    }
    
    try {
    // Backend Part
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(true)
      
    } catch (error) {
     console.log(error) 
    }
    
  }

  useEffect(()=>{
    name.current.style.backgroundColor = "#fff"
    message.current.style.backgroundColor = "#fff"
    // email.current.style.backgroundColor = "#fff"
  },[Message,Name])

  return (
    <div className={styles.MainContainer}>
    {Submitted ? (
      <Paper className={styles.AfterSubmit}>
        <p>Thank You for reaching us!</p>
        <p>Your email has been submitted and we will be in touch with you shortly</p>
      </Paper>
    ): (
      <Paper className={styles.Paper}>
        <p>Contact Us</p>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <input ref={name} autoFocus type="text" className={styles.input} value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Please enter your name"/>
          <input ref={email} type="email" className={styles.input} value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Please enter your email" />
          <textarea ref={message} value={Message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your message here..." className={styles.textArea}></textarea>
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </Paper>
    )}
    </div>
  )
}
