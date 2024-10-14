import { PropsWithChildren } from "react";
import { Badge } from "@mui/material";
import { EventUrgency } from "../../../../types";
import "./UrgencyWrapper.scss";

type UrgencyWrapperProps = PropsWithChildren & {
  urgency: EventUrgency;
};

const urgencyColors: Record<EventUrgency, any> = {
  low: "success",
  medium: "warning",
  high: "warning",
  critical: "error",
};

const UrgencyWrapper = ({ urgency, children }: UrgencyWrapperProps) => {
  return (
    <Badge
      badgeContent={urgency}
      color={urgencyColors[urgency]}
      classes={{ badge: "badge" }}>
      {children}
    </Badge>
  );
};

export default UrgencyWrapper;
