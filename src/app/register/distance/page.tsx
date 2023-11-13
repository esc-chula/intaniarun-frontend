import Card from './components/card';

export default function ChooseDistancePage() {
    return (
        <>
            <h1 className='text-2xl font-bold'>เลือกระยะทาง</h1>
            <div className='flex w-full flex-col items-center justify-center gap-[35px] text-left'>
                <Card distance='5 KM' price='555' />
                <Card distance='10 KM' price='777' />
            </div>
        </>
    );
}
