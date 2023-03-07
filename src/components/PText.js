// import React from 'react';
// import styled from 'styled-components';

// const PStyle = styled.div`
//   max-width: 500px;
//   margin: 0 auto;
//   font-size: 1.8rem;
//   line-height: 1.3em;
//   @media only screen and (max-width: 768px) {
//     font-size: 1.4rem;
//   }
// `;

// export default function PText({ children }) {
//   return (
//     <PStyle className="para">
//       <p>{children}</p>
//     </PStyle>
//   );
// }
import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;

  p {
    transition: all 0.2s ease-in-out;
  }

  p:hover {
    color: white;
    transform: scale(1.01);
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
