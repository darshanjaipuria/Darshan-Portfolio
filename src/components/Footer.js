import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    margin-left: 14rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .footer__col1__title {
      text-align: left;
      width: 30rem;
      margin-left: 0;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Darshan Jain</h1>
          <PText>
            {/* A freelance web designer and developer from Chittagong, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate. */}
            A Fullstack Web Developer from Rajasthan, India. Committed to
            continuously expanding expertise and staying current with the latest
            advancements in technology.
          </PText>
        </div>
        {/* <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div> */}
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+919929557226',
                path: 'tel:+919929557226',
              },
              {
                title: 'jaipuriadarshan@gmail.com',
                path: 'mailto:jaipuriadarshan@gmail.com',
              },
              {
                title: 'Mochiwara Road, Sikar, Rajasthan, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        {/* <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/darshannn-jain/',
              },
              {
                title: 'Github',
                path: 'https://github.com/darshanjaipuria',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/DarshanJaipuria',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/darshan_jaipuria/',
              },
            ]}
          />
        </div> */}
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2023- Darshan's Portfolio</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
