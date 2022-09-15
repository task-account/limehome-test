import { ApartmentDetails } from "@models";

export function getBedroomSuites(apartment: ApartmentDetails) {
  const set = apartment.unit_groups.reduce(
    (acc, curr) => acc.add(`${curr.max_guests}x${curr.bedroom_count} Bedroom suites`),
    new Set<string>()
  );
  return [...set];
}
