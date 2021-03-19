import { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Radio, RadioChangeEvent } from 'antd';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { Option, HiddenCheckbox, StyledCheckbox } from './styles';

import './css/styles.css';

interface Menus {
  label: string;
  value: string;
  amount: number;
}

interface StateMenus {
  years: string;
  makes: string;
  models: string;
  extColor: string;
  intColor: string;
  cylinders: string;
  displaciments: string;
  transmissions: string;
  interior: string;
  seatingTextiles: string;
  seatsCapacities: string;
  seatsDrivers: string;
  seatsPass: string;
  seatsFronts: string;
  driveTrain: string;
  moonroof: string;
  OnChangeYears: (e: string) => void;
  OnChangeModels: (e: string) => void;
  OnChangeMakes: (e: string) => void;
  OnChangeExtColor: (e: string) => void;
  OnChangeIntColor: (e: string) => void;
  OnChangeCylinders: (e: string) => void;
  OnChangeDisplacements: (e: string) => void;
  OnChangeTransmissions: (e: string) => void;
  OnChangeInterior: (e: string) => void;
  OnChangeSeatingTextiles: (e: string) => void;
  OnChangeSeatingCapacities: (e: string) => void;
  OnChangeSeatsDrivers: (e: string) => void;
  OnChangeSeatsPass: (e: string) => void;
  OnChangeSeatsFronts: (e: string) => void;
  OnChangeDriveTrain: (e: string) => void;
  OnChangeMoonroof: (e: string) => void;
}

// const radioStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   lineHeight: '30px',
// };

