import { Badge } from "@mui/material";
import { EventUrgency } from "../../../../types";
import { PropsWithChildren } from "react";

type UrgencyWrapperProps = PropsWithChildren & {
  urgency: EventUrgency;
};

const urgencyColors: Record<EventUrgency, any> = {
  low: "success",
  medium: "warning",
  high: "default",
  critical: "error",
};

const UrgencyWrapper = ({ urgency, children }: UrgencyWrapperProps) => {
  return (
    <Badge badgeContent={urgency} color={urgencyColors[urgency]}>
      {children}
    </Badge>
  );
};

export default UrgencyWrapper;
