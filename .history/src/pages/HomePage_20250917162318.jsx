import { useState } from "react"
import axios from "axios"
import { Header } from "../components/Header"
import { toast } from "react-toastify"
import { Ebook}

const DataBook = {
  title: " Ebook: Bí Mật Của May Mắn",
  name: "Bí Mật Của May Mắn",
  description: "Cuốn sách này sẽ tiết lộ những bí mật đằng sau thành công và may mắn. Bạn sẽ học được bí quyết tạo nên may mắn trong công việc, tình yêu và cuộc sống",
  smDescription: "Giá đặc biệt cho phiên bản điện tử",
  price: "2.000 VND",
  author: "Alex Rovira & Fernando Trias de Bes",
  src: "https://res.cloudinary.com/djyicm00q/image/upload/v1758097877/%E1%BA%A2nh_ch%E1%BB%A5p_m%C3%A0n_h%C3%ACnh_2025-09-17_152943_q5u7wg.png"
}
const DataPublic = {
  company: "Casso",
  badge: "Thanh toán an toàn với PayOS",
}
const HomePage = () => {

  // Khởi tạo state (QRCODE, MODAL, LOADING MODAL)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // GỌI payOS API
      const response = await axios.post("http://localhost:5000/create-payment-link")

      if (response.data.checkoutUrl) {
        window.open(response.data.checkoutUrl, "_blank")
      }

    } catch (error) {
      console.error("Error creating payment link:", error)
      toast.error("Tạo mã thất bại. Vui lòng thử lại sau")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white animate-fade-in">
      {/* Header */}
      <Header title={DataBook.title} company={DataPublic.company} />

      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-inter">Powered by PayOS © 2024 Casso</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage