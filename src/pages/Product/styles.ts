import styled from 'styled-components';

interface CalculatorType {
  pos: string;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  & {
    strong {
      font-weight: 500;
    }
  }
`;

export const ProductSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const Calculator = styled.div<CalculatorType>`
  position: ${props => props.pos};
  right: ${props =>
    props.pos === 'absolute' ? '-5px' : '15px'};
  ${props => (props.pos === 'absolute' ? 'bottom: -780px;' : '')}
  width: ${props =>
    props.pos === 'absolute' ? '28.7%' : '28%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  padding: 15px 30px;
  border: 5px solid rgba(116 116 116 / 5%);
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
  border-radius: 30px;
  z-index: 10;
`;

export const Payment = styled.span`
  font-size: 40px;
  color: #1492e6;
  font-weight: 500;
`;

export const Fees = styled.div`
  width: 100%;
  font-size: 20px;
  color: #747474;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px 15px;
  font-size: 17px;
  color: #1492e6;
  border: 3px solid rgba(116 116 116 / 5%);
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
  border-radius: 10px;
`;

export const Label = styled.span`
  width: 100%;
  text-align: left;
  font-size: 15px;
  color: #747474;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const RangeSlider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MoreOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-itens: center;
  font-size: 17px;
  font-weight: 500;
  color: #747474;
  margin-top: 20px;
`;

export const Submit = styled.button`
  width: 100%;
  text-align: center;
  padding: 7px 15px;
  color: white;
  font-size: 17px;
  font-weight: 500;
  background-color: #1492e6;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
  border-radius: 50px;
  margin-top: 20px;
`;

export const Product = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  border: 5px solid rgba(116 116 116 / 5%);
  border-radius: 30px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
`;

export const TitleSection = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
`;

export const Title = styled.span`
  font-size: 30px;
  color: #747474;
`;

export const Description = styled.span`
  font-size: 17px;
  color: #747474;
  font-weight: normal;
  margin-bottom: 25px;
`;

export const Price = styled.span`
  font-size: 20px;
  color: #747474;
  font-weight: normal;
`;

export const ImageSection = styled.div`
  width: 80%;
  max-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
`;

export const Image = styled.img`
  width: 30%;
  border-radius: 300px;
  margin-left: 50px;
`;

export const ImageCalculator = styled.img`
  width: 100%;
  border-radius: 300px;
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 25px;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
`;

export const Videos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
`;

export const Rotation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
`;

export const Colors = styled.div`
  position: absolute;
  right: -40px;
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
  transform: rotate(90deg);
`;

export const ColorDot = styled.div`
  width: 20%;
  height: 10px;
  border-radius: 50px;
  margin: 5px;
`;

export const KeyFeatures = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 35px;
  box-sizing: border-box;
  border: 5px solid rgba(116 116 116 / 5%);
  border-radius: 30px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
`;

export const FeaturesContent = styled.div`
  width: 100%;
  max-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Features = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #747474;
  font-weight: 500;
  margin: 5px 0;
`;

export const Hide = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 17px;
  color: #747474;
  font-weight: 500;
  opacity: 0.7;
`;

export const FeaturesDetails = styled.div`
  width: 70%;
  max-height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 35px;
  box-sizing: border-box;
  border: 5px solid rgba(116 116 116 / 5%);
  border-radius: 30px;
  box-shadow: 0 2px 5px 0 rgba(0 0 0 /10%);
  margin-top: 20px;
`;

export const FeaturesTextContent = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-right: 20px;

  & {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(116 116 116 / 15%);
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(116 116 116 / 40%);
      border-radius: 50px;
    }
  }
`;

export const FeaturesText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: #747474;
  text-align: left;
  border-bottom: 1px solid rgba(116 116 116 / 20%);
  padding-bottom: 10px;
  margin-bottom: 20px;

  & {
    h1 {
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 15px;
    }

    span {
      font-size: 15px;
      margin-bottom: 3px;
    }
  }
`;

export const RebatesSpot = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  border-radius: 30px;
  margin-top: 30px;
`;

export const AlsoViewed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
