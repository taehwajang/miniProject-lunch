import { Button } from "@mui/material";

import React, { useState } from "react";
import styled from "styled-components";
import Header from "./component/header";
import { nextFood } from "./data/data";

const App = () => {
  const [foods, setFoods]: any = useState([]);

  const foodRandom = nextFood[Math.floor(Math.random() * nextFood.length + 1)];
  const checkFoodRandom = foods[Math.floor(Math.random() * foods.length + 1)];
  console.log(foods);
  console.log(checkFoodRandom);

  const removeFood = (e: any) => {
    console.log(e.target.getAttribute("name"));

    const name = e.target.getAttribute("name");
    setFoods(foods.filter((item: { name: any }) => item.name !== name));
  };
  return (
    <Rayout>
      <Main>
        <div>
          <h2>전체 메뉴</h2>
          {nextFood.map((food, idx): any => {
            return (
              <FoodInfo key={idx}>
                <input
                  type="checkbox"
                  value={food.name}
                  onChange={(e) => {
                    setFoods([...foods, e.target.value]);
                  }}
                ></input>
                <div>{idx + 1} .</div>
                <div>{food.name}</div>
                <div>{food.kind}</div>
              </FoodInfo>
            );
          })}
        </div>
      </Main>
      <div>
        <Header />
        <ResultFoodBox>
          <p>점심 랜덤으로 고르기</p>
          <Button
            variant="outlined"
            color="secondary"
            style={{ height: "50px", width: "200px" }}
            onClick={checkFoodRandom}
          >
            누르기
          </Button>
          {/* <h2>
            {foodRandom.id}. {foodRandom.name} -{foodRandom.kind}
          </h2> */}
          {checkFoodRandom}
        </ResultFoodBox>
      </div>
      <div>
        {foods.map((food: any, idx: number) => {
          return (
            <div id={food.id} key={idx} style={{ display: "flex" }}>
              <div>{food}</div>
              <Button onClick={removeFood}>X</Button>
            </div>
          );
        })}
      </div>
    </Rayout>
  );
};
const ResultFoodBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: auto;
`;
const FoodInfo = styled.div`
  display: flex;
  gap: 15px;
`;

const Rayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export default App;
