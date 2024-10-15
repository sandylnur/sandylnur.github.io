import m from "mithril";
import profilePicture from "../assets/images/profile-picture.jpg";
import githubIcon from "../assets/images/icons/github-icon.svg";
import linkedinIcon from "../assets/images/icons/linkedin-icon.svg";

function Header() {
    return {
        view: () => {
            const currentRoute = m.route.get();
            const isActive = (route) => currentRoute === route;

            return (
                <header class="nav-header">
                    <m.route.Link href="/" class="nav-logo">
                        <img class="profile-picture nav-left" src={profilePicture} alt="Sandyl Nursigadoo" />
                    </m.route.Link>
                    <div class="nav-right">
                        <nav class="nav-menu">
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
                            <a
                                href="https://github.com/sandylnur"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Github"
                            >
                                <img src={githubIcon} alt="Github" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sandylnursigadoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Linkedin"
                            >
                                <img src={linkedinIcon} alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                </header>
            );
        },
    };
}

export default Header;
