import styled from "@emotion/styled";
import { useAppSelector } from "hooks/useSelector";

const Head = styled.h1`
  font-size: 200px;
`;

const Home = () => {
  const { number } = useAppSelector((state) => state.counter);
  console.log(number);
  return <Head>{number}</Head>;
};

export default Home;
