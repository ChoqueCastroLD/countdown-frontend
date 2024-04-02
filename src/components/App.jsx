export function App() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <div className="bg-gray-800 h-[100vh]">
            <div className="text-white p-4">
                <p className="font-bold text-4xl">Titulo</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p className="text-sm">Año: {currentYear}</p>
            </div>
        </div>
    );
}
