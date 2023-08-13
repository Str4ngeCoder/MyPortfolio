import styled from "styled-components";
import ToggleButton from "../Components/ToggleButton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(1);

  useEffect(() => {
    const activeTab = window.location.pathname;
    activeTab === "/" ? setIsActive(1) : activeTab === "/MyResume" ? setIsActive(2) : setIsActive(3)
  },[]);

  return (
    <StyledNavbar className="navbar">
      <div className="container navbar-contents">
        <a href="#" className="logo">
          MY PORTFOLIO
        </a>
        <div className="nav-menu d-flex">
          <Link
            to="/"
            className={isActive === 1 ? "active" : ""}
            onClick={() => setIsActive(1)}
          >
            Home
          </Link>
          <Link
            to="MyResume"
            className={isActive === 2 ? "active" : ""}
            onClick={() => setIsActive(2)}
          >
            My Resume
          </Link>
          <Link
            to="MyComponents"
            className={isActive === 3 ? "active" : ""}
            onClick={() => setIsActive(3)}
          >
            My Components
          </Link>
        </div>
        <ToggleButton />
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  height: 6rem;
  background-color: ${(props) => props.theme.backgroundAccent};
  border-bottom: 0.1rem solid ${(props) => props.theme.border};
  position: fixed;
  width: 100%;
  &.navbar {
    .nav-menu {
      gap: min(3rem, 3vw);
      a {
        text-decoration: none;
        color: ${(props) => props.theme.text};
        font-size: 1.4rem;
      }
      a:not(.active):hover {
        color: ${(props) => props.theme.highlight};
      }
      .active {
        font-weight: bold;
        color: ${(props) => props.theme.highlight};
        scale: 1.2;
        transition: scale 100ms ease-in-out;
        cursor: default;
      }
    }
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      text-decoration: none;
      color: ${(props) => props.theme.text};
    }
  }
`;

export default Navbar;
