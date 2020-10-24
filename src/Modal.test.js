import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import Modal from './Modal'

it("renders", () => {
    const { asFragment } = render(<Modal id="hello" btnText="This is a modal button"/>);
    expect(asFragment()).toMatchSnapshot();
});