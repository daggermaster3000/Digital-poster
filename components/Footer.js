import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <a href="https://www.mls.uzh.ch/en/research/bachmann/research.html" >
      <img
          src="uni_logo.png"
          alt="UZH"
          style={{ maxWidth: '40%', height: 'auto' , marginTop: '50px' }}
          
        />
        </a>
        <a href="https://ch.linkedin.com/in/quillan-favey" >
      <img
          src="linkedin.png"
          alt="UZH"
          style={{ maxWidth: '50%', height: 'auto' , marginTop: '50px' }}
          
        />
        </a>
      </footer>
    </>
  )
}
