import { Specie } from "../../types";
import CustomTypography from "./CustomTypography";

function SpeciesAccordion({ data }: { data: Specie }) {
  return (
    <>
      <CustomTypography>
        <strong>Designation:</strong> <span>{data.designation}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Average Height:</strong> <span>{data.average_height}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Skin Colors:</strong> <span>{data.skin_colors}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Eye colors:</strong> <span>{data.eye_colors}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Average Lifespan:</strong> <span>{data.average_lifespan}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Language:</strong> <span>{data.language}</span>
      </CustomTypography>
    </>
  );
}

export default SpeciesAccordion;
