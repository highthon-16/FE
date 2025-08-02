import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCalendarEvent,
  deleteCalendarEvent,
  getCalendarEvents,
  updateCalendarEvent,
} from "../apis/calendar";
import { CalendarEventRequest } from "../apis/calendar/type";

export const useCalendar = () => {
  return useQuery({
    queryKey: ["calendar-events"],
    queryFn: getCalendarEvents,
  });
};

export const useCreateCalendarEvent = () => {
  const { mutateAsync } = useMutation({
    mutationFn: ({ data }: { data: CalendarEventRequest }) =>
      createCalendarEvent(data),
  });
  return {
    mutateAsync,
  };
};

export const useUpdateCalendarEvent = () => {
  const { mutateAsync } = useMutation({
    mutationFn: ({
      eventId,
      data,
    }: {
      eventId: number;
      data: CalendarEventRequest;
    }) => updateCalendarEvent(eventId, data),
  });

  return {
    mutateAsync,
  };
};

export const useDeleteCalendarEvent = () => {
  const { mutateAsync } = useMutation({
    mutationFn: ({ eventId }: { eventId: number }) =>
      deleteCalendarEvent(eventId),
  });
  return {
    mutateAsync,
  };
};
