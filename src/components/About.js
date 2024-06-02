import React, { useEffect } from 'react'
import '../assets/css/About.css'
import Navbar from './Navbar'
import Footer from './Footer'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className='about-container'>
        <video autoPlay loop muted src={homepagebgvideo}></video>
        <h1>About LoveTest</h1>
        <p>Hi there!</p>
        <p>Thank you for visiting the original Internet LoveTest.</p>

        <p>The LoveTest started out when I was still in High School. A couple of love and romance tests circulated in our classes and we were quite interested in knowing the results of how we matched to our dream girl/boy. Being a teenager was hard enough, but not having any clue about your dream partner was even worse.</p>

        <p>Our lunch breaks were not long enough to allow everybody to take the tests. That's when I decided to write a small program which would help us to analyse the results of the tests.</p>

        <p>The first version of LoveTest was a very simple program which was written in February 1991. It asked the different questions on the computer screen and my friends entered “Yes”, “No” or “Don't know” to each question. This was used to calculate the one sentence result.</p>

        <p>The next version got more sophisticated. It also allowed the test-taker to enter his/her name and the name of his/her dream-person. These names were used to calculate the compatibility between the two persons using numerology.</p>

        <p>This program allowed us to calculate the results for virtually all classmates. It was great fun. After the success of the program at school, I decided to write an international version of it in English and to give it to my friends and my father's customers. Unfortunately, the last version of this offline LoveTest, which was localized in 4 languages, was lost during a harddisk crash.</p>

        <p>When I got my own Internet connection in 1994, I only used it for web surfing and to send e-mail to my friends from around the world. Then in June 1995, I got my first web pages online. After a while I got bored by these plain web pages and decided to add some interactivity. In December 1995, I started learning how to write CGI programs for Macintosh computers. CGI programs are small applications which run on a web server and are operated through a web browser anywhere on this planet.</p>

        <p>At the time I remembered that I still had the LoveTest somewhere. After scanning about 400 floppy disks, I found it again. Yes! That's when I decided to convert the offline LoveTest program into an online LoveTest CGI.</p>

        <p>The online LoveTest has all the features the offline version had, plus a couple of new additions. The online LoveTest also includes information about the zodiac signs and how they are compatible. The original LoveTest site went online on Friday, February 23rd, 1996.</p>

        <p>When I put the site online, I didn't know what I started. Since that date, more than 650 million tests were taken. I received a lot of suggestions and made many improvements to the site.</p>

        <p>Right now, you are looking at the whole new LoveTest site. It has a lot more information, it is faster and contains many more features and tests. I'm very grateful to my sponsors and especially AstroServices Inc., the publishers of AstroMate and AstroAdvice. They allowed me to include even more astrological information for your enjoyment.</p>

        <p>Once again, thank you very much for visiting the “Original Internet LoveTest”. I hope you are enjoying your visit. If you have any questions, don't hesitate to contact me.</p>

        <p>Best regards;</p>

      </div>
      <Footer />
    </>
  )
}

export default About
