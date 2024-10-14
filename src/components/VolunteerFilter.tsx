import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { type RoleName } from "../types";
import "./VolunteerFilter.scss";

type VolunteerFilterProps = {
  selectedRole: "" | RoleName;
  setSelectedRole: React.Dispatch<React.SetStateAction<"" | RoleName>>;
  allRequiredRoles: RoleName[];
};

const VolunteerFilter = ({
  selectedRole,
  setSelectedRole,
  allRequiredRoles,
}: VolunteerFilterProps) => {
  return (
    <FormControl fullWidth variant="outlined" className="filter">
      <InputLabel id="role-filter-label">Role</InputLabel>
      <Select
        value={selectedRole}
        onChange={({ target: { value } }) =>
          setSelectedRole(value as RoleName)
        }>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {allRequiredRoles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default VolunteerFilter;
