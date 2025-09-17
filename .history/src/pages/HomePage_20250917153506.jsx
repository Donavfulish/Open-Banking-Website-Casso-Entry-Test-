import { useState } from "react"
import axios from "axios"
import PaymentModal from "../components/PaymentModal"

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [qrCode, setQrCode] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      alert("Vui lòng điền đầy đủ thông tin!")
      return
    }

    setLoading(true)

    try {
      // Call backend API to create payment link
      const response = await axios.post("http://localhost:5000/create-payment-link", {
        name: formData.name,
        email: formData.email,
        amount: 199000,
        description: "Ebook: Bí Mật Của May Mắn",
      })
      console.log("response", response)

      if (response.data.qrCode) {
        setQrCode(response.data.qrCode)
        setShowModal(true)
      } else if (response.data.checkoutUrl) {
        window.open(response.data.checkoutUrl, "_blank")
      }   
    } catch (error) {
      console.error("Error creating payment link:", error)
      // Mock QR code for demo purposes
      setQrCode(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
      )
      setShowModal(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white animate-fade-in">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary-600 font-inter">Casso</h1>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 hidden sm:block text-balance">
              Ebook: Bí Mật Của May Mắn
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Ebook Info */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
              {/* Ebook Cover */}
              <div className="flex justify-center mb-6">
                <div className="w-56 sm:w-64 h-72 sm:h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <img
                  src="https://res.cloudinary.com/djyicm00q/image/upload/v1758097877/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2025-09-17_152943_q5u7wg.png"
                  alt="bimatcuamayman"
                  className="w-65 h-80 border-gray-300 border-md rounded-md shadow-xl"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="text-center space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance font-inter">
                  Bí Mật Của May Mắn
                </h1>
                <p className="text-lg text-gray-600 font-medium">Tác giả: Nguyễn Văn A</p>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Bñ quyïët taåo nïn may mùæn trong cöng viïåc, tònh yïu vaâ cuöåc söëng
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Form */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 sticky top-24">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2 font-inter">2.000 VNĐ</h3>
                <p className="text-gray-600 text-sm sm:text-base">Giá đặc biệt cho phiên bản điện tử</p>
              </div>

              {/* Purchase Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-inter shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang xử lý...</span>
                    </div>
                  ) : (
                    "ĐẶT MUA NGAY"
                  )}
                </button>
              </form>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Thanh toán an toàn với PayOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-inter">Powered by PayOS © 2024 Casso</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {showModal && <PaymentModal qrCode={qrCode} onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default HomePage