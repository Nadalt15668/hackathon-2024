import { Grid2 } from "@mui/material";
import { Volunteer } from "../types";
import VolunteerCard from "./Cards/VolunteerCard/VolunteerCard";
import Grid from "../common/Grid/Grid";

type VolunteerGridProps = {
  volunteers: Volunteer[];
  selectedVolunteers: Volunteer["id"][];
  setSelectedVolunteers: React.Dispatch<
    React.SetStateAction<Volunteer["id"][]>
  >;
};

const VolunteerGrid = ({
  volunteers,
  selectedVolunteers,
  setSelectedVolunteers,
}: VolunteerGridProps) => {
  const renderVolunteer = (volunteer: Volunteer) => (
    <Grid2 key={volunteer.id}>
      <VolunteerCard
        volunteer={volunteer}
        isSelected={selectedVolunteers.some((id) => id === volunteer.id)}
        toggleSelect={() =>
          setSelectedVolunteers((prev) =>
            prev.includes(volunteer.id)
              ? prev.filter((id) => id !== volunteer.id)
              : [...prev, volunteer.id]
          )
        }
      />
    </Grid2>
  );

  return <Grid dataSet={volunteers} render={renderVolunteer} />;
};

export default VolunteerGrid;
