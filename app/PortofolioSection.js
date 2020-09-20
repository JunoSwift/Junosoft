import { SectionHeader } from "./Utility/SectionHeader.js";
import { SideNavWork, Works } from "./ConstructorRender.js";
export default class OurPortifolio {
  works = [
    new Works("./assets/images/work/2 (1).jpg", "swiftmotion"),
    new Works("./assets/images/work/2 (2).jpg", "xjuno"),
    new Works("./assets/images/work/2 (3).jpg", "construction"),
    new Works("./assets/images/work/2 (4).jpg", "construction"),
    new Works("./assets/images/work/2 (5).jpg", "IT Room"),
    new Works("./assets/images/work/2 (6).jpg", "Todo List"),
    new Works("./assets/images/work/2 (7).jpg", "App Logo"),
    new Works("./assets/images/work/2 (8).jpg", "TENET"),
    new Works("./assets/images/work/2 (9).jpg", "Chevrolet"),
    new Works("./assets/images/work/2 (10).jpg", "Chevrolet"),
  ];
  sideNav = [
    new SideNavWork("All"),
    new SideNavWork("Web App"),
    new SideNavWork("Mobile Apps"),
    new SideNavWork("Desktop Apps"),
    new SideNavWork("Graphic Design"),
  ];
  render() {
    const portofolioSection = document.createElement("section");
    portofolioSection.className = "section-container";
    portofolioSection.id = "our_work";

    const portofolioHeader = new SectionHeader(
      "OUR PORTOFOLIO",
      "We work in team to deliver good product for you"
    );
    const portofolioHeaderRender = portofolioHeader.render();
    const portofoliaBodyContainer = document.createElement("div");
    portofoliaBodyContainer.className = "portofolio-body-container";
    const sideNavList = document.createElement("div");
    const ulList = document.createElement("ul");
    ulList.className = "side-nav__list";
    for (const list of this.sideNav) {
      const listElement = document.createElement("li");
      listElement.className = "side-nav__list-element";
      listElement.innerHTML = `${list.title}`;
      ulList.append(listElement);
    }
    sideNavList.append(ulList);
    const itemsList = document.createElement("div");
    const itemListBody = document.createElement("ul");
    itemListBody.className = "item-list";
    for (const porfList of this.works) {
      const listEl = document.createElement("li");
      listEl.className = "item-list__element";
      const pictureFrame = document.createElement("div");
      pictureFrame.className = "picture-frame";
      const img = document.createElement("img");
      img.className = "img-clickable";
      img.src = `${porfList.porfolioPhoto}`;
      img.alt = `${porfList.porfolioName}`;
      pictureFrame.append(img);
      const p = document.createElement("p");
      p.className = "work-name_portofolio";
      p.innerHTML = `${porfList.porfolioName}`;
      listEl.append(pictureFrame, p);

      itemListBody.append(listEl);
    }
    itemsList.append(itemListBody);

    portofoliaBodyContainer.append(sideNavList, itemsList);
    portofolioSection.append(portofolioHeaderRender, portofoliaBodyContainer);
    return portofolioSection;
  }
}
