import renderer from "react-test-renderer";
import { ApartmentScreen } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

jest.mock("@react-navigation/native", () => {
  const actualModule = jest.requireActual("@react-navigation/native");
  return {
    ...actualModule,
    useRoute: () => ({
      params: { apartmentId: 95 }
    }),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn()
    })
  };
});

describe(`ApartmentScreen`, () => {
  it("render", async () => {
    const tree = renderer.create(<ApartmentScreen />).toJSON();
    await new Promise(setImmediate);
    expect(tree).toMatchSnapshot();
  });
});
