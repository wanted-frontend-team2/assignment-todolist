import styled from 'styled-components';

export const InputBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: #839fee;
  font-size: 14px;
`;

export const Input = styled.input`
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 0 #e7f1ff;
  height: 44px;
  padding-left: 20px;
  width: calc(100% - 70px);
  &::placeholder {
    color: #999999;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  button {
    border: none;
    font-weight: bold;
    border-radius: 64px;
    background-color: #9e30f4;
    color: white;
    margin-bottom: 16px;
    cursor: pointer;
    width: 100%;
    height: 48px;
    &:disabled {
      background-color: #dadada;
      color: white;
    }
  }
`;

export const InputState = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  svg {
    width: 16px;
    margin-left: 90px;
    color: #0769ff;
  }
`;

export const ErrorMsg = styled.p`
  color: #ff0093;
  font-size: 12px;
  margin-left: 90px;
`;
