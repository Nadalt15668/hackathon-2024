import { Place } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { type Address } from "../../../../types";
import "./Address.scss";

type AddressProps = {
  address: Address;
};

const Address = ({ address }: AddressProps) => {
  const ThemedTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));

  return (
    <Box className="address-container">
      <ThemedTypography variant="h6" color="white">
        {address.streetName + " "}, {address.streetNumber}
      </ThemedTypography>
      <Place className="place-icon" />
    </Box>
  );
};

export default Address;
