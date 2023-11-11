
export default function ReviewCard({
    distance= " 10 KM",
    name = "นายใจดี ดีใจ",
    accountNumber = "0 1234 56789 10 1",
    phoneNumber = "011-111-1111",
    size = "XL",
    raceNumber = "1"
}:{
    distance?: string;
    name?: string;
    accountNumber?: string;
    phoneNumber?: string;
    size?: string;
    raceNumber?: string;
}) {
    return (
        <div>
            <div className="flex flex-col justify-between relative max-w-sm overflow-hidden shadow-lg bg-white p-6 w-[375px] h-[200px] rounded-[12px]">
                {/* <div className="bg-gradient-to-r from-[#941214] to-[#dd3333] text-white text-sm font-bold py-1 px-4 w-max rounded-full absolute top-[-10px] z-[10]">
                    ผู้สมัครคนที่ {raceNumber}
                </div> */}
                <div className="flex-1">
                    <div className="font-bold text-xl mb-2 text-[#941214]">{name}</div>
                    <div className="flex flex-row gap-5">
                        <div className="text-gray-700 text-base">
                            <p>เลขบัตรประชาชน: </p>
                            <p>โทรศัพท์: </p>
                            <p>ไซส์เสื้อ: </p>
                        </div>
                        <div>
                            <p>{accountNumber}</p>
                            <p>{phoneNumber}</p>
                            <p>{size}</p>
                        </div>
                    </div>
    
                </div>
                <div className="flex items-center justify-between absolute right-5 bottom-5 opacity-50">
                    <div className="font-bold text-4xl text-[#941214]">{distance}</div>
                </div>
            </div>
        </div>
    );
}
