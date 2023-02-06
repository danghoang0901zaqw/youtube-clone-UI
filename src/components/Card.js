import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 290px;
  margin-bottom: 5px;
  cursor: pointer;
  padding 5px;
  display:${(props) => props.type === "sm" && "flex"};
`;
const Img = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "200px")};
  object-fit: contain;
`;

const Detail = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 10px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ChannelName = styled.h2`
  font-size: 14px;
  margin: 10px 0;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
function Card({ type }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img
          type={type}
          src="https://i.ytimg.com/vi/uq_4AYdVcvs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuiIN-FvA0aRmJCFVyHslJFUgJAw"
        />
        <Detail type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/cy-e4sJD7488A3fv7QCOsMFjemOYJnviIIAMTnbAb2wq6iIiOs-DMbPKEH7lZEzRXuRD-KKwEw=s68-c-k-c0x00ffffff-no-rj"
          />
          <Texts>
            <Title>
              GIẬT BẮN MÌNH VỚI SỐ TIỀN SIÊU ĐẮT ĐỎ ĐỂ TỚI QATAR XEM WORLD CUP
            </Title>
            <ChannelName>BLV Anh Quân News</ChannelName>
            <Info>1,4K Views • 1 day ago</Info>
          </Texts>
        </Detail>
      </Container>
    </Link>
  );
}

export default Card;
