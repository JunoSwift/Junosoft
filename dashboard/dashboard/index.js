class LeftNavItem{
  constructor(name){
    this.name = name;
  }
  render(){
    const list = document.createElement('li');
    list.className = "nav-item";
    list.textContent = this.name;
    return list
  }
}
class LeftNav{
  itemsList = [
    new LeftNavItem("Members"),
    new LeftNavItem("Our Work"),
    new LeftNavItem("Contact Us"),
    new LeftNavItem("Members"),
  ]
  render(){
    const leftNavHolder = document.createElement('div');
    const navList = document.createElement('ul')
    leftNavHolder.className = "left-nav-holder";
    navList.className = "nav-items"

    for(const list  of this.itemsList){
      const nav = new LeftNavItem(list.name);
      const navRender = nav.render();
      navList.append(navRender);

    }
    leftNavHolder.append(navList);
    return leftNavHolder;
  }
  
}
class LeftSide{
  constructor(){

  }
  leftHeader(){
    const header = document.createElement('div');
    header.className = "left-side-header";
    header.innerHTML = 
    `<div class="user-img">
        <img src="../../assets/images/aa.jpg"> 
    </div>
   <div> <h3>KWIBUKA Comfi</h3></div>
   <div class="HD-TOP_Btn">  <button class>$ 52</button> </div>`;
   return header;
  }
  dashPresentation(){
    const presentation = document.createElement('div');
    presentation.className = "presentation";
    presentation.innerHTML = `<i class="fa fa-2x fa-keyboard"></i>    Dashboard`;

    return presentation;
  }
  leftLogout(){
    const logout = document.createElement('div');
    logout.className = "left-logout-area";
    logout.innerHTML =`
    <i class="fa fa-2x fa-logout"></i> Logout`;
    return logout;
  }
  render(){
    const leftSideHolder = document.createElement('div');
    const leftNav = new LeftNav();
    const leftNavRender = leftNav.render();
    leftSideHolder.className = "left-menu";
    leftSideHolder.append (this.leftHeader());
    leftSideHolder.append(this.dashPresentation());
    leftSideHolder.append(this.leftLogout());
    leftSideHolder.append(leftNavRender);
    return leftSideHolder
  }

}

class Logo{
  constructor(logo){
    this.logo = logo
  }
  render(){
    const logoHolder = document.createElement('div');
    const logo =  document.createElement('img');
    logoHolder.className = "logo-holder";
    logo.src = this.logo;
    logo.alt = "Junosoft LOGO";
    logoHolder.append(logo);
    return logoHolder;
  }
}
class HeaderNav{
constructor(icon,name=""){
  this.icon = icon;
  this.name = name;
}
render(){
  
  const navItem = document.createElement('li');
  navItem.innerHTML = `<i class="${this.icon}"></i>${this.name}`;
  return navItem;

}
}
class Header{
  navList = [
    new HeaderNav("fa fa-search"),
    new HeaderNav("fa fa-bell"),
    new HeaderNav("fa fa-user"),
]
  render(){
    const header = document.createElement('header');
    const nav = document.createElement('div');
    const navItems = document.createElement('ul');
    header.className = "header";
    nav.className = "top-nav-holder";

    const logo = new Logo("../../assets/images/junosoft.png")
    const logoRender =  logo.render();

    for(const nav of this.navList){
       const list = new HeaderNav(nav.icon,nav.name);
       const listRender = list.render();
       navItems.append(listRender);
    }
    
    header.append(logoRender);
    nav.append(navItems);
    header.append(nav);
    return header;
  }
}



class DashboardBody{
  render(){
    const body = document.createElement('div');
    body.className = "dash-body";
    body.innerHTML = "<h2>CREATE NEW MEMBERs</h2><br/><button>+</button>";
    return body;
  }
}




class DashboardRender{
render(){
  const renderHook = document.querySelector('.dashboard');

  const leftMenu = new LeftSide().render();
  renderHook.append(leftMenu);

  const header = new Header().render()
  renderHook.append(header);

  const body = new DashboardBody().render();
  renderHook.append(body)
  
  return renderHook;
}
}

class Dashboard{
  static init(){
    const dashboard = new DashboardRender();
    dashboard.render();
  }
}

Dashboard.init();