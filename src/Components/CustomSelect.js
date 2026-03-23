import { styled } from "styled-components";

export const CustomSelect = () => {
  return (
    <StyledSelect>
      <label htmlFor="numbers">Choose a number</label>
      <select className="select-container" id="numbers">
        <option value="1">One</option>
        <option value="1">Two</option>
        <option value="1">Three</option>
        <option value="1">Four</option>
      </select>
    </StyledSelect>
  );
};

const StyledSelect = styled.section`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    .select-container{
        height: 4rem;
        width: 100%;
        border-color: ${(props) => props.theme.border} !important;
        padding-inline: 1rem;
        background-color: ${(props) => props.theme.backgroundAccent};
        color: ${(props) => props.theme.text};
        option{
          line-height: 1.4rem !important;
        }
    }
`;
