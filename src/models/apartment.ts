import { Image } from "./image";
import { UnitGroup, UnitGroupDetails } from "./unitGroup";
import { Location } from "./location";

export interface Apartment {
  id: number;
  external_id: string;
  review_widget_id: string;
  price: string;
  rating: string;
  name: string;
  city: string;
  city_id: number;
  street: string;
  location: Location;
  distance: number;
  images: Array<Image>;
  lowest_price_per_night: number | null;
  lowest_price_per_month: number | null;
  unit_groups: Array<UnitGroup>;
}

export interface ApartmentDetails extends Apartment {
  description: string;
  parking: string;
  things_to_know: string;
  house_rules: string;
  default_check_in_time: string;
  default_check_out_time: string;
  unit_groups: Array<UnitGroupDetails>;
}
