import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  height: 300px;
  padding-top: 20px;
  border: 1px solid #e7ecf2;
  border-radius: 5px;
  background-color: #fff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
`;

export const Name = styled.p`
  margin: 30px 0 0 0;
  font-size: 20px;
  font-weight: 500;
`;

export const Tag = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  font-weight: 400;
  color: #bdc4cb;
`;

export const Location = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  font-weight: 700;
  color: #bdc4cb;
`;

export const Stats = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  background-color: #f3f6f9;
  border: 1px solid #e7ecf2;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #bdc4cb;
`;

export const Quantity = styled.span`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
`;
