import { useState, ChangeEvent } from "react";

import { Slider } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./styles.css";


interface SiderProps {
  cashMin: number;
  cashMax: number;
  cashDown: number;
  financeMin: number;
  financeMax: number;
  leaseMin: string;
  leaseMax: string;
  leaseToFinance: boolean;
  onChangeMin: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeMax: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeFinanceMin: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeFinanceMax: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeLeaseMin: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeLeaseMax: (e: ChangeEvent<HTMLSelectElement>) => void;
  callback: (e:string) => void;
}

export var finance: boolean;
export var lease: boolean;

const CashDownSlider = withStyles({
  root: {
    width: '100%',
    height: 8,
    marginTop: 20,
    '& @media only screen and (max-width: 320px)': {
      width: '80%',
    },
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px 0 rgba(0 0 0 / 15%)',
    marginTop: -6,
    marginLeft: -7.5,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
      '@media (hover: none)': {
        boxShadow: '0 2px 5px 0 rgba(0 0 0 / 15%)',
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + -5px)',
    top: -20,
    '& *': {
      background: 'transparent',
      color: '#5e5e5e',
      fontSize: 13,
    },
  },
  track: {
    backgroundImage: "linear-gradient(to left, #1DEEA1, #1492e6)",
    height: 5,
    borderRadius: 50,
  },
  rail: {
    backgroundImage: "linear-gradient(to left, #1DEEA1, #1492e6)",
    height: 5,
    borderRadius: 50,
  },
})(Slider);

