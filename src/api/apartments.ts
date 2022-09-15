import { Apartment, ApartmentDetails } from "@models";

import { api } from "./base";

const mockData = () => ({
  rating: (Math.random() * 5 + 1).toFixed(1),
  price: `${Math.round(Math.random() * 100)}€`
});

export const apartmentsApi = {
  getAll: () => {
    return api
      .get<Array<Apartment>>("/")
      .then((data) => data.map((item) => ({ ...item, ...mockData() })));
  },
  getById: (id: number) => {
    return api.get<ApartmentDetails>(`/${id}`).then((data) => ({ ...data, ...mockData() }));
  }
};
