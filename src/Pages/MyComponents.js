import ToggleButton from "../Components/ToggleButton";
import { styled } from "styled-components";
import { CustomSelect } from "../Components/CustomSelect";
import { useNavigate } from "react-router-dom";

const MyComponents = () => {
  const navigate = useNavigate();
  return (
    <StyledMyComponent className="container">
      <div className="toggle-button">
        <p>Custom toggle button</p>
        <ToggleButton />
      </div>
      <div className="select-button">
        <p>Custom select</p>
        <CustomSelect/>
      </div>
      <button onClick={() => navigate('/')}>Click me</button>
    </StyledMyComponent>
  );
};

export default MyComponents;

const StyledMyComponent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  min-height: 30rem;
  gap: 2rem;
  padding-top: 2rem;
  >div{
    height: 100%;
  }
  p{
    color: ${props => props.theme.text};
    text-decoration: underline;
    margin-bottom: 30%;
    font-weight: bold;
    font-size: 1.8rem;
  }
`;
