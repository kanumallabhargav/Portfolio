export default function CloudCluster() {
    return <div className="grid grid-cols-1 gap-2 text-center shadow-xl text-zinc-300 bg-purple-900/30 rounded-b-xl">
        <div className="grid grid-cols-2 py-1 bg-purple-900/30">
            <p className="">Docker</p>
            <p className="">Kubernetes</p>
        </div>
        <div className="grid grid-cols-2 py-1">
            <p className="">Openshift</p>
            <p className="">CI & CD</p>
        </div>
        <div className="grid grid-cols-2 py-1 bg-purple-900/30">
            <p className="">AWS</p>
            <p className="">Azure</p>
        </div>
        <div className="grid grid-cols-2 py-1">
            <p className="">GCP</p>
            <p className="">Rabbit MQ</p>
        </div>
        <div className="grid grid-cols-2 py-1 bg-purple-900/30">
            <p className="">Shell Scripting</p>
            <p className="">Bash Programming</p>
        </div>
    </div>
}