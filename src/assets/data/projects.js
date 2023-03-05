import { v4 as uuidv4 } from 'uuid';
import Time2Cook from '../images/Time_2_Cook.png';
import CampusNav from '../images/Campus_Navigator.png';
import SuperMarket from '../images/SuperMarket.png';
import Ruppee from '../images/rupee.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Expense Tracker',
    desc:
      'The project is a web application that allows users to track their expenses using the MERN stack. Users can add, edit, and delete transactions and view their expense history with a summary of their current balance.',
    img: Ruppee,
    link: 'http://google.com',
  },
  {
    id: uuidv4(),
    name: 'Campus Navigator',
    desc:
      'Developed a web application to streamline the process of finding empty rooms and faculty members for college students.',
    img: CampusNav,
  },
  {
    id: uuidv4(),
    name: 'SuperMarket DApp',
    desc:
      'Designed and developed a decentralized application for the supermarket industry, bringing the buying process into Web3.0 and similar to UPI.',
    img: SuperMarket,
    link: 'http://google.com',
  },
  {
    id: uuidv4(),
    name: 'Time 2 Cook',
    desc:
      'Created a project that predicts the minimum time to cook a dish based on its ingredients and external factor such has Temperature',
    img: Time2Cook,
    link: 'http://google.com',
  },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc: 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
];

export default projects;
