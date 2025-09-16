// import { XMarkIcon, QrCodeIcon } from "@heroicons/react/24/solid"

// const PaymentModal = ({ qrCode, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <QrCodeIcon className="w-12 h-12 text-green-500 mx-auto mb-3" />
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">Quét mã QR để thanh toán</h3>
//           <p className="text-gray-600">Sử dụng ứng dụng ngân hàng hỗ trợ VietQR</p>
//         </div>

//         {/* QR Code */}
//         <div className="bg-gray-50 rounded-xl p-6 mb-6">
//           <div className="bg-white rounded-lg p-4 shadow-inner">
//             <img
//               src={qrCode || "/placeholder.svg?height=200&width=200&query=QR code payment VietQR"}
//               alt="QR Code thanh toán"
//               className="w-full max-w-[200px] mx-auto"
//             />
//           </div>
//         </div>

//         {/* Instructions */}
//         <div className="space-y-3 text-sm text-gray-600">
//           <div className="flex items-start gap-3">
//             <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
//               1
//             </span>
//             <p>Mở ứng dụng ngân hàng trên điện thoại</p>
//           </div>
//           <div className="flex items-start gap-3">
//             <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
//               2
//             </span>
//             <p>Chọn tính năng quét mã QR</p>
//           </div>
//           <div className="flex items-start gap-3">
//             <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
//               3
//             </span>
//             <p>Quét mã QR và xác nhận thanh toán</p>
//           </div>
//         </div>

//         <div className="mt-6 p-4 bg-green-50 rounded-xl">
//           <p className="text-green-700 text-sm text-center">
//             <strong>Số tiền:</strong> 99.000 VNĐ
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PaymentModal



