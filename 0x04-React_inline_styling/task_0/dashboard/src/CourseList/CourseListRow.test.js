import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerStyle} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerStyle}>{textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("Testing <CourseListRow />", () => {
  it("When isHeader is true test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test"/>);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual(2); // Ensure colSpan is a number
    expect(wrapper.find('th').text()).toEqual('first cell test');
  });

  it("When isHeader is true test the component renders two cells when textSecondCell is present", () => {
    let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test" textSecondCell="second cell test"/>);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('th').at(1).text()).toEqual('second cell test');
  });

  it("When isHeader is false test the component renders correctly two td elements within a tr element", () => {
    let wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first cell test" textSecondCell="second cell test"/>);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('first cell test');
    expect(wrapper.find('td').at(1).text()).toEqual('second cell test');
  });
});

