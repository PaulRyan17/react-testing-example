import React from "react";
import Card from "..";
import Renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme'
configure({adapter: new Adapter()});

it("renders correctly", () => {
  const tree = Renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('triggers the callback function', ()=>{
  // in order to test the callback function we first need to mock it
  const onClickCallback = jest.fn()
  // pass our mock function as the prop the Card
  let card = mount(<Card handleClick={onClickCallback} />)
  // find out button i.e. the button that triggers the callback and click it
  const button = card.find('button').simulate('click')
  // our mock function should have been called once
  expect(onClickCallback).toHaveBeenCalledTimes(1)
})

it('callback function is the passed the string discover', ()=>{
  // in order to test the callback function we first need to mock it
  const onClickCallback = jest.fn()
  // pass our mock function as the prop the Card
  let card = mount(<Card handleClick={onClickCallback} />)
  // find out button i.e. the button that triggers the callback and click it
  const button = card.find('button').simulate('click')
  // our mock function should have been called once
  expect(onClickCallback).toHaveBeenCalledWith('discover')
})

