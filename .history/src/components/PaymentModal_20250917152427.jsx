import { useEffect } from "react"
import { QRCodeCanvas } from "qrcode.react"

const PaymentModal = ({ qrCode, onClose }) => {

    // Đóng modal khi nhấn ra ngoài, nhấn vào dấu x hoặc nhấn esc
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose()
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Header */}
                <div className="text-center pt-8 pb-6 px-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quét mã QR để thanh toán</h3>
                    <p className="text-gray-600 text-sm">Sử dụng ứng dụng ngân hàng hoặc ví điện tử hỗ trợ VietQR</p>
                </div>

                {/* QR Code */}
                <div className="px-6 pb-6">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center">
                        {qrCode ? (
                            <QRCodeCanvas value={qrCode}
                                size={200}
                                level='H'
                                includeMargin={true}
                                className="w-48 h-48 object-contain"
                            />
                        ) : (
                            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                    <p className="text-sm text-gray-500">Đang tạo mã QR...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Payment Info */}
                <div className="px-6 pb-6">
                    <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Sản phẩm:</span>
                            <span className="text-sm font-medium text-gray-900">Ebook: Bí Mật Của May Mắn</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Số tiền:</span>
                            <span className="text-lg font-bold text-primary-600">199.000 VNĐ</span>
                        </div>
                    </div>
                </div>

                {/* Instructions */}
                <div className="px-6 pb-8">
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Hướng dẫn thanh toán:</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold">
                                    1
                                </span>
                                <span>Mở ứng dụng ngân hàng hoặc ví điện tử</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold">
                                    2
                                </span>
                                <span>Chọn tính năng quét mã QR</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold">
                                    3
                                </span>
                                <span>Quét mã QR trên màn hình và xác nhận thanh toán</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 rounded-b-2xl px-6 py-4">
                    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        <span>Thanh toán được bảo mật bởi PayOS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal