import React from "react";
import Navigation from "../components/navigation";
import "../css/tailwind.css";

export default function Home() {
  return (
    <div className={"page-container w-full flex flex-col border-t-4 border-gray-400"}>

      <Navigation />

      <header>
        <h1>Timuism</h1>
        <h2>
          Hey! I'm Timothy Long. I'm a front-end developer, consultant, and life-long learner.
        </h2>
        <h3>
          This website is multi-purpose—but mostly a playground for me expand my knowledge of the web. It is also my portfolio, and personal blog. Curious about who Tim is? Learn more about who I am 
        </h3>
      </header>

      <section id="callToActionSection">
        <a href="">Subscribe to my Newsletter</a>
        <a href="">Say Hello!</a>
      </section>

      <section id="musicSection">
        In addition to my love for web technolgies, I am a musician. Need a bassist for a show or recording session? Contact me. Check out my musical life here.
      </section>

      <footer>
        <nav>
          <a href="">Blog</a>
          <a href="">About Me</a>
          <a href="">Newsletter</a>
          <a href="">Projects</a>
          <a href="">Music</a>
        </nav>
        
        <div>
          <a href="">GitHub</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
      </footer>
    </div>
  )
}
