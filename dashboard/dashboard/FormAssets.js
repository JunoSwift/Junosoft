export class Input {
  constructor(name, inputType, inputValue, placeholder) {
    this.name = name;
    this.inputType = inputType;
    this.inputValue = inputValue;
    this.placeholder = placeholder;
  }
}

export class TextArea {
  constructor(name, cols, rows, placeholder) {
    this.name = name;
    this.cols = cols;
    this.rows = rows;
  }
}
export class Button {
  constructor(name, btnValue) {
    this.name = name;
    this.btnValue = btnValue;
  }
}
