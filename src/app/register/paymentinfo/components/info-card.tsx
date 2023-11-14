export default function InfoCard({
    distance = '10 KM',
    name = 'นายใจดี ดีใจ',
    citizenId = '0 1234 56789 10 1',
    phoneNumber = '011-111-1111',
    size = 'XL',
}) {
    return (
        <div className="relative bg-white rounded-[12px] shadow-lg overflow-hidden w-full">
            <div className="bg-black flex justify-end items-center h-[32px] pr-4">
                <h3 className="font-bold text-white text-[16px] text-right">{name}</h3>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm font-medium text-gray-600">
                        <p>เลขบัตรประชาชน:</p>
                        <p>โทรศัพท์:</p>
                        <p>ไซส์เสื้อ:</p>
                    </div>
                    <div className="text-sm text-gray-800">
                        <p>{citizenId}</p>
                        <p>{phoneNumber}</p>
                        <p>{size}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
