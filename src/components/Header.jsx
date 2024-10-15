import m from "mithril";

function Header() {
    return {
        view: () => {
            const currentRoute = m.route.get();
            const isActive = (route) => currentRoute === route;

            return (
                <header>
                    <img src="" alt="" />
                    <nav>
                        <m.route.Link
                            href="/"
                            class={`nav-links ${isActive("/") ? "nav-links-active" : ""} ${
                                isActive("/") ? "nav-links-no-hover" : ""
                            }`}
                        >
                            Home
                        </m.route.Link>
                        <m.route.Link
                            href="/projects"
                            class={`nav-links ${isActive("/projects") ? "nav-links-active" : ""} ${
                                isActive("/projects") ? "nav-links-no-hover" : ""
                            }`}
                        >
                            Projects
                        </m.route.Link>
                        <m.route.Link
                            href="/blog"
                            class={`nav-links ${isActive("/blog") ? "nav-links-active" : ""} ${
                                isActive("/blog") ? "nav-links-no-hover" : ""
                            }`}
                        >
                            Blog
                        </m.route.Link>
                        <m.route.Link
                            href="/contact-me"
                            class={`nav-links ${isActive("/contact-me") ? "nav-links-active" : ""} ${
                                isActive("/contact-me") ? "nav-links-no-hover" : ""
                            }`}
                        >
                            Contact Me
                        </m.route.Link>
                    </nav>
                    <div class="social-links">
                        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <img src="" alt="" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                            <img src="" alt="" />
                        </a>
                    </div>
                </header>
            );
        },
    };
}

export default Header;
