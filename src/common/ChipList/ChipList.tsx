import { Box } from "@mui/material";
import "./ChipList.scss";

type ChipListProps<TData> = {
  chipList: TData[];
  render: (item: TData, key: number) => React.ReactNode;
};

const ChipList = <TData,>({ chipList, render }: ChipListProps<TData>) => {
  return (
    <Box className="chip-list" component="ul">
      {chipList.map(render)}
    </Box>
  );
};

export default ChipList;
