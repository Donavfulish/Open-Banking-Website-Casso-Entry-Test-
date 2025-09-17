
export const Header = ({title, company}) => (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold text-primary-600 font-inter">{company}</h1>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 hidden sm:block text-balance">
                    {title}
                </h2>
            </div>
        </div>
    </header>
)