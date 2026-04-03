import { styled } from "styled-components";
import CustomButton from "./CustomButton";
import { useState } from "react";
import bg from '../Assets/Images/Modalbg.png';
import svgs from '../Assets/svgs';
const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return(
        <ModalContainer>
        <CustomButton text='Open Modal' onClick={handleClick} className={isOpen ? 'hide' : ''}/>
        {isOpen && (
            <StyledModal>
                <section className="modal-box">
                <section className="header">
                    <h1>This is a Modal </h1>
                    <button onClick={handleClick} className="no-style | close-button">{svgs.close}</button>
                </section>
                <hr/>
                <p className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                voluptate, doloremque, cumque, magnam quisquam corporis dicta
                deleniti consequatur sed nisi. Voluptas voluptate, doloremque,
                cumque, magnam quisquam corporis dicta deleniti consequatur sed
                nisi. Voluptas voluptate, doloremque, cumque, magnam quisquam
                corporis dicta deleniti consequatur sed nisi. Voluptas voluptate,
                doloremque, cumque, magnam quisquam corporis dicta deleniti
                consequatur sed nisi.
            </p>
            <hr/>
            <section className="modal-footer">
                <CustomButton text='Okay'onClick={handleClick}/>
                <CustomButton text='Close' onClick={handleClick}/>
            </section>
            </section>
            </StyledModal>
        )
        }
        </ModalContainer>
    )
}

const ModalContainer = styled.section`
    /* background-image: url(https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg); */
    background-image: url(${bg});
    background-size: cover;
    height: calc(100vh - 30rem);
    display: grid;
    place-items: center;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close-button{
        svg{
            path{
                fill: ${(props) => props.theme.text};
            }
        }
    }
    }
    `;

const StyledModal = styled.section`
    /* filter:blur(5px); */
    /* background-image: url(https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg); */
    background-size: cover;
    display:grid;
    place-items: center;
    .modal-box{
        background-color: ${(props) => props.theme.backgroundAccent}20;
        backdrop-filter: blur(2px);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 1rem 0 ${(props) => props.theme.backgroundAccentInverse};
        max-width: min(98vw,40rem);
        min-height: 20rem;
        .content{
            padding: 2rem 0;
            /* border-top: 0.1rem solid ${(props) => props.theme.backgroundAccentInverse};
            border-bottom: 0.1rem solid ${(props) => props.theme.backgroundAccentInverse}; */
            font-size:1.2rem;
        }
        .modal-footer{
            padding-top: 2rem;
            gap: 2rem;
        }
    }
`;

export default Modal;