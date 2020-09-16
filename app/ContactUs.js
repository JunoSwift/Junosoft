class Input {
  constructor(name, inputType, valueType) {
    this.name = name;
    this.inputType = inputType;
    this.valueType = valueType;
  }
}

class ContactSection {
  input = [
    new Input("Name", "text", ""),
    new Input("Email", "email", ""),
    new Input("Message", "textarea", ""),
    new Input("Send", "submit", "Send Message"),
  ];
  render() {
    const contactSection = document.createElement("section");
    contactSection.className = "section-container";
    contactSection.id = "contact_us";
    const sectionHeader = new SectionHeader(
      "CONTACT US",
      "We work in team to deliver good product for you"
    );
    const sectionHeaderRender = sectionHeader.render();

    const form = document.createElement("form");
    for (let listInput of this.input) {
      const label = document.createElement("label");
      label.innerHTML = `${listInput.name}`;
      const input = document.createElement("input");
      input.className = "contact-us_inputs";
      input.type = `${listInput.inputType}`;
      input.name = `${listInput.name}`;
      input.value = `${listInput.valueType}`;
      form.append(label, input);
    }
    const footer = new Footer("@copyright junosoft 2020");
    const footerRender = footer.render();
    contactSection.append(sectionHeaderRender, form, footerRender);
    return contactSection;
  }
}
