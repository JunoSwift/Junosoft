//HEADER
class Logo {
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
class HeaderItem {
  constructor(icon, itemName, itemLink) {
    this.icon = icon;
    this.itemName = itemName;
    this.itemLink = itemLink;
  }
}
class HeaderElement {
  constructor(headerItem) {
    this.headerItem = headerItem;
  }
  render() {
    const iconName = this.headerItem.icon;
    const headerElement = document.createElement("li");

    headerElement.className = "header-list__element";
    headerElement.innerHTML = `<a href = "#${this.headerItem.itemLink}"
    <i class= ${iconName}> </i>
      ${this.headerItem.itemName} </a>
      `;
    return headerElement;
  }
}

class Header {
  items = [
    new HeaderItem("'fa fa-home'", "Home", "home"),
    new HeaderItem("'fa fa-bandcamp'", "Members", "members"),
    new HeaderItem("'fa fa-laptop'", "Services", "services"),
    new HeaderItem("'fa fa-superpowers'", "Portfolio", "our_work"),
    new HeaderItem("'fa fa-asl-interpreting'", "About Us", "about_us"),
    new HeaderItem("'fa fa-tty'", "Contact Us", "contact_us"),
  ];

  render() {
    const renderApp = document.querySelector(".app");
    const header = document.createElement("header");
    const logo = new Logo("./assets/images/junosoft.png");
    const renderLogo = logo.render();
    const headerList = document.createElement("ul");
    headerList.className = "header-list";
    for (const list of this.items) {
      const headerElementList = new HeaderElement(list);
      const headerElement = headerElementList.render();
      headerList.append(headerElement);
    }
    header.append(renderLogo, headerList);
    renderApp.append(header);
  }
}

const header = new Header();
header.render();
