import { ShoppingCartIcon } from "@heroicons/react/24/solid"

const EbookCard = ({ onPurchase, loading }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-green-100">
        {/* Book Cover */}
        <div className="aspect-[3/4] bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <img src="/book-cover-b--m-t-c-a-may-m-n-vietnamese-ebook.jpg" alt="Bí mật của may mắn" className="w-full h-full object-cover" />
        </div>

        {/* Book Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Bí mật của may mắn</h3>
          <p className="text-gray-600 mb-3">
            Tác giả: <span className="font-semibold">Nguyễn Văn A</span>
          </p>

          <div className="mb-4">
            <span className="text-3xl font-bold text-green-600">99.000 VNĐ</span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Khám phá những bí mật đằng sau thành công và may mắn trong cuộc sống. Cuốn sách này sẽ giúp bạn hiểu rõ cách
            tạo ra cơ hội và thu hút những điều tốt đẹp.
          </p>

          <button
            onClick={onPurchase}
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-600 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Đang xử lý...
              </>
            ) : (
              <>
                <ShoppingCartIcon className="w-5 h-5" />
                Đặt mua ngay!
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EbookCard
