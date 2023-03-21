"use client";
import React from "react";
import styled from "styled-components";

const ChatHeader = () => {
  return (
    <ChatHeaderDiv>
      <div className="info">
        <img src="/assets/group.svg" alt="" />
        <h2 className="font-bold">Group chat</h2>
      </div>
    </ChatHeaderDiv>
  );
};

export default ChatHeader;

const ChatHeaderDiv = styled.div`
  background-color: #2e3033;
  height: 60px;
  width: 100%;
  padding: 10px 20px;

  .info {
    display: flex;
    align-items: center;
    color: whitesmoke;
    gap: 10px;

    & img {
      border-radius: 50%;
      width: 40px;
    }
  }
`;
