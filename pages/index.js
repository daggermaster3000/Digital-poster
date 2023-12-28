import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const h1Elements = document.querySelectorAll('h2');

    if (h1Elements.length > 0) {
      const tocList = document.createElement('ul');
      tocList.className = 'toc-list';

      h1Elements.forEach((h1, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#section${index + 1}`;
        link.textContent = h1.textContent;

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
    <div className="container">
      <Head>
        <title>Digital Poster Bachmann Lab 🐟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Investigating body axis straightening in zebrafish 🐟" />

      <main>

        <div id="tableOfContents" className="toc-container"></div>
        <br></br>
        <h2 id="section1">The Central Canal</h2>
        <h2 id="section2">CSF Flow in the Central Canal</h2>
        <p className="description">
          CSF in the central canal has a bilateral flow profile. It flows towards the tail ventrally, and towards the head dorsally.
        </p>

        <img
          src="flow_example.gif"
          alt="GIF"
          style={{ maxWidth: '70%', height: 'auto' }}
        />

        <h2 id="section3">What is a kymograph?</h2>
        <p className="description">This is the first paragraph. Add your content here.</p>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