const SiderPurchase = ({
  cashMin,
  onChangeMin,
  cashMax,
  onChangeMax,
  cashDown,
  leaseToFinance,
  financeMin,
  financeMax,
  onChangeFinanceMax,
  onChangeFinanceMin,
  leaseMin,
  leaseMax,
  onChangeLeaseMin,
  onChangeLeaseMax,
  callback,
}: SiderProps) => {
  const [rangeValue, setRangeValue] = useState<string>("");

  

  const valuetext = (value: any) => {
    setRangeValue('$' + value);
    callback(value)
    return rangeValue

  };


  // console.log(rangeValue);

  return (
    <>
      <h1 className='sectionTitle'>
        PURCHASE OPTIONS{' '}
        <CancelIcon style={{ fontSize: 20, color: '#fd385b' }} />
      </h1>
      <div className='purchaseOpt'>
        {leaseToFinance ? (
          <span className='lease'>Lease</span>
        ) : (
          <span className='finance'>Finance</span>
        )}
      </div>

      {leaseToFinance ? (
        <div className='leaseContent'>
          <div className='leaseMinContent'>
            <span>MIN. MONTHLY PAY.</span>
            <select
              name='leaseMin'
              id='leaseMin'
              value={leaseMin}
              onChange={onChangeLeaseMin}
            >
              <option value='' className=''>
                No Min
              </option>
              <option value='100USD' className=''>
                $100
              </option>
              <option value='150USD' className=''>
                $150
              </option>
              <option value='200USD' className=''>
                $200
              </option>
              <option value='250USD' className=''>
                $250
              </option>
              <option value='300USD' className=''>
                $300
              </option>
              <option value='350USD' className=''>
                $350
              </option>
              <option value='400USD' className=''>
                $400
              </option>
              <option value='450USD' className=''>
                $450
              </option>
              <option value='500USD' className=''>
                $500
              </option>
              <option value='550USD' className=''>
                $550
              </option>
              <option value='600USD' className=''>
                $600
              </option>
              <option value='650USD' className=''>
                $650
              </option>
              <option value='700USD' className=''>
                $700
              </option>
              <option value='800USD' className=''>
                $800
              </option>
              <option value='900USD' className=''>
                $900
              </option>
              <option value='1000USD' className=''>
                $1,000
              </option>
              <option value='1500USD' className=''>
                $1,500
              </option>
              <option value='2000USD' className=''>
                $2,000
              </option>
              <option value='2500USD' className=''>
                $2,500
              </option>
              <option value='3000USD' className=''>
                $3,000
              </option>
              <option value='3001_9999USD' className=''>
                $3,000+
              </option>
            </select>
          </div>
          <div className='leaseMaxContent'>
            <span>MAX. MONTHLY PAY.</span>
            <select
              name='leaseMax'
              id='leaseMax'
              value={leaseMax}
              onChange={onChangeLeaseMax}
            >
              <option value='' className=''>
                No Max
              </option>
              <option value='100USD' className=''>
                $100
              </option>
              <option value='150USD' className=''>
                $150
              </option>
              <option value='200USD' className=''>
                $200
              </option>
              <option value='250USD' className=''>
                $250
              </option>
              <option value='300USD' className=''>
                $300
              </option>
              <option value='350USD' className=''>
                $350
              </option>
              <option value='400USD' className=''>
                $400
              </option>
              <option value='450USD' className=''>
                $450
              </option>
              <option value='500USD' className=''>
                $500
              </option>
              <option value='550USD' className=''>
                $550
              </option>
              <option value='600USD' className=''>
                $600
              </option>
              <option value='650USD' className=''>
                $650
              </option>
              <option value='700USD' className=''>
                $700
              </option>
              <option value='800USD' className=''>
                $800
              </option>
              <option value='900USD' className=''>
                $900
              </option>
              <option value='1000USD' className=''>
                $1,000
              </option>
              <option value='1500USD' className=''>
                $1,500
              </option>
              <option value='2000USD' className=''>
                $2,000
              </option>
              <option value='2500USD' className=''>
                $2,500
              </option>
              <option value='3000USD' className=''>
                $3,000
              </option>
              <option value='3001_9999USD' className=''>
                $3,000+
              </option>
            </select>
          </div>
        </div>
      ) : (
        <div className='financeContent'>
          <div className='financeMinContent'>
            <span>MIN. MONTHLY PAY.</span>
            <select
              name='financeMin'
              id='financeMin'
              value={financeMin}
              onChange={onChangeFinanceMin}
            >
              <option value={0} className=''>
                No Min
              </option>
              <option value={100} className=''>
                $100
              </option>
              <option value={150} className=''>
                $150
              </option>
              <option value={200} className=''>
                $200
              </option>
              <option value={250} className=''>
                $250
              </option>
              <option value={300} className=''>
                $300
              </option>
              <option value={350} className=''>
                $350
              </option>
              <option value={400} className=''>
                $400
              </option>
              <option value={450} className=''>
                $450
              </option>
              <option value={500} className=''>
                $500
              </option>
              <option value={550} className=''>
                $550
              </option>
              <option value={600} className=''>
                $600
              </option>
              <option value={650} className=''>
                $650
              </option>
              <option value={700} className=''>
                $700
              </option>
              <option value={800} className=''>
                $800
              </option>
              <option value={900} className=''>
                $900
              </option>
              <option value={1000} className=''>
                $1,000
              </option>
              <option value={1500} className=''>
                $1,500
              </option>
              <option value={2000} className=''>
                $2,000
              </option>
              <option value={2500} className=''>
                $2,500
              </option>
              <option value={3000} className=''>
                $3,000
              </option>
              <option value={30001.9999} className=''>
                $3,000+
              </option>
            </select>
          </div>
          <div className='financeMaxContent'>
            <span>MAX. MONTHLY PAY.</span>
            <select
              name='financeMax'
              id='financeMax'
              value={financeMax}
              onChange={onChangeFinanceMax}
            >
              <option value={0} className=''>
                No Max
              </option>
              <option value={100} className=''>
                $100
              </option>
              <option value={150} className=''>
                $150
              </option>
              <option value={200} className=''>
                $200
              </option>
              <option value={250} className=''>
                $250
              </option>
              <option value={300} className=''>
                $300
              </option>
              <option value={350} className=''>
                $350
              </option>
              <option value={400} className=''>
                $400
              </option>
              <option value={450} className=''>
                $450
              </option>
              <option value={500} className=''>
                $500
              </option>
              <option value={550} className=''>
                $550
              </option>
              <option value={600} className=''>
                $600
              </option>
              <option value={650} className=''>
                $650
              </option>
              <option value={700} className=''>
                $700
              </option>
              <option value={800} className=''>
                $800
              </option>
              <option value={900} className=''>
                $900
              </option>
              <option value={1000} className=''>
                $1,000
              </option>
              <option value={1500} className=''>
                $1,500
              </option>
              <option value={2000} className=''>
                $2,000
              </option>
              <option value={2500} className=''>
                $2,500
              </option>
              <option value={3000} className=''>
                $3,000
              </option>
              <option value={30001.9999} className=''>
                $3,000+
              </option>
            </select>
          </div>
        </div>
      )}

      <div className='rangeCashContent'>
        <span className='rangeCashTitle'>TOTAL DOWN PAYMENT</span>
        <div className='rangeIcons'>
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 15%)',
              marginTop: 15,
              marginRight: 10,
              opacity: 0.5,
            }}
          />
          <CashDownSlider
            name='cashDownPayment'
            valueLabelFormat={valuetext}
            getAriaValueText={valuetext}
            defaultValue={0}
            step={50}
            min={0}
            max={10000}
            valueLabelDisplay='on'
          />

          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              marginTop: 15,
              marginLeft: 10,
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SiderPurchase;
