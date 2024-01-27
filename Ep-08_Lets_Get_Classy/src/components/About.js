import { Component } from 'react'
import User from './User';
import UserClass from './UserClass';

// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         <h2>Namaste React Series</h2>
//         <User name={"Prajakta Selukar"} location={"Tumsar"} contact={"@prajaktaselukar"} />
//         <UserClass name={"Akshay Saini"} location={"Dehradun"} contact={"@akshaymarch"} />
//     </div>
//   )
// }

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>About</h1>
          <h2>Namaste React Series</h2>
          <UserClass name={"Prajakta Selukar"} location={"Tumsar"} contact={"@prajaktaselukar"} />
          {/* <UserClass name={"Akshay Saini"} location={"Dehradun"} contact={"@akshaymarch"} /> */}
          {/* Two instances of same Class */}
      </div>
    )
  }

  componentDidMount() {

  }
}

export default About;