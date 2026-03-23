import { styled } from "styled-components";
import svgs from '../Assets/svgs'

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container d-flex gap-4 justify-content-end align-items-center | footer-contents">
        <a href="https://www.linkedin.com/in/shad-jafar-azmi-588443205" target="_blank" rel="noreferral" className="linkedin">
          {svgs.linkedIn}
        </a>
        <a href="#" className="twitter">
          {svgs.twitter}
        </a>
        <a href="#" className="facebook">
          {svgs.facebook}
        </a>
        <a href="#" className="instagram">
          {svgs.instagram}
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  --sz1: 3rem;
  --sz2: 2.5rem;
  width: 100dvw;

  background-color: ${props => props.theme.footer};
  box-shadow: inset 0 0 0.1rem 0 ${(props) => props.theme.border};
  .footer-contents {
    height: 6rem;
    .linkedin,
    .instagram {
      svg {
        height: var(--sz1);
        width: var(--sz1);
      }
    }
    .facebook,
    .twitter {
      svg {
        height: var(--sz2);
        width: var(--sz2);
      }
    }
  }
`;
