import { HeaderItem, HeaderElement } from "./HeaderAssets.js";
import Logo from "./Logo.js";

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
