import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 0 3px 0 rgba(0 0 0 / 7%);
  box-sizing: border-box;
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 20px;
`;

export const Title = styled.span`
  font-size: 16px;
  color: #171717;
  font-weight: 500;
`;

export const Content = styled.div`
  width: 100%;
  max-height: 190px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 20px;
`;

export const ContentSaving = styled.div`
  width: 100%;
  max-height: 190px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 15px 0 25px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5px;
  font-size: 13px;
`;

export const ItemSaving = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Details = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const TitleSaving = styled.span`
  font-size: 15px;
  color: #171717;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const DescriptionSaving = styled.span`
  font-size: 12px;
  color: #171717;
`;

export const Price = styled.span`
  font-size: 15px;
  color: #171717;
  font-weight: 500;
`;

export const TotalPrice = styled.span`
  font-size: 15px;
  color: #00b800;
  font-weight: 500;
`;
