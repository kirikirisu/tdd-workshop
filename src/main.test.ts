import { expect, test } from 'vitest'
import {Range} from './main'

test('下端点: 3 と上端点: 8 を受け取って、プロパティstartに3とプロパティendに8を持ったRangeインスタンスが作成されること', () => {
    const inputStart = 3, inputEnd = 8;

    const actualRange = new Range(inputStart, inputEnd);

    /* 下端点と上端点は密接に紐づいているため同時にassertする */
    expect(actualRange.start).toBe(inputStart)
    expect(actualRange.end).toBe(inputEnd)
})
