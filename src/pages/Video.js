import {
  AddTaskOutlined,
  ReplyAllOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import Card from "../components/Card";
import Comments from "../components/Comments";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 20px 0;
  color: ${({ theme }) => theme.text};
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.text};
  margin-left: 14px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.bgLighter};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
  // align-items: center;
  // justify-content: space-between;
`;
const ChannelImgage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 700;
`;
const ChannelCounter = styled.span`
  margin: 5px 0 15px 0;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const ChannelDesc = styled.p`
  font-size: 14px;
`;
const Subcribe = styled.button`
  background: #cc1a00;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;
function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/uq_4AYdVcvs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>
          GIẬT BẮN MÌNH VỚI SỐ TIỀN SIÊU ĐẮT ĐỎ ĐỂ TỚI QATAR XEM WORLD CUP
        </Title>
        <Detail>
          <Info>637 lượt xem • 21 thg 11, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlined />
              1,5 N
            </Button>
            <Button>
              <ThumbDownAltOutlined />
              432
            </Button>
            <Button>
              <ReplyAllOutlined />
              Share
            </Button>
            <Button>
              <AddTaskOutlined />
              Save
            </Button>
          </Buttons>
        </Detail>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImgage src="https://yt3.ggpht.com/cy-e4sJD7488A3fv7QCOsMFjemOYJnviIIAMTnbAb2wq6iIiOs-DMbPKEH7lZEzRXuRD-KKwEw=s68-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName>BLV Anh Quân News</ChannelName>
              <ChannelCounter>101K Subcribers</ChannelCounter>
              <ChannelDesc>
                Đối với một số người hâm mộ bóng đá, World Cup là một chuyến
                phiêu lưu mà đời người không có mấy lần được trải qua. Với họ,
                có mặt ở đó là điều bắt buộc, bất kể cái giá phải trả ra sao. Ở
                kỳ Cúp bóng đá thế giới lần này, cái giá ấy chắc chắn sẽ vô cùng
                đắt đỏ.
              </ChannelDesc>
            </ChannelDetail>
          </ChannelInfo>
          <Subcribe>SUBCRIBE</Subcribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
        <Card type={'sm'}/>
      </Recommendation>
    </Container>
  );
}

export default Video;
