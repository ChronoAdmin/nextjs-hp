import styles from "../../src/styles/Contact.module.css";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      })
    
      const [formResponse, setFormResponse] = useState(null)
    
      const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = async e => {
        e.preventDefault()
        try {
          const response = await axios.post(
            'https://api.staticforms.xyz/submit',
            formData,
            {
              headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.STATIC_access_key
              }
            }
          )
          setFormResponse(response.data)
        } catch (error) {
          console.error(error)
        }
      }
  return (
    <>
      <div className={styles.contact} id="Contact">
        <div className={styles.card}>
          <div className={styles.left}>
            <p>Welcome,</p>
            <p>Contact us for more information</p>
          </div>
          <div className={styles.right}>
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name">氏名 or 社名</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  id="name"
                  value={formData.name}
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="phone">
                  電話番号
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                  
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="email">
                  e-mail
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <div>
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea name="message" id="message" onChange={handleInputChange}/>
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">送信</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
