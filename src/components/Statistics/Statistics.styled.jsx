import styled from '@emotion/styled';
import { randomColor } from 'components/utils/randomColor';

export const StatisticsSection = styled.section`
  margin: 50px 0 0 0;
  width: 300px;
  border-radius: 5px;
`;

export const SectionTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #485b6c;
  background-color: #fff;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  padding: 15px 0;
  background-color: ${randomColor};
`;

export const Label = styled.span`
  font-size: 12px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 16px;
  margin-top: 5px;
  color: #fff;
`;
