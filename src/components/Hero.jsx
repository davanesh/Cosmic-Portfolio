import blackholeVideo from "../assets/blackhole.webm";

export default function Hero1() {
    return (
        <div className="relative flex flex-col h-screen w-full overflow-hidden">
            <video autoPlay muted loop playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={blackholeVideo} type="video/webm" />
            </video>

            {/* Overlay for content readability if needed */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Cosmic Portfolio
                </h1>
                <p className="mt-4 text-xl text-gray-200 max-w-2xl">
                    Davanesh Saminathan
                </p>
            </div>
        </div>
    )
}