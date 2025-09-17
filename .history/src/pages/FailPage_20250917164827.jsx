import { Link } from "react-router-dom"
import { XCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid"

const FailPage = () => {
  return (
    <div className="max-w-md mx-auto text-center ">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100">
        <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thanh toán thất bại</h2>
        <p className="text-gray-600 mb-6">
          Có lỗi xảy ra trong quá trình thanh toán hoặc bạn đã hủy giao dịch. Vui lòng thử lại.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ArrowPathIcon className="w-5 h-5" />
            Thử lại
          </Link>

          <Link
            to="/"
            className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FailPage


