import { makeAutoObservable, runInAction } from "mobx";

import { apartmentsApi } from "@api";
import { Apartment, ApartmentDetails } from "@models";

export class ApartmentStore {
  apartments: Array<Apartment> = [];
  apartmentDetails: ApartmentDetails | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getApartments = async () => {
    if (!this.apartments.length) {
      const apartments = await apartmentsApi.getAll();
      runInAction(() => {
        this.apartments = apartments;
      });
    }
  };

  getApartmentDetails = async (apartmentId: number) => {
    const apartmentDetails = await apartmentsApi.getById(apartmentId);
    runInAction(() => {
      this.apartmentDetails = apartmentDetails;
    });
  };
}
