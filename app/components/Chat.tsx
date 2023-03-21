"use client";
import React, { useState, useId, useEffect } from "react";
import styled from "styled-components";
import { BsThreeDots, BsReplyAllFill } from "react-icons/bs";
import { VscSmiley } from "react-icons/Vsc";
import { useCtx } from "@/app/context/ChatContext";
import MsgComponent from "./MsgComponent";
import InputBar from "./InputBar";

const Chat = () => {
  const { ShowReply, myMsg,setMyMsg } = useCtx();
  const [text, setText] = useState<any>("");

  const keypressHandler = (e: any)=>{
    if(e.keyCode === 13){
      onSend();
    }
  }

function onSend() {
  if (text) {
    setMyMsg((prev) => [...prev, { text, id: Date.now() }]);
  }
  setText("");
}


const onImage = (f: any) => {
  setMyMsg((prev) => [...prev, { file: f, id: Date.now() }]);
};


  return (
    <ChatDiv>
      <div className="hr flex items-center">
        <hr />
        <p> New - Today </p>
      </div>

      {/* receiving card*/}

      <div className="receiving_chat_card group/item flex gap-3">
        <div className="imgSec">
          <img src="/assets/person.jpeg" alt="" />
        </div>
        <div>
          <div className="flex gap-3">
            <div className="message">
              <p>hi</p>
            </div>
            <div className="group/edit invisible actions flex group group-hover/item:visible">
              <button>
                <VscSmiley />
              </button>
              {/* <button onClick={()=>ShowReply()}>
                <BsReplyAllFill />
              </button> */}
              <button>
                <BsThreeDots />
              </button>
            </div>
          </div>
          <div className="msg_info flex text-[#72767E] text-[12px]">
            <p>frosty-scene-9 </p>
            <p> Today at 12:02 AM</p>
          </div>
        </div>
      </div>

      {/* sender card */}

      <div className="">
        {myMsg &&
          myMsg.map((el, index) => {
            return <MsgComponent key={index} el={el} index={index} />;
          })}
      </div>

      <div className="input_bar absolute bottom-0 w-full">
        <InputBar onsend={onSend} onimage={onImage} text={text} settext={setText} keypresshandler={keypressHandler}/>
      </div>
    </ChatDiv>
  );
};
export default Chat;

const ChatDiv = styled.div`
  position: relative;
  background-color: #282a2d;
  height: calc(100vh - 60px);
  overflow: auto;

  .hr {
    padding: 40px;
  }

  .hr hr {
    color: none;
    border-top: 1px solid #72767e;
    flex: 1;
    margin-inline: 20px;
  }

  .hr p {
    font-size: 14px;
    color: #72767e;
  }

  .receiving_chat_card {
    margin-inline: 40px;

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

// console.log(diff());

// diff()

// useEffect(() => {
//   for (let i = 0; i < myMsg.length; i++) {
//     console.log(myMsg[i]?.id);

//     let msgA = minuteDifference(myMsg[i]?.id);
//     let msgB = minuteDifference(myMsg[i+1]?.id);

//     console.log(msgA);
//     console.log(msgB);

//     if (msgA - msgB == 0) {
//       setTimeBar(false);
//     } else if (msgA - msgB != 0) {
//       setTimeBar(true);
//     }
//   }
// }, [myMsg]);

// let lastMsgDiff = minuteDifference(lastMsg)
// let firstMsgDiff = minuteDifference(firstMsg)

// TotalDiff = lastMsgDiff - firstMsgDiff
// console.log(TotalDiff);

// console.log(minuteDifference(1679290511016),"----------")

// let TotalDiff: number;

// const diff = (id: number)=>{
// let firstMsg = myMsg[myMsg.length - 2]?.id;
// let lastMsg = id;

// const difference = (lastMsg - firstMsg) / (60 * 1000);
// return Number(difference.toFixed(0));

// }

// let showBar = timeBar ? "block" : "hidden";

// const minuteDifference = () => {
//   const timeNow = Date.now();
//   const oldTime = myMsg[myMsg.length - 1].id;
//   const difference = (timeNow - oldTime) / (60 * 1000);
//   return Number(difference.toFixed(0));
// };
