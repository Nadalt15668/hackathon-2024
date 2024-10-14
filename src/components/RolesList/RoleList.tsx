import Chip from "@mui/material/Chip";
import { Role } from "../../types";
import { ListItem } from "@mui/material";
import ChipList from "../../common/ChipList/ChipList";
import "./RoleList.scss";

type RolesListProps = {
  roles: Role[];
};

const renderRole = (role: Role, key: number) => (
  <ListItem key={key} sx={{ p: 1 }}>
    <Chip label={role.name} className="chip" />
  </ListItem>
);

const RolesList = ({ roles }: RolesListProps) => {
  return <ChipList chipList={roles} render={renderRole} />;
};

export default RolesList;
