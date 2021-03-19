import { ChangeEvent, useState } from "react";

import FilterListIcon from "@material-ui/icons/FilterList";
import "./styles.css";

// GlobalVar
// import { finance } from '../SiderPurchase/index'
// import { lease } from '../SiderPurchase/index'

interface FilterHeader {
  nameValue: string;
  termLease: string;
  valueLeaseToFinance: string;
  mileage: string;
  OnChangeLf: (e: ChangeEvent<HTMLInputElement>) => void;
  ChangeLf: () => void;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTermLease: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeMileage: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const HeaderFilter = ({
  valueLeaseToFinance,
  nameValue,
  onChangeName,
  termLease,
  onChangeTermLease,
  ChangeLf,
  OnChangeLf,
  mileage,
  onChangeMileage,
}: FilterHeader) => {
  const [leaseToFinance, setLeaseToFinance] = useState<boolean>(false);

  return (
    <>
      <div className='filterContent'>
        {/* Quando o toggle mudar para "Lease",
       exibir esse Term abaixo e MOSTRAR o mileage */}
        <div className='search'>
          <span>Find Your Perfect Car</span>
          <input
            placeholder='Search here'
            type='text'
            value={nameValue}
            onChange={onChangeName}
          />
        </div>
        {!leaseToFinance ? (
          <>
            {/* Quando o toggle mudar para "Lease",
       exibir esse Term abaixo e MOSTRAR o mileage */}
            <div className='term'>
              <span>Choose Term</span>
              <select
                name=''
                id=''
                defaultValue='24'
                value={termLease}
                onChange={onChangeTermLease}
              >
                <option value='24'>24 months</option>
                <option value='36'>36 months</option>
                <option value='39'>39 months</option>
                <option value='42'>42 months</option>
                <option value='48'>48 months</option>
              </select>
            </div>
          </>
        ) : null}

        {leaseToFinance ? (
          <div className='term'>
            {/* Quando o toggle mudar para "Finance",
       exibir esse Term abaixo */}
            <span>Choose Term</span>
            <select
              name=''
              id=''
              defaultValue='36'
              value={termLease}
              onChange={onChangeTermLease}
            >
              <option value='36'>36 months</option>
              <option value='48'>48 months</option>
              <option value='60'>60 months</option>
              <option value='72'>72 months</option>
              <option value='75'>75 months</option>
              <option value='84'>84 months</option>
            </select>
          </div>
        ) : (
          <div className='mileage'>
            {/* Quando o toggle mudar para "Finance",
       ESCONDER esse mileage abaixo */}
            <span>Choose Mileage</span>
            <select name='' id='' defaultValue='7500' value={mileage} onChange={onChangeMileage}>
              <option value='7500'>7,500 mi.</option>
              <option value='10000'>10,000 mi.</option>
              <option value='12000'>12,000 mi.</option>
              <option value='15000'>15,000 mi.</option>
              <option value='18000'>18,000 mi.</option>
              <option value='20000'>20,000 mi.</option>
            </select>
          </div>
        )}
      </div>
      <div className='moreFilters'>
        <span>MORE FILTERS</span>
        <FilterListIcon style={{ fontSize: 15 }} />
      </div>
      <div className='toggleButton'>
        <label className='switchToggle'>
          <input
            onClick={() => {
              setLeaseToFinance((x) => !x);
              ChangeLf();
            }}
            value={valueLeaseToFinance}
            onChange={OnChangeLf}
            className={
              !leaseToFinance
                ? 'leaseIn buttonToggle'
                : 'financeIn buttonToggle'
            }
            type='checkbox'
          />
          <span className={!leaseToFinance ? 'lease' : 'finance'}></span>
        </label>
      </div>
    </>
  );
};

export default HeaderFilter;
