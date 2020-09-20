import { Home } from "./ConstructorRender.js";

$("section .app-mission button").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

export default class HomeSection {
  home = new Home(
    "It all in our box",
    "./assets/images/junosoft.png",
    "Our Works"
  );

  render() {
    const homeSection = document.createElement("section");
    homeSection.className = "section-container";
    homeSection.id = "home";
    const homeDiv = document.createElement("div");
    homeDiv.className = "home-background";
    const ourWorkButton = document.createElement("button");
    ourWorkButton.innerHTML = `<a href="#our_work">${this.home.ourWork}</a>`;
    const missionDiv = document.createElement("div");
    missionDiv.className = "app-mission";
    const imgLogo = document.createElement("img");
    imgLogo.className = "misiion-logo_big";
    imgLogo.src = `${this.home.logoImage}`;
    imgLogo.alt = `JunoSoft`;
    const p = document.createElement("p");
    p.className = "mission-text";
    p.innerHTML = `${this.home.textMission}`;

    missionDiv.append(imgLogo, p, ourWorkButton);
    homeDiv.append(missionDiv);
    homeSection.append(homeDiv);
    return homeSection;
  }
}
