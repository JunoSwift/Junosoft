import HeaderNav from "./HeaderNav.js";
import Logo from "./Logo.js";
export default class Header {
  navList = [
    new HeaderNav("fa fa-search"),
    new HeaderNav("fa fa-bell"),
    new HeaderNav("fa fa-user"),
  ];
  render() {
    const header = document.createElement("header");
    const nav = document.createElement("div");
    const navItems = document.createElement("ul");
    header.className = "header";
    nav.className = "top-nav-holder";

    const logo = new Logo("../../assets/images/junosoft.png");
    const logoRender = logo.render();

    for (const nav of this.navList) {
      const list = new HeaderNav(nav.icon, nav.name);
      const listRender = list.render();
      navItems.append(listRender);
    }

    header.append(logoRender);
    nav.append(navItems);
    header.append(nav);
    return header;
  }
}
