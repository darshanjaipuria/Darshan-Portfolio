import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
  type = 'Link',
}) {
  return (
    <ButtonStyle type={type} outline={outline} className="button-wrapper">
      {type === 'Link' ? (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      ) : (
        <a
          href="https://drive.google.com/file/d/1k-uYO7cKFC1bHgA3pKr96b8CaO3MltGX/view?usp=sharing"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          {btnText}
        </a>
      )}
    </ButtonStyle>
    // <ButtonStyle type={type} outline={outline} className="button-wrapper">
    //   <Link className="button" to={btnLink}>
    //     {btnText}
    //   </Link>
    // </ButtonStyle>
  );
}
