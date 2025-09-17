import { Link } from "react-router-dom"

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col items-center justify-center">
          
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Thanh toán thành công!</h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
            Cảm ơn bạn đã mua Ebook <span className="font-semibold">"Bí Mật Của May Mắn"</span>. Nhấn nút bên dưới để tải ngay sách của bạn.
          </p>

          {/* Download Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg mb-4"
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

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-6">Powered by PayOS © 2024 Casso</p>
      </div>
    </div>
  )
}

export default SuccessPage
