import renderer from "react-test-renderer";
import { Price } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`Price`, () => {
  it("render", () => {
    const tree = renderer.create(<Price price={"55€"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
