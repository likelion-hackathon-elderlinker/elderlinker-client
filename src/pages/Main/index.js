import React from "react";
import styled from "styled-components";

import MainBackground from "../../assets/images/main.png";

function Main() {
    return (
        <>
            <Intro>
                <Wrap>
                    <Title>
                        디지털 격차를 해소하기 위한
                        <br />
                        연결 통로
                        <TitleName> ‘에더링커’</TitleName>
                    </Title>
                    <Description>
                        컴퓨터 사용법, 스마트폰 사용법, 질병에 관한 정보 등을
                        습득할 수 있습니다.
                    </Description>
                    <StartButton>시작하기</StartButton>
                </Wrap>
            </Intro>
            <Shortcut>
                <Wrap></Wrap>
            </Shortcut>
        </>
    );
}

export default Main;

const Intro = styled.div`
    width: 100%;
    height: 660px;
    background-image: url(${MainBackground});
    background-size: contain;
`;

const Shortcut = styled.div`
    width: 100%;
    height: 390px;
    background-color: #fbe4c4;
`;

const Wrap = styled.div`
    display: flex;
    width: 1280px;
    height: 100%;
    margin: 0 auto;

    ${Intro} > & {
        flex-direction: column;
        justify-content: center;
    }
`;

const Title = styled.p`
    font-size: 5.4rem;
    font-weight: 600;
    color: #ff735c;
`;
const TitleName = styled.span`
    font-weight: 600;
    color: #cd4f40;
`;

const Description = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    margin-bottom: 50px;
`;

const StartButton = styled.button`
    width: 290px;
    font-size: 2.7rem;
    font-weight: 500;
    color: #fff;
    background-color: #60988f;
    border-radius: 10px;
    padding: 10px 25px;
`;
