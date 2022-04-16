import { Button } from "@mui/material";

import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Header from "./component/header";
import { nextFood } from "./data/data";

const App = () => {
  const [count, setCount] = useState(1);
  const [foods, setFoods]: any = useState([]);
  const [foodRandomIsOpen, setFoodRandomIsOpen] = useState(false);

  const foodRandom =
    nextFood[Math.floor(Math.random() * nextFood.length + count)];

  const checkFoodRandom =
    foods[Math.floor(Math.random() * nextFood.length + 1)];

  const [checkedFoods, setCheckedFoods]: any = useState([]);
  const [checkedFoodRandomIsOpen, setCheckedFoodRandomIsOpen] = useState(false);
  console.log(checkFoodRandom);

  const removeContent = (e: any) => {
    const name = e.target.id;
    setCheckedFoods(checkedFoods.filter((e: any) => e !== name));
  };

  const checkedResultFood =
    checkedFoods[Math.floor(Math.random() * checkedFoods.length + 1)];
  console.log("CPZLEKQ", checkedResultFood);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          color: "purple",
        }}
      >
        오늘 뭐 먹을래?
      </div>
      <Rayout>
        <Main>
          <div style={{ border: "1px solid red" }}>
            <div style={{ fontSize: "30px" }}>전체 메뉴</div>
            {nextFood.map((food, idx): any => {
              return (
                <FoodInfo key={idx}>
                  <input
                    type="checkbox"
                    value={food.name}
                    onChange={(e) => {
                      e.target.checked
                        ? setCheckedFoods([...checkedFoods, e.target.value])
                        : setCheckedFoods(
                            checkedFoods.filter(
                              (item: any) => item !== e.target.value
                            )
                          );
                      // setFoods([...foods, e.target.value]);
                    }}
                  ></input>
                  <div>{food.name}</div>
                  <div>{food.kind}</div>
                </FoodInfo>
              );
            })}
          </div>
        </Main>
        <div>
          <ResultFoodBox>
            <p>점심 랜덤으로 고르기</p>
            <Button
              variant="outlined"
              color="secondary"
              style={{ height: "50px", width: "200px" }}
              onClick={() => {
                setFoodRandomIsOpen(!foodRandomIsOpen);
                setCount(count);
              }}
            >
              돌리기
            </Button>
            {foodRandomIsOpen === true
              ? "오늘의 점심은 ~! " + foodRandom.name
              : "오늘의 점심은 ~"}
          </ResultFoodBox>
        </div>
        <div>
          <div>선택한 메뉴만 고르기</div>

          <Button
            variant="outlined"
            style={{ width: "150px", height: "50px" }}
            onClick={() => {
              setCheckedFoodRandomIsOpen(!checkedFoodRandomIsOpen);
            }}
          >
            돌리기
          </Button>
          {checkedFoodRandomIsOpen === true
            ? "오늘의 점심은 ~! " + checkedResultFood
            : "오늘의 점심은 ~"}
          <div>
            {checkedFoods.map((food: any, idx: number) => {
              return (
                <div id={food.id} key={idx} style={{ display: "flex" }}>
                  <div>{food}</div>
                  <Button id={food} onClick={removeContent}>
                    X
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Rayout>
    </>
  );
};
const ResultFoodBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: auto;
`;
const FoodInfo = styled.label`
  display: flex;
  gap: 15px;
`;

const Rayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;

export default App;
