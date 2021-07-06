//HappyBoi.js

//Ideas.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Styled from "styled-components";


export default function Ideas({ stuff }) {
  const ideasData = useSelector((reduxState) => reduxState.ideas);

  const dispatch = useDispatch();

  console.log(ideasData);
  const handleSelect = () => {
    dispatch({
      type: "SelectCategory",
      payload: "positive",
    });
  };
  return (
    <div>
      <p>Ideas</p>
      <button onClick={handleSelect}> "SelectCategory" </button>

    </div>


  );
}
