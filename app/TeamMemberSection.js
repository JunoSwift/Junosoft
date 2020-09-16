class Member {
  constructor(memberName, memberTitle, memberContent, memberImage) {
    this.memberName = memberName;
    this.memberTitle = memberTitle;
    this.memberContent = memberContent;
    this.memberImage = memberImage;
  }

  render() {
    const memberImage = document.createElement("div");
    memberImage.className = "content-container";
    const imgMember = document.createElement("img");
    imgMember.src = `${this.memberImage}`;
    imgMember.alt = `${this.memberName}`;
    imgMember.className = "member-photo";
    memberImage.append(imgMember);
    const memberDetails = document.createElement("div");
    memberDetails.className = "content-container";
    const memberNameDOM = document.createElement("p");
    memberNameDOM.className = "member-name";
    memberNameDOM.innerHTML = `${this.memberName}`;
    const memberTitleDOM = document.createElement("p");
    memberTitleDOM.className = "member-title";
    memberTitleDOM.innerHTML = `${this.memberTitle}`;
    const memberContentDOM = document.createElement("p");
    memberContentDOM.className = "member-content";
    memberContentDOM.innerHTML = `${this.memberContent}`;
    memberDetails.append(
      imgMember,
      memberNameDOM,
      memberTitleDOM,
      memberContentDOM
    );
    return memberImage, memberDetails;
  }
}

class TeamSection {
  members = [
    new Member(
      "KWIBUKA Confiance",
      "SOFTWARE ENGINEER",
      " We have good partnerships in place so aside from the concepts and design  we have manufacturing and fulfilment covered We’re proud of our partners as they too run eco friendly businesses and are socially aware of their impact on our world",
      "./assets/images/co9.jpg"
    ),

    new Member(
      "UBANJE Albert",
      "SOFTWARE ENGINEER",
      " We have good partnerships in place so aside from the concepts and design  we have manufacturing and fulfilment covered We’re proud of our partners as they too run eco friendly businesses and are socially aware of their impact on our world",
      "./assets/images/xjuno.jpg"
    ),
  ];
  render() {
    const memberSection = document.createElement("section");
    memberSection.className = "section-container";
    memberSection.id = "members";
    const sectionHeader = new SectionHeader(
      "TEAM MEMBERS",
      "We work in team to deliver good product for you"
    );
    const sectionMemberRender = sectionHeader.render();

    const ul = document.createElement("ul");
    ul.className = "list-container";
    for (const list of this.members) {
      const memberList = document.createElement("li");
      const member = new Member(
        list.memberName,
        list.memberTitle,
        list.memberContent,
        list.memberImage
      );
      const memberRender = member.render();
      memberList.append(memberRender);
      ul.append(memberList);
    }

    memberSection.append(sectionMemberRender, ul);
    return memberSection;
  }
}
