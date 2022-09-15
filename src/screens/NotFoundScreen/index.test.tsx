import renderer from "react-test-renderer";
import { NotFoundScreen } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`NotFoundScreen`, () => {
  it("render", () => {
    const tree = renderer.create(<NotFoundScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
