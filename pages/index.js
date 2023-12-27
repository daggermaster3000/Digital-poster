import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Investigating body axis straightening in zebrafish" />
        <p className="description">
          ...
        </p>
        <img
        src="/zfishtest4.png" 
        alt="GIF"
        style={{ maxWidth: '50%', height: 'auto' }}
      />
      </main>
      <div className="container">
      <h1>What is a kymograph?</h1>
      <p className="description">This is the first paragraph. Add your content here.</p>

      
    </div>

      <Footer />
    </div>
  )
}
