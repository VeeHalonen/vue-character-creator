import { generateName } from '../index'

describe("Name generator function", () => {
    it('generates a string of length >0', () => {
      const name = generateName();
      expect(typeof name).toBe("string");
      expect(name.length).toBeGreaterThan(0);
    })

    it('generates a string starting with given parameter', () => {
      const starts = "Abc";
      const name = generateName(starts);
      let exp = '^' + starts;
      let re = new RegExp(exp);

      expect(name).toEqual(
        expect.stringMatching(re)
      )
    })
  });
