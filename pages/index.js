import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ProgressBar from '@components/ScrollProgressBar';
import ViewCounter from '@components/ViewCounter';
import Fade from 'react-reveal/Fade'

const Index = () => {
  const [isNightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevMode) => !prevMode);
  };

  //stuff for the wave
  useEffect(() => {
    const changingDiv = document.querySelector('.box');

    // Function to handle scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate the new width based on the scroll position
      const newWidth = 100 - scrollPosition/3;

      // Set the new width to the div
      changingDiv.style.width = `${newWidth}vw`;
    };

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount


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
 {/*     
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9CJ2T6TND1"></script>
<script>
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9CJ2T6TND1');
  `}
</script>*/}
      <ProgressBar />
      
      <div className='containerin'>
        <Head>
          <title>Digital Poster Bachmann Lab 🐟</title>
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <Header title="Investigating body axis straightening in zebrafish 🐟" />
        
        <main>
          <div id="tableOfContents" className="toc-container"></div>
          <br></br>
          <div class="wave-container">
        <div class="box"></div>
        <div class="wave"></div>
        </div>
          <h2 id="section1">The Central Canal</h2>
          <Fade left>
          <p className="description">
            The central canal runs through the spinal cord and is filled with CSF, effectively transporting nutrients throughout the spinal cord.
            It is connected to the ventricular system, and is lined with <b>ependymal radial glial cells</b> (ERGs)
            and <b>CSF contacting neurons</b> (CSF-cNs). The ERGs apical extension bears a motile cilium, which is believed to
            be responsible for the motion of CSF inside the canal. CSF-cNs also posses a cilium, believed to monitor certain parameters of the CSF, such as
            acidity, heat, bacterial metabolites and spinal curvature. The following animation represents a 1 dpf larvae, with the CC and the ventricular system highlighted in green, and CSF-cNs in purple.
          </p>
          </Fade>
          <Fade left>
          <video autoPlay loop muted playsInline controls={false} width="100%"             style={{
              maxWidth: '95%',
              height: 'auto',
              borderRadius: '10px', // Add rounded edges
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box-shadow for a modern frame effect
            }}>
  <source src="loop_zfish.mp4" type="video/mp4"></source>
  Your browser does not support the video tag.
</video>
          {/*  <img
            src="loop_zfish.mp4"
            alt="zebrafish cc"
            style={{
              maxWidth: '95%',
              height: 'auto',
              borderRadius: '10px', // Add rounded edges
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box-shadow for a modern frame effect
            }}
          />*/}
          </Fade>
          
          <br></br><br></br>
 
          <h2 id="section2">CSF Flow in the Central Canal</h2>
          <Fade left>
          <p className="description">
            CSF in the central canal has a bilateral flow profile. 
            It flows towards the tail ventrally, and towards the head dorsally. As mentioned previously, 
            this particular flow profile is believed to be generated by ERGs motile cilium. Below is a video taken in vivo of a 1 dpf wild type larvae injected with fluorescent nanobeads. 
          </p>
          </Fade>
          <Fade left>
          <img
            src="flow_example.gif"
            alt="Flow Example GIF"
            style={{ maxWidth: '70%', height: 'auto' }}
          />
          </Fade>
          <br></br><br></br>
          <hr></hr>
          <h2 id="section3">What is a kymograph?</h2>
          <Fade left>
          <p className="description">
            For quantifying how CSF flows in the central canal, we want
            to track the injected particles in a 2D plane over a certain amount of time.
            To acheive this we first need to acquire a time lapse of the central canal. Next, we could use classical particle tracking algorithms
            to track individual beads and infer their velocity. But given the high amount of noise in our images, these methods have
            proved to be poorly efficient. Instead, we use <b>kymographs</b>. </p><br></br>
            </Fade>
          <Fade left>
          <img
            src="kymo_princ.png"
            alt="Kymograph principle"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
          </Fade>
          <br></br><br></br>
          <Fade left>
          <p className="description">
            By re-arranging the pixels of our time lapse in a certain manner, we are able to visualize the trajectory a particle/bead takes in one plane
            over time. This gives us a position as a function of time graph, from which we can extract the direction and velocity of our particles.
            </p>
            </Fade>
            <Fade left>
            <p className='description'>
            To generate a kymograph, the time axis of our time lapse is
            exchanged with the dorsal-ventral axis. This gives us an array of kymographs,
            that represents the trajectory of a particle in the rostro-caudal plane over time for every dorso-ventral position.
            For each of these kymographs we perform blob detection and from each blob's orientation angle, we can extract the particle's velocity.
            Although we only detect velocity along one axis, and one same bead may be detected multiple times, this method still gives us valuable insight
            on CSF flow dynamics. This whole analysis process was implemented in python and the code can be found <a href='https://github.com/daggermaster3000/CerebroFlow'>here</a>.
          </p>
          </Fade>
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
