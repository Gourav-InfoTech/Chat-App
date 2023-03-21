"use client";
import React from "react";
import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import InputBar from "./InputBar";
import { useCtx } from "../context/ChatContext";

const Reply = () => {
  const { showIt, ShowReply, myMsg, trial } = useCtx();

  return (
    <div className={`${showIt} h-[100vh] bg-[#282a2d]`}>
      <ReplyDiv>
        <ThreadHeader>
          <div className="info">
            <h2 className="font-bold"> Reply</h2>
          </div>
          <button onClick={() => ShowReply()}>
            <IoMdClose />
          </button>
        </ThreadHeader>
        <div className="receiving_chat_card flex gap-3">
          <div className="imgSec">
            <img src="/assets/person.jpeg" alt="img" />
          </div>
          <div>
            <div className="message inline-block">
              <p>{trial}</p>
            </div>
            <div className="msg_info flex text-[#72767E] text-[12px]">
              <p>frosty-scene-9 </p>
              <p> Today at 12:02 AM</p>
            </div>
          </div>
        </div>
        {/* <InputBar /> */}
      </ReplyDiv>
    </div>
  );
};

export default Reply;
const ReplyDiv = styled.div`
  min-width: 300px;

  .receiving_chat_card {
    padding: 30px 20px;

    .imgSec img {
      border-radius: 50%;
      width: 32px;
    }

    .message p {
      color: whitesmoke;
      border-radius: 15px;
      background-color: #343434;
      padding: 5px 20px;
      border-bottom-left-radius: 0;
    }

    .actions button {
      color: #72767e;
      font-size: 15px;
      border-radius: 50%;
      padding: 10px;
      /* aspect-ratio: 1; */

      &:hover {
        background-color: #212326;
      }
    }
  }
`;

const ThreadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e3033;
  height: 60px;
  width: 100%;
  padding: 10px 20px;

  & button {
    font-size: 30px;
    color: whitesmoke;
    padding: 7px;
    border-radius: 50%;

    &:hover {
      background-color: #3e3e41;
    }
  }

  .info {
    display: flex;
    align-items: center;
    color: whitesmoke;
    gap: 10px;
  }
`;
