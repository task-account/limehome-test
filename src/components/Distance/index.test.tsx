import renderer from "react-test-renderer";
import { Distance } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`Distance`, () => {
  it("render", () => {
    const tree = renderer.create(<Distance distance={3.2123} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
