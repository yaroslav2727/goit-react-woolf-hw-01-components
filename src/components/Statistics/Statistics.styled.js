import styled from "styled-components";

export const StatisticsMenu = styled.section`
  width: ${({ $amount }) => {
    return `${$amount * 100}px`;
  }};
  background-color: rgb(245, 255, 252);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  margin: 50px auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #3a3a3a;
  text-align: center;
  margin: 0;
  padding: 16px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: rgb(158, 175, 206);
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  flex-basis: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }};
  color: #fff;
`;

export const Label = styled.span`
  font-weight: 600;
  background-color: rgb(50, 50, 50, 0.7);
`;

export const Percentage = styled.span`
  font-size: 24px;
  background-color: rgb(50, 50, 50, 0.7);
`;
