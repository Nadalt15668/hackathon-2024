import { Card as MuiCard, Stack } from "@mui/material";
import "./GlassCard.scss";
import { PropsWithChildren } from "react";

type CardProps<TProps> = PropsWithChildren<TProps>;

const GlassCard = <TProps,>({ children }: CardProps<TProps>) => {
  return (
    <MuiCard className="glass-card" elevation={1}>
      <Stack>{children}</Stack>
    </MuiCard>
  );
};

export default GlassCard;
