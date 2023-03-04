import React from 'react';
import { MdCode, MdPhonelinkSetup } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 100%;
      margin: 0 auto;
      margin-top: 5rem;
      margin-right: 0rem;
      gap: 5rem;
    }
  }
`;

export default function Services() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle subheading="What do I offer" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FiFigma />}
            title="Website Design"
            desc="While I am continuing to grow my knowledge of design tools such as Figma, I am confident in my ability to create visually appealing and user-friendly designs using my skills and experience as a web developer.  "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Frontend Developer"
            desc="Experienced Frontend Engineer with a strong background in HTML, CSS, and JavaScript.Skilled in creating dynamic and user-friendly interfaces, utilizing modern web development frameworks such as React."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Backend Developer"
            desc="As a backend engineer, I have a strong foundation in server-side programming and database management. I am skilled in creating efficient and scalable systems to support required requirements and providing seamless integration with front-end applications."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
