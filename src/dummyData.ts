import { Volunteer, Event } from "./types";

export const volunteers: Volunteer[] = [
  {
    id: "vol1",
    firstName: "John",
    lastName: "Doe",
    role: [
      {
        role: { name: "paramedic" },
        isVerified: true,
      },
      {
        role: { name: "rescuer" },
        isVerified: false,
      },
    ],
    isActive: true,
  },
  {
    id: "vol2",
    firstName: "Jane",
    lastName: "Smith",
    role: [
      {
        role: { name: "first-aid-applier" },
        isVerified: true,
      },
    ],
    isActive: false,
  },
];

export const events: Event[] = [
  {
    id: "event1",
    description: "Car accident at Main St.",
    location: {
      streetName: "Main St.",
      streetNumber: 123,
    },
    requires: [{ name: "paramedic" }, { name: "rescuer" }],
    volunteers: [
      {
        volunteer: volunteers[0],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[1],
        isEventAccepted: false,
      },
    ],
    time: new Date("2024-10-15T14:30:00"),
    urgency: "high",
  },
  {
    id: "event2",
    description: "Minor injury at Central Park",
    location: {
      streetName: "Central Park",
      streetNumber: 45,
    },
    requires: [{ name: "first-aid-applier" }],
    volunteers: [
      {
        volunteer: volunteers[1],
        isEventAccepted: true,
      },
    ],
    time: new Date("2024-10-16T10:00:00"),
    urgency: "low",
  },
];
