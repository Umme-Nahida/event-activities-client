import React from 'react'
import ContainerDiv from '../shared/ContainerDiv'

const HowItWork = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#03045E] via-[#030672] to-[#001233]">
            {/* Glow Shapes */}
                    <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-[#4d19ff] rounded-full blur-[180px] opacity-40"></div>
                    <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-[#1b6bff] rounded-full blur-[180px] opacity-40"></div>

                    {/* Radial overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,119,255,0.3),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(120,0,255,0.3),transparent_70%)]"></div>
            
            {/* How It Works */}
            <ContainerDiv>
                <section className="mt-8 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-bold">How it works</h2>
                            <p className="mt-3 text-gray-600">Quickly join or create events in three easy steps.</p>

                            <ol className="mt-6 space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-100 flex items-center justify-center font-semibold text-sky-700">1</div>
                                    <div>
                                        <div className="font-semibold">Find an activity</div>
                                        <div className="text-sm text-gray-500">Search by category, date or nearby locations.</div>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-100 flex items-center justify-center font-semibold text-sky-700">2</div>
                                    <div>
                                        <div className="font-semibold">Join or book</div>
                                        <div className="text-sm text-gray-500">Reserve your spot and get event details instantly.</div>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-sky-100 flex items-center justify-center font-semibold text-sky-700">3</div>
                                    <div>
                                        <div className="font-semibold">Enjoy & review</div>
                                        <div className="text-sm text-gray-500">Attend the event and leave feedback to help hosts improve.</div>
                                    </div>
                                </li>
                            </ol>

                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://i.ibb.co.com/tpbsQHFB/about-image-1.jpg" alt="How it works" className="w-full h-80 object-cover" />
                        </div>
                    </div>
                </section>

                <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#03045E] via-[#030672] to-[#001233]">
                    {/* Glow Shapes */}
                    <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-[#4d19ff] rounded-full blur-[180px] opacity-40"></div>
                    <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-[#1b6bff] rounded-full blur-[180px] opacity-40"></div>

                    {/* Radial overlays */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,119,255,0.3),transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(120,0,255,0.3),transparent_70%)]"></div>

                    {/* CONTENT AREA */}
                    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 h-full flex items-center">
                        <div className="text-white max-w-xl">
                            <p className="text-sm font-medium tracking-wider text-blue-300 mb-3">
                                ABOUT US
                            </p>
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                Explore The Digital <br /> Business Conference
                            </h1>
                            <p className="mt-6 text-blue-200 leading-relaxed">
                                We are dedicated to safeguarding the world with innovation, trust,
                                and resilience. We specialize in providing cutting-edge IT
                                businesses.
                            </p>

                            <div className="mt-8 flex items-center gap-6">
                                {/* shadcn button */}
                                <a
                                    href="#"
                                    className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                                >
                                    Explore More →
                                </a>
                            </div>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="hidden lg:block ml-auto">
                            <img
                                src="/images/conference.jpg"
                                alt="Business Conference"
                                className="w-[520px] rounded-xl shadow-xl"
                            />
                        </div>
                    </div>
                </section>

            </ContainerDiv>
        </div>
    )
}

export default HowItWork