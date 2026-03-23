import ToggleButton from "../Components/ToggleButton";
import { styled } from "styled-components";
import { CustomSelect } from "../Components/CustomSelect";
import CustomNavbar from "../Components/CustomNav";
import { useState } from "react";
import ScrollHighlight from "../Components/ScrollHighlight";
import CustomButton from "../Components/CustomButton";
import Modal from "../Components/Modal";

const MyComponents = () => {
  const [componentnumber, setComponentNumber] = useState(null);
  const [active, setActive] = useState(null);
  const renderComponent = () => {
    switch (componentnumber) {
      case 0:
        return <CustomButton/>;
      case 1:
        return <CustomNavbar />;
      case 2:
        return <CustomSelect />;
      case 3:
        return <ToggleButton />;
      case 4:
        return <ScrollHighlight/>;
      case 5:
        return <Modal/>;
      default:
        return <section className="d-flex justify-content-center h1">Click on any component to check it out</section>;
    }
  }

  const handleClick = (value) => {
    setComponentNumber(value);
    setActive(value);
  }
  return (
    <StyledMyComponent className="container">
      <section className=" components-links ">
        <button type="button" className={`btn ${active === 0 ? 'btn-success' : ''}`} onClick={() => handleClick(0)}>Custom Button</button>
        <button type="button" className={`btn ${active === 1 ? 'btn-success' : ''}`} onClick={() => handleClick(1)}>Custom Navbar</button>
        <button type="button" className={`btn ${active === 2 ? 'btn-success' : ''}`} onClick={() => handleClick(2)}>Custom Select</button>
        <button type="button" className={`btn ${active === 3 ? 'btn-success' : ''}`} onClick={() => handleClick(3)}>Toggle Button</button>
        <button type="button" className={`btn ${active === 4 ? 'btn-success' : ''}`} onClick={() => handleClick(4)} title="Scroll to see text highlight">Scroll highlight</button>
        <button type="button" className={`btn ${active === 5 ? 'btn-success' : ''}`} onClick={() => handleClick(5)} title="Modal">Modal</button>
      </section>
      <section className="component-container">
        {/* { componentnumber === 0 ? <ToggleButton/> 
        : 
        componentnumber === 1 ? <CustomSelect/>
        : 
        componentnumber === 2 ? <CustomNavbar/>
        : 
        'Click on any component to check it out'} */}
        {renderComponent()}
      </section>
    </StyledMyComponent>
  );
};

export default MyComponents;

const StyledMyComponent = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .component-container{
    color: ${(props) => props.theme.text};
    display: grid;
  }
  a {
    color: ${(props) => props.theme.link};
    font-weight: bold;
    font-size: 1.8rem;
  }

  .components-links{
    display: flex;
    gap: 2rem;
    justify-content: center;
    overflow-x: auto;
    padding: 1rem;
    .btn{
      font-size: 1.4rem;
      &:not(.btn-success){
        color: ${props => props.theme.text};
      }
    }
  }
`;
