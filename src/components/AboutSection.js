import React from 'react';
import styled from 'styled-components';
// import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/IMG20230212115557.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  img {
    /* width: 55rem; */
  }
  .aboutSection__right {
    animation: scaleImage 7s linear infinite;
  }
  @keyframes scaleImage {
    0% {
      transform: scale(0.7);
    }
    50% {
      transform: scale(0.75);
      box-shadow: 2px 3px 10px var(--gray-1);
    }
    100% {
      transform: scale(0.7);
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
    text-align: justify;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 6;
    }
    .aboutSection__right {
      flex: 3;
      img {
        object-fit: contain;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
    img {
      padding: 2rem;
      width: 50rem;
      height: 40rem;
    }
  }
  @media only screen and (max-width: 547px) {
    img {
      padding: 2rem;
      /* width: 35rem; */
      /* height: 35rem; */
      width: auto;
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            A highly motivated and detail-oriented computer science
            under-graduate in BTech, possessing a keen interest in technology
            and software development. Proficient in utilizing programming
            languages such as Java, React, and familiar with JavaScript, MySQL,
            and C++. Demonstrated ability to adapt quickly to new environments
            and collaborate efficiently with teams.Committed to continuously
            expanding expertise and staying current with the latest advancements
            in technology.
          </PText>
          <div className="aboutSection__buttons">
            {/* <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline /> */}
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
