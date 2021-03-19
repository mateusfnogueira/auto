import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 10%);
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const TagValue = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const Clear = styled.span`
  width: 10%;
  max-width: 100px;
  min-width: 80px;
  text-align: center;
  font-size: 15px;
  color: #1492e6;
  font-weight: bold;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 / 10%);
  padding: 5px;
  border-radius: 10px;

  & {
    @media only screen and (min-width: 321px) and (max-width: 1200px) {
      width: 90px;
    }

    @media only screen and (max-width: 320px) {
      width: 90px;
    }
  }
`;
