export type RoleName = "paramedic" | "first-aid-applier" | "rescuer";
export type EventUrgency = "low" | "medium" | "high" | "critical";

export type Role = {
  name: RoleName;
};

export type VolunteerRole = {
  role: Role;
  isVerified: boolean;
};

export type Volunteer = {
  id: string;
  firstName: string;
  lastName: string;
  role: VolunteerRole[];
  isActive: boolean;
  birthCity: string;
};

export type Requiry = {
  role: Role;
  amount: number;
};

export type Address = {
  streetName: string;
  streetNumber: number;
};

export type EventVolunteer = {
  volunteer: Volunteer;
  isEventAccepted: boolean;
};

export type Event = {
  id: string;
  description: string;
  location: Address;
  requires: Role[];
  volunteers: EventVolunteer[];
  time: Date;
  urgency: EventUrgency;
};
