import renderer from "react-test-renderer";
import { SearchScreen } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`SearchScreen`, () => {
  it("render", async () => {
    const tree = renderer.create(<SearchScreen />).toJSON();
    await new Promise(setImmediate);
    expect(tree).toMatchSnapshot();
  });
});
