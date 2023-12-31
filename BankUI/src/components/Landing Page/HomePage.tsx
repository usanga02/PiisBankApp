import Logo from '../../imgs/logo.png';
import card from '../../imgs/monzo.png';
import daa from '../../imgs/daa.png';
import reel from '../../imgs/reel.png';
import spend from '../../imgs/Spend.png';
import Wallet from '../../imgs/wallet.jpg';
import PlainCard from '../../imgs/Plain-card.jpg';
import free from '../../imgs/free.png';
import shadow from '../../imgs/shadow.png'
import padlock from '../../imgs/padlock.png';
import lock from '../../imgs/lock.png';
import security from '../../imgs/security.png';
import banking from '../../imgs/banking.png';
import financing from '../../imgs/financing.png';
import contact from '../../imgs/contact.png';
import growth from '../../imgs/growth.png';
import appstore from '../../imgs/appstore.svg'
import googleplay from '../../imgs/googleplay.png'
import twitter from '../../imgs/twitter.svg'
import instagram from '../../imgs/instagram.svg'
import youtube from '../../imgs/youtube.svg'
import facebook from '../../imgs/facebook.svg'
import linkedin from '../../imgs/linkedin.svg'
import "./HomePage.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const BackToTopArrow = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top-arrow" onClick={handleBackToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default function HomePage() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const handleCardHover = (cardIndex: number) => {
      setHoveredCard(cardIndex);
    };
  
    const handleCardLeave = () => {
      setHoveredCard(null);
    };

    const navigate = useNavigate();
    const handleSignUp = () => {
      navigate('/signup'); // Replace '/signup' with the desired URL of the new page
    };
    useEffect(() => {
      AOS.init();
    }, [])

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null); // Update the type of timerRef

    const rotateCardImages = () => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 3); 
    };

    // ...

    useEffect(() => {
      timerRef.current = setInterval(rotateCardImages, 5000);
    
      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }, []);
    const cardImages = [daa, reel, shadow];

    useEffect(() => {
      const handleScroll = () => {
        const backToTopArrow = document.querySelector('.back-to-top-arrow');
        if (backToTopArrow) {
          if (window.scrollY >= 500) {
            backToTopArrow.classList.add('show');
          } else {
            backToTopArrow.classList.remove('show');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    


  return (
    <div>
    <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="custom-container">
          <Navbar.Brand href="#">
            <div className="logo1 ">
              <img src={Logo} alt="" />
              <span>
                Nai<span>ra</span>Pay
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 centered-links"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action3">Accounts</Nav.Link>
              <Nav.Link href="#action4">Savings</Nav.Link>
              <Nav.Link href="#contact-section">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center custom-container">
              <button  className="btn-started flex-shrink-0" onClick={handleSignUp}>Sign Up</button>
            </Form>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    <div className='about'>
                <div className="row row-abot">
                    <div className="row-card col-md-7" data-aos="fade-up-right" data-aos-offset="100"
                          data-aos-easing="ease-in-sine" data-aos-delay="500" data-aos-mirror="true">
                        <h2 className="about-header1">Banking <br/> made easy</h2>
                        <p className='row-text'>Spend, save and manage your money, all in one place. Open a full <br></br> Nigeria bank account from your phone, for free.</p>
                        <a href='/signup'>
                          <button className='btn-started1'>
                            Get Started
                          </button></a>
                    </div>
                    <div className='img_bounce col-md-5' data-aos="fade-up-left" data-aos-delay="900" data-aos-easing="ease-in-sine">
                    <img
                      className="bounce-image img-fluid"
                      src={cardImages[currentCardIndex]}
                      alt="aboutimage"
                    />
                  </div>

                </div>
    </div>
    <div className='security'>
                <img className="security-img" src={security} alt="aboutimage"/>
                <div className='header_security'>
                <h2 className="security-header">Your Security is our Priority</h2>
                <p className='security-p'>Monzo uses the highest levels of Internet Security, and it is secured by 256 bits SSL <br></br> security encryption to ensure that your information is completely protected from fraud.</p>
                </div>
    </div>
    <div className='security1' data-aos="fade-up"
                data-aos-duration="3000" data-aos-delay="500">
                <img className="security1-img" src={padlock} alt="aboutimage"/>
                <div className='header_security1'>
                <h2 className="security-header1">Protect yourself from fraud</h2>
                <p className='security-p1'>Don’t make payments or share your data if something seems <br></br> unusual or unexpected - stop and challenge.</p>
                <p className='security-p1'>Take a look at some common scams and learn how they work so <br></br> you can keep your money safe. Fraudsters are clever and use</p>
                <p className='security-p1'>sophisticated tactics, so knowing what to look out for can help <br></br> stop them.</p>
                <button className='btn-started'>Protect yourself from fraud</button>
                </div>
    </div>
    <div className='security2'data-aos="fade-up"
     data-aos-duration="3000"  data-aos-delay="500">
                <div className='header_security2'>
                <h2 className="security-header1">Keep Your Money Safe</h2>
                <p className='security-p1'>Cutting-edge technology, FSCS protection and 24/7 support if  you need us urgently. Just a few of the reasons over 7 million customers trust us to keep their money safe.</p>
                <button className='btn-started'>Find out more</button>
                </div>
                <img className="security1-img" src={lock} alt="aboutimage"/>
    </div>

    <div className="explore">
      <h1>Explore More Than Banking</h1>
      <p>Whether it's your child's first savings account, your personal savings account, your first home or retirement plan, we offer personal banking products and services</p>
      <div className="cards">
        <Card
          className={`custom-card${hoveredCard === 0 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={growth} />
          <Card.Body>
            <Card.Title>Bank Transfer</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '80px' }}>
              Based on specific requirements to bridge funding gaps with flexible repayment structures.
            </Card.Text>
            <a href='/signup'><button className='btn-started'>
                            Get Started
                        </button></a>
          </Card.Body>
        </Card>
        <Card
          className={`custom-card${hoveredCard === 1 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={banking} />
          <Card.Body>
            <Card.Title>Sustainable Banking</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '100px' }}>
              For over two decades, we have been taking actionable steps towards sustainability in a rapidly changing world.
            </Card.Text>
            <a href='/signup'><button className='btn-started'>
                            Get Started
                        </button></a>
          </Card.Body>
        </Card>
        <Card
          className={`custom-card${hoveredCard === 2 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={financing} />
          <Card.Body>
            <Card.Title>Financing</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '100px' }}>
              Based on specific requirements to bridge funding gaps with flexible repayment structures.
            </Card.Text>
            <a href='/signup'><button className='btn-started'>
                            Get Started
                        </button></a>
          </Card.Body>
        </Card>
        <Card
          className={`custom-card${hoveredCard === 3 ? ' zoom-out' : ''}`}
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={handleCardLeave}
        >
          <Card.Img variant="top" src={growth} />
          <Card.Body>
            <Card.Title>Equipping Growing Businesses</Card.Title>
            <Card.Text style={{ textAlign: 'left', height: '80px' }}>
              Based on specific requirements to bridge funding gaps with flexible repayment structures.
            </Card.Text>
            <a href='/signup'><button className='btn-started'>
                            Get Started
                        </button></a>
          </Card.Body>
        </Card>
        {/* Add more cards here */}
      </div>
    </div>

    <div className='services'>
    <h1>Wide Range of services</h1>
    <p className='service-text'>Our services ranges from E-wallet, Remita Payments, Flex-Account<br/></p>
    <div className='service-image'data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-out" >
    <img src={PlainCard} className='plain-card' alt="google-logo"/>
    <img src={free} className=''  alt="google-logo"/>
    <img src={Wallet} className=''  alt="google-logo"/>
    </div>
    </div>
    <div className='contact' id='contact-section'>
        <div className='contact_header col-md-7'>
            <h1 className='contact-header1 sm-fs-4'>We are here to help!</h1>
            <p>Chat with us via our in-app live chat or send us a message on our
            official social media pages. <br></br>If you require further assistance, contact us via the following channels:</p>
            <br></br>
            <a href='#'><p><i className="fas fa-phone me-3 text-secondary"></i> +2348087516511</p></a>
            <a href='mailto:email@example.com' className="text-reset">
            <p>
              <i className="fas fa-envelope me-3 custom-icon-color"></i>
              info@example.com
            </p>
          </a>
        </div>
        <div className='col-md-5 img_contact'>
        <img src={contact} alt="" />
        </div>
    </div>
    <div className='Booking'>
    <div className="box"></div>
      <div className='Booking-text'>
        <h3 className='b-t'>Spend</h3>
        <p className='b-p'>Get instant notifications the second you pay. Set budgets for things like groceries and going out, and get warnings if you’re spending too fast (if you want them).</p>
      </div>
      <img src={spend} alt=""  className='bbc'/>
    </div>
    <>
        <div className='footer'>
          <div className='footer-box'>
            <h2 className='top-text'>Help us build the kind of bank you want to use</h2>
            <p className='text-p'>Download the Nairapay app on iOS or Android and join more than 7 million people who've changed the way<br/>they bank.</p>
            <div className='footer-img'>
            <img src={appstore} className='appstore' alt="app-logo"/>
            <img src={googleplay} className='google'  alt="google-logo"/>
            </div>
          </div>
          
        </div>
        <div className='footer-2'>
            <div className='footer-first'>
                <h3 className='logo-text'>NAIRAPAY</h3>
                <div className='logo-2'>
                <img src={appstore} className='appstore1' alt="app-logo"/>
                <img src={googleplay} className='google1' google-logo/>
                </div>

            </div>
            <div className='footer-list'>
                <ul className='list-t'>
                    <li>About us</li>
                    <li>Nairapay us</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Our social program</li>
                    <li>Accessibility</li>
                    <li>Lost your phone and card</li>
                    <li>Investor Information</li>
                </ul>
                <ul className='list-t'>
                    <li>Supporting all our <br/>customers</li>
                    <li>How we can support<br/>with money worries</li>
                    <li>Helping everyone <br/>belong at Nairapay</li>
                    <li>How we protect you</li>
                    <li>Our tone of voice</li>
                    <li>Business Accounts</li>
                    <li>Modern Slavery<br/>Statement</li>
                    <li>FAQ</li>
                    
                </ul>
                <ul className='list-t'>
                    <li>Terms & Conditions</li>
                    <li>FSCS information</li>
                    <li>Privacy Notice</li>
                    <li>Cookie Notice</li>
                    <li>Browser Support Policy</li>
                    <li>Mobile Operating<br/>System Support Policy</li>
                    <li>Information about our<br/>Personal Current<br/>Account Services</li>
                    <li>App and Open Banking<br/>Performance</li>
                    
                </ul>
                <div className="footer-icon">
                <img src={twitter} className='twitter' alt="twitter-logo"/>
                <img src={instagram} className='instagram'  alt="instagram-logo"/>
                <img src={facebook} className='facebook' alt="facebook-logo"/>
                <img src={linkedin} className='linkedin' alt="linkedin-logo"/>
                <img src={youtube} className='youtube'  alt="youtube-logo"/>
                </div>
                
            </div>
            <div className='lower-text'>
                <h3 className='ttp-title'>Existing customers can get help via the app</h3>
                <p className='ttp-text'>Nairapay Bank Limited is a company registered in Nigeria and Wales (No. 09446231). Nairapay Bank Ltd is authorised by the <br/>
                Prudential Regulation Authority (PRA) and regulated by the Financial Conduct Authority and the Prudential Regulation<br/>
                 Authority. Our Financial Services Register number is 730427.</p>
            </div>
          </div>
          <BackToTopArrow />
        </>
    </div>
     
  );
}
