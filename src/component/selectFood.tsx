import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

interface SelectFoodProps {
    data?: {
        id?: number;
        name?: string;
        kind?: string;
    }[];
    checkedFoods?: {}[];
}

export const SelectFood = ({ data, checkedFoods }: SelectFoodProps) => {
    const checkValueFood = checkedFoods && checkedFoods[Math.floor(Math.random() * checkedFoods.length)];
    const [checkValueIsOpen, setCheckValueIsOpen] = useState(false);
    return (
        <ResultFoodBox>
            <div
                style={{
                    fontSize: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                선택한 메뉴만 고르기
            </div>
            <Button
                variant="outlined"
                style={{ width: '150px', height: '50px' }}
                onClick={() => {
                    setCheckValueIsOpen(!checkValueIsOpen);
                }}
            >
                돌리기
            </Button>
            <h3>오늘의 점심은 ~!</h3>
            <div style={{ color: 'blue', fontWeight: 'bold', fontSize: '25px' }}>{checkValueIsOpen && checkValueFood}</div>
            <div>
                {checkedFoods?.map((food, idx) => {
                    return (
                        <div key={idx} style={{ width: '200px', display: 'flex', margin: ' 10px 0' }}>
                            <div>{food}</div>
                        </div>
                    );
                })}
            </div>
        </ResultFoodBox>
    );
};

const ResultFoodBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
