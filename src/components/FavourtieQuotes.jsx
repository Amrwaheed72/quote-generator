import { FaRegCircleXmark } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuoteApp } from "../context/QuoteAppContext";
import toast from "react-hot-toast";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #ffac24, #ffd788);
  display: grid;
  place-items: center;
`;
const QuotesApp = styled.div`
  width: 90vmin;
  aspect-ratio: 3/2;
  background-color: #212226;
  border-radius: 3rem;
  padding: 4rem;
  box-shadow: -2rem 2rem 6rem rgba(0, 0, 0, 0.6);
  position: relative;
  @media (max-width: 880px) {
    width: 70vmin;
    aspect-ratio: 2/2.5;
  }
  @media (max-width: 702px) {
    width: 80vmin;
    aspect-ratio: 2/2.5;
  }
  @media (max-width: 570px) {
    width: 90vmin;
    aspect-ratio: 2/2.5;
  }
  @media (max-width: 420px) {
    width: 95vmin;
    aspect-ratio: 2/2.5;
  }
`;

const Favourites = styled.div`
  border-radius: 3rem;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to left, #1b9b96, #2e6f79);
  padding: 3rem 7rem 3rem 3rem;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    border-radius: 3rem;
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #2e2f34;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #1b9b96, #2e6f79);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #1b9b96, #2e6f79);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;
const CloseIcon = styled(HiOutlineXMark)`
  font-size: 3rem;
  stroke: #ddd;
`;
const FavQuote = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: 2rem;
`;
const FavQuoteDelete = styled.div``;
const FavQuoteDeleteIcon = styled(FaRegCircleXmark)`
  font-size: 3rem;
  cursor: pointer;
  stroke: #f06b5f;
  fill: #f06b5f;
`;
const FavQuoteContent = styled.div``;
const FavQuoteText = styled.div`
  font-size: 2rem;
  color: #ddd;
`;
const FavQuoteAuther = styled.div`
  font-family: "Merienda", cursive;
  text-align: right;
  color: #313131;
`;
const H1 = styled.h1`
  font-family: "Merienda", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ddd;
`;
const H3 = styled.h3`
  font-family: "Merienda", sans-serif;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ddd;
  text-decoration: underline;
  cursor: pointer;
`;
function FavourtieQuotes() {
  const { favourites, setFavourites } = useQuoteApp();

  const navigate = useNavigate();
  return (
    <Container>
      <QuotesApp>
        <Favourites>
          <CloseButton>
            <CloseIcon title="go back" onClick={() => navigate("/")} />
          </CloseButton>
          {favourites.length === 0 ? (
            <>
              <H1>No Favourite Quotes</H1>
              <H3 onClick={() => navigate("/")}>Wanna add some ?</H3>
            </>
          ) : null}
          {favourites.map((fav, index) => (
            <FavQuote key={index}>
              <FavQuoteDelete>
                <FavQuoteDeleteIcon
                  onClick={() => {
                    setFavourites((quotes) =>
                      quotes.filter((quote) => quote !== fav)
                    );
                    toast.success("Quote removed from favourites");
                  }}
                />
              </FavQuoteDelete>
              <FavQuoteContent>
                <FavQuoteText>{fav.quote}</FavQuoteText>
                <FavQuoteAuther>{fav.author}</FavQuoteAuther>
              </FavQuoteContent>
            </FavQuote>
          ))}
        </Favourites>
      </QuotesApp>
    </Container>
  );
}

export default FavourtieQuotes;
