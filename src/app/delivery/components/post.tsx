export default function PostComponent() {
    return (
        <div className='flex w-[350px] flex-col justify-center space-y-4 rounded-lg p-4'>
            <div>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    ชื่อ - นามสกุลผู้รับ
                </label>
                <input
                    className='w-full rounded-[10px] border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500'
                    type='text'
                    placeholder='ชื่อ - นามสกุล'
                    required={true}
                />
            </div>
            <div>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    โทรศัพท์
                </label>
                <input
                    className='w-full rounded-[10px] border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500'
                    type='text'
                    placeholder='โทรศัพท์'
                    required={true}
                />
            </div>
            <div>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    ที่อยู่สำหรับจัดส่ง
                </label>
                <input
                    className='w-full rounded-[10px] border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500'
                    type='text'
                    placeholder='บ้านเลขที่, ซอย, หมู่, ถนน, แขวง/ตำบล, เขต/อำเภอ, จังหวัด'
                    required={true}
                />
            </div>
            <div>
                <label className='mb-2 block text-sm font-bold text-gray-700'>
                    รหัสไปรษณีย์
                </label>
                <input
                    className='w-full rounded-[10px] border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500'
                    type='text'
                    placeholder='รหัสไปรษณีย์'
                    required={true}
                />
            </div>
        </div>
    );
}
