import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/IMG20230212115446.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    text-align: left;
    .para {
      max-width: 80%;
      margin: 0;
      text-align: justify;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      transition: all 0.3s ease-in-out;
    }
    img:hover {
      transform: rotate(1deg);
      cursor: pointer;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 2rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info {
      margin-left: 2rem;
    }
    .button {
      margin-left: 2rem;
    }
    .para {
      text-align: left;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Darshan Jain</span>
              </p>
              <h2 className="about__heading">A Fullstack Web developer</h2>
              <div className="about__info">
                <PText>
                  Motivated and detail-oriented computer science BTech graduate
                  with a strong passion for technology and software development.
                  Possessing a comprehensive understanding of programming
                  languages, technologies, and frameworks such as Java,
                  JavaScript, React, and MongoDB. <br /> <br /> Proven ability
                  to adapt quickly to new technologies and work efficiently both
                  individually and in a team environment. Committed to
                  continuously learning and growing as a full-stack developer,
                  with the goal of using my technical skills to create
                  innovative solutions that positively impact people's lives.
                </PText>
              </div>
              <Button type="external" btnLink="#" btnText="My Resume" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Aastha Academy Senior Secondary School, Sikar']}
              />
              <AboutInfoItem
                title="College"
                items={['Vellore Institute of Technology, Vellore']}
              />
              {/* <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              /> */}
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Languages"
                items={['Java', 'JavaScript', 'C++', 'PHP', 'Solidity']}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'ReactJS']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'PHP', 'ExpressJS']}
              />
              <AboutInfoItem title="Database" items={['MySql', 'MongoDB']} />
              <AboutInfoItem
                title="Other"
                items={['Problem Solving', 'LeaderShip', 'Time Management']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
// import React from 'react';
// import styled from 'styled-components';
// import PText from '../components/PText';
// import Button from '../components/Button';
// import AboutImg from '../assets/images/IMG20230212115446.jpg';
// import AboutInfoItem from '../components/AboutInfoItem';
// import ContactBanner from '../components/ContactBanner';

// const AboutPageStyles = styled.div`
//   padding: 20rem 0 10rem 0;

//   .top-section {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 2rem;
//   }
//   .left {
//     flex: 3;
//   }
//   .right {
//     flex: 2;
//   }
//   .about__subheading {
//     font-size: 2.2rem;
//     margin-bottom: 2rem;
//     span {
//       background-color: var(--deep-dark);
//       padding: 0.5rem;
//       border-radius: 8px;
//     }
//   }
//   .about__heading {
//     font-size: 3.6rem;
//     margin-bottom: 3rem;
//   }
//   .about__info {
//     margin-bottom: 4rem;
//     text-align: left;
//     .para {
//       max-width: 80%;
//       margin: 0;
//       text-align: justify;
//     }
//   }
//   .right {
//     img {
//       border: 2px solid var(--gray-1);
//     }
//   }
//   .about__info__items {
//     margin-top: 15rem;
//   }
//   .about__info__item {
//     margin-bottom: 10rem;
//   }
//   .about__info__heading {
//     font-size: 3.6rem;
//     text-transform: uppercase;
//   }
//   @media only screen and (max-width: 768px) {
//     padding: 10rem 0;
//     .top-section {
//       flex-direction: column;
//       gap: 2rem;
//     }
//     .about__subheading {
//       font-size: 1.8rem;
//     }
//     .about__heading {
//       font-size: 2.8rem;
//     }
//     .about__info__heading {
//       font-size: 3rem;
//     }
//     .about__info {
//       margin-left: 2rem;
//     }
//     .button {
//       margin-left: 2rem;
//     }
//   }
// `;

// export default function About() {
//   return (
//     <>
//       <AboutPageStyles>
//         <div className="container">
//           <div className="top-section">
//             <div className="left">
//               <p className="about__subheading">
//                 Hi, I am <span>Darshan Jain</span>
//               </p>
//               <h2 className="about__heading">A Fullstack Web developer</h2>
//               <div className="about__info">
//                 <PText>
//                   Motivated and detail-oriented computer science BTech graduate
//                   with a strong passion for technology and software development.
//                   Possessing a comprehensive understanding of programming
//                   languages, technologies, and frameworks such as Java,
//                   JavaScript, React, and MongoDB. <br /> <br /> Proven ability
//                   to adapt quickly to new technologies and work efficiently both
//                   individually and in a team environment. Committed to
//                   continuously learning and growing as a full-stack developer,
//                   with the goal of using my technical skills to create
//                   innovative solutions that positively impact people's lives.
//                 </PText>
//               </div>
//               <Button type="external" btnLink="#" btnText="My Resume" />
//             </div>
//             <div className="right">
//               <img src={AboutImg} alt="me" />
//             </div>
//           </div>
//           <div className="about__info__items">
//             <div className="about__info__item">
//               <h1 className="about__info__heading">Education</h1>

//               <AboutInfoItem
//                 title="School"
//                 items={['Aastha Academy Senior Secondary School, Sikar']}
//               />
//               <AboutInfoItem
//                 title="College"
//                 items={['Vellore Institute of Technology, Vellore']}
//               />
//               {/* <AboutInfoItem
//                 title="Varsity"
//                 items={['University Of Chitiagong']}
//               /> */}
//             </div>
//             <div className="about__info__item">
//               <h1 className="about__info__heading">My Skills</h1>

//               <AboutInfoItem
//                 title="Languages"
//                 items={['Java', 'JavaScript', 'C++', 'PHP', 'Solidity']}
//               />
//               <AboutInfoItem
//                 title="FrontEnd"
//                 items={['HTML', 'CSS', 'JavaScript', 'ReactJS']}
//               />
//               <AboutInfoItem
//                 title="BackEnd"
//                 items={['Node', 'PHP', 'ExpressJS']}
//               />
//               <AboutInfoItem title="Database" items={['MySql', 'MongoDB']} />
//               <AboutInfoItem
//                 title="Other"
//                 items={['Problem Solving', 'LeaderShip', 'Time Management']}
//               />
//             </div>
//           </div>
//         </div>
//         <ContactBanner />
//       </AboutPageStyles>
//     </>
//   );
// }
