import HomeSection from "./HomeSection.js";
import TeamSection from "./TeamMemberSection.js";
import OurPortifolio from "./PortofolioSection.js";
import ContactSection from "./ContactUs.js";
import ServiceSection from "./ServiceSection.js";
import AdviceSection from "./AdviceSection.js";

$("header ul li a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

class AppRender {
  render() {
    const renderHook = document.querySelector(".app");

    const homeSection = new HomeSection();
    const homeSectionRender = homeSection.render();
    const teamSection = new TeamSection();
    const teamSectionRender = teamSection.render();
    const serviceSection = new ServiceSection();
    const serviceSectionRender = serviceSection.render();
    const ourWorkSection = new OurPortifolio();
    const ourWorkSectionRender = ourWorkSection.render();
    const adviceSection = new AdviceSection();
    const adviceSectionRender = adviceSection.render();
    const contactSection = new ContactSection();
    const contactSectionRender = contactSection.render();

    renderHook.append(homeSectionRender);
    renderHook.append(teamSectionRender);
    renderHook.append(serviceSectionRender);
    renderHook.append(ourWorkSectionRender);
    renderHook.append(adviceSectionRender);
    renderHook.append(contactSectionRender);
  }
}

class App {
  static init() {
    const app = new AppRender();
    app.render();
  }
}
App.init();
