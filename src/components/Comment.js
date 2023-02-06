import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 30px 0;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

`;
const Date = styled.span`
  font-weight: 300;
  font-size: 14px;
  margin-left: 10px;
  color: ${({ theme }) => theme.textSoft};

`;
const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};

`;
function Comment() {
  return (
    <Container>
      <Image src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s88-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>
          VTV Go<Date> 3 days ago</Date>
        </Name>
        <Text>
          First of all thanks a lot for this awesome tutorial brother and "AWS
          s3" storage service would be great. Please do that for us. All the
          best. Take love ❤
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
