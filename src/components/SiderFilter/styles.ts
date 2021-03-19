import styled from "styled-components";

export const Option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  font-family: Poppins, sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export const Value = styled.input`
  width: 80%;
  background-color: transparent;
  border: none;
  font-family: Poppins, sans-serif;
  font-size: 15px;
  text-transform: capitalize;
  margin-left: 5px;

  & {
    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  & {
    :hover {
      cursor: pointer;
    }

    label:hover {
      cursor: pointer;
    }
  }
`;

export const StyledCheckbox = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  &:hover {
    cursor: pointer;
  }
`;
