import { Planet } from "../../types";
import CustomTypography from "./CustomTypography";

function PlanetsAccordion({ data }: { data: Planet }) {
  return (
    <>
      <CustomTypography>
        <strong>Rotation Period:</strong> <span>{data.rotation_period}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Orbital Period:</strong> <span>{data.orbital_period}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Diameter:</strong> <span>{data.diameter}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Climate:</strong> <span>{data.climate}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Gravity</strong> <span>{data.gravity}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Surface Water:</strong> <span>{data.surface_water}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Population:</strong> <span>{data.population}</span>
      </CustomTypography>
    </>
  );
}

export default PlanetsAccordion;
