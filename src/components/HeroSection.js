import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/Main_Image2.jpg';
// import Button from './Button';
// import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import Animate from './Animate';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    /* margin-bottom: -4rem; */
    position: relative;
    top: 1rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
      user-select: none;
      z-index: 10;
    }
  }
  .hero__img {
    max-width: 1000px;
    /* width: 100%; */
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 40px;
    width: 50px;
    left: 50px;
  }
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      user-select: none;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        margin-bottom: 1rem;
        letter-spacing: 5px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 2rem;
      /* margin-bottom: -4rem; */
      position: relative;
      top: 4rem;
      font-size: 1.4rem;
      margin-bottom: 5rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .hero__img {
      max-width: 295px;
    }
  }
`;

// const Button = styled.div``;

function HeroSection() {
  return (
    <HeroStyles>
      <Animate />
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="css-text-mask hero__name">Darshan Jain</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            {/* <PText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
              iusto ab. Expedita, laudantium eum non totam praesentium quam fuga
              iusto?
            </PText> */}
            {/* <Button btnLink="/projects" btnText="my projects" outline={false} /> */}
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Links</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/darshanjaipuria"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/darshannn-jain/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/darshan_jaipuria/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/DarshanJaipuria"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
