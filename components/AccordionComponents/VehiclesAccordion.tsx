import { Vehicle } from "../../types";
import CustomTypography from "./CustomTypography";

function VehiclesAccordion({ data }: { data: Vehicle }) {
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
        <strong>Vehicle Class:</strong> <span>{data.vehicle_class}</span>
      </CustomTypography>
    </>
  );
}

export default VehiclesAccordion;
