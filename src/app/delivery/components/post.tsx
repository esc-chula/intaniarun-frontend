export default function PostComponent() {
    return(
        <div className="flex flex-col p-4 space-y-4 rounded-lg w-[350px] justify-center">
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                    ชื่อ - นามสกุลผู้รับ
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-[10px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    placeholder="ชื่อ - นามสกุล"
                    required={true}
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                    โทรศัพท์
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-[10px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    placeholder="โทรศัพท์"
                    required={true}
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                    ที่อยู่สำหรับจัดส่ง
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-[10px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    placeholder="บ้านเลขที่, ซอย, หมู่, ถนน, แขวง/ตำบล, เขต/อำเภอ, จังหวัด"
                    required={true}
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">
                    รหัสไปรษณีย์
                </label>
                <input
                    className="w-full px-3 py-2 border rounded-[10px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    type="text"
                    placeholder="รหัสไปรษณีย์"
                    required={true}
                />
            </div>
        </div>
    )
}
