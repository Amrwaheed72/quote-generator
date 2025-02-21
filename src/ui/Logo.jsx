import styled from "styled-components";
const Img = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 60px;
  border-radius: 50%;
  box-shadow: 1rem 2rem 2rem rgba(0, 0, 0, 0.2);
  /* position: absolute; */
  /* top: 1rem;
    left: 1rem; */
    @media (max-width:700px ) {
      display: none;
    }
`;
function Logo() {
  // const LogoContainer=styled.div`
  //   /* width: 100px; */
  //   background: transparent;
  // `
  return <Img src='amrorange.jpg' />;
}

export default Logo;
