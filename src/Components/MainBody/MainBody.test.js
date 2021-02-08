import { render, screen } from "@testing-library/react";
import MainBody from "./MainBody";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Header from "./../Header/Header";
import React from "react";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("App", () => {
  test("renders <Header /> component and showHome to be true at initial load", () => {
    const mainBodyWrapper = shallow(<MainBody />);
    const mainBodyState = mainBodyWrapper.find(Header).prop("showHome");
    expect(mainBodyState).toBeTruthy();
  });

  // test("<Header /> snapshot", () => {
  //   const mainBodyWrapper = shallow(<MainBody />);

  //   const mainBodyTree = renderer
  //     .create(
  //       <div>
  //         <Header
  //           toggleHome={mainBodyWrapper.find(Header).prop("toggleHome")}
  //           showHome="true"
  //         />
  //       </div>
  //     )
  //     .toJSON();
  //   expect(mainBodyTree).toMatchSnapshot();
  // });
});
