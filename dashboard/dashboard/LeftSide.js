import LeftNav from "./LeftNav.js";
export default class LeftSide {
  constructor() {}
  leftHeader() {
    const header = document.createElement("div");
    header.className = "left-side-header";
    header.innerHTML = `<div class="user-img">
        <img src="../../assets/images/aa.jpg"> 
    </div>
   <div> <h3>KWIBUKA Comfi</h3></div>
   <div class="HD-TOP_Btn">  <button class>$ 52</button> </div>`;
    return header;
  }
  dashPresentation() {
    const presentation = document.createElement("div");
    presentation.className = "presentation";
    presentation.innerHTML = `<i class="fa fa-2x fa-keyboard"></i>    Dashboard`;

    return presentation;
  }
  leftLogout() {
    const logout = document.createElement("div");
    logout.className = "left-logout-area";
    logout.innerHTML = `
    <i class="fa fa-2x fa-logout"></i> Logout`;
    return logout;
  }
  render() {
    const leftSideHolder = document.createElement("div");
    const leftNav = new LeftNav();
    const leftNavRender = leftNav.render();
    leftSideHolder.className = "left-menu";
    leftSideHolder.append(this.leftHeader());
    leftSideHolder.append(this.dashPresentation());
    leftSideHolder.append(this.leftLogout());
    leftSideHolder.append(leftNavRender);
    return leftSideHolder;
  }
}
