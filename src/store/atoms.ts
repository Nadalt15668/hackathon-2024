import { Event, Volunteer } from "./../types";
import { atom } from "recoil";
import { events, volunteers } from "../dummyData";

export const SelectedVolunteers = atom<Volunteer["id"][]>({
  key: "SelectedVolunteers",
  default: [],
});

export const Volunteers = atom<Volunteer[]>({
  key: "Volunteers",
  default: volunteers,
});

export const Events = atom<Event[]>({
  key: "Events",
  default: events,
});
