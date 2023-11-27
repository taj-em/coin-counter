import getChange from "../src/keepCount";

describe('getChange', () => {

  test('Should subtract 0.25 from 4.99 until the value is less than 0.25', () => {
    const valueTest = getChange(4.99);
    expect(valueTest).toEqual("0.24");
  });
});