import { styled } from "styled-components";

export const CustomSelect = () => {
  return (
    <StyledSelect>
      <label for="numbers">Choose a number</label>
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
    .select-container{
        height: 4rem;
        width: 100%;
    }
`;
