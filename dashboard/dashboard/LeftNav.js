import LeftNavItem from "./LeftNavItem.js";

export default class LeftNav {
  itemsList = [
    new LeftNavItem("Members"),
    new LeftNavItem("Our Work"),
    new LeftNavItem("Contact Us"),
    new LeftNavItem("Members"),
  ];
  displayNone = "none";
  displayBlock = "block";

  MEMBER_ID = "Members";
  OUR_WORK_ID = "Our Work";
  CONTACT_US = "Contact Us";

  sideNavClickHandler = (cssId) => {
    const POPUP_CLICKED_MEMBER = document.querySelector(
      ".portofolio-entrance__form"
    );
    const ADD_MEMBER_FORM = document.querySelector(".add-new-member-form");
    const ALREAD_CONTENT = document.querySelector(".template-body");

    if (cssId.target.id === this.MEMBER_ID) {
      POPUP_CLICKED_MEMBER.style.display = this.displayBlock;
      ADD_MEMBER_FORM.style.display = this.displayNone;
      ALREAD_CONTENT.style.display = this.displayNone;
    } else if (cssId.target.id === this.OUR_WORK_ID) {
      POPUP_CLICKED_MEMBER.style.display = this.displayNone;
      ADD_MEMBER_FORM.style.display = this.displayBlock;
      ALREAD_CONTENT.style.display = this.displayNone;
    } else if (cssId.target.id === this.CONTACT_US) {
      POPUP_CLICKED_MEMBER.style.display = this.displayBlock;
      ADD_MEMBER_FORM.style.display = this.displayNone;
      ALREAD_CONTENT.style.display = this.displayNone;
    }
  };
  render() {
    const leftNavHolder = document.createElement("div");
    const navList = document.createElement("ul");

    leftNavHolder.className = "left-nav-holder";
    navList.className = "nav-items";
    const arr = [];
    for (const list of this.itemsList) {
      const nav = new LeftNavItem(list.name);
      const navRender = nav.render();
      navRender.id = `${list.name}`;
      arr.push(navRender);
      navList.append(navRender);
    }
    arr.forEach((li) => {
      li.addEventListener("click", this.sideNavClickHandler);
    });

    leftNavHolder.append(navList);
    return leftNavHolder;
  }
}
