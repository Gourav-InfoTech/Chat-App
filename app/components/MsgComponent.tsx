"use client";
import React, { useState, useEffect } from "react";
import { BsReplyAllFill, BsThreeDots } from "react-icons/bs";
import { VscSmiley } from "react-icons/Vsc";
import styled from "styled-components";
import { useCtx } from "../context/ChatContext";

const MsgComponent = ({ el, index }: { el: any; index: number }) => {
  const [menu, setMenu] = useState(false);
  const {
    ShowReply,
    myMsg,
    deleteMsg,
    formatTime,
    saveId,
    setSaveId,
    replyData,
  } = useCtx();

  const diffFNC = (index: number) => {
    if (myMsg.length >= 2) {
      let msgA = myMsg[index]?.id;
      let msgB = myMsg[index + 1]?.id;
      let diff = (msgB - msgA) / (60 * 1000);
      diff = Number(diff.toFixed(0));
      return diff;
    }
  };

  // const DayDiff = (index: number)=>{
  //   if(myMsg.length >= 2){
  //     let msgA = myMsg[index]?.id;
  //     let msgB = myMsg[index + 1]?.id;
  //     let diff = (msgB - msgA) / (60 * 1000);
  //     diff = Number(diff.toFixed(0));
  //     return diff;
  //   }
  // }

  const showMenu = () => {
    if (el.id === saveId) {
      setMenu(!menu);
    }
  };

  return (
    <MsgComponentDiv>
        {/* {
          DayDiff(index) == 0 ? <p>New - Today</p> : DayDiff(index) == 1 ? <p> Yesterday </p> : DayDiff(index)! > 1 ? <p>Long Time Ago</p>: <p>{`New - ${formatTime(el.id)}`}</p>
        } */}

        {/* <p> New - { DayDiff(index) = 0 ? "Today" : DayDiff(index) = 1 ? "Yesterday" :  DayDiff(index) > 1 ? "Long Time Ago" } </p> */}
      
      <div
        className={`sender_chat_card group/item flex flex-col p-[2px] justify-end `}
      >
        <div className="flex relative justify-end">
          <div
            className={`action_menu absolute -top-[170px] right-[130px] rounded-lg text-[whitesmoke] ${
              el.id === saveId ? "visible" : "invisible"
            }`}
          >
            <ul>
              <li>
                <button>Flag</button>
              </li>
              <li>
                <button>Mute</button>
              </li>
              <li>
                <button>Edit Message</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setMenu(false), deleteMsg(saveId);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
          <div className="group/edit invisible actions flex flex-row-reverse items-baseline group group-hover/item:visible">
            <button>
              <VscSmiley />
            </button>
            <button
              onClick={() => {
                ShowReply(), replyData(el.id,index);
              }}
            >
              <BsReplyAllFill />
            </button>
            <button
              onClick={() => {
                setSaveId(() => (el.id === saveId ? 0 : el.id));
                showMenu();
              }}
            >
              <BsThreeDots />
            </button>
          </div>

          <div className="message">
            {el?.text && <p>{el?.text}</p>}
            {el?.file && (
              <img
                src={URL.createObjectURL(el?.file)}
                alt=""
                height={100}
                width={100}
              />
            )}
          </div>
        </div>

        {diffFNC(index) !== 0 ? (
          <div className="msg_info flex justify-end text-[#72767E] text-[12px] pb-2">
            <p>frosty-scene </p> <p>Today at {formatTime(el?.id)}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </MsgComponentDiv>
  );
};

export default MsgComponent;

const MsgComponentDiv = styled.div`
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

  .sender_chat_card {
    margin-inline: 40px;
      

    .message p {
      max-width: 322px;
      word-break: break-all;
      color: whitesmoke;
      border-radius: 15px;
      background-color: #343434;
      padding: 5px 20px;
      border-bottom-right-radius: 0;
    }

    .actions button {
      color: #72767e;
      font-size: 15px;
      border-radius: 50%;
      padding: 10px;

      &:hover {
        background-color: #212326;
      }
    }

    .action_menu {
      background: rgb(29, 29, 29);
      background: linear-gradient(
        0deg,
        rgba(29, 29, 29, 1) 62%,
        rgba(50, 50, 50, 1) 100%
      );

      & ul {
        padding: 10px;
        & li {
          margin: 10px 0px;
        }
      }
    }
  }
`;
