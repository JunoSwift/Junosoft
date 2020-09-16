class SectionHeaderWhite {
  constructor(sectionTittle, sectionSubtitle) {
    this.sectionTittle = sectionTittle;
    this.sectionSubtitle = sectionSubtitle;
  }
  render() {
    const memberDiv = document.createElement("div");
    memberDiv.className = "title-header-container";
    const mainTitle = document.createElement("p");
    mainTitle.className = "main-title__header__white";
    mainTitle.innerHTML = `${this.sectionTittle}`;
    const subTitle = document.createElement("p");
    subTitle.className = "sub-title__header__white";
    subTitle.innerHTML = `${this.sectionSubtitle}`;
    const breakLine = document.createElement("div");
    breakLine.className = "break-line__white";
    memberDiv.append(mainTitle, subTitle, breakLine);
    return memberDiv;
  }
}
