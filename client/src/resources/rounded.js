export class RoundedValueConverter {
  toView(value) {
    console.log(value)
    let returnValue = (parseFloat(value).toFixed(4));
    return returnValue;
  }
}
