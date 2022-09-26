import styled from '@emotion/styled';

export const Card = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 10px;
  width: auto;
  margin-top: 20px;
  box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.75);
  &: first-child {
    margin-top: 0;
  }
  background-color: #fff;
`;

const setBgColor = props => {
  switch (props.isOnline) {
    case true:
      return '#54AC57';
    case false:
      return '#FD5351';
    default:
      return '#000';
  }
};

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${setBgColor};
  margin-right: 10px;
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  margin: 0 0 0 10px;
  font-size: 30px;
`;
