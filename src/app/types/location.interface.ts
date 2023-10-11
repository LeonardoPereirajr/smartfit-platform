export interface Location {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  lockerroom: string;
  schedules: Schedules[];
}

export interface Schedules {
  weekdays: string;
  hour: string;
}
