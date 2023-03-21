"use client";
import React from "react";
import styled from "styled-components";
import Groups from "./Groups";
import User from "./User";

const Sidebar = () => {
  return <SidebarDiv>
    <div className="user_info">
      <User />
    </div>
    <div>
    <Groups />
    </div>
  </SidebarDiv>;
};

export default Sidebar;

const SidebarDiv = styled.div`
  background-color: #212326;
  /* width: 330px; */
  min-width: 330px;
  height: 100vh;
`;
