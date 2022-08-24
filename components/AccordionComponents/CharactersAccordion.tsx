import { Character } from "../../types";
import CustomTypography from "./CustomTypography";

function CharactersAccordion({ data }: { data: Character }) {
  return (
    <>
      <CustomTypography>
        <strong>Gender:</strong> <span>{data.gender}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Height:</strong> <span>{data.height}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Mass:</strong> <span>{data.mass}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Hair color:</strong> <span>{data.hair_color}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Skin Color:</strong> <span>{data.skin_color}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Eye Color:</strong> <span>{data.eye_color}</span>
      </CustomTypography>
    </>
  );
}

export default CharactersAccordion;
