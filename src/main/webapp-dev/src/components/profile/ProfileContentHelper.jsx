import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";

export default function ProfileContentHelper({selectedTopic}) {
    const components = {
        about: <About />,
        work: <Work />,
        skills: <Skills />,
        contact: <Contact />
    };

    return components[selectedTopic];
}