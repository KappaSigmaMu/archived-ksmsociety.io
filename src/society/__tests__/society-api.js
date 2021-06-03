import SocietyApi from "../society-api"

describe("SocietyApi", () => {
  it("returns an array", () => {
    expect(SocietyApi()).toMatchSnapshot()
  })
})
