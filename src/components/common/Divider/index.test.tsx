import renderer from "react-test-renderer";
import { Divider } from ".";

describe(`Divider`, () => {
  it("render", () => {
    const tree = renderer.create(<Divider vertical={"l"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("vertical", () => {
    const tree = renderer.create(<Divider vertical={"l"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("horizontal", () => {
    const tree = renderer.create(<Divider horizontal={"l"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
