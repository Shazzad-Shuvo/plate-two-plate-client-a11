
const Team = () => {
    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Founders</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Meet the faces behind a noble cause ...</p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src="https://i.ibb.co/3y54fwQ/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg" alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src="https://i.ibb.co/WF00mnw/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src="https://i.ibb.co/j86sxQV/albert-dera-ILip77-Sbm-OE-unsplash.jpg" alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Dries Vincent</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Coordinator</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src="https://i.ibb.co/g3FkDZ2/photo-1611342799915-5dd9f1665d04-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg" alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Lindsay Walton</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Social Worker / Event Planner</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Team;