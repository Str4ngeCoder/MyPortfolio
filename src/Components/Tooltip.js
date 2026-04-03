import { styled } from "styled-components";
import bg from "../Assets/Images/Modalbg.png";
export const Tooltip = () => {
    return (
        <>
        <TooltipDemo className="d-flex justify-content-center align-items-start">
            <span className="pill">Hover for Tooltip</span>
            <section className="custom-tooltip">
                <b>This is a Tooltip</b>
                <hr/>
                <section className="tooltip-content">
                    <p>This is the content of the tooltip. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>
            </section>
            {/* <span className="arrow"></span> */}
        </TooltipDemo>
        </>
    );
};

const TooltipDemo = styled.section`
background-image: url(https://mcdn.wallpapersafari.com/medium/38/75/oZfW9X.jpg);
background-size: cover;
background-position: center;
height: calc(100vh - 30rem);
padding: 5rem;
.pill{
    border-radius: 100vw;
    background-color: ${(props) => props.theme.backgroundAccentInverse};
    color: ${(props) => props.theme.textInverse};
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    anchor-name: --hover-for-tooltip;
    cursor: default;
    &:hover + .custom-tooltip{
        visibility: visible;
        opacity: 1;
    }
}
.custom-tooltip{
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: calc(anchor(--hover-for-tooltip bottom) + 0.8rem);
    left: calc(anchor(--hover-for-tooltip left) + 1rem);
    right: calc(anchor(--hover-for-tooltip right) - 5rem);
    background-color: ${(props) => props.theme.backgroundAccent}20;
    backdrop-filter: blur(2px);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${(props) => props.theme.backgroundAccentInverse};
    font-size: 1.2rem;
    /* anchor-name: --tooltip-box;    */
    z-index: 10;
}
/* .arrow{
    position: absolute;
    border: 1rem solid ${(props) => props.theme.backgroundAccentInverse}E0;
    rotate: 45deg;
    top: calc(anchor(--tooltip-box  top) - 0.6rem);
    left: calc(anchor(--tooltip-box left) + 1rem);
   
} */
`;
