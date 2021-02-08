import { render, screen } from "@testing-library/react";
import App from "./App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import MainBody from "./Components/MainBody/MainBody";

configure({ adapter: new Adapter() });

describe("App", () => {
  test("renders <MainBody /> component", () => {
    const appWrapper = shallow(<App />);
    const mainBody = appWrapper.find(MainBody);
    expect(mainBody).toHaveLength(1);
  });
});
