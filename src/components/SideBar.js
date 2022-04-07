import { Create, FiberManualRecord } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function SideBar() {
  const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
  `;
  const SideBarHeader = styled.div`
    display: flex;
    border-top: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
  `;
  const SideBarInfo = styled.div`
    flex: 1;
     
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
  `;
  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
           <h2>WeChat HQ</h2>
           <h3>
               <FiberManualRecord/>
               Jason Humphrey
               </h3>
        </SideBarInfo>
        <Create/>
      </SideBarHeader>
    </SideBarContainer>
  );
}

export default SideBar;
