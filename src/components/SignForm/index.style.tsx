import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  color: #b3b9d3;
  letter-spacing: 1px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
`;

export const Button = styled.div`
  height: 44px;
  color: #fff;
  position: absolute;
  bottom: 80px;
  width: 84%;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  button {
    background: #0769ff;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 0 #235198;
    color: #fff;
    height: 100%;
    letter-spacing: 0.4px;
    padding: 10px;
    font-size: 14px;
    justify-content: center;
    width: 100%;
    &:disabled {
      background: #839fee;
      box-shadow: 1px 1px 3px 0 #d7dcf8;
    }
  }
`;

export const InfoMsg = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  p {
    color: #839fee;
    font-size: 14px;
    margin-right: 10px;
  }
  button {
    color: #0769ff;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;
