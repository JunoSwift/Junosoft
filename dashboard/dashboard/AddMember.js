import { Input, TextArea } from "./FormAssets.js";
import { SectionHeader } from "../../app/Utility/SectionHeader.js";

export default class AddNewMember {
  form = [
    new Input("input", "text", "", "Enter Full Name"),
    new Input("input", "text", "", "Enter Career"),
    new TextArea("textarea", "50", "6", "Enter member Info"),
    new Input("input", "submit", "Add Member", ""),
  ];
  render() {
    const addNewMemberForm = document.createElement("form");
    addNewMemberForm.className = "add-new-member-form";
    const formHeader = new SectionHeader(
      "ADD NEW WORKMATE",
      "Insert New User"
    ).render();

    addNewMemberForm.append(formHeader);

    for (const field of this.form) {
      const fieldType = field.name;

      if (fieldType === "input") {
        const input = document.createElement("input");
        input.className = "input-render";
        input.type = field.inputType;
        input.placeholder = field.placeholder;

        addNewMemberForm.append(input);
      }
      if (fieldType === "textarea") {
        const textarea = document.createElement("textarea");
        textarea.cols = field.cols;
        textarea.rows = field.rows;
        textarea.value = field.placeholder;
        textarea.className = "input-render";
        addNewMemberForm.append(textarea);
      }
    }
    return addNewMemberForm;
  }
}
