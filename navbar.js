class MobileNavbar {
    constructor(mobilemenu, navlist, navlink) {
        this.mobilemenu = document.querySelector(mobilemenu);
        this.navlist = document.querySelector(navlist);
        this.navlink = document.querySelectorAll(navlink);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navlink.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navlist.classList.toggle(this.activeClass);
        this.mobilemenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobilemenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobilemenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menuham",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();
