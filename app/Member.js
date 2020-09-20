export default class Member {
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
