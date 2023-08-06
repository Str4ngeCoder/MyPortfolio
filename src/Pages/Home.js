import { styled } from "styled-components";
import hello from "../Assets/Images/hello.png"

const Home = () => {
  return (
    <StyledHome className="container">
      <img className="hello" src={hello} alt="hello"/>
      <div>
        <div className="h2 text">Hi there! It's me, <b>Shad</b>.</div>
        <div className="h1 text">Welcome to my portfolio :)</div>
        <div className="fs-3 text">Feel free to look around.</div>
      </div>
      <img className="hello-reverse" src={hello} alt="hello"/>
    </StyledHome>
  );
};

const StyledHome = styled.section`
--text-delay: 2s;

  height: calc(100vh - 12rem);
  display: grid;
  place-items: center;
  img{
    height: 20vh;
    aspect-ratio: 3/5;
    position: absolute;
  }
  .hello{
    right: calc(100% - 11vh);
    transform: rotateZ(45deg);
    animation: popin calc(1.5*var(--text-delay)) ease-in;
    @keyframes popin{
      0%,67%{
        right: 100%;
        transform: rotateZ(0deg);
      }
      100%{
        right: calc(100% - 11vh);
        transform: rotateZ(45deg);
      }
    }
  }
  .hello-reverse{
    rotate: y 180deg;
    left: calc(100% - 11vh);
    transform: rotateZ(45deg);
    animation: popinrev calc(1.5*var(--text-delay)) ease-in;
    @keyframes popinrev{
      0%,67%{
        left: 100%;
        transform: rotateZ(0deg);
      }
      100%{
        left: calc(100% - 11vh);
        transform: rotateZ(45deg);
      }
    }
  }
  div {
    color: ${(props) => props.theme.text};
    text-align: center;
  }
  .text{
    position: relative;
  }

  .h2{
    animation: fromleft var(--text-delay) linear;
    @keyframes fromleft {
      0%{
        right: 70vw;
      }
      100%{
        right: 0;
      }
    }
  }

  .h1{
    animation: fromright var(--text-delay) linear;
    @keyframes fromright {
      0%{
        left: 70vw;
      }
      100%{
        left: 0;
      }
    }
  }

  .fs-3{
    animation: frombottom calc(2*var(--text-delay)) linear;
    @keyframes frombottom {
      0%,50%{
        top: 40vh;
        opacity: 0;
      }
      50%,100%{
        top: 0;
        opacity: 1;
      }
    }
  }

`;

export default Home;
