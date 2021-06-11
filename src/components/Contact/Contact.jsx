import styles from "../../styles/Contact/Contact.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, event) => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 1500);

    reset();
  };

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
                <label>Name</label>
                <input
                  type="name"
                  name="username"
                  autoComplete="off"
                  {...register("username", { required: true })}
                />
                {errors.username && errors.username.type === "required" && (
                  <p className={styles.errorMsg}>This field is required</p>
                )}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  {...register("email", { required: true })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className={styles.errorMsg}>This field is required</p>
                )}
              </div>
              <div>
                <label>Message</label>
                <textarea
                  type="text"
                  name="message"
                  {...register("message", { required: true })}
                />
                {errors.message && errors.message.type === "required" && (
                  <p className={styles.errorMsg}>This field is required</p>
                )}
                <div></div>
              </div>
              {showSuccess ? (
                <div className={styles.successMsg}>
                  <p>Message has been sent successfully</p>
                </div>
              ) : null}
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className={styles.socialmedia}>
            <h3>Get In Touch</h3>
            <ul>
              <li className="email">
                <i className="fas fa-envelope" style={{ color: "#B23121" }}></i>
                <a href="mailto:mohamedaasif.md@gmail.com">
                  mohamedaasif.md@gmail.com
                </a>
              </li>
              <li className="instagram">
                <i
                  className="fab fa-linkedin-in"
                  style={{ color: "#0e76a8" }}
                ></i>
                <a
                  href="https://www.linkedin.com/in/mohamed-usoof-aasif/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="github">
                <i className="fab fa-github" style={{ color: "#6cc644" }}></i>
                <a href="https://github.com/mohamedaasif" target="blank">
                  GitHub
                </a>
              </li>
              <li className="twitter">
                <i className="fab fa-twitter" style={{ color: "#1DA1F2" }}></i>
                <a href="https://twitter.com/mohamedaasif_">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
