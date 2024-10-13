import { Box } from "@mui/material";
import "./Page.scss";

type PageProps = React.PropsWithChildren;

function Page({ children }: PageProps) {
  return (
    <Box
      component="div"
      className="page"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
}

export default Page;
