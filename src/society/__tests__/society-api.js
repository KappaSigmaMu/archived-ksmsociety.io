import React from "react"
import renderer from "react-test-renderer"

import SocietyApi from "../society-api"

describe("SocietyApi", () => {
  it("returns an array", () => {
    expect(SocietyApi()).toMatchSnapshot()
  })
})
