import styled from "@emotion/styled";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SeacrhOutLineIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background: inherit;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`;
const Button = styled.button`
  padding: 5px 15px;
  border: 1px solid #3ea6ff;
  background-color: transparent;
  color: #3ea6ff;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SeacrhOutLineIcon />
        </Search>
        <Link to="/login" style={{textDecoration:'none'}}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
