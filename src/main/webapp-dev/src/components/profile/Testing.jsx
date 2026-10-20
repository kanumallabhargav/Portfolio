export default function Testing() {
    return <div className="grid grid-cols-1 gap-2 text-center shadow-xl text-zinc-300 bg-purple-900/30 rounded-b-xl">
        <div className="grid grid-cols-2 py-1 bg-purple-900/30">
            <p className="">Manual Testing</p>
            <p className="">Unit Testing</p>
        </div>
        <div className="grid grid-cols-2 py-1">
            <p className="">Selenium</p>
            <p className="">Playwright</p>
        </div>
        <div className="grid grid-cols-2 py-1 bg-purple-900/30">
            <p className="">Load Runnner</p>
            <p className="">JMeter</p>
        </div>
        <div className="grid grid-cols-2 py-1">
            <p className="">GCP</p>
            <p className="">Rabbit MQ</p>
        </div>
    </div>
}