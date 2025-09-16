// import { useState } from "react"
// import EbookCard from "../components/EbookCard"
// import PaymentModal from "../components/PaymentModal"

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false)
//   const [qrCode, setQrCode] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handlePurchase = async () => {
//     setLoading(true)
//     try {
//       // Mock QR code for demo - replace with actual API call
//       const mockQrCode =
//         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="

//       // Uncomment this for actual API call:
//       // const response = await axios.post('http://localhost:5000/create-payment-link')
//       // setQrCode(response.data.qrCode)

//       setQrCode(mockQrCode)
//       setShowModal(true)
//     } catch (error) {
//       console.error("Error creating payment link:", error)
//       alert("Có lỗi xảy ra khi tạo liên kết thanh toán. Vui lòng thử lại!")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="flex justify-center">
//       <EbookCard onPurchase={handlePurchase} loading={loading} />
//       {showModal && <PaymentModal qrCode={qrCode} onClose={() => setShowModal(false)} />}
//     </div>
//   )
// }

// export default HomePage
