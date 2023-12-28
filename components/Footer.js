import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <img
          src="uni_logo.png"
          alt="UZH"
          style={{ maxWidth: '30%', height: 'auto' , marginTop: '50px'}}
        />
      </footer>
    </>
  )
}
