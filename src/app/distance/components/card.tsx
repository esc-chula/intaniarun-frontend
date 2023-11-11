import Tag from "./tag";

export default function Card({
    distance,
    price
}:{
    distance: string;
    price: string;
}) {
    return (
        <div className="flex items-center justify-between relative max-w-sm overflow-hidden shadow-lg bg-white p-6 w-[360px] h-[143px] rounded-[12px]">
            <div className="px-[10px] pt-[10px]">
                <div className="font-bold text-[32px]">{distance}</div>
                <p className="text-base text-[14px] font-bold text-[#941214]">
                    ของที่ระลึก
                </p>
                <div className="pt-2 pb-2">
                    <Tag data="เสื้อวิ่ง"/>
                    <Tag data="เหรียญ"/>
                    <Tag data="ป้าย bib"/>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 absolute right-0">
                <span className="inline-block text-2xl">฿{price}</span>
            </div>
        </div>
    );
}
