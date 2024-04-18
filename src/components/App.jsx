export function App() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <div className="bg-gray-800 h-[100vh]">
            <div className="bg-white w-full h-16">
                <div className="bg-white flex h-full items-center justify-between mx-4">
                    <div className="flex items-center gap-6">
                        <img className="h-10" src="https://w7.pngwing.com/pngs/794/680/png-transparent-countdown-timer-android-android-timer-stopwatch-countdown-thumbnail.png" alt="" />
                        <span className="font-medium text-lg">Countdown Maker</span>
                    </div>
                    <div className="flex">
                        <button className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 hover:rounded-md">Create Countdown</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-white m-8 w-full max-w-xs">
                    <form className="">
                        <label className="text-blue-800"> Countdown Creator</label>
                        <div className="">
                            <label className="">countdown Name</label>
                            <input type="text" className="shadow appearance-none border rounded w-full " />
                        </div>
                        <div>
                            <label className="">Date of release</label>
                            <input type="number" className="shadow appearance-none border rounded w-full" />
                            <input type="number" className="shadow appearance-none border rounded w-full" />
                            <input type="number" className="shadow appearance-none border rounded w-full" />
                        </div>
                        <div>
                            <label className="">Countdown Description (optional)</label>
                            <input type="text-area" className="shadow appearance-none border rounded w-full py-5" />
                        </div>
                        <label className=""></label>
                    </form>
                </div>
            </div>
        </div>
    );
}
