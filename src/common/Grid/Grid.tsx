import { Grid2 } from "@mui/material";

type GridProps<TData> = {
  dataSet: TData[];
  render: (item: TData) => React.ReactNode;
};

const EventGrid = <TData,>({ dataSet, render }: GridProps<TData>) => {
  return (
    <Grid2
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}>
      {dataSet.map(render)}
    </Grid2>
  );
};

export default EventGrid;
