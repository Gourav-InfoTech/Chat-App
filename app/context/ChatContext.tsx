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
  replyData: (s: number, i: number) => void;
  toReply: {
    text: string;
    file: any;
    id: number;
    index: number
  };
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
  toReply: {
    text: "",
    file: "",
    id: 0,
    index: 0
  },
});

const ChatContext = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const [myMsg, setMyMsg] = useState<any[]>([]);
  const [saveId, setSaveId] = useState<number>(0);
  const [toReply, setToReply] = useState({
    text: "",
    file: "",
    id: 0,
    index: -1
  });

  const ShowReply = () => {
    setShow(!show);
  };

  // console.log(myMsg[myMsg.length - 1], " length - 1");
  // console.log(myMsg[myMsg.length - 2], " length - 2 ");
  

  const replyData = (id: number, index: number) => {
    myMsg.filter((el: any) => {
      if (el.id === id) {
        if (el.text) {
          setToReply({ text: el.text, file: "",id: el.id, index: index });
        } else if (el.file) {
          setToReply({ file: el.file, text: "", id: el.id, index: index });
        }
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
        toReply,
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
