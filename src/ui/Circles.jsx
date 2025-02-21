import styled from "styled-components";


const CirclesContainer = styled.div`
  * {
    position: absolute;
    border-radius: 50%;
    aspect-ratio: 1;
  }
`;
const CircleOne = styled.div`
  width: clamp(5rem, 10cqi, 15rem);
  background-image: linear-gradient(to top, #ffac24, #ffd788);
  top: -6cqi;
  left: 50%;
`;
const CircleTwo = styled.div`
  width: clamp(2rem, 4cqi, 6rem);
  background-image: linear-gradient(to bottom, #ffac24, #ffd788);
  bottom: 15rem;
  left: 7rem;
`;
const CircleThree = styled.div`
  width: clamp(5rem, 10cqi, 16rem);
  background-image: linear-gradient(to right, #553ddd, #7f69e8);
  top: 50%;
  right: -5cqi;
`;
const CircleFour = styled.div`
  width: clamp(1rem, 1cqi, 2rem);
  background-image: linear-gradient(to left, #dd133f, #fd4069);
  top: 30%;
`;

function Circles() {
  return (
    <CirclesContainer>
      <CircleOne></CircleOne>
      <CircleTwo></CircleTwo>
      <CircleThree></CircleThree>
      <CircleFour></CircleFour>
    </CirclesContainer>
  );
}

export default Circles;
