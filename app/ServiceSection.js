class Service {
  constructor(serviceIcon, serviceName, serviceContent) {
    this.serviceIcon = serviceIcon;
    this.serviceName = serviceName;
    this.serviceContent = serviceContent;
  }
}

class ServiceSection {
  services = [
    new Service(
      "'fa fa-2x fa-tty'",
      "MOBILE APP DEVELOPMENT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered "
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "WEB APP DEVELOPMENT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered "
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "DESKTOP APP DEVELOPMENT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered "
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "GRAPHIC DESIGN",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered "
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "VISUAL EFFECT",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered "
    ),
    new Service(
      "'fa fa-2x fa-home'",
      "INTERNEERSHIP",
      "We have good partnerships in place so aside from the concepts and design we have manufacturing and fulfilment covered "
    ),
  ];
  render() {
    const serviceSection = document.createElement("section");
    serviceSection.className = "section-container section-container__services";
    serviceSection.id = "services";
    const serviceHeader = new SectionHeaderWhite(
      "OUR SERVICES",
      "We work in team to deliver good product for you"
    );
    const serviceHeaderRender = serviceHeader.render();
    const ul = document.createElement("ul");
    ul.className = "service-list";
    for (const list of this.services) {
      const listElement = document.createElement("li");
      listElement.className = "service-list__item";
      listElement.innerHTML = `<div> <i class=${list.serviceIcon}></i> </div>
                               <div> ${list.serviceName} </div>
                               <div> ${list.serviceContent} </div>`;
      ul.append(listElement);
    }
    serviceSection.append(serviceHeaderRender, ul);
    return serviceSection;
  }
}
