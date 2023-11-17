import { HiTrash } from 'react-icons/hi';

export default function Dialog({
    action,
    showDialog,
    setShowDialog,
}: {
    action: any;
    showDialog: boolean;
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    if (!showDialog) return null;
    return (
        <div className='fixed bottom-0 left-0 right-0 top-0 z-[100] flex items-center justify-center'>
            <div className='absolute z-10 flex h-44 w-72 flex-col overflow-hidden rounded-lg bg-white'>
                <div className='h-1.5 w-full bg-primary-200'></div>
                <div className='flex h-full w-full flex-col justify-between p-2'>
                    <div className='flex h-full w-full items-start justify-center space-x-4 pt-5'>
                        <div className='grid h-12 w-12 place-content-center rounded-full bg-primary-200 text-3xl text-white'>
                            <HiTrash />
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold'>
                                ลบรายการผู้สมัคร
                            </h4>
                            <p className='w-44 text-xs text-slate-600'>
                                ท่านต้องการลบรายการผู้สมัครหรือไม่?
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center space-x-4 px-2 pb-1 font-medium'>
                        <button
                            onClick={() => setShowDialog(false)}
                            className='w-full rounded-full border border-slate-300 py-1.5 text-sm text-slate-600'
                        >
                            ยกเลิก
                        </button>
                        <button
                            onClick={async () => {
                                await action();
                                setShowDialog(false);
                            }}
                            className='w-full rounded-full bg-primary-200 py-1.5 text-sm text-white'
                        >
                            ยืนยัน
                        </button>
                    </div>
                </div>
            </div>
            <div
                onClick={() => setShowDialog(false)}
                className='absolute bottom-0 left-0 right-0 top-0 bg-black/10 backdrop-blur-sm'
            ></div>
        </div>
    );
}
