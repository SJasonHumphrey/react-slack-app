import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { AccessTime, Search } from "@mui/icons-material";

function Header() {
  const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
  `;
  const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
  `;
  const HeaderRight = styled.div`
  `;
  const HeaderSearch = styled.div`
  `;
  const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
  `;
  return (
    <HeaderContainer>
      <HeaderLeft>
          <HeaderAvatar/>
          <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
      <input type="text" placeholder="Search"/>
          <Search/>
      </HeaderSearch>
      <HeaderRight></HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
