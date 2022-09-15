import renderer from "react-test-renderer";
import { Button } from ".";

jest.mock("@utils/hooks", () => ({
  withStyles: () => () => ({ useStyles: jest.fn() })
}));

describe(`Button`, () => {
  it("render", () => {
    const onPress = jest.fn();
    const tree = renderer.create(<Button title="test" onPress={onPress} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
