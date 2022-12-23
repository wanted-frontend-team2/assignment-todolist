import styled from 'styled-components';

export const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  h1 {
    color: #839fee;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 2px;
  }
  button {
    display: flex;
    align-items: center;
    background: #0769ff;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 0 #235198;
    color: #fff;
    height: 100%;
    letter-spacing: 0.4px;
    padding: 10px;
    font-size: 12px;
  }
`;

export const ListBox = styled.ul`
  height: calc(100% - 95px);
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.li`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  display: flex;
  margin-top: 15px;
  padding: 10px 15px;
  label {
    display: flex;
    align-items: center;
    input[type='checkbox'] {
      border: 2px solid #0769ff;
      border-radius: 50%;
      content: '';
      display: block;
      flex: none;
      height: 20px;
      margin-right: 10px;
      width: 20px;
      &:checked {
        background: #0769ff;
        border: none;
        & + span {
          color: #ccc;
          text-decoration: line-through;
        }
      }
    }
  }
`;

export const ListBtn = styled.div`
  display: flex;
  margin-left: auto;
  flex: none;
  button {
    flex: none;
    font-size: 20px;
    opacity: 0.3;
    transition: 0.2s;
    &:hover {
      transform: rotate(15deg);
    }
    & + button {
      margin-left: 5px;
    }
  }
`;

export const ListNone = styled.p`
  color: #ccc;
  left: 50%;
  position: absolute;
  top: 45%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const FormBox = styled.form`
  bottom: 30px;
  display: flex;
  height: 44px;
  left: 40px;
  position: absolute;
  width: calc(100% - 80px);
  label {
    width: 78%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 6px 0 #e7f1ff;
    height: 100%;
    padding-left: 20px;
    input {
      width: 100%;
      height: 100%;
    }
  }
  button {
    margin-left: auto;
    font-size: 12px;
    align-items: center;
    display: flex;
    background: #0769ff;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 0 #235198;
    color: #fff;
    height: 100%;
    letter-spacing: 0.4px;
    padding: 10px;
  }
`;
