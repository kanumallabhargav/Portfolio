import About from "./About";
import Skills from "./Skills";
import Work from "./Work";

export default function ProfileContentHelper({selectedTopic}) {
    const components = {
        about: <About />,
        work: <Work />,
        skills: <Skills />
    };

    return components[selectedTopic];
}