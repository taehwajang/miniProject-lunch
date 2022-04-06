import { Button, Input } from "@mui/material";

import React, { useState } from "react";
import styled from "styled-components";
import Header from "./component/header";
import Menu from "./component/menu";
import User from "./component/user";
import {
  ChineseFood,
  JapaneseFood,
  KoreanFood,
  snackFood,
  users,
  nextFood,
} from "./data/data";

const App = () => {
  interface NextFoodProps {
    name: string;
    kind: string;
  }

  const nextFoodFilter = nextFood.filter((food, idx) =>
    Math.floor(Math.random() * nextFood.length + 1)
  );

  const returnName = nextFood.map((food, idx) => {
    if (idx === Math.floor(Math.random() * nextFood.length + 1)) {
      return (
        <div>
          {food.name} - {food.kind}
        </div>
      );
    }
  });
  console.log(returnName);

  return (
    <Rayout>
      <Header />
      <Main>
        <div>
          {nextFood.map((food, idx): any => {
            return (
              <FoodInfo key={idx}>
                <div>{idx + 1} .</div>
                <div>{food.name}</div>
                <div>{food.kind}</div>
              </FoodInfo>
            );
          })}
        </div>
        <>
          <p>점심 랜덤으로 고르기</p>
          <Button
            variant="outlined"
            color="secondary"
            style={{ height: "100%" }}
          >
            누르기
          </Button>
          <h1>추천음식은? </h1>

          <h2>{returnName}</h2>
        </>
      </Main>
    </Rayout>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: auto;
  border: 1px solid red;
`;
const FoodInfo = styled.div`
  display: flex;
  gap: 15px;
`;

const Rayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
