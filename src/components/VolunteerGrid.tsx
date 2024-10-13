import { Grid2 } from "@mui/material";
import { Volunteer } from "../types";
import VolunteerCard from "./Cards/VolunteerCard/VolunteerCard";
import Grid from "../common/Grid/Grid";

type VolunteerGridProps = {
  volunteers: Volunteer[];
};

const renderVolunteer = (volunteer: Volunteer) => (
  <Grid2 key={volunteer.id}>
    <VolunteerCard volunteer={volunteer} />
  </Grid2>
);

const VolunteerGrid = ({ volunteers }: VolunteerGridProps) => {
  return <Grid dataSet={volunteers} render={renderVolunteer} />;
};

export default VolunteerGrid;
