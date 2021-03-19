import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";

import SiderPurchase from "../../components/SiderPurchase";
import SiderFilter from "../../components/SiderFilter/index";
import HeaderFilter from "../../components/HeaderFilter";
import SelectedFilter from "../../components/SelectedFilter";
import Card from "../../components/Card";

import { Container, GridContainer, Sider, Header, Grid } from "./styles";
import "./reset.css";
import genericCar from "../../assets/car.png";

import { formatValue } from "../../store/modules/genericFunctions";

// import CardVechile from '../../components/Card';
interface Image {
  vifnum: number;
  id: number;
  url: string;
  url_back: string;
  url_side: string;
  code: string;
  title: string;
  rgb: string;
}

interface leaseFinance {
  annualMileage: number;
  payment: string;
  rebates: [];
  sellingPrice: number;
  term: string;
  totalRebate: number;
}

interface colorProps {
  color: string;
  rgb: string;
}

interface Vehicle {
  VIN: string;
  airCondicioning: string;
  baseMSRPamount: number;
  cylinder: number;
  displacement: string;
  driveTrainMechanical: string;
  exteriorColor: string;
  exteriorRgb: colorProps;
  finance: leaseFinance;
  fuelType: string;
  image: Image;
  inVoice: number;
  interiorColor: string;
  lease: leaseFinance;
  make: string;
  model: string;
  msrp: number;
  seatingCapacity: string;
  seatingTextile: string;
  seatsDriver: string;
  seatsFront: string;
  shortDescription: string;
  transmission: string;
  windows: string;
  year: number;
  __v: number;
  _id: string;
}

