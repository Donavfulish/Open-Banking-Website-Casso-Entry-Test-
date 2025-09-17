import { Link } from "react-router-dom"

const SuccessPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 ">
            <div className="max-w-md w-full">
                {/* Success Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* Success Message */}
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Thanh toán thành công!</h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Cảm ơn bạn đã mua Ebook "Bí Mật Của May Mắn". Nhấn vào link bên dưới để tải xuống Ebook của bạn.
                    </p>

                    {/* Download Section */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition"
                        >
                            📥 Tải sách ngay
                        </a>


                    {/* Back to Home */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                            ← Quay về trang chủ
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">Powered by PayOS © 2024 Casso</p>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage