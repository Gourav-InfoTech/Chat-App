"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import InputBar from "./InputBar";
import { useCtx } from "../context/ChatContext";

const Reply = () => {
  const { showIt, ShowReply, myMsg, setMyMsg, toReply } = useCtx();
  const [text, setText] = useState("");
  const [replies, setReplies] = useState<any[]>([]);
  console.log(myMsg[toReply.index], "index");

  const InputChange = (e: any) => {
    setText(e.target.value);
  };

  const onSend = () => {
    const updatedMyMsg = myMsg.map((el) => {
      if (el.id === toReply?.id) {
        return {
          ...el,
          reply: el?.reply ? [...el?.reply, { text: text }] : [{ text: text }],
        };
      } else {
        return el;
      }
    });
    setMyMsg(updatedMyMsg);
    setText("");
  };

  function onImage(f: any) {
    const updatedMyMsg = myMsg.map((el) => {
      if (el.id === toReply?.id) {
        return {
          ...el,
          reply: el?.reply ? [...el?.reply, { file: f }] : [{ file: f }],
        };
      } else {
        return el;
      }
    });
    setMyMsg(updatedMyMsg);
    setText("");
  }

  function keypressHandler() {}

  return (
    <div className={`${showIt} h-[100vh] bg-[#282a2d]`}>
      <ReplyDiv>
        <ThreadHeader>
          <div className="info">
            <h2 className="font-bold">Reply</h2>
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
              {toReply?.text && <p>{toReply?.text}</p>}
              {toReply?.file && (
                <img
                  src={URL.createObjectURL(toReply?.file)}
                  alt=""
                  height={100}
                  width={100}
                />
              )}
            </div>
            <div className="sender">
              {myMsg[toReply.index]?.reply?.map((el: any, indx: any) => {
                return (
                  <div className="message" key={indx}>
                    {el.text && <h1>{el.text}</h1>}
                    {el.file && (
                      <img
                        src={URL.createObjectURL(el?.file)}
                        alt="replyImg"
                        height={100}
                        width={100}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="msg_info flex text-[#72767E] text-[12px]">
              <p>frosty-scene-9 </p>
              <p> Today at 12:02 AM</p>
            </div>
          </div>
        </div>
        <InputBar
          onsend={onSend}
          onimage={onImage}
          text={text}
          inputChange={InputChange}
          keypresshandler={keypressHandler}
        />
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
      max-width: 322px;
      word-break: break-all;
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

  .sender {
    display: flex;
    flex-direction: column;
    align-items: end;

    .message {
      max-width: 322px;
      word-break: break-all;
      color: whitesmoke;
      border-radius: 15px;
      background-color: #343434;
      padding: 5px 20px;
      border-bottom-right-radius: 0;
      margin-top: 5px;
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

// setMyMsg((el: any) => [...el, (el[0].text2 = "hello2")]);

// setMyMsg((el: any)=> [...el, {}])

//       setMyMsg((prev)=> [ ...prev , { ...el, replies : [...el.replies, {
//         text: Text
//   }]
// }])

// function onSend() {
//   // myMsg.map((el) => { return { ...el, replies : [...el.replies, {reply : "hi"}]} })
//     setReplies((reply: any) => [...reply, { text: text }]);

//     myMsg.map((el) => {
//       if (el.id === toReply.id) {
//         // el.reply = [ ...el.reply, {text: text}]
//         el.reply = replies;
//       }
//     });
//     setText("")
// }
