import { Link } from "react-router-dom"

const SuccessPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-green-100 via-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-sm w-full h-[90vh] flex flex-col justify-center items-center text-center">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between h-full w-full">
          
          <div className="flex flex-col justify-center items-center h-full space-y-4">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mb-2">
              <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Thanh toán thành công!</h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Cảm ơn bạn đã mua Ebook <span className="font-semibold">"Bí Mật Của May Mắn"</span>. Nhấn nút bên dưới để tải ngay sách.
            </p>

            {/* Download Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              📥 Tải sách ngay
            </a>

            {/* Back Home */}
            <Link
              to="/"
              className="text-green-700 hover:text-green-800 font-medium transition-colors text-sm"
            >
              ← Quay về trang chủ
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-4">Powered by PayOS © 2024 Casso</p>
      </div>
    </div>
  )
}

export default SuccessPage
