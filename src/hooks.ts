import { SelectedVolunteers, Events, Volunteers } from "./store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export const useSelectedVolunteers = () => useRecoilState(SelectedVolunteers);

export const useVolunteers = () => useRecoilState(Volunteers);

export const useEvents = () => useRecoilState(Events);

export const useGetEvents = () => useRecoilValue(Events);
