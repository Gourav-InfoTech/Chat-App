"use client";
import React from "react";
import styled from "styled-components";

const Groups = () => {
  return (
    <div className="bg-[#2c2c30] rounded-[8px] mx-4">
      <GroupsDiv>
        <div className="group_image">
          <img src="/assets/group.svg" alt="" />
        </div>
        <div className="group_info">
          <div className="flex justify-between">
            <h2>Group Chat</h2>
            <p>Time</p>
            {/* <p>{new Date().toLocaleTimeString()}</p> */}
          </div>
          <p>hi</p>
        </div>
      </GroupsDiv>
    </div>
  );
};

export default Groups;

const GroupsDiv = styled.div`
font-family: "Helvetica";
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 0.75rem;
  
  .group_image img {
    border-radius: 50%;
    width: 45px;
  }

  .group_info {
    width: 100%;

    & h2 {
      color: whitesmoke;
      letter-spacing: 0.1px;
      font-weight: 500;
      font-size: 15px;
    }

    & p {
      color: #858688;
      font-size: 14px;
    }
  }
`;
