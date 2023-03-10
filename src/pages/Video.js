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
          GI???T B???N M??NH V???I S??? TI???N SI??U ?????T ????? ????? T???I QATAR XEM WORLD CUP
        </Title>
        <Detail>
          <Info>637 l?????t xem ??? 21 thg 11, 2022</Info>
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
              <ChannelName>BLV Anh Qu??n News</ChannelName>
              <ChannelCounter>101K Subcribers</ChannelCounter>
              <ChannelDesc>
                ?????i v???i m???t s??? ng?????i h??m m??? b??ng ????, World Cup l?? m???t chuy???n
                phi??u l??u m?? ?????i ng?????i kh??ng c?? m???y l???n ???????c tr???i qua. V???i h???,
                c?? m???t ??? ???? l?? ??i???u b???t bu???c, b???t k??? c??i gi?? ph???i tr??? ra sao. ???
                k??? C??p b??ng ???? th??? gi???i l???n n??y, c??i gi?? ???y ch???c ch???n s??? v?? c??ng
                ?????t ?????.
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
