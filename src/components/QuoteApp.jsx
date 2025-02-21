import { FaHeart, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";
import { useQuote } from "./useQuote";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuoteApp } from "../context/QuoteAppContext";
import Circles from "../ui/Circles";

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
  overflow: hidden;
`;
const H1 = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 5rem;
  color: #ddd;
`;
const HeartIcon = styled(FaHeart)`
  position: absolute;
  top: 5rem;
  right: 5rem;
  cursor: pointer;
  font-size: 4rem;
  fill: #42a5b5;
  text-shadow: -0.3rem, 0.5rem, 2rem rgba(27, 155, 150, 0.3);
  &:active {
    transform: translateY(0.2rem);
  }
`;
const Quote = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
const QuoteLeftIcon = styled(FaQuoteLeft)`
  font-size: 3rem;
  fill: #ddd;
`;
const QuoteRightIcon = styled(FaQuoteRight)`
  font-size: 3rem;
  fill: #ddd;
  position: absolute;
  bottom: -5rem;
  right: 0;
`;
const P = styled.p`
  font-size: clamp(1.6rem, 2cqi, 2.5rem);
  color: #ddd;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 0.2rem;
  width: clamp(25rem, 35cqi, 50rem);
`;
const QutoeAuther = styled.p`
  font-family: "Merienda", sans-serif;
  font-size: 1.4rem;
  color: #888;
  text-align: right;
`;
const Buttons = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  column-gap: 2rem;
`;
const NewQuotesButton = styled.button`
  width: 18rem;
  height: 4rem;
  border-radius: 2rem;
  border: none;
  font-family: "cofortaa", sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  color: #ddd;
  letter-spacing: 0.1rem;
  box-shadow: 3rem 1rem 4rem rgba(0, 0, 0, 0.3);
  text-shadow: -0.3rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to left, #553ddd, #7f69e8);
  &:focus,
  &:active {
    outline: none;
  }

  &:active {
    transform: translateY(0.2rem);
  }
`;
const FavQuotesButton = styled(NewQuotesButton)`
  background-image: linear-gradient(to left, #2e6f79, #1b9b96);
`;

const QuoteApp = () => {
  const { favourites, setFavourites } = useQuoteApp();
  const { data, isPending, error, refetch } = useQuote();
  const navigate = useNavigate();
  if (isPending) return <Spinner />;
  if (error) return toast.error("Failed to fetch quote");

  const { quote, author } = data[0];
  const addFavQuote = () => {
    if (!data?.[0]) return;

    const isAlreadyFavourite = favourites.some(
      (fav) => fav.quote === data[0].quote
    );
    if (isAlreadyFavourite) {
      toast.error("Quote is already in favourites");
      return;
    }
    setFavourites((quotes) => [...quotes, data[0]]);
    toast.success("Quote added to favourites");
  };

  return (
    <Container>
      <QuotesApp>
        <H1>Quote.</H1>
        <HeartIcon onClick={() => navigate("/favourite")} />
        <Quote>
          <QuoteLeftIcon />
          <P>{quote}</P>
          <QutoeAuther>{author}</QutoeAuther>
          <QuoteRightIcon />
        </Quote>
        <Circles />
        <Buttons>
          <NewQuotesButton onClick={refetch} disabled={isPending}>
            New Quote
          </NewQuotesButton>
          <FavQuotesButton onClick={addFavQuote}>
            Add to Favourites
          </FavQuotesButton>
        </Buttons>
      </QuotesApp>
    </Container>
  );
};

export default QuoteApp;
