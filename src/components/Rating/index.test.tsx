import renderer from "react-test-renderer";
import { Rating } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`Rating`, () => {
  it("render", () => {
    const tree = renderer.create(<Rating rating={"2.3"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
