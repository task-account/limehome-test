import { ApartmentStore } from ".";

describe("apartments store", () => {
  const store = new ApartmentStore();

  test("getApartments", async () => {
    await store.getApartments();
    expect(store.apartments.length).toBeGreaterThan(0);
  });

  test("getApartmentDetails", async () => {
    await store.getApartmentDetails(95);
    expect(store.apartmentDetails).not.toBeNull();
  });
});
