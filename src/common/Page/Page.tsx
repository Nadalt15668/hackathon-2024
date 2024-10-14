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
        // backgroundColor: (theme) => "black",
      }}>
      {children}
    </Box>
  );
}

export default Page;
