import { describe, expect, test } from 'vitest'
import {Range} from './main'

describe('Rangeクラスを作成できること', () => {
    test('下端点: 3 と上端点: 8 を受け取って、プロパティstartに3とプロパティendに8を持ったRangeインスタンスが作成されること', () => {
        const inputStart = 3, inputEnd = 8;

        const actualRange = new Range(inputStart, inputEnd);

        /* 下端点と上端点は密接に紐づいているため同時にassertする */
        expect(actualRange.start).toBe(inputStart)
        expect(actualRange.end).toBe(inputEnd)
    })
})


describe("上端点より下端点が大きい閉区間を作ることができないこと", () => {
    test("上端点より下端点の方が大きい値を受け取った時エラーを投げること", () => {
       expect(() => new Range(7, 3)).toThrowError("上端点より下端点の方が大きい閉区間は作れません")
    })
})

describe("整数の閉区間は文字列表記を返せること", () => {
    test("下端点: 3 と上端点: 8 を受け取って、getRangeByStringメソッドを実行すると文字列 '[3, 8]' を返すこと", () => {
        const inputStart = 3, inputEnd = 8;
        const expected = '[3, 8]';

        const actualRange = new Range(inputStart, inputEnd);

        expect(actualRange.getRangeByString()).toBe(expected)
    })
});

describe("整数の閉区間は指定した整数を含むかどうかを判定できること", () => {
    test("下端点: 3 と上端点: 8 を受け取って、isWithinRangeメソッドに4を渡すとtrueを返すこと", () => {
        const inputStart = 3, inputEnd = 8;
        const actualRange = new Range(inputStart, inputEnd);

        expect(actualRange.isWithinRange(4)).toBe(true)
    })
})
