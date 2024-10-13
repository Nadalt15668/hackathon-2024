import { Card as MuiCard } from "@mui/material";
import "./Card.scss";
import { PropsWithChildren } from "react";

type CardProps<TProps> = PropsWithChildren<TProps>;

const GlassCard = <TProps,>({}: CardProps<TProps>) => {
  return <MuiCard className="glass-card" elevation={1} />;
};

export default GlassCard;