const Explore = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [loading, setLoading] = useState<Boolean>(false);

  // sideFilter Bar
  const [filterYear, setFilterYear] = useState<any[]>([]);
  const [filterMakes, setFilterMakes] = useState<Array<string>>();
  const [filterModels, setFilterModels] = useState<Array<string>>();
  const [filterExtColor, setFilterExtColor] = useState<Array<string>>();
  const [filterIntColor, setFilterIntColor] = useState<Array<string>>();
  const [filterCylinders, setFilterCylinders] = useState<Array<string>>();
  const [filterDisplacements, setFilterDisplacements] = useState<
    Array<string>
  >();
  const [filterTransmission, setFilterTransmission] = useState<Array<string>>();
  const [filterInterior, setFilterInterior] = useState<Array<string>>();
  const [filterSeatingTextiles, setFilterSeatingTextiles] = useState<
    Array<string>
  >();
  const [filterSeatingCapacities, setFilterSeatingCapacities] = useState<
    Array<string>
  >();
  const [filterSeatsDriver, setFilterSeatsDriver] = useState<Array<string>>();
  const [filterSeatsFronts, setFilterSeatsFronts] = useState<Array<string>>();
  const [filterSeatsPass, setFilterSeatsPass] = useState<Array<string>>();
  const [filterDriveTrain, setFilterDriveTrain] = useState<Array<string>>();
  const [filterMoonroof, setFilterMoonroof] = useState<Array<string>>();

  const [rangeValue, setRangeValue] = useState<string>("");

  const [carName, setCarName] = useState<string>("");
  const [leaseToFinance, setLeaseToFinance] = useState<string>("");
  const [leaseToFinanceState, setLeaseToFinanceState] = useState<boolean>(true);
  const [leaseOrFinance, setLeaseOrFinance] = useState<string>("lease");

  const [cashMin, setCashMin] = useState<number>(0);
  const [cashMax, setCashMax] = useState<number>(Infinity);
  const [cashDown] = useState<number>(0);
  const [financeMin, setFinanceMin] = useState<number>(0);
  const [financeMax, setFinanceMax] = useState<number>(Infinity);
  const [leaseMin, setLeaseMin] = useState<any>("0");
  const [leaseMax, setLeaseMax] = useState<string>("0");
  const [termLease, setTermLease] = useState<string>(
    leaseOrFinance ? "24" : "36"
  );
  const [mileage, setMileage] = useState<string>("7500");

  const [currentPage, setCurrentPage] = useState(1);

  //state const - for search Vechiles

  const [limit] = useState<Number>(10);

  // array de filter

  var yearArr = new Array<string>("");
  var makeArr = new Array<string>();
  var modelArr = new Array<string>();
  var extColorArr = new Array<string>();
  var intColorArr = new Array<string>();
  var cylinderArr = new Array<string>();
  var displacementArr = new Array<string>();
  var transmissionArr = new Array<string>();
  var interiorArr = new Array<string>();
  var sTextilesArr = new Array<string>();
  var sCapacitiesArr = new Array<string>();
  var sDriverArr = new Array<string>();
  var sFrontArr = new Array<string>();
  var sPassArr = new Array<string>();
  var drivetrainArr = new Array<string>();
  var moonroofArr = new Array<string>();

  // callback
  const callbackYear = useCallback(
    (value) => {
      const checkItem = filterYear.some((item) => item === value);

      if (!checkItem) {
        setFilterYear((filterYear) => [...filterYear, value]);
      }

      console.log(filterYear);
    },
    [filterYear]
  );

  const callbackPai = (value: string) => setRangeValue(value);
  const callbackMake = (value: string) => {
    makeArr.push(value);
    setFilterMakes(makeArr);
  };
  const callbackModel = (value: string) => {
    modelArr.push(value);
    setFilterModels(modelArr);
  };
  const callbackExtColor = (value: string) => {
    extColorArr.push(value);
    setFilterExtColor(extColorArr);
  };
  const callbackIntColor = (value: string) => {
    intColorArr.push(value);
    setFilterIntColor(intColorArr);
  };
  const callbackCylinder = (value: string) => {
    cylinderArr.push(value);
    setFilterCylinders(cylinderArr);
  };
  const callbackDisplacement = (value: string) => {
    displacementArr.push(value);
    setFilterDisplacements(displacementArr);
  };
  const callbackTransmission = (value: string) => {
    transmissionArr.push(value);
    setFilterTransmission(transmissionArr);
  };
  const callbackInterior = (value: string) => {
    interiorArr.push(value);
    setFilterInterior(interiorArr);
  };
  const callbackSTextiles = (value: string) => {
    sTextilesArr.push(value);
    setFilterSeatingTextiles(sTextilesArr);
  };
  const callbackSCapacities = (value: string) => {
    sCapacitiesArr.push(value);
    setFilterSeatingCapacities(sCapacitiesArr);
  };
  const callbackSDriver = (value: string) => {
    sDriverArr.push(value);
    setFilterSeatsDriver(sDriverArr);
  };
  const callbackSFront = (value: string) => {
    sFrontArr.push(value);
    setFilterSeatsFronts(sFrontArr);
  };
  const callbackSPass = (value: string) => {
    sPassArr.push(value);
    setFilterSeatsPass(sPassArr);
  };
  const callbackDTrain = (value: string) => {
    drivetrainArr.push(value);
    setFilterDriveTrain(drivetrainArr);
  };
  const callbackMoonroof = (value: string) => {
    moonroofArr.push(value);
    setFilterMoonroof(moonroofArr);
  };

  useEffect(() => {
    if (leaseToFinanceState) {
      setLeaseOrFinance("lease");
    } else {
      setLeaseOrFinance("finance");
      setTermLease("");
    }
  }, [leaseToFinanceState]);

  useEffect(() => {
    async function loadVehicles() {
      if (leaseToFinanceState) {
        try {
          setLoading(true);

          const response = await api.get("/vehicles", {
            params: {
              page: currentPage,
              limit: limit,
              term: termLease,
              mileage: mileage,
              totalDownPayment: rangeValue,
              buyType: leaseOrFinance,
            },
          });
          setVehicles(response.data.results);
          setCurrentPage(response.data.currentPage);
        } catch (err) {
          alert("Vehicles not found");
        } finally {
          setLoading(false);
        }
      } else {
        try {
          setLoading(true);

          const response = await api.get("/vehicles", {
            params: {
              page: currentPage,
              limit: limit,
              term: termLease,
              totalDownPayment: rangeValue,
              buyType: leaseOrFinance,
            },
          });
          setVehicles(response.data.results);
          setCurrentPage(response.data.currentPage);
        } catch (err) {
          alert("Vehicles not found");
        } finally {
          setLoading(false);
        }
      }
    }
    loadVehicles();
  }, [
    currentPage,
    limit,
    leaseOrFinance,
    termLease,
    mileage,
    rangeValue,
    leaseToFinanceState,
  ]);

  console.log(cashMin);
  console.log(cashMax);
  console.log(cashDown);
  console.log(leaseToFinance);
  console.log(filterYear);
  console.log(filterMakes);
  console.log(filterModels);
  console.log(filterExtColor);
  console.log(filterIntColor);
  console.log(filterCylinders);
  console.log(filterDisplacements);
  console.log(filterTransmission);
  console.log(filterInterior);
  console.log(filterSeatingTextiles);
  console.log(filterSeatingCapacities);
  console.log(filterSeatsDriver);
  console.log(filterSeatsFronts);
  console.log(filterSeatsPass);
  console.log(filterDriveTrain);
  console.log(filterMoonroof);

  console.log(rangeValue);

  return (
    <Container>
      <button onClick={() => console.log(yearArr)}>aqui</button>
      <Sider>
        <SiderPurchase
          cashMin={cashMin}
          cashMax={cashMax}
          cashDown={cashDown}
          financeMin={financeMin}
          financeMax={financeMax}
          leaseMin={leaseMin}
          leaseMax={leaseMax}
          leaseToFinance={leaseToFinanceState}
          callback={callbackPai}
          onChangeMin={(e) => {
            setCashMin(Number(e.target.value));
          }}
          onChangeMax={(e) => {
            setCashMax(Number(e.target.value));
          }}
          onChangeFinanceMin={(e) => {
            setFinanceMin(Number(e.target.value));
          }}
          onChangeFinanceMax={(e) => {
            setFinanceMax(Number(e.target.value));
          }}
          onChangeLeaseMin={(e) => {
            setLeaseMin(e.target.value);
          }}
          onChangeLeaseMax={(e) => {
            setLeaseMax(e.target.value);
          }}
        />
        <SiderFilter
          OnChangeYears={callbackYear}
          OnChangeModels={callbackMake}
          OnChangeMakes={callbackModel}
          OnChangeExtColor={callbackExtColor}
          OnChangeIntColor={callbackIntColor}
          OnChangeCylinders={callbackCylinder}
          OnChangeDisplacements={callbackDisplacement}
          OnChangeTransmissions={callbackTransmission}
          OnChangeInterior={callbackInterior}
          OnChangeSeatingTextiles={callbackSTextiles}
          OnChangeSeatingCapacities={callbackSCapacities}
          OnChangeSeatsDrivers={callbackSDriver}
          OnChangeSeatsFronts={callbackSFront}
          OnChangeSeatsPass={callbackSPass}
          OnChangeDriveTrain={callbackDTrain}
          OnChangeMoonroof={callbackMoonroof}
          years={" "}
          makes={""}
          models={""}
          extColor={""}
          intColor={""}
          cylinders={""}
          transmissions={""}
          interior={""}
          seatingTextiles={""}
          seatsCapacities={""}
          seatsDrivers={""}
          seatsFronts={""}
          seatsPass={""}
          driveTrain={""}
          moonroof={""}
          displaciments={""}
        />
      </Sider>
      <GridContainer>
        <Header>
          <HeaderFilter
            valueLeaseToFinance={leaseToFinance}
            nameValue={carName}
            termLease={termLease}
            mileage={mileage}
            onChangeMileage={(e) => {
              setMileage(e.target.value);
            }}
            ChangeLf={() => setLeaseToFinanceState((state) => !state)}
            onChangeName={(e) => setCarName(e.target.value)}
            onChangeTermLease={(e) => {
              setTermLease(e.target.value);
            }}
            OnChangeLf={(e) => {
              setLeaseToFinance(e.target.value);
            }}
          />
        </Header>
        <SelectedFilter
          make={filterMakes}
          clearMake={() => {
            setFilterMakes([]);
          }}
          year={filterYear}
          clearYear={() => {
            setFilterYear([]);
          }}
          model={filterModels}
          clearModel={() => {
            setFilterModels([]);
          }}
          intColor={filterIntColor}
          clearIntColor={() => {
            setFilterIntColor([]);
          }}
          extColor={filterExtColor}
          clearExtColor={() => {
            setFilterExtColor([]);
          }}
          cylinder={filterCylinders}
          clearCylinder={() => {
            setFilterCylinders([]);
          }}
          transmission={filterTransmission}
          clearTransmission={() => {
            setFilterTransmission([]);
          }}
          interior={filterInterior}
          clearInterior={() => {
            setFilterInterior([]);
          }}
          seatingTextiles={filterSeatingTextiles}
          clearSTextiles={() => {
            setFilterSeatingTextiles([]);
          }}
          seatsCapacities={filterSeatingCapacities}
          clearSCapacities={() => {
            setFilterSeatingCapacities([]);
          }}
          seatsDriver={filterSeatsDriver}
          clearSDriver={() => {
            setFilterSeatsDriver([]);
          }}
          seatsFronts={filterSeatsFronts}
          clearSFronts={() => {
            setFilterSeatsDriver([]);
          }}
          seatsPass={filterSeatsPass}
          clearSPass={() => {
            setFilterSeatsPass([]);
          }}
          moonroof={filterMoonroof}
          clearMoonroof={() => {
            setFilterMoonroof([]);
          }}
          displaciment={filterDisplacements}
          clearDisplaciment={() => {
            setFilterDisplacements([]);
          }}
          driveTrain={filterDriveTrain}
          clearDriveTrain={() => {
            setFilterDriveTrain([]);
          }}
          clearAll={() => {
            setFilterYear([]);
            setFilterModels([]);
            setFilterMakes([]);
            setFilterIntColor([]);
            setFilterExtColor([]);
            setFilterCylinders([]);
            setFilterCylinders([]);
            setFilterTransmission([]);
            setFilterInterior([]);
            setFilterSeatingTextiles([]);
            setFilterSeatingCapacities([]);
            setFilterSeatsDriver([]);
            setFilterSeatsDriver([]);
            setFilterSeatsPass([]);
            setFilterMoonroof([]);
            setFilterDisplacements([]);
            setFilterDriveTrain([]);
          }}
        />
        <Grid>
          {loading ? null : (
            <>
              {vehicles.map((vehicle) =>
                Number(vehicle.msrp) > cashMin &&
                Number(vehicle.msrp) < cashMax ? (
                  <Card
                    key={vehicle.VIN}
                    vehicleVIN={vehicle.VIN}
                    valueVehicle={formatValue(vehicle.msrp.toString())}
                    vehicleYear={vehicle.year}
                    valueDown={rangeValue}
                    valueMpy={mileage}
                    valueMonthLease={vehicle.lease ? vehicle.lease.payment : ""}
                    valueMonthFinance={
                      vehicle.finance ? vehicle.finance.payment : ""
                    }
                    valueSavings="2350.00"
                    vechileName={`${vehicle.make} ${vehicle.model}`}
                    imgVechile={vehicle?.image?.url || genericCar}
                    leaseToFinance={leaseToFinanceState}
                    exteriorColor={vehicle.exteriorRgb.rgb}
                    body={vehicle.shortDescription}
                    interiorColor={vehicle.interiorColor}
                  />
                ) : null
              )}
            </>
          )}
        </Grid>
      </GridContainer>
    </Container>
  );
};

export default Explore;
