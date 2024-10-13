import GlassCard from "../../../common/GlassCard/GlassCard";
import { type Event } from "../../../types";

export type EventCardProps = {
  event: Omit<Event, "id">;
};

const EventCard = ({ event }: EventCardProps) => {
  return <GlassCard></GlassCard>;
};

export default EventCard;

import React from "react";
import { Box, Paper, Typography, Avatar, Badge, Stack } from "@mui/material";
import { CalendarToday, People, Place } from "@mui/icons-material";
import Page from "../../../common/Page/Page";

const urgencyColors = {
  low: "info",
  medium: "warning",
  high: "error",
};

const EventCard = ({ eventData }) => {
  return (
    <Page>
      <GlassCard>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
          }}
        />
        <Box sx={{ position: "relative", p: 3, zIndex: 10 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarToday sx={{ fontSize: 20, color: "rgb(147,197,253)" }} />
              <Typography variant="h6" color="white">
                {eventData.date}
              </Typography>
            </Stack>
            <Badge
              badgeContent={`${
                eventData.urgency.charAt(0).toUpperCase() +
                eventData.urgency.slice(1)
              } Urgency`}
              color={urgencyColors[eventData.urgency]}
            />
          </Box>

          {/* Required People */}
          <Box sx={{ mb: 3 }}>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <People sx={{ fontSize: 20, color: "rgb(147,197,253)" }} />
              <Typography variant="body1" color="white">
                Required People
              </Typography>
            </Stack>
            <Stack direction="row" spacing={-1}>
              {eventData.requiredPeople.slice(0, 3).map((person, index) => (
                <Avatar
                  key={index}
                  src={person.avatar}
                  alt={person.name}
                  sx={{ border: "2px solid white", zIndex: 3 - index }}
                />
              ))}
              {eventData.requiredPeople.length > 3 && (
                <Avatar sx={{ bgcolor: "gray", border: "2px solid white" }}>
                  +{eventData.requiredPeople.length - 3}
                </Avatar>
              )}
            </Stack>
          </Box>

          {/* Address */}
          <Box sx={{ display: "flex", alignItems: "start", spaceX: 1 }}>
            <Place sx={{ fontSize: 20, color: "rgb(147,197,253)", mt: 0.5 }} />
            <Typography variant="body2" color="white">
              {eventData.address}
            </Typography>
          </Box>
        </Box>
      </GlassCard>
    </Page>
  );
};

export default EventCard;
