import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ProgressBar from '@components/ScrollProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Index = () => {
  const [isNightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const h2Elements = document.querySelectorAll('h2');

    if (h2Elements.length > 0) {
      const tocList = document.createElement('ul');
      tocList.className = 'toc-list';

      h2Elements.forEach((h2, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#section${index + 1}`;
        link.textContent = h2.textContent;

        // Smooth scroll to the corresponding section
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const sectionId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(sectionId);

          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        });

        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });

      // Append the table of contents to its container
      const tocContainer = document.getElementById('tableOfContents');
      tocContainer.appendChild(tocList);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className={`container ${isNightMode ? 'night-mode' : ''}`}>
      <ProgressBar />
      <div className='containerin'>
        <Head>
          <title>Digital Poster Bachmann Lab 🐟</title>
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <Header title="Investigating body axis straightening in zebrafish 🐟" />

        <main>
          <div id="tableOfContents" className="toc-container"></div>
          <br></br><br></br>
          <h2 id="section1">The Central Canal</h2>

          <img
            src="output.gif"
            alt="zebrafish cc"
            style={{
              maxWidth: '95%',
              height: 'auto',
              borderRadius: '10px', // Add rounded edges
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box-shadow for a modern frame effect
            }}
          />
          <br></br><br></br>
          <h2 id="section2">CSF Flow in the Central Canal</h2>
          <p className="description">
            CSF in the central canal has a bilateral flow profile. It flows towards the tail ventrally, and towards the head dorsally.
          </p>

          <img
            src="flow_example.gif"
            alt="Flow Example GIF"
            style={{ maxWidth: '70%', height: 'auto' }}
          />
          <br></br><br></br>
          <h2 id="section3">What is a kymograph?</h2>
          <p className="description">
            For observing how CSF flows in the central canal, we want
            to track the injected particles in a 2D plane over a certain amount of time.
            To acheive this we acquire 30s time-lapses of 700x700px. We could use classical particle tracking algorithms
            to track individual beads and infer their velocity, but given the amount of noise in our images, these methods have
            proven to be poorly efficient. Instead, we use <b>kymographs</b>. </p><br></br>

          <img
            src="kymo_princ.png"
            alt="Kymograph principle"
            style={{ maxWidth: '80%', height: 'auto' }}
          /><br></br><br></br>
          <p className="description">
            To generate a kymograph, the time axis of our time-lapse is
            exchanged with the dorsal-ventral axis (or the x-axis in image processing convetions). This gives us an array of kymographs,
            that represents the trajectory of a particle in the rostro-caudal plane over time for every dorso-ventral position.
            For each of these kymographs we perform blob detection and from each blob's orientation angle, we can extract the particle's velocity.
            Although we only detect velocity along one axis, and one same bead may be detected multiple times, this method still gives us valuable insight
            on CSF flow dynamics.
          </p>
        </main>

        <Footer />
        {/* <div className="toggle-container">
        <span role="img" aria-label="moon" className="sun-icon">☀️ </span>
          <label className="switch">
            <input type="checkbox" onChange={toggleNightMode} />
            <span className="slider round"></span>
          </label>
          <span className={`toggle-label ${isNightMode ? 'night-mode-label' : ''}`}><span role="img" aria-label="moon" className="moon-icon">
          🌑
            </span></span>
        </div>*/}

      </div>
    </div>
  );
};

export default Index;
