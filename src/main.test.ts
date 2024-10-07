import { describe, expect, test, it } from 'vitest'
import {Range} from './main'

describe('Rangeクラスを作成できること', () => {
    test('下端点: 3 と上端点: 8 を受け取って、プロパティstartに3とプロパティendに8を持ったRangeインスタンスが作成されること', () => {
        const inputStart = 3, inputEnd = 8;

        const actualRange = new Range(inputStart, inputEnd);

        /* 下端点と上端点は密接に紐づいているため同時にassertする */
        expect(actualRange.start).toBe(inputStart)
        expect(actualRange.end).toBe(inputEnd)
    })

    test("下端点と上端点に同じ値を受け取った時、一点のみの閉区間としてRangeインスタンスが作成できること", () => {
        const inputStart = 8, inputEnd = 8;
        const actualRange = new Range(inputStart, inputEnd);

        expect(actualRange.start).toBe(inputStart)
        expect(actualRange.end).toBe(inputEnd)
    });

    test("小数点を含む整数を下端点と上端点に登録するとエラーを投げること", () => {
        const inputStart = 3.5, inputEnd = 8;

       expect(() => new Range(inputStart, inputEnd)).toThrowError("下端点と上端点には小数点を含む整数を登録できません")
    });
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
    it.each([
        [2, false],
        [3, true], // 下端点の境界値
        [4, true],
        [7, true],
        [8, true], // 上端点の境界値
        [9, false],
    ])("下端点: 3 と 上端点: 8 の時、isWithinRangeメソッドに %i を渡すと %o を返すこと", (value, expected) => {
        const inputStart = 3, inputEnd = 8;
        const actualRange = new Range(inputStart, inputEnd);

        expect(actualRange.isWithinRange(value)).toBe(expected);
    });
});

describe("整数の閉区間は別の閉区間と等価かどうかを判定できること", () => {
    it.each([
        [3, 8, true],
        // 下端点の境界値
        [2, 8, false],
        [4, 8, false],
        // 上端点の境界値
        [3, 7, false],
        [3, 9, false],
    ])("下端点: 3, 上端点: 8 の閉区間インスタンスのisEqualToメソッドに、下端点: %i, 上端点: %i の閉区間インスタンスを渡すと %o を返すこと", (anotherStart, anotherEnd, expected) => {
        const inputStart = 3, inputEnd = 8;
        const range = new Range(inputStart, inputEnd);
        const anotherRange = new Range(anotherStart, anotherEnd);

        expect(range.isEqualTo(anotherRange)).toBe(expected);
    });
});

describe("整数の閉区間は別の閉区間を完全に含むかどうかを判定できること", () => {
    it.each([
        [3, 8, true],
        // 下端点の境界値
        [2, 8, false],
        [4, 8, true],
        // 上端点の境界値
        [3, 7, true],
        [3, 9, false],
    ])("下端点: 3, 上端点: 8 の閉区間インスタンスのisContainsメソッドに、下端点: %i, 上端点: %i の閉区間インスタンスを渡すと %o を返すこと", (anotherStart, anotherEnd, expected) => {
        const inputStart = 3, inputEnd = 8;
        const range = new Range(inputStart, inputEnd);
        const anotherRange = new Range(anotherStart, anotherEnd);

        expect(range.isContains(anotherRange)).toBe(expected);
    });
})
