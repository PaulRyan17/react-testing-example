import React from "react";
import Card from "..";
import { create } from "react-test-renderer";

it("renders correctly", () => {
  const tree = create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
