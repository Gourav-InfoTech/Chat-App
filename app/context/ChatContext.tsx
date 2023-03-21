"use client";
import React, { createContext, useState, useContext } from "react";

const Ctx = createContext<{
  show: boolean;
  showIt: string;
  ShowReply: () => void;
  myMsg: any[];
  setMyMsg: React.Dispatch<React.SetStateAction<any[]>>;
  deleteMsg: (s: number) => void;
  formatTime: (s: number) => string;
  saveId: number;
  setSaveId: React.Dispatch<React.SetStateAction<number>>;
  replyData: (s: number) => void;
  trial: any;
}>({
  show: false,
  showIt: "",
  ShowReply: () => {},
  setMyMsg: () => {},
  myMsg: [],
  deleteMsg: () => {},
  formatTime: () => "",
  saveId: 0,
  setSaveId: () => {},
  replyData: () => {},
  trial: "",
});

const ChatContext = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const [myMsg, setMyMsg] = useState<any[]>([]);
  const [saveId, setSaveId] = useState<number>(0);
  const [trial, setTrial] = useState("");

  const ShowReply = () => {
    setShow(!show);
    // myMsg.map((el) => { return { ...el, replies : [...el.replies, {reply : "hi"}]} })
  };

  const replyData = (id: number) => {
    myMsg.filter((el: any) => {
      if (el.id === id) {
        setTrial(el.text);
      }
    });
  };

  const deleteMsg = (id: any) => {
    // setMyMsg(myMsg.filter((el)=> el.id !== id ))
    myMsg.map((el) =>
      el.id == id ? (el.text = "Message was deleted") : { ...el }
    );
    setSaveId(0);
  };

  const formatTime = (timeStamp: number) => {
    var hours = new Date(timeStamp).getHours();
    var minutes: string | number = new Date(timeStamp).getMinutes();
    var AmPm = hours >= 12 ? "PM" : "AM";
    minutes = minutes < 9 ? "0" + minutes : minutes;

    return `${hours}:${minutes} ${AmPm}`;
  };

  const showIt = show ? "block" : "hidden";
  console.log(myMsg);

  return (
    <Ctx.Provider
      value={{
        show,
        showIt,
        ShowReply,
        myMsg,
        setMyMsg,
        deleteMsg,
        formatTime,
        saveId,
        setSaveId,
        replyData,
        trial,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export default ChatContext;

export function useCtx() {
  return useContext(Ctx);
}
