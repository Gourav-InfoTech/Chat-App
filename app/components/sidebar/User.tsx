"use client";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";

const User = () => {
  return (
    <UserDiv>
      <div className="user_card flex items-center gap-3">
        <img src="/assets/user.jpeg" alt="hi" />
        <p className="text-white font-bold">icy-frost-8</p>
      </div>
      <div className="edit_icon">
        <button>
            <AiOutlineEdit />
        </button>
      </div>
    </UserDiv>
  );
};

export default User;

const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .user_card {
  }

  .user_card img {
    border-radius: 50%;
    height: 40px;
  }

  .edit_icon button{
    border-radius: 50%;
    font-size: 30px;
    color: white;
    padding: 8px;

    &:hover{
        background-color: #3e3e41;
    }
  }
`;
