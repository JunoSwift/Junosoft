export class Home {
  constructor(textMission, logoImage, ourWork) {
    this.textMission = textMission;
    this.logoImage = logoImage;
    this.ourWork = ourWork;
  }
}
export class SideNavWork {
  constructor(title) {
    this.title = title;
  }
}

export class Works {
  constructor(porfolioPhoto, porfolioName) {
    this.porfolioPhoto = porfolioPhoto;
    this.porfolioName = porfolioName;
  }
}
export class Input {
  constructor(name, inputType, valueType) {
    this.name = name;
    this.inputType = inputType;
    this.valueType = valueType;
  }
}
export class Service {
  constructor(serviceIcon, serviceName, serviceContent) {
    this.serviceIcon = serviceIcon;
    this.serviceName = serviceName;
    this.serviceContent = serviceContent;
  }
}
export class Advice {
  constructor(adviceTitle, motoName) {
    this.adviceTitle = adviceTitle;
    this.motoName = motoName;
  }
}
