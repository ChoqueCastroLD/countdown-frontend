export function App() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (

        <>
            <div className="bg-gray-800">
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
            </div>
            <main className="flex bg-gray-800 text-white p-4 h-dvh w-mdvw">
                <div className="w-1/6 h-full">
                    <table className="border border-slate-400 table-auto text-xl bg-slate-600 text-center mt-12 h-5/6">
                        <thead>
                            <tr>
                                <th className="border border-slate-400">Most viewed countdowns</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-400">
                                    <span className="flex italic text-xs text-gray-400">Visto por: 5K</span>
                                    SuperGay 5
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">FemboyAttack</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">Love Live - JAV</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">Película gringa genérica</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">Película gringa genérica</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">Película gringa genérica</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">Película gringa genérica</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">Película gringa genérica</td>
                            </tr>
                            <tr>
                                <td>Película gringa genérica</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <section className="text-center m-8 w-2/3">
                    <h1 className="font-bold text-4xl mb-8">DevPul Tercero</h1>
                    <article className="grid grid-cols-4 gap-4 m-4 font-bold mx-20 my-8">
                        <div className="p-1 bg-red-700">
                            <p className="m-3 text-7xl">01</p>
                            <p className="mb-4 overline text-4xl">días</p>
                        </div>
                        <div className="p-1 bg-red-700">
                            <p className="m-3 text-7xl">23</p>
                            <p className="mb-4 overline text-4xl">horas</p>
                        </div>
                        <div className="p-1 bg-red-700">
                            <p className="m-3 text-7xl">59</p>
                            <p className="mb-4 overline text-4xl">minutos</p>
                        </div>
                        <div className="p-1 bg-red-700">
                            <p className="m-3 text-7xl">59</p>
                            <p className="mb-4 overline text-4xl">segundos</p>
                        </div>
                    </article>
                    <p className="mx-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi consequuntur optio, laborum culpa quia maiores hic quidem quibusdam praesentium temporibus iusto asperiores deleniti incidunt numquam reiciendis, magni vitae ad nesciunt.</p>
                    <div className="m-20 px-20">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Deje su correo electrónico si quiere recibir notificación cuando llegue a 0
                        </label>
                        <div className="relative my-2 mx-20 px-20 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm px-20">Inserte su correo electrónico</span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                            />
                        </div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-white mt-7">
                            Deje su WhatsApp si quiere recibir notificación cuando llegue a 0
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">Inserte su número de WhatsApp</span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                            />
                        </div>
                    </div>
                </section>
                <div className="w-1/6 h-full">
                    <table className="border border-slate-400 table-auto text-xl bg-slate-600 text-center mt-12 h-5/6">
                        <thead>
                            <tr>
                                <th>Aquí va bien clavada la publicidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <div className="bg-white w-full max-w-xs">
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
        </>
    );
}
