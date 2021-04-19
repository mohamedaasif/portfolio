import { NavLink } from "react-router-dom";
import styles from "../../styles/Contact/Contact.module.scss";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from 'axios';

const Contact = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data,event) => {
    console.log(data);
    setShowSuccess(true);
    
    setTimeout(()=>{
      setShowSuccess(false);
    },1500)

    reset()
    // axios.post('/api/form',data)
    //   .then(res => {
    //     console.log("success");
    //   },reset())
    //   .catch(()=>{
    //     console.log("Message not sent");
    //   })
  }

  

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Contact Me</h3>
          <p>
            If you’d like to chat about a project please fill in the form below
            and I’ll get back within 1-2 days.
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>NAME</label>
                <input 
                type="name"
                name="username" 
                autoComplete="off" 
                {...register('username',{required: true})}   
                />
               {errors.username && errors.username.type === "required" && (
                 <p className={styles.errorMsg}>This field is required</p>
                )}
              </div>
              <div>
                <label>EMAIL</label>
                <input 
                type="email" 
                name="email"
                autoComplete="off"
                {...register('email',{required:true})} 
                />
                {errors.email && errors.email.type === "required" && (
                  <p className={styles.errorMsg}>This field is required</p>
                 )} 
              </div>
              <div>
                <label>MESSAGE</label>
                <textarea 
                type="text"
                name="message"
                {...register('message',{required:true})}  
                />
                {errors.message && errors.message.type === "required" && (
                  <p className={styles.errorMsg}>This field is required</p>
                 )} 
                <div>
                
                </div>
              </div>
              {
                showSuccess ? (<div className={styles.successMsg}>
                <p>Message has been sent successfully</p>
                </div>) : null
              }
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className={styles.socialmedia}>
            <h2>Get In Touch</h2>
            <ul>
              <li className="email">
                <i className="fas fa-envelope" style={{ color: "#B23121" }}></i>
                <NavLink to="">mohamedaasif.md@gmail.com</NavLink>
              </li>
              <li className="instagram">
                <i
                  className="fab fa-instagram"
                  style={{ color: "#C13584" }}
                ></i>
                <NavLink to="">Instagram</NavLink>
              </li>
              <li className="twitter">
                <i className="fab fa-twitter" style={{ color: "#1DA1F2" }}></i>
                <NavLink to="">Twitter</NavLink>
              </li>
              <li className="github">
                <i className="fab fa-github" style={{ color: "#6cc644" }}></i>
                <NavLink to="">GitHub</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
