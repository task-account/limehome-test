import { Space } from "./space";
import { Amenity } from "./amenity";
import { Image } from "./image";

export interface UnitGroup {
  id: number;
  bedroom_count: number;
  lowest_price_per_night: number | null;
  lowest_price_per_month: number | null;
}

export interface UnitGroupDetails extends UnitGroup {
  title: string;
  description: string;
  custom_title: string;
  external_id: string;
  name: string;
  max_guests: number;
  rental_type: string;
  spaces: Array<Space>;
  amenities: Array<Amenity>;
  images: Array<Omit<Image, "unit_group_ids">>;
}
