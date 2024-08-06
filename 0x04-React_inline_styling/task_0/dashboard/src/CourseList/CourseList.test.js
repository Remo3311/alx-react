import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("renders correctly when isHeader is true and textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test Header" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    expect(wrapper.find('th').text()).toEqual('Test Header');
    expect(wrapper.find('th').prop('style')).toEqual({ backgroundColor: "#deb5b545" });
  });

  it("renders correctly when isHeader is true and textSecondCell exists", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Header 1');
    expect(wrapper.find('th').at(1).text()).toEqual('Header 2');
    expect(wrapper.find('th').at(0).prop('style')).toEqual({ backgroundColor: "#deb5b545" });
    expect(wrapper.find('th').at(1).prop('style')).toEqual({ backgroundColor: "#deb5b545" });
  });

  it("renders correctly when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('Cell 1');
    expect(wrapper.find('td').at(1).text()).toEqual('Cell 2');
    expect(wrapper.find('tr').prop('style')).toEqual({ backgroundColor: "#f5f5f5ab" });
  });
});

