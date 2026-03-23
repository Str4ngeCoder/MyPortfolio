import MyContext from "../Context/myContext";
import { useContext } from "react";
import { styled } from "styled-components";
import svgs from "../Assets/svgs/svgs";

const ToggleButton = (props) => {
  const { toggleTheme, currentTheme, isLightTheme } = useContext(MyContext);
  return (
    <StyledToggleButton
      className={isLightTheme ? "light-theme-on" : "dark-theme-on"}
      aria-label="Toggle theme"
    >
      <label className="light-theme-label" htmlFor="customSwitch">
        {svgs.sun}
      </label>
      <button
        className="toggle-button"
        aria-label="toggle-theme"
        id="customSwitch"
        onClick={() => {
          toggleTheme();
        }}
      />
      <label className="dark-theme-label" htmlFor="customSwitch">
        {svgs.moon}
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
    /* outline: 0.1rem solid ${(props) => props.theme.backgroundAccentInverse}; */
    border-radius: 4rem;
    position: relative;
    height: var(--ht);
    margin: 0 0.5rem;
    background-color: ${(props) => props.theme.backgroundAccentInverse};
    border: none;
    &:after {
      content: "";
      position: absolute;
      top:0;
      width: var(--ht);
      height: 100%;
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
