export class Range {
  start: number;
  end: number;
  
  constructor(start: number, end: number) {
    if (start > end) throw new Error('上端点より下端点の方が大きい閉区間は作れません');

    this.start = start;
    this.end = end;
  }

  getRangeByString(): string {
    return `[${this.start}, ${this.end}]`;
  }

  isWithinRange(targetNumber: number): boolean {
    return this.start <= targetNumber && targetNumber <= this.end;
  }

  isEqualTo(targetRange: Range): boolean {
    return targetRange.start === this.start && targetRange.end === this.end;
  }

  isContains(targetRange: Range): boolean {
    return this.start <= targetRange.start && this.end >= targetRange.end;
  }
}
