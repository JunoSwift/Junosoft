export default class Logo {
  constructor(logo) {
    this.logo = logo;
  }
  render() {
    const logoImage = document.createElement("div");
    logoImage.className = "logo-image";
    const img = document.createElement("img");
    img.src = `${this.logo}`;
    img.alt = `JunoSwift`;
    img.className = "JunoSwift";
    logoImage.append(img);
    return logoImage;
  }
}
