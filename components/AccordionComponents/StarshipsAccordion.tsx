import { Starship } from "../../types";
import CustomTypography from "./CustomTypography";

function StarshipsAccordion({ data }: { data: Starship }) {
  return (
    <>
      <CustomTypography>
        <strong>Cost In Credits:</strong> <span>{data.cost_in_credits}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Length:</strong> <span>{data.length}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Max Speed:</strong> <span>{data.max_atmosphering_speed}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Crew:</strong> <span>{data.crew}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Passengers:</strong> <span>{data.passengers}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Cargo Capacity:</strong> <span>{data.cargo_capacity}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Starship Class:</strong> <span>{data.starship_class}</span>
      </CustomTypography>
      <CustomTypography>
        <strong>Hyperdrive Rating:</strong>{" "}
        <span>{data.hyperdrive_rating}</span>
      </CustomTypography>
    </>
  );
}

export default StarshipsAccordion;
