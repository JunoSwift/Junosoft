import Member from "./Member.js";
import { SectionHeader } from "./Utility/SectionHeader.js";

export default class TeamSection {
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
