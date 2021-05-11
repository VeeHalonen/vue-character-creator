import { generateName } from '../index'

describe("Name generator function", () => {
    it('generates a string of length >0', () => {
  
      const name = generateName();
      expect(typeof name).toBe("string");
      expect(name.length).toBeGreaterThan(0);
    })
  });
