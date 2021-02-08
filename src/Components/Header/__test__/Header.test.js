import { configure, EnzymeAdapter } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";
import Header from "../Header";
import Enzyme from "enzyme";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });
const { mount } = Enzyme;
describe("Header", () => {
  test("snapshot <Header/>", () => {
    const headerTree = mount(<Header />);
    expect(toJson(headerTree)).toMatchSnapshot();
  });
  test("header testing", () => {
    const headerWrapper = mount(<Header />);
    const headerText = headerWrapper.find(".header__name");
    expect(headerText.text()).toBe("Lyrics Finder");
  });

  describe("behaviour", () => {
    test("pass props of toggleHome", () => {
      const headerWrapper = mount(<Header />);
      const table = headerWrapper;
    });
  });
  test("Initially input field to be empty", () => {
    const { container } = render(<Header />);
    const inputValue = getByTestId(container, "header-search");
    expect(inputValue.textContent).toBe("");
  });
  test("Input field on change", () => {
    const { container } = render(<Header />);
    const inputValue = getByTestId(container, "header-search");
    const newSearch = "coldplay";
    fireEvent.change(inputValue, { target: { value: newSearch } });
    expect(inputValue.value).toBe(newSearch);
  });
  test("submit button", () => {
    const { container } = render(<Header />);
    const submitBtn = getByTestId(container, "search-btn");
    expect(submitBtn.value).toBe("");
  });
  test("if submit without entering input to be empty", () => {
    const mock = jest.fn();
    const { container } = render(<Header toggleHome={mock} />);
    const submitBtn = getByTestId(container, "search-btn");

    const inputValue = getByTestId(container, "header-search");
    fireEvent.click(submitBtn);

    expect(inputValue.value).toBe("");
  });
  test("if submit without any input show error", () => {
    const mock = jest.fn();
    const { container } = render(<Header toggleHome={mock} />);
    const submitBtn = getByTestId(container, "search-btn");

    const inputValue = getByTestId(container, "header-search");
    fireEvent.click(submitBtn);

    const errorText = getByTestId(container, "error-text");
    const errorValue = "* This field is required.";
    expect(errorText.textContent).toBe(errorValue);
  });
});
