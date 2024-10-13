import Page from "../../../common/Page/Page";
import GlassCard from "../../../common/GlassCard/GlassCard";
import { type Event } from "../../../types";
import Date from "./Date/Date";
import UrgencyWrapper from "./UrgencyBadge/UrgencyWrapper";
import RolesList from "../../RolesList/RoleList";
import Address from "./Address/Address";

export type EventCardProps = {
  event: Omit<Event, "id">;
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Page>
      <UrgencyWrapper urgency={event.urgency}>
        <GlassCard>
          <Date date={event.time} />
          <RolesList roles={event.requires} />
          <Address address={event.location} />
        </GlassCard>
      </UrgencyWrapper>
    </Page>
  );
};

export default EventCard;