const SiderFilter = ({ ...props }: StateMenus) => {
  const [openYear, setOpenYear] = useState(false);
  const [openMake, setOpenMake] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openExtColor, setOpenExtColor] = useState(false);
  const [openIntColor, setOpenIntColor] = useState(false);
  const [openCylinder, setOpenCylinder] = useState(false);
  const [openDisplaciments, setOpenDisplaciments] = useState(false);
  const [openTransmission, setOpenTransmission] = useState(false);
  const [openInterior, setOpenInterior] = useState(false);
  const [openSTextiles, setOpenSTextiles] = useState(false);
  const [openSCapacities, setOpenSCapacities] = useState(false);
  const [openSDriver, setOpenSDriver] = useState(false);
  const [openSFront, setOpenSFront] = useState(false);
  const [openSPass, setOpenSPass] = useState(false);
  const [openDTM, setOpenDTM] = useState(false);
  const [openMrSr, setOpenMrSr] = useState(false);

  //  MENU
  const [stateYears, setStateYears] = useState<Menus[]>([]);
  const [stateMakes, setStateMakes] = useState<Menus[]>([]);
  const [stateModels, setStateModels] = useState<Menus[]>([]);
  const [stateExtColor, setStateExtColor] = useState<Menus[]>([]);
  const [stateIntColor, setStateIntColor] = useState<Menus[]>([]);
  const [stateCylinder, setStateCylinder] = useState<Menus[]>([]);
  const [stateDisplacements, setStateDisplaciments] = useState<Menus[]>([]);
  const [stateTransmissions, setStateTransmissions] = useState<Menus[]>([]);
  const [stateInterior, setStateInterior] = useState<Menus[]>([]);
  const [stateSetingTextiles, setStateSetingTextiles] = useState<Menus[]>([]);
  const [stateSeatsDrivers, setStateSeatsDrivers] = useState<Menus[]>([]);
  const [stateSeatsCapacities, setStateSeatsCapacities] = useState<Menus[]>([]);
  const [stateSeatsFronts, setStateSeatsFronts] = useState<Menus[]>([]);
  const [stateSetPass, setStateSetPass] = useState<Menus[]>([]);
  const [stateDriveTrain, setStateDriveTrain] = useState<Menus[]>([]);
  const [stateMoonroof, setStateMoonroof] = useState<Menus[]>([]);

  let yearArr = new Array<string>();

  useEffect(() => {
    async function loadMenus() {
      try {
        if (stateYears.length === 0) {
          const response = await api.get('/filters');

          setStateYears(response?.data.years);
          setStateMakes(response?.data.makes);
          setStateModels(response?.data.models);
          setStateExtColor(response?.data.exteriorColors);
          setStateIntColor(response?.data.interiorColors);
          setStateCylinder(response?.data.cylinders);
          setStateDisplaciments(response?.data.displacements);
          setStateTransmissions(response?.data.transmissions);
          setStateInterior(response?.data.interior);
          setStateSetingTextiles(response?.data.seatingTextiles);
          setStateSeatsCapacities(response?.data.seatingCapacities);
          setStateSeatsDrivers(response?.data.seatsDrivers);
          setStateSeatsFronts(response?.data.seatsFronts);
          setStateSetPass(response?.data.seatsPassenger);
          setStateDriveTrain(response?.data.driveTrainMechanicals);
          setStateMoonroof(response?.data.moonroofSunroofs);
        }
      } catch (err) {
        alert('menus not found');
      }
    }
    loadMenus();
  });

  const handleCheck = (event: any, valueID: any, arr: any) => {
    let Unchecked = document.createElement('div');
    Unchecked.style.width = '15px';
    Unchecked.style.height = '15px';
    Unchecked.style.display = 'flex';
    Unchecked.style.justifyContent = 'center';
    Unchecked.style.alignItems = 'center';
    Unchecked.style.marginRight = '5px';
    Unchecked.style.background = 'transparent';
    Unchecked.style.border = '2px solid #c9c9c9';
    Unchecked.style.borderRadius = '50%';
    Unchecked.style.padding = '2px';

    let CheckedElement = document.createElement('div');
    CheckedElement.style.width = '15px';
    CheckedElement.style.height = '15px';
    CheckedElement.style.display = 'flex';
    CheckedElement.style.justifyContent = 'center';
    CheckedElement.style.alignItems = 'center';
    CheckedElement.style.marginRight = '5px';
    CheckedElement.style.background = 'transparent';
    CheckedElement.style.border = '2px solid #1492e6';
    CheckedElement.style.borderRadius = '50%';
    CheckedElement.style.padding = '2px';

    let innerChecked = document.createElement('div');
    innerChecked.style.width = '15px';
    innerChecked.style.height = '15px';
    innerChecked.style.background = '#1492e6';
    innerChecked.style.borderRadius = '50%';

    CheckedElement.appendChild(innerChecked);

    let element = document.getElementById(valueID) as HTMLInputElement;
    var value = (document.getElementById(valueID) as HTMLInputElement).value;

    if (element.getAttribute('checked')) {
      event.currentTarget.children[1].remove();
      event.currentTarget.children[0].after(Unchecked);
    } else {
      event.currentTarget.children[1].remove();
      event.currentTarget.children[0].after(CheckedElement);
    }

    element.getAttribute('checked')
      ? element.removeAttribute('checked')
      : element.setAttribute('checked', 'true');

    if (arr === 'year') {
      yearArr.push(value);


      props.OnChangeYears(value);
    } else if (arr === 'make') {
      props.OnChangeMakes(value)
    } else if (arr === 'model') {
      props.OnChangeModels(value)
    } else if (arr === 'extColor') {
      props.OnChangeExtColor(value)
    } else if (arr === 'intColor') {
      props.OnChangeIntColor(value)
    } else if (arr === 'cylinder') {
      props.OnChangeCylinders(value)
    } else if (arr === 'displacement') {
      props.OnChangeDisplacements(value)
    } else if (arr === 'transmission') {
      props.OnChangeTransmissions(value)
    } else if (arr === 'interior') {
      props.OnChangeInterior(value)
    } else if (arr === 'sTextiles') {
      props.OnChangeSeatingTextiles(value)
    } else if (arr === 'sCapacities') {
      props.OnChangeSeatingCapacities(value)
    } else if (arr === 'sDriver') {
      props.OnChangeSeatsDrivers(value)
    } else if (arr === 'sFront') {
      props.OnChangeSeatsFronts(value)
    } else if (arr === 'sPass') {
      props.OnChangeSeatsPass(value)
    } else if (arr === 'dt') {
      props.OnChangeDriveTrain(value)
    } else if (arr === 'moonroof') {
      props.OnChangeMoonroof(value)
    }
  };

  const formatID = (value: string) => {
    let id = value.replace('_', '').replace(/\s/g, '').toLowerCase();

    return id;
  };

  console.log(yearArr);

  return (
    <>
      <button onClick={() => console.log(yearArr)}>aqui</button>
      <div
        className='yearToggle'
        onClick={() => {
          setOpenYear((state) => !state);
        }}
      >
        <span className='toggleTitle'>Year</span>
        {openYear ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openYear ? (
        <>
          <div className='yearContent'>
            {stateYears.map((year) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(year.value.toString()), 'year');
                }}
              >
                <HiddenCheckbox
                  id={formatID(year.value.toString())}
                  name={formatID(year.value.toString())}
                  value={year.value.toString()}
                />
                <StyledCheckbox />
                {year.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='makeToggle'
        onClick={() => {
          setOpenMake((state) => !state);
        }}
      >
        <span className='toggleTitle'>Make</span>

        {openMake ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openMake ? (
        <>
          <div className='makeContent'>
            {stateMakes.map((make) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(make.value.toString()), 'make');
                }}
              >
                <HiddenCheckbox
                  id={formatID(make.value.toString())}
                  name={formatID(make.value.toString())}
                  value={make.value.toString()}
                />
                <StyledCheckbox />
                {make.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='modelToggle'
        onClick={() => {
          setOpenModel((state) => !state);
        }}
      >
        <span className='toggleTitle'>Models</span>
        {openModel ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openModel ? (
        <>
          <div className='makeContent'>
            {stateModels.map((model) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(model.value.toString()), 'model');
                }}
              >
                <HiddenCheckbox
                  id={formatID(model.value.toString())}
                  name={formatID(model.value.toString())}
                  value={model.value.toString()}
                />
                <StyledCheckbox />
                {model.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}
      <div
        className='intColorToggle'
        onClick={() => {
          setOpenIntColor((state) => !state);
        }}
      >
        <span className='toggleTitle'>Interior Color</span>
        {openIntColor ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>
      {openIntColor ? (
        <>
          <div className='makeContent'>
            {stateIntColor.map((intColor) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(intColor.value.toString()),
                    'intColor'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(intColor.value.toString())}
                  name={formatID(intColor.value.toString())}
                  value={intColor.value.toString()}
                />
                <StyledCheckbox />
                {intColor.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenExtColor((state) => !state);
        }}
      >
        <span className='toggleTitle'>Exterior Color</span>
        {openExtColor ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openExtColor ? (
        <>
          <div className='makeContent'>
            {stateExtColor.map((extColor) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(extColor.value.toString()),
                    'extColor'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(extColor.value.toString())}
                  name={formatID(extColor.value.toString())}
                  value={extColor.value.toString()}
                />
                <StyledCheckbox />
                {extColor.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}
      <div
        className='extColorToggle'
        onClick={() => {
          setOpenCylinder((state) => !state);
        }}
      >
        <span className='toggleTitle'>Cylinders</span>
        {openCylinder ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openCylinder ? (
        <>
          <div className='makeContent'>
            {stateCylinder.map((cylinder) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(cylinder.value.toString()),
                    'cylinder'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(cylinder.value.toString())}
                  name={formatID(cylinder.value.toString())}
                  value={cylinder.value.toString()}
                />
                <StyledCheckbox />
                {cylinder.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenDisplaciments((state) => !state);
        }}
      >
        <span className='toggleTitle'>Displaciments</span>
        {openDisplaciments ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openDisplaciments ? (
        <>
          <div className='makeContent'>
            {stateDisplacements.map((displacement) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(displacement.value.toString()),
                    'displacement'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(displacement.value.toString())}
                  name={formatID(displacement.value.toString())}
                  value={displacement.value.toString()}
                />
                <StyledCheckbox />
                {displacement.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenTransmission((state) => !state);
        }}
      >
        <span className='toggleTitle'>Transmission</span>
        {openTransmission ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openTransmission ? (
        <>
          <div className='makeContent'>
            {stateTransmissions.map((transmission) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(transmission.value.toString()), 'transmission');
                }}
              >
                <HiddenCheckbox
                  id={formatID(transmission.value.toString())}
                  name={formatID(transmission.value.toString())}
                  value={transmission.value.toString()}
                />
                <StyledCheckbox />
                {transmission.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenInterior((state) => !state);
        }}
      >
        <span className='toggleTitle'>Interior</span>
        {openInterior ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openInterior ? (
        <>
          <div className='makeContent'>
            {stateInterior.map((interior) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(interior.value.toString()),
                    'interior'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(interior.value.toString())}
                  name={formatID(interior.value.toString())}
                  value={interior.value.toString()}
                />
                <StyledCheckbox />
                {interior.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenSTextiles((state) => !state);
        }}
      >
        <span className='toggleTitle'>Seating Textiles</span>
        {openSTextiles ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openSTextiles ? (
        <>
          <div className='makeContent'>
            {stateSetingTextiles.map((sTextiles) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(sTextiles.value.toString()),
                    'sTextiles'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(sTextiles.value.toString())}
                  name={formatID(sTextiles.value.toString())}
                  value={sTextiles.value.toString()}
                />
                <StyledCheckbox />
                {sTextiles.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenSCapacities((state) => !state);
        }}
      >
        <span className='toggleTitle'>Seating Capacities</span>
        {openSCapacities ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openSCapacities ? (
        <>
          <div className='makeContent'>
            {stateSeatsCapacities.map((sCapacities) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(sCapacities.value.toString()),
                    'sCapacities'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(sCapacities.value.toString())}
                  name={formatID(sCapacities.value.toString())}
                  value={sCapacities.value.toString()}
                />
                <StyledCheckbox />
                {sCapacities.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenSDriver((state) => !state);
        }}
      >
        <span className='toggleTitle'>Seats Driver</span>
        {openSDriver ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openSDriver ? (
        <>
          <div className='makeContent'>
            {stateSeatsDrivers.map((sDriver) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(sDriver.value.toString()), 'sDriver');
                }}
              >
                <HiddenCheckbox
                  id={formatID(sDriver.value.toString())}
                  name={formatID(sDriver.value.toString())}
                  value={sDriver.value.toString()}
                />
                <StyledCheckbox />
                {sDriver.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenSFront((state) => !state);
        }}
      >
        <span className='toggleTitle'>Seats Fronts</span>
        {openSFront ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openSFront ? (
        <>
          <div className='makeContent'>
            {stateSeatsFronts.map((sFront) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(sFront.value.toString()), 'sFront');
                }}
              >
                <HiddenCheckbox
                  id={formatID(sFront.value.toString())}
                  name={formatID(sFront.value.toString())}
                  value={sFront.value.toString()}
                />
                <StyledCheckbox />
                {sFront.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenSPass((state) => !state);
        }}
      >
        <span className='toggleTitle'>Seats Passenger</span>
        {openSPass ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openSPass ? (
        <>
          <div className='makeContent'>
            {stateSetPass.map((sPass) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(sPass.value.toString()), 'sPass');
                }}
              >
                <HiddenCheckbox
                  id={formatID(sPass.value.toString())}
                  name={formatID(sPass.value.toString())}
                  value={sPass.value.toString()}
                />
                <StyledCheckbox />
                {sPass.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenDTM((state) => !state);
        }}
      >
        <span className='toggleTitle'>Drive Train Mechanicals</span>
        {openDTM ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openDTM ? (
        <>
          <div className='makeContent'>
            {stateDriveTrain.map((dt) => (
              <Option
                onClick={(e) => {
                  handleCheck(e, formatID(dt.value.toString()), 'dt');
                }}
              >
                <HiddenCheckbox
                  id={formatID(dt.value.toString())}
                  name={formatID(dt.value.toString())}
                  value={dt.value.toString()}
                />
                <StyledCheckbox />
                {dt.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}

      <div
        className='extColorToggle'
        onClick={() => {
          setOpenMrSr((state) => !state);
        }}
      >
        <span className='toggleTitle'>Moonroofs/Sunroofs</span>
        {openMrSr ? (
          <RemoveIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        ) : (
          <AddIcon
            style={{
              fontSize: 17,
              color: '#5e5e5e',
              borderRadius: 50,
              boxShadow: '0 2px 5px 0 rgba(0 0 0 / 20%)',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {openMrSr ? (
        <>
          <div className='makeContent'>
            {stateMoonroof.map((moonroof) => (
              <Option
                onClick={(e) => {
                  handleCheck(
                    e,
                    formatID(moonroof.value.toString()),
                    'moonroof'
                  );
                }}
              >
                <HiddenCheckbox
                  id={formatID(moonroof.value.toString())}
                  name={formatID(moonroof.value.toString())}
                  value={moonroof.value.toString()}
                />
                <StyledCheckbox />
                {moonroof.label}
              </Option>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default SiderFilter;
