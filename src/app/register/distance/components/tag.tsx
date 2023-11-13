export default function Tag({ data }: { data: string }) {
    return (
        <span className='mb-2 mr-2 inline-flex h-[23px] w-[72.5px] items-center justify-center rounded-full bg-[#9BD182] px-3 py-1'>
            <p className='text-sm'>{data}</p>
        </span>
    );
}
