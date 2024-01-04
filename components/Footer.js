import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      <a href="https://www.mls.uzh.ch/en/research/bachmann/research.html"  style={{marginLeft: "0px"}}>
      <img
          src="uni_logo.png"
          alt="UZH"
          style={{ maxWidth: '40%', height: 'auto'  }}
          
        />
        </a>
        <a href="https://ch.linkedin.com/in/quillan-favey" >
      <img
          src="linkedin.png"
          alt="UZH"
          style={{ maxWidth: '50%', height: 'auto'  }}
          
        />
        </a>
        <a href="https://github.com/daggermaster3000/CerebroFlow" >
      <img
          src="github-mark.png"
          alt="github"
          style={{ maxWidth: '100%', height: 'auto'  }}
          
        />
        </a>
      </footer>
      
    </>
  )
}
