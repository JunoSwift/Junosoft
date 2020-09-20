import DashboardBody from "./DashBody.js";
import LeftSide from "./LeftSide.js";
import Header from "./Header.js";

class DashboardRender {
  render() {
    const renderHook = document.querySelector(".dashboard");
    const leftMenu = new LeftSide().render();
    renderHook.append(leftMenu);
    const header = new Header().render();
    renderHook.append(header);
    const body = new DashboardBody().render();
    renderHook.append(body);
    return renderHook;
  }
}
class Dashboard {
  static init() {
    const dashboard = new DashboardRender();
    dashboard.render();
  }
}

Dashboard.init();
