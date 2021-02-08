import { configure, EnzymeAdapter } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";
import Table from "../Table";
import Enzyme from "enzyme";
import {
  render,
  fireEvent,
  getByTestId,
  getByText,
} from "@testing-library/react";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe("Table", () => {
  test("snapshot <Table/>", () => {
    const TableTree = mount(<Table />);
    expect(toJson(TableTree)).toMatchSnapshot();
  });
  test("behaviour for the caption of the table", () => {
    const mock = jest.fn();
    const { container } = render(
      <Table musicType="popular" hideTable={mock} />
    );
    const tableMusicType = getByTestId(container, "table-musictype");
    expect(tableMusicType.textContent).toBe("popular");
  });
  test("close button", () => {
    const mock = jest.fn();
    const { container } = render(
      <Table musicType="popular" hideTable={mock} />
    );
    const close = getByTestId(container, "close-btn");
    console.log(close.textContent);
    expect(close.textContent).toBe("X");
  });
});
