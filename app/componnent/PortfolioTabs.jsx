const PortfolioTabs = () => {
    return (
        <div className="rounded-[6px] h-[60px] bg-[#000000] tabbarshadow">
            <ul className="flex items-center justify-evenly">
                <li className="me-2">
                    <a href="#" className="inline-block textGredient p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Graphic Design</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Mobile App</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Photography</a>
                </li>
                <li className="me-2">
                    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">UI/UX Design</a>
                </li>
            </ul>
        </div>
    )
}


export default PortfolioTabs;


