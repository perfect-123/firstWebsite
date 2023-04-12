import React from "react";
import Jullie from '../images/DaJulien.jpeg'
import whatGif from '../images/what-confused.gif'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm what? cat!
          </h1>
          <p className="mb-8 leading-relaxed">
            Ah, King Julien, what a magnificent lemur I am! I am the most charismatic and charming leader of the lemurs in all of Madagascar.
            My subjects adore me, and I am always the life of the party. With my unique dance moves and infectious energy, 
            I bring joy and laughter to all who surround me. 

          </p>
          <p>
            My crown sits atop my head with regal elegance, and my royal scepter
            commands respect and obedience from all who see it. I am a true king, and my rule is absolute. Long live King Julien!

          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Jullie}
          />
        </div>
      </div>
    </section>
  );
}