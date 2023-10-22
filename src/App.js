import './App.css';
import React, { useState } from 'react';
import './index.css';
import logo from './images/logo.jpg';
import headerImage from './images/IMG_1703.JPG';

{/* Alex Kefer Portfolio */}

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    let currentIndex = 0;
    
    // Set the initial position of the carousel
    carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    
    // Move the carousel to the next item
    function next() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
    
    // Move the carousel to the previous item
    function prev() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselInner.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }

    // Attach event listeners to the navigation buttons
    prevButton.addEventListener("click", prev);
    nextButton.addEventListener("click", next);

    // Prevent the carousel from overflowing and wrapping around
    // Prevent the carousel from overflowing and wrapping around
    window.addEventListener("resize", function() {
      const itemWidth = carouselItems[0].offsetWidth;
      const containerWidth = carousel.offsetWidth;
      const maxVisibleItems = Math.floor(containerWidth / itemWidth);
      const visibleItems = Math.min(maxVisibleItems, carouselItems.length);
      const maxTranslation = (carouselItems.length - visibleItems) * itemWidth;
      currentIndex = Math.min(currentIndex, carouselItems.length - visibleItems);
      carouselInner.style.width = `${carouselItems.length * itemWidth}px`;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

      // Update the carousel navigation buttons
      if (currentIndex === 0) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }

      if (currentIndex + visibleItems >= carouselItems.length) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
    });
  });
    // Trigger the resize event on page load to set the initial state of the carousel
  window.dispatchEvent(new Event("resize"));
  return (
    <div className="App">
      <header className="App-header">
        {/* navigation*/}
        <div className="heading">
          <img src={logo}/>
          <h1>Alex Kefer</h1>
          <nav>
            <button className="nav-button" onClick={() => 
            window.location.href='#about'}>About</button>
            <button className="nav-button" onClick={() => window.location.href='#resume'}>Classes</button>
            <button className="nav-button" onClick={() => window.location.href='#projects'}>Projects</button>
            <button className="nav-button" onClick={() => window.location.href='#skills'}>Technologies</button>
            <button className="nav-button" onClick={() => window.location.href='#contact'}>Contact</button>
          </nav>
        </div>
      </header>
      {/* Header jpg image */}
      <div className="header-image">
        <img src={headerImage}/>
      </div>
      {/* about */}
      <div className="about">
            <h2 id="about">About</h2>
            <p>Hi, I'm Alex Kefer, I'm a rising senior at Western Washington University looking towards graduating with a Bachelors of Science in Computer Science with a certificate of Web Programming in the spring of 2024. I am interested in software development roles or internships.m  </p>
        </div>
      {/* classes */}
      <div className="classes">
        <h2 id="resume">Relevent Courses</h2>
        <p>Here are some of the classes I've taken at Western Washington University that are relevent towards the interests I have.</p>
        <div className="class">
          <h3>Mobile Device Programming</h3>
        </div>
        <div className="class">
          <h3>Computer Systems I & II</h3>
        </div>
        <div className="class">
          <h3>Operating Systems</h3>

        </div>
        <div className="class">
          <h3>Analysis of Algorithms</h3>

        </div>
        <div className="class">
          <h3>Database Systems</h3>
        </div>
        <div className="class">
          <h3>Object Oriented Programming</h3>
        </div>
        <div className="class">
          <h3>Computer Networking</h3>
        </div>
        <div className="class">
          <h3>Data Structures & Algorithms</h3>
        </div>
      </div>
      {/* projects */}
      <div className="projects">
        <h2 id="projects">Projects</h2>
        <div className="project">
          <h3>Spell Checker</h3>
          <p>In Java I developed my own version of a spell checker, using a dictionary to check its existence and then if it doesn't exist to check for one off spellings.</p>
        </div>
        <div className="project">
          <h3>Class Registration System</h3>
          <p>In Java I developed a class registration system connecting to a database using JDBC prepared statements to retrieve and send information to a SQL database.</p>
        </div>
        <div className="project">
          <h3>LRU Cache Server & Client</h3>
          <p>In C I developed an LRU cache on a server in order to speed up access to the hash table I built with it to store data. I also built client commands specific to receive, set, edit, delete, and various other options.</p>
        </div>
        <div className="project">
          <h3>Calculator App</h3>
          <p>In React Native on JavaScript I developed a Calculator App alongside Jest test cases to check for edge cases that could fail the application.</p>
        </div>
      </div>
      {/* technologies */}
      <div className="technologies">
        <h2 id="skills">Technologies</h2>
      </div>
      <div class="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img src={require('./images/java-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/javascript-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/linux-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/python-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/react-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/c-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/csharp-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/git-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/github-original.svg').default} alt='mySvgImage' />
          </div>
          <div class="carousel-item">
            <img src={require('./images/r-original.svg').default} alt='mySvgImage' />
          </div>
        </div>
      </div>  
      {/* contact */}
      <footer className="footer">
      <h2 id="contact">Contact</h2>
      <p>
        <a href="mailto:
        kefera@wwu.edu">
          Alex Kefer
        </a>
      </p>
    </footer>
  </div>
);}

export default App;
