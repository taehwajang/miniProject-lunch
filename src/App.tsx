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

  return (
    <Rayout>
      <Header />
      <Main>
        <>
          <p>점심 랜덤으로 고르기</p>
          <Button
            variant="outlined"
            color="secondary"
            style={{ height: "100%" }}
          >
            누르기
          </Button>
        </>
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
      </Main>
    </Rayout>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: row;
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
