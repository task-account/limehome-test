import { ApartmentDetails } from "@models";
import { getBedroomSuites } from ".";

const mockApartment: ApartmentDetails = {
  id: 95,
  external_id: "ANG9",
  review_widget_id: "elfsight-app-046758a1-7ab7-4795-a15b-ed9788aded9c",
  name: "passau angerstraße",
  city: "passau",
  city_id: 29,
  price: "55€",
  rating: "4.5",
  street: "angerstraße ",
  location: {
    lat: 48.5778075,
    lng: 13.4591676,
    city: "Passau",
    postalCode: "94034",
    countryCode: "DE",
    addressLine1: "Angerstraße 9",
    countryName: "Germany"
  },
  distance: 1.6576440699005617,
  description:
    "Directly on the banks of the Danube and thus only 10 minutes walk from the old town is our limehome Passau Angerstraße. As soon as you have crossed the Schanzlbrücke, you will find a number of well-known restaurants, sweet cafes or interesting bars. Nearby there are also numerous shopping opportunities, while the arrival by public transport is easy, since our limehome is located only 1 km from the main train station and can easily be reached on foot in 14 minutes.",
  parking:
    "Unfortunately, there are no private parking spaces available in our limehome. However, with a little luck you will find a few paid parking spaces in the surrounding streets. If you are looking for a covered parking space, you can also park your car in the nearest Schanzl parking garage, which is 800 meters away on foot.",
  things_to_know:
    "Please note: in order to receive your personal access code, you have to complete our online check-in. You will receive the link and detailed instructions by email after your booking.",
  house_rules:
    "Short and simple: no smoking, no parties or events and no pets. Quiet hours 10 p.m. - 7 a.m.",
  images: [
    {
      url: "https://limehome.imgix.net/properties/95/2be1d260-b132-4811-9429-57eb8d004d4c.jpg",
      is_portrait: true,
      position: 0,
      unit_group_ids: [12]
    }
  ],
  lowest_price_per_night: null,
  lowest_price_per_month: null,
  default_check_in_time: "15:00",
  default_check_out_time: "11:00",
  unit_groups: [
    {
      id: 12,
      title: "Passau Angerstraße | Superior Suite",
      description:
        "Our 47 sqm One-Bedroom Suites have been furnished to our highest modern standards. Our amenities include a fully furnished separate kitchen, a separate bedroom with a comfortable box-spring bed (1.60 m), a pull-out sofa bed (1.40 m) in the living room and a modern smart TV as well as a private bathroom with shower to make you feel at home. With large windows and direct views of the Danube, you can unwind a bit after a busy day. In case of dirty laundry, you have the possibility to wash your clothes in the shared laundry room. Your Suite therefore offers everything you need for a stay with us.",
      custom_title: "",
      external_id: "ANG9-APARTMENT",
      name: "One-Bedroom Suite",
      max_guests: 3,
      rental_type: "ST",
      bedroom_count: 1,
      lowest_price_per_night: null,
      lowest_price_per_month: null,
      spaces: [
        {
          icon: "home",
          name: "sqm",
          name_plural: "sqm",
          slug: "square-meter",
          value: 47
        }
      ],
      amenities: [
        {
          icon: "utensils",
          name: "Fully-equipped kitchen"
        }
      ],
      images: [
        {
          url: "https://limehome.imgix.net/unit-groups/12/ce23c1af-e174-4d57-b57c-1fcf79d89538.jpeg",
          is_portrait: false,
          position: 0
        }
      ]
    },
    {
      id: 13,
      title: "Passau Angerstraße | Superior Suite",
      description:
        "Our 47 sqm One-Bedroom Suites have been furnished to our highest modern standards. Our amenities include a fully furnished separate kitchen, a separate bedroom with a comfortable box-spring bed (1.60 m), a pull-out sofa bed (1.40 m) in the living room and a modern smart TV as well as a private bathroom with shower to make you feel at home. With large windows and direct views of the Danube, you can unwind a bit after a busy day. In case of dirty laundry, you have the possibility to wash your clothes in the shared laundry room. Your Suite therefore offers everything you need for a stay with us.",
      custom_title: "",
      external_id: "ANG9-APARTMENT",
      name: "One-Bedroom Suite",
      max_guests: 3,
      rental_type: "ST",
      bedroom_count: 1,
      lowest_price_per_night: null,
      lowest_price_per_month: null,
      spaces: [
        {
          icon: "home",
          name: "sqm",
          name_plural: "sqm",
          slug: "square-meter",
          value: 47
        }
      ],
      amenities: [
        {
          icon: "utensils",
          name: "Fully-equipped kitchen"
        }
      ],
      images: [
        {
          url: "https://limehome.imgix.net/unit-groups/12/ce23c1af-e174-4d57-b57c-1fcf79d89538.jpeg",
          is_portrait: false,
          position: 0
        }
      ]
    },
    {
      id: 14,
      title: "Passau Angerstraße | Superior Suite",
      description:
        "Our 47 sqm One-Bedroom Suites have been furnished to our highest modern standards. Our amenities include a fully furnished separate kitchen, a separate bedroom with a comfortable box-spring bed (1.60 m), a pull-out sofa bed (1.40 m) in the living room and a modern smart TV as well as a private bathroom with shower to make you feel at home. With large windows and direct views of the Danube, you can unwind a bit after a busy day. In case of dirty laundry, you have the possibility to wash your clothes in the shared laundry room. Your Suite therefore offers everything you need for a stay with us.",
      custom_title: "",
      external_id: "ANG9-APARTMENT",
      name: "One-Bedroom Suite",
      max_guests: 4,
      rental_type: "ST",
      bedroom_count: 2,
      lowest_price_per_night: null,
      lowest_price_per_month: null,
      spaces: [
        {
          icon: "home",
          name: "sqm",
          name_plural: "sqm",
          slug: "square-meter",
          value: 47
        }
      ],
      amenities: [
        {
          icon: "utensils",
          name: "Fully-equipped kitchen"
        }
      ],
      images: [
        {
          url: "https://limehome.imgix.net/unit-groups/12/ce23c1af-e174-4d57-b57c-1fcf79d89538.jpeg",
          is_portrait: false,
          position: 0
        }
      ]
    }
  ]
};

describe("getBedroomSuites", () => {
  const items = getBedroomSuites(mockApartment);

  test("amount", () => {
    expect(items.length).toBe(2);
  });

  test("content", () => {
    expect(items[0]).toBe("3x1 Bedroom suites");
    expect(items[1]).toBe("4x2 Bedroom suites");
  });
});
