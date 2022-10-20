class AppBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav id="drawer">
            <div id="header__inner" class="nav-section">
              <h1 id="header__title" tabindex="0">Restaurant Apps</h1>
            </div>
            <a id="header__menu" class="nav-section">☰</a>
            <div class="list-container">
                <ul id="nav__list" class="nav-section">
                    <li id="nav__item1" class="nav-section"><a href="#home">Home</a></li>
                    <li id="nav__item2" class="nav-section"><a href="#favourite">Favourite</a></li>
                    <li id="nav__item3" class="nav-section"><a href="https://github.com/Ilham1m4man">About Us</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);