import CancelIcon from '@material-ui/icons/Cancel';
import { Container, Selected, Tag, TagValue, Clear } from './styles';

const SelectedFilter = ({
  make,
  clearMake,
  year,
  clearYear,
  model,
  clearModel,
  intColor,
  clearIntColor, 
  extColor,
  clearExtColor,
  cylinder,
  clearCylinder,
  transmission,
  clearTransmission,
  interior,
  clearInterior,
  seatingTextiles,
  clearSTextiles,
  seatsCapacities,
  clearSCapacities,
  seatsDriver,
  clearSDriver,
  seatsFronts,
  clearSFronts,
  seatsPass,
  clearSPass,
  driveTrain,
  clearDriveTrain,
  moonroof,
  clearMoonroof,
  displaciment,
  clearDisplaciment,
  clearAll
}) => {
  return (
    <Container>
      <Selected>
        {year !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {year}
            </TagValue>
            <CancelIcon
              onClick={clearYear}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {make !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {make}
            </TagValue>
            <CancelIcon
              onClick={clearMake}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}
        {model !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {model}
            </TagValue>
            <CancelIcon
              onClick={clearModel}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {intColor !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {intColor}
            </TagValue>
            <CancelIcon
              onClick={clearIntColor}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {extColor !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {extColor}
            </TagValue>
            <CancelIcon
              onClick={clearExtColor}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {cylinder !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {cylinder}
            </TagValue>
            <CancelIcon
              onClick={clearCylinder}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {transmission !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {transmission}
            </TagValue>
            <CancelIcon
              onClick={clearTransmission}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {interior !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {interior}
            </TagValue>
            <CancelIcon
              onClick={clearInterior}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {seatingTextiles !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {seatingTextiles}
            </TagValue>
            <CancelIcon
              onClick={clearSTextiles}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {seatsCapacities !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {seatsCapacities}
            </TagValue>
            <CancelIcon
              onClick={clearSCapacities}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {seatsDriver !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {seatsDriver}
            </TagValue>
            <CancelIcon
              onClick={clearSDriver}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {seatsFronts !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {seatsFronts}
            </TagValue>
            <CancelIcon
              onClick={clearSFronts}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {seatsPass !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {seatsPass}
            </TagValue>
            <CancelIcon
              onClick={clearSPass}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {driveTrain !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {driveTrain}
            </TagValue>
            <CancelIcon
              onClick={clearDriveTrain}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {moonroof !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {moonroof}
            </TagValue>
            <CancelIcon
              onClick={clearMoonroof}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}

        {displaciment !== '' ? (
          <Tag>
            <TagValue
              style={{
                fontSize: '12px',
              }}
            >
              {displaciment}
            </TagValue>
            <CancelIcon
              onClick={clearDisplaciment}
              style={{
                fontSize: 16,
                color: '#fd385b',
                marginLeft: 3,
              }}
            />
          </Tag>
        ) : null}
      </Selected>
      <Clear onClick={clearAll}>Clear all</Clear>
    </Container>
  );
};

export default SelectedFilter;
