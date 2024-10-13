import Chip from "@mui/material/Chip";
import { Role } from "../../types";
import { ListItem } from "@mui/material";
import ChipList from "../../common/ChipList/ChipList";

type RolesListProps = {
  roles: Role[];
};

const renderRole = (role: Role, key: number) => (
  <ListItem key={key}>
    <Chip label={role.name} />
  </ListItem>
);

const RolesList = ({ roles }: RolesListProps) => {
  return <ChipList chipList={roles} render={renderRole} />;
};

export default RolesList;
