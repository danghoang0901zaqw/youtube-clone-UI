import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color:transparent;
  border-bottom:1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  padding:5px;

`;
function Comments() {
  return (
    <Container>
      <NewComment>
        <Image src="https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s88-c-k-c0x00ffffff-no-rj" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
}

export default Comments;
