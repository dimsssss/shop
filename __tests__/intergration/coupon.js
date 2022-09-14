/* global describe, beforeAll, afterAll, test, expect */
describe('쿠폰 통합테스트', () => {
  let initData
  const helper = require('../helper/couponHelper')

  beforeAll(async () => {
    initData = await helper.initDummyData()
  })

  afterAll(async () => {
    await helper.cleanDatabase()
  })

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

  test('모든 쿠폰 사용 내역을 가져온다', async () => {
    const histories = initData[1]
    const couponService = require('../../coupon/couponService')
    const couponHistories = await couponService.getCouponHistories()

    for (let i = 0; i < histories.length; i += 1) {
      expect(couponHistories[i].couponHistoryId).toEqual(
        histories[i].couponHistoryId,
      )
      expect(couponHistories[i].couponTypeId).toEqual(histories[i].couponTypeId)
      expect(couponHistories[i].orderId).toEqual(histories[i].orderId)
      expect(couponHistories[i].discountAmount).toEqual(
        histories[i].discountAmount,
      )
    }
  })
})
