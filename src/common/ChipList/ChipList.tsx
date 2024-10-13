import Paper from "@mui/material/Paper";
import "./ChipList.scss";

type ChipListProps<TData> = {
  chipList: TData[];
  render: (item: TData, key: number) => React.ReactNode;
};

const ChipList = <TData,>({ chipList, render }: ChipListProps<TData>) => {
  return (
    <Paper className="chip-list" component="ul">
      {chipList.map(render)}
    </Paper>
  );
};

export default ChipList;
