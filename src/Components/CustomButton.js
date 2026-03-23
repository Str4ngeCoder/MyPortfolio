import { useState } from "react";
import styled from "styled-components";

const CustomButton = ({text,onClick}) => {
    // const [text, setText] = useState(null);
    // const handleClick = () => {
    //     setText('Hello! Button here:)')
    // }
  return (
    <>
      <StyledButton type="button" onClick={onClick} aria-label="Custom button">{text ? text:"Custom Button"}</StyledButton>
      {/* {text ? <section>{text}</section>: ''} */}
    </>
  );
};

const StyledButton = styled.button`
  max-width: 12rem;
  padding: 0.6rem;
  background-color: ${(props) => props.theme.backgroundAccentInverse};
  border: 0.1rem solid ${(props) => props.theme.backgroundAccentInverse};
  color: ${(props) => props.theme.textInverse};
  font-size: 1.4rem;
  border-radius: 1rem;
  font-weight: normal;
  &:hover,
  &:active {
    background-color: inherit;
    color: ${(props) => props.theme.text};
  }
`;

export default CustomButton;
