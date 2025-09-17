// import { Link } from "react-router-dom"
// import { CheckCircleIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid"

// const SuccessPage = () => {
//   return (
//     <div className="max-w-md mx-auto text-center">
//       <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
//         <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Thanh toán thành công!</h2>
//         <p className="text-gray-600 mb-6">
//           Cảm ơn bạn đã mua sách "Bí mật của may mắn". Bạn có thể tải sách ngay bây giờ.
//         </p>

//         <div className="space-y-4">
//           <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200 flex items-center justify-center gap-2">
//             <ArrowDownTrayIcon className="w-5 h-5" />
//             Tải Ebook
//           </button>

//           <Link
//             to="/"
//             className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
//           >
//             Về trang chủ
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SuccessPage


import { Link } from "react-router-dom"

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
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
            Cảm ơn bạn đã mua Ebook "Bí Mật Của May Mắn". Chúng tôi đã gửi link tải sách về email của bạn.
          </p>

          {/* Download Section */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Tải xuống Ebook</h3>
            <p className="text-sm text-gray-600 mb-4">Nhấn vào nút bên dưới để tải xuống Ebook của bạn:</p>
            <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
              Tải xuống Ebook
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Link tải cũng đã được gửi về email của bạn</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"
                />
              </svg>
              <span>Hỗ trợ 24/7 nếu bạn cần trợ giúp</span>
            </div>
          </div>

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