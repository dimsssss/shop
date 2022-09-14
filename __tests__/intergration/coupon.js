/* global describe, test, expect */
describe('쿠폰 통합테스트', () => {
  test('하나의 쿠폰을 등록할 수 있다', async () => {
    const newCoupon = {
      couponType: '금액 할인',
      value: 10000,
    }

    const couponService = require('../../coupon/couponService')
    const result = await couponService.registerCouponType(newCoupon)

    expect(result.couponType).toEqual(newCoupon.couponType)
    expect(result.value).toEqual(newCoupon.value)
  })
})
