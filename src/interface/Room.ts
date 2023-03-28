/* Defining the shape of the data that will be returned from the API. */
export interface Room {
  id?: string | number;
  image_url: string;
  title: string;
  category: string;
  description: string;
  price: number;
  visible: boolean;
  created_at: Date;
}