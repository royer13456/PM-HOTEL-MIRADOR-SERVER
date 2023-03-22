export interface Recommendation {
    id?: string | number;
    image_url: string;
    title: string;
    price: number;
    visible: boolean;
    created_at: Date;
  }