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
  {
    id: "vol3",
    firstName: "Mike",
    lastName: "Johnson",
    role: [
      {
        role: { name: "rescuer" },
        isVerified: true,
      },
      {
        role: { name: "first-aid-applier" },
        isVerified: true,
      },
    ],
    isActive: true,
  },
  {
    id: "vol4",
    firstName: "Emily",
    lastName: "Davis",
    role: [
      {
        role: { name: "paramedic" },
        isVerified: true,
      },
    ],
    isActive: false,
  },
  {
    id: "vol5",
    firstName: "David",
    lastName: "Wilson",
    role: [
      {
        role: { name: "firefighter" },
        isVerified: false,
      },
    ],
    isActive: true,
  },
  {
    id: "vol6",
    firstName: "Sophia",
    lastName: "Miller",
    role: [
      {
        role: { name: "nurse" },
        isVerified: true,
      },
    ],
    isActive: true,
  },
  {
    id: "vol7",
    firstName: "James",
    lastName: "Brown",
    role: [
      {
        role: { name: "rescuer" },
        isVerified: true,
      },
      {
        role: { name: "firefighter" },
        isVerified: true,
      },
    ],
    isActive: false,
  },
  {
    id: "vol8",
    firstName: "Linda",
    lastName: "Garcia",
    role: [
      {
        role: { name: "first-aid-applier" },
        isVerified: true,
      },
    ],
    isActive: true,
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
    requires: [
      { name: "paramedic" },
      { name: "rescuer" },
      { name: "firefighter" },
      { name: "nurse" },
    ],
    volunteers: [
      {
        volunteer: volunteers[0],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[1],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[2],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[3],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[4],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[5],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[6],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[7],
        isEventAccepted: true,
      },
      {
        volunteer: volunteers[8],
        isEventAccepted: true,
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
