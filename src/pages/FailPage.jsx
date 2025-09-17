// import { Link } from "react-router-dom"
// import { XCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid"

// const FailPage = () => {
//   return (
//     <div className="max-w-md mx-auto text-center">
//       <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100">
//         <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Thanh toán thất bại</h2>
//         <p className="text-gray-600 mb-6">
//           Có lỗi xảy ra trong quá trình thanh toán hoặc bạn đã hủy giao dịch. Vui lòng thử lại.
//         </p>

//         <div className="space-y-4">
//           <Link
//             to="/"
//             className="block w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200 flex items-center justify-center gap-2"
//           >
//             <ArrowPathIcon className="w-5 h-5" />
//             Thử lại
//           </Link>

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

// export default FailPage


import { Link } from "react-router-dom"

const FailPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Fail Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Fail Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          {/* Fail Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Thanh toán không thành công</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Rất tiếc, giao dịch của bạn đã bị hủy hoặc không thể hoàn tất. Vui lòng thử lại hoặc liên hệ với chúng tôi
            để được hỗ trợ.
          </p>

          {/* Possible Reasons */}
          <div className="bg-yellow-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">Có thể do các nguyên nhân sau:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Hủy giao dịch trong quá trình thanh toán</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Tài khoản không đủ số dư</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Lỗi kết nối mạng</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-0.5">•</span>
                <span>Vượt quá thời gian thanh toán</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              to="/"
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Thử lại thanh toán
            </Link>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
              Liên hệ hỗ trợ
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Hotline: 1900-xxxx</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email: support@casso.vn</span>
              </div>
            </div>
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

export default FailPage