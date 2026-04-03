// import MyContext from "../Context/myContext";
// import { useContext } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../DataStore/Slice";
import svgs from "../Assets/svgs";

const ToggleButton = ({ isfunctional = +true }) => {
  const currentTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  // const { toggleTheme, currentTheme, isLightTheme } = useContext(MyContext);
  const handleClick = () => {
    if (isfunctional) {
      dispatch(toggleTheme());
    }
  }
  return (
    <StyledToggleButton 
      isfunctional={+true} 
      className={`${currentTheme === "light-theme" ? "light-theme-on" : "dark-theme-on"}`}
    >
      <label className="light-theme-label" htmlFor="customSwitch">
        {svgs.sun}
      </label>
      <button
        className="toggle-button"
        aria-label="toggle-theme"
        id="customSwitch"
        onClick={() => {
          handleClick();
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
