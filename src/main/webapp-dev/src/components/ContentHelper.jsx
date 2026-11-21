import AppInfo from "./AppInfo";
import PlayGround from "./PlayGround";
import Profile from "./Profile";
import StatsContainer from "./StatsContainer";
import Tenure from "./Tenure";

export default function ContentHelper({selectedTopic}) {
    const components = {
        profile: <Profile />,
        tenure: <Tenure />,
        stats: <StatsContainer />,
        playGround: <PlayGround />,
        appInfo: <AppInfo />
    };

    return components[selectedTopic];
}