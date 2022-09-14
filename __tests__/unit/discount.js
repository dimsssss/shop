/* global describe, test, expect*/

describe('할인 정책 테스트', () => {
  /**
   * 금액 할인 테스트
   */
  test.each([
    [100, 100, 0],
    [100, -200, Error],
    [100, 1.1, Error],
  ])('비용 %p, 할인 금액 %p, 결과 %p', (price, value, expected) => {
    const {discount} = require('../../order/discountPolicy/amount')
    try {
      expect(discount(price, value)).toEqual(expected)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  /**
   * 비율 할인 테스트
   */
  test.each([
    [100, 1.1, Error],
    [100, -200, Error],
    [100, 0.1, 90],
  ])('비용 %p, 할인 금액 %p, 결과 %p', (price, value, expected) => {
    const {discount} = require('../../order/discountPolicy/amount')
    try {
      expect(discount(price, value)).toEqual(expected)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })
})
