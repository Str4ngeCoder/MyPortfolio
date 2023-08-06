import MyContext from "../Context/myContext";
import { useContext } from "react";
import { styled } from "styled-components";

const ToggleButton = () => {
  const { toggleTheme, currentTheme, isLightTheme } = useContext(MyContext);
  return (
    <StyledToggleButton
      className={isLightTheme ? "light-theme-on" : "dark-theme-on"}
    >
      <label className="light-theme-label" htmlFor="customSwitch">
        <svg
          className="sun"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#FFAC33"
              d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"
            ></path>
            <circle fill="#FFAC33" cx="18" cy="18" r="10"></circle>
          </g>
        </svg>
      </label>
      <span
        className="toggle-button"
        id="customSwitch"
        onClick={() => {
          toggleTheme();
        }}
      />
      <label className="dark-theme-label" htmlFor="customSwitch">
        <svg
          className="moon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z"
              fill="#fff"
            ></path>{" "}
            <path
              d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z"
              fill="#fff"
            ></path>{" "}
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#fff"
            ></path>{" "}
          </g>
        </svg>
      </label>
    </StyledToggleButton>
  );
};

const StyledToggleButton = styled.section`
  --ht: 1.4rem;
  --toggleDelay: 200ms;

  display: flex;
  align-items: center;
  label {
    font-size: 1.4rem;
    color: ${(props) => props.theme.text};
    .sun,
    .moon {
      width: 2rem;
      height: 2rem;
    }
  }

  .toggle-button {
    width: 3rem;
    display: inline-block;
    outline: 0.1rem solid ${(props) => props.theme.backgroundAccentInverse};
    border-radius: 4rem;
    position: relative;
    height: var(--ht);
    margin: 0 0.5rem;
    background-color: ${(props) => props.theme.backgroundAccentInverse};
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      width: var(--ht);
      height: var(--ht);
      background-color: ${(props) => props.theme.backgroundAccent};
      border-radius: 50%;
      right: calc(100% - 1.4rem);
      transition: right var(--toggleDelay) linear;
    }
    &:hover {
      box-shadow: 0 0 0.8rem 0 ${(props) => props.theme.backgroundAccentInverse};
      transition: box-shadow var(--toggleDelay) ease-in;
    }
  }
  &.light-theme-on {
    .dark-theme-label {
      visibility: hidden;
    }
  }
  &.dark-theme-on {
    .toggle-button:after {
      right: 0;
    }
    .light-theme-label {
      visibility: hidden;
    }
  }
`;

export default ToggleButton;
