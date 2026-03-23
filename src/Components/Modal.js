import { styled } from "styled-components";
const Modal = () => {
    return(
        <>
        <StyledModal>
            <section className="modal-box"></section>
        </StyledModal>
        </>
    )
}

const StyledModal = styled.section`
    /* filter:blur(5px); */
    background-color: ${(props) => props.theme.backgroundAccentInverse}4D;
    display:grid;
    place-items: center;
    height: 100%;
    .modal-box{
        background-color: ${(props) => props.theme.backgroundAccent};
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 0 1rem 0 ${(props) => props.theme.backgroundAccentInverse};
        min-width: min(98vw,40rem);
        min-height: 20rem;
    }
`;

export default Modal;