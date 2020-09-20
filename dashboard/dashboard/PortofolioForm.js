import { Input } from "./FormAssets.js";
import { SectionHeader } from "../../app/Utility/SectionHeader.js";

export default class PortoFolioForm {
  inputs = [
    new Input("input", "text", "", "Enter the Webapp Name"),
    new Input("input", "text", "", "Enter URL"),
    new Input("input", "file", "", "Enter the Photo"),
    new Input("button", "submit", "Send To UI", ""),
  ];
  render() {
    const form = document.createElement("form");
    const formHeader = new SectionHeader(
      "INSERT NEW WEB APP",
      "New work is inserted here"
    );
    const formHeaderRender = formHeader.render();
    form.className = "portofolio-entrance__form";
    form.append(formHeaderRender);
    for (const input of this.inputs) {
      const inputRender = document.createElement("input");
      inputRender.className = "input-render";
      inputRender.name = `${input.name}`;
      inputRender.type = `${input.inputType}`;
      inputRender.value = `${input.inputValue}`;
      inputRender.placeholder = `${input.placeholder}`;

      form.append(inputRender);
    }
    return form;
  }
}
