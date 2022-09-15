import renderer from "react-test-renderer";
import { Apartment } from "@models";

import { ApartmentCard } from ".";

const mockApartment: Apartment = {
  id: 96,
  external_id: "AQ2",
  review_widget_id: "elfsight-app-1a175e41-0a9b-42ad-8db6-b660a0a178f9",
  price: "55€",
  rating: "4.5",
  name: "montabaur am quendelberg",
  city: "montabaur",
  city_id: 30,
  street: "am quendelberg",
  location: {
    lat: 50.4336675,
    lng: 7.830375699999999,
    city: "Montabaur",
    postalCode: "56410",
    countryCode: "DE",
    addressLine1: "Am Quendelberg 2",
    countryName: "Germany"
  },
  distance: 0.4043757328515891,
  images: [
    {
      url: "https://limehome.imgix.net/properties/96/3762f856-fce1-454c-b71b-b4f00b06e1c4.jpg",
      is_portrait: false,
      position: 0,
      unit_group_ids: [13]
    }
  ],
  lowest_price_per_night: null,
  lowest_price_per_month: null,
  unit_groups: [
    {
      id: 13,
      bedroom_count: 1,
      lowest_price_per_night: null,
      lowest_price_per_month: null
    }
  ]
};

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

jest.mock("@react-navigation/native", () => {
  const actualModule = jest.requireActual("@react-navigation/native");
  return {
    ...actualModule,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn()
    })
  };
});

describe(`ApartmentCard`, () => {
  it("render", () => {
    const tree = renderer.create(<ApartmentCard apartment={mockApartment} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
