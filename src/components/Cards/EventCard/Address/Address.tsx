import { Place } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { type Address } from "../../../../types";
import "./Address.scss";

type AddressProps = {
  address: Address;
};

const Address = ({ address }: AddressProps) => {
  return (
    <Box className="address-container">
      <Place className="place-icon" />
      <Typography variant="body2" color="white">
        {address.streetName + " "}, {address.streetNumber}
      </Typography>
    </Box>
  );
};

export default Address;
