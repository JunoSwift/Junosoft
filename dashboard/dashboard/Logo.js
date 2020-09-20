export default class Logo {
  constructor(logo) {
    this.logo = logo;
  }
  render() {
    const logoHolder = document.createElement("div");
    const logo = document.createElement("img");
    logoHolder.className = "logo-holder";
    logo.src = this.logo;
    logo.alt = "Junosoft LOGO";
    logoHolder.append(logo);
    return logoHolder;
  }
}
