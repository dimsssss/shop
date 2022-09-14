/* global describe, test, beforeAll, afterAll, expect */
describe('주문 통합테스트', () => {
  const helper = require('../helper')
  let initData

  beforeAll(async () => {
    initData = await helper.createDefaultData()
  })

  afterAll(async () => {
    await helper.cleanDatabase()
  })

  test('모든 주문 내역을 가져온다', async () => {
    const receipts = initData[3]
    const orderService = require('../../order/orderService')
    const results = await orderService.getOrderList()

    expect(results.length).toEqual(receipts.length)

    for (let i = 0; i < receipts.length; i += 1) {
      expect(results[i].city).toEqual(receipts[i].city)
      expect(results[i].country_code).toEqual(receipts[i].country_code)
      expect(results[i].customerId).toEqual(receipts[i].customerId)
      expect(results[i].customerName).toEqual(receipts[i].customerName)
      expect(results[i].orderId).toEqual(receipts[i].orderId)
      expect(results[i].price).toEqual(receipts[i].price)
      expect(results[i].productId).toEqual(receipts[i].productId)
      expect(results[i].quantity).toEqual(receipts[i].quantity)
      expect(results[i].receiptId).toEqual(receipts[i].receiptId)
      expect(results[i].sequenceId).toEqual(receipts[i].sequenceId)
      expect(results[i].zipcode).toEqual(receipts[i].zipcode)
    }
  })
  /**
   * 주문 상태 별로 조회
   */
  test.each([
    ['주문', []],
    ['결재완료', []],
    ['결재취소', []],
  ])('주문 상태가 %p인 결과', async input => {
    const orderService = require('../../order/orderService')
    const results = await orderService.getOrderList({state: input})
    results.forEach(result => {
      expect(result.orderState).toEqual(input)
    })
  })

  test('orderState가 주문인 경우에만 orderState를 발송으로 변경할 수 있다', async () => {
    const orderService = require('../../order/orderService')
    const orders = initData[2]

    for (let i = 0; i < orders.length; i += 1) {
      if (orders[i].orderState === '주문') {
        const result = await orderService.updateOrderStateToShip(
          orders[i].orderId,
        )
        expect(result).toEqual([1])
      } else {
        await expect(
          orderService.updateOrderStateToShip(orders[i].orderId),
        ).rejects.toThrowError(Error)
      }
    }
  })
})
