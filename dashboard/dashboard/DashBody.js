import PortoFolioForm from "./PortofolioForm.js";
import AddNewMember from "./AddMember.js";
export default class DashboardBody {
  render() {
    const body = document.createElement("div");
    body.className = "dash-body";
    const templateBody = document.createElement("div");
    templateBody.className = "template-body";
    templateBody.innerHTML = `<h2>CREATE NEW MEMBER</h2><br/><button>+</button>`;
    const portoFolioForm = new PortoFolioForm();
    const portofolioFormRender = portoFolioForm.render();
    const addNewMemberForm = new AddNewMember();
    const addNewMemberFormRender = addNewMemberForm.render();
    body.append(templateBody, portofolioFormRender, addNewMemberFormRender);
    return body;
  }
}
