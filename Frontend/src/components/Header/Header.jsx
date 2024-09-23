// import React from "react";
// import { Container, Row, Button } from "reactstrap";
// import { NavLink, Link } from "react-router-dom";

// import logo from "../../assets/logo.png";

// const nav_links = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   {
//     path: "/",
//     display: "About",
//   },
//   {
//     path: "/tours",
//     display: "Tours",
//   },
// ];

// function Header() {
//   return (
//     <header className="header">
//       <Container>
//         <Row>
//           <div className="nav_wrapper d-flex align-items-center justify-content-between">
//             {/* ==================== logo ==================== */}
//             <div className="logo">
//               <img src={logo} alt="" />
//             </div>
//             {/* ==================== logo end ==================== */}
//             {/* ==================== menu start ==================== */}
//             <div className="navigation">
//               <ul className="menu d-flex align-items-center">
//                 {nav_links.map((item, index) => (
//                   <li className="nav_item" key={index}>
//                     <NavLink to={item.path}>{item.display}</NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* ==================== menu end ==================== */}
//             <div className="nav_right d-flex align-items-center gap-4">
//               <div className="nav-btns d-flex align-items-center gap-4">
//                 <Button className="btn secondary_btn">
//                   <Link to="/login">Login</Link>
//                 </Button>

//                 <Button className="btn secondary_btn">
//                   <Link to="/register">Register</Link>
//                 </Button>
//               </div>
//               <span className="mobile_menu">
//                 <i className="ri-menu-line"></i>
//               </span>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* ==================== logo ==================== */}
            <div className="logo">
              <img src={logo} alt="Travel World Logo" />
            </div>
            {/* ==================== logo end ==================== */}

            {/* ==================== menu start ==================== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-4">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* ==================== menu end ==================== */}
            <div className="nav_right d-flex align-items-center gap-3">
              <div className="nav-btns d-flex align-items-center gap-3">
                <Button className="btn secondary_btn">
                  <Link to="/login">Login</Link>
                </Button>

                <Button className="btn secondary_btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              {/* Hide mobile menu on larger screens */}
              <span className="mobile_menu d-md-none">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

