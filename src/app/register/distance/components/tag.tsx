export default function Tag({data}:{data:string}){
    return(
        <span className="inline-flex items-center justify-center bg-[#9BD182] rounded-full px-3 py-1 mr-2 mb-2 w-[72.5px] h-[23px]">
            <p className="text-sm">{data}</p>
        </span>
    )
}