import { styled } from "styled-components";
import svgs from "../Assets/svgs";

const CustomNav = () => {
  const openRotate = () => {
    const btn = document.getElementById("btn");
    const menu = document.getElementById("show");
    menu.classList.toggle("show-hide");
    btn.classList.toggle("rotate-btn");
  };
  return (
    <StyledNavbar>
      <section className="navbar-comp">
        <section className="logo">NavBar</section>
        <section className="links-container" id="show">
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </section>
        <section className="icons-container">
          <ul className="icons">
            <li>
              <a href="#">{svgs.facebook}</a>
            </li>
            <li>
              <a href="#">{svgs.twitter}</a>
            </li>
            <li>
              <a href="#">{svgs.instagram}</a>
            </li>
            <li>
              <a href="#">{svgs.linkedIn}</a>
            </li>
          </ul>
        </section>
        <section className="button-container">
          <button className="btn" id="btn" aria-label="Nav Items" onClick={openRotate}>
            {svgs.hamburger}
          </button>
        </section>
      </section>
    </StyledNavbar>
  );
};

export default CustomNav;

const StyledNavbar = styled.section`
  .navbar-comp {
    display: flex;
    justify-content: space-between;
    position: sticky;
    box-shadow: 0 0.2rem 0 0 ${(props) => props.theme.border};
    .links {
      a {
        font-size: 1.4rem;
        font-weight: normal;
        color: ${(props) => props.theme.text};
      }
      a:hover {
        color: aqua;
      }
    }
  }

  li {
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  .links-container,
  .icons-container,
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0.1rem 0.1rem 0.4rem ${(props) => props.theme.border};
  }

  .logo {
    justify-content: left;
    padding-inline-start: 1rem;
  }

  .links li {
    margin: 0 1.5rem 0 0;
  }

  a {
    text-decoration: none;
  }

  a:active {
    color: inherit;
  }
  .icons li {
    margin: 0 1rem 0 0;
  }

  .logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.text},
      ${(props) => props.theme.disabled}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.8rem;
  }

  .button-container {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    .icons-container {
      display: none;
    }

    .navbar {
      height: 3rem;
    }
    .button-container {
      display: flex;
      justify-content: end;
    }

    .btn {
      cursor: pointer;
      transition: 200ms linear;
      &:active {
        border-color: transparent !important;
      }
      svg{
        fill: ${(props) => props.theme.text};
      }
    }

    ul{
      margin: 0;
    }

    .links-container .links {
      flex-direction: column;
    }

    .links li {
      padding: 0.5rem 0;
    }

    .links-container {
      position: absolute;
      width: 100%;
      justify-content: start;
      height: 0;
      overflow: hidden;
      box-shadow: 0 0.1rem 0 0 ${(props) => props.theme.border};
      top: 3.5rem;
      transition: 200ms linear;
    }
    .show-hide {
      height: 12.5rem;
    }

    .rotate-btn {
      transform: rotateZ(90deg);
    }
  }
`;
