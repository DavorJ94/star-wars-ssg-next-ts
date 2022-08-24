import { Film } from "../../types";
import CustomTypography from "./CustomTypography";

function FilmsAccordion({ data }: { data: Film }) {
  return (
    <>
      <CustomTypography>
        <strong>Release Date:</strong> <span>{data.release_date}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Director:</strong> <span>{data.director}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Producer(s):</strong> <span>{data.producer}</span>
      </CustomTypography>
    </>
  );
}

export default FilmsAccordion;
