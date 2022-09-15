import renderer from "react-test-renderer";
import { MapScreen } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`MapScreen`, () => {
  it("render", () => {
    const tree = renderer.create(<MapScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
