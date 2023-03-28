export interface Reservation {
  id: string | number;
  code: string;
  from: string;
  to: string;
  n_rooms: number;
  names: string;
  email: string;
  phone: string;
  total: number;
}