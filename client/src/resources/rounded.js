export class RoundedValueConverter {
  toView(value) {
    let returnValue = (Math.ceil(value * 4) / 4);
    return returnValue;
  }
}
