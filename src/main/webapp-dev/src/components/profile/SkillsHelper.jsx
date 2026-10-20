import Backend from "./Backend";
import Frontend from './Frontend'
import CloudCluster from './CloudCluster'
import Testing from './Testing'

export default function SkillsHelper({selectedTopic}) {
    const components = {
        backend: <Backend />,
        frontend: <Frontend />,
        cloudCluster: <CloudCluster />,
        testing: <Testing />
    }

    return components[selectedTopic];
}