const MIN_LENGTH = 7;
const MIN_DOOR_NUM = 1;

class Car {
  constructor(length, doors) {
    if (length < MIN_LENGTH) throw 'Length can not be less than 7!';
    if (doors < MIN_DOOR_NUM) throw 'Door number can not be less than 1!';
    if (doors > Math.floor((length - 3) / 2))
      throw 'I can not fit those doors on that car!';
    this.body = new Body(length, doors);
    this.chassis = new Chassis(length);
  }
}

class Body {
  constructor(length, doors) {
    this.top = this.createTopLayer(length - 2);
    this.rear = this.createRearLayer(length - 1, doors);
    this.component = this.top + this.rear;
  }

  createTopLayer(length) {
    let result = ' ';

    for (let i = 0; i < length - 1; i++) {
      result += '_';
    }

    result += '\n';

    return result;
  }

  createRearLayer(length, doors) {
    const doorSlots = Math.floor((length - 2) / 2);
    const result = ['|'];

    for (let i = 0; i < doorSlots; i++) {
      result.push('  ');
    }
    // result.push('\\\n');
    result.push('\\');

    for (let i = 0, j = 1, k = result.length - 2; i < doors; i++) {
      if (i & 1) {
        result[j] = '[]';
        j++;
      } else {
        result[k] = '[]';
        k--;
      }
    }

    if (length & 1) {
      const idx = result.indexOf('  ');
      result.splice(idx + 1, 0, ' ');
    }

    console.log(result);
    return result.join('');
  }
}

class Chassis {
  constructor(length) {
    this.component = this.createFrameLayer(length);
  }

  createFrameLayer(length) {
    let result = Array.from({ length: length }, (_, i) => '-');
    result[1] = 'o';
    result[result.length - 3] = 'o';
    result[result.length - 1] = "'";

    if (length >= 12) {
      const extraWheelCount = Math.floor((length - 12) / 2) + 1;
      let frontIdx = result.length - 5;
      let rearIdx = 3;
      for (let i = 0; i < extraWheelCount; i++) {
        if (i & 1) {
          result[frontIdx] = 'o';
          frontIdx -= 2;
        } else {
          result[rearIdx] = 'o';
          rearIdx += 2;
        }
      }
    }

    return result.join('');
  }
}

var car = new Car(10, 2);
console.log(car.body.component);
console.log(car.chassis.component);
