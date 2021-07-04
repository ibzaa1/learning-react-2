import React from "react";

const Header = (props) => (
  <header className='top'>
    <h1>
      Catch
      <span className='ofThe'>
        <span className='of'>Of</span>
        <span className='the'>The</span>
      </span>{" "}
      Day
    </h1>
    <h3 className='tagline'>
      <span>Fresh SeaFood Daily</span>
    </h3>
  </header>
);

// class Header extends React.Component {
//   render() {
//     return (
//       <header className='top'>
//         <h1>
//           Catch
//           <span className='ofThe'>
//             <span className='of'>Of</span>
//             <span className='the'>The</span>
//           </span>{" "}
//           Day
//         </h1>
//         <h3 className='tagline'>
//           <span>Fresh SeaFood Daily</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
