import { configure, EnzymeAdapter } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";
import Home from "../Home";
import Enzyme from "enzyme";
import {
  render,
  fireEvent,
  getByTestId,
  getByText,
} from "@testing-library/react";
import toJson from "enzyme-to-json";
import Table from "../../Table/Table";
configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe("Home", () => {
  test("snapshot <Home/>", () => {
    const homeTree = mount(<Home />);
    expect(toJson(homeTree)).toMatchSnapshot();
  });
  test("card to be clickable", () => {
    const { container } = render(<Home />);
    const tiles = getByTestId(container, "card-1");
    expect(fireEvent.click(tiles)).toBeTruthy();
  });
  test("on click get the table", () => {
    const { container } = render(<Home />);
    const tiles = getByTestId(container, "card-1");
    fireEvent.click(tiles);
    const homeWrapper = shallow(<Home />);

    expect(homeWrapper.find(Table)).toBeDefined();
  });
});
