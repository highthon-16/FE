import instance from "../axios";
import { CalendarEvent, CalendarEventRequest } from "./type";

const router = "/calendar";

export const getCalendarEvents = async () => {
  const res = await instance.get<CalendarEvent[]>(`${router}/events`);
  return res.data;
};

export const createCalendarEvent = async (data: CalendarEventRequest) => {
  const res = await instance.post<CalendarEvent>(`${router}/events`, data);
  return res.data;
};

export const updateCalendarEvent = async (
  eventId: number,
  data: CalendarEventRequest
) => {
  const res = await instance.put<CalendarEvent>(
    `${router}/events/${eventId}`,
    data
  );
  return res.data;
};

export const deleteCalendarEvent = async (eventId: number) => {
  const res = await instance.delete(`${router}/events/${eventId}`);
  return res.data;
};
