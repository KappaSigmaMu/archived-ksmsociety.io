import React from "react"
import renderer from "react-test-renderer"

import DemoComponent from "../demo-component"

describe("DemoComponent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<DemoComponent />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
