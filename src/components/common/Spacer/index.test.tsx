import renderer from "react-test-renderer";
import { Spacer } from ".";

describe(`Spacer`, () => {
  it("render", () => {
    const tree = renderer.create(<Spacer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("vertical", () => {
    const tree = renderer.create(<Spacer vertical={"l"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("horizontal", () => {
    const tree = renderer.create(<Spacer horizontal={"l"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
