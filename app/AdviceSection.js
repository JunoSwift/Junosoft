import { Advice } from "./ConstructorRender.js";

$("section .advice-container button").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

export default class AdviceSection {
  advice = new Advice(
    "Dou you have an app or idea you want to give life ",
    "It's all in our box"
  );
  render() {
    const adviceSection = document.createElement("section");
    adviceSection.className = "section-container section-change";
    adviceSection.id = "about_us";
    const adviceContainer = document.createElement("div");
    adviceContainer.className = "advice-container";
    adviceContainer.innerHTML = `
    <div>${this.advice.adviceTitle}</div>
    <div>${this.advice.motoName}</div>
    <div><a href="#contact_us"><button><img src="" alt="go down"></i></button></a></div>
    `;
    adviceSection.append(adviceContainer);
    return adviceSection;
  }
}
