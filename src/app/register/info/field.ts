import { bloodtypes, genders, province_th, shirtSizes } from './data';

export const fields = {
    0: [
        {
            id: 'firstName',
            name: 'firstName',
            label: 'ชื่อ',
            placeholder: 'ชื่อ',
        },
        {
            id: 'lastName',
            name: 'lastName',
            label: 'นามสกุล',
            placeholder: 'นามสกุล',
        },
        {
            id: 'gender',
            name: 'gender',
            label: 'เพศ (ตามบัตรประชาชน)',
            placeholder: '-- เลือกรายการ --',
            options: genders.map((gender) => ({
                value: gender.value,
                label: gender.label,
            })),
        },
        {
            id: 'birthDate',
            name: 'birthDate',
            label: 'วันเกิด',
            placeholder: 'วัน/เดือน/ปี ค.ศ.',
            type: 'date',
        },
        {
            id: 'province',
            name: 'province',
            label: 'จังหวัดที่พักอาศัย',
            placeholder: '---- เลือกรายการ ----',
            options: province_th.map((province) => ({
                value: province,
                label: province,
            })),
        },
        {
            id: 'email',
            name: 'email',
            label: 'อีเมล',
            placeholder: 'อีเมล',
            type: 'email',
        },
        {
            id: 'phone',
            name: 'phone',
            label: 'โทรศัพท์',
            placeholder: '0XX-XXX-XXXX',
            type: 'tel',
        },
        {
            id: 'joinedYear',
            name: 'joinedYear',
            label: 'ปีการศึกษาแรกเข้า',
            placeholder: '---- เลือกรายการ ----',
            options: Array.from({ length: 68 }, (_, i) => ({
                value: `${2495 + i}`,
                label: `${2495 + i} (วศ. ${(2495 + i + 23)
                    .toString()
                    .slice(-2)})`,
            })),
        },
    ],
    1: [
        {
            id: 'disease',
            name: 'disease',
            label: 'ปัญหาสุขภาพ',
            placeholder: 'ปัญหาสุขภาพ',
        },
        {
            id: 'bloodType',
            name: 'bloodType',
            label: 'หมู่เลือด',
            placeholder: '---- เลือกรายการ ----',
            options: bloodtypes.map((bloodtype) => ({
                value: bloodtype,
                label: bloodtype,
            })),
        },
        {
            id: 'emergencyName',
            name: 'emergencyName',
            label: 'ชื่อผู้ติดต่อกรณีฉุกเฉิน',
            placeholder: 'ชื่อ - นามสกุล',
        },
        {
            id: 'relationship',
            name: 'relationship',
            label: 'เกี่ยวข้องเป็น',
            placeholder: 'ความสัมพันธ์',
        },
        {
            id: 'emergencyPhone',
            name: 'emergencyPhone',
            label: 'เบอร์โทรศัพท์กรณีฉุกเฉิน',
            placeholder: '0XX-XXX-XXXX',
            type: 'tel',
        },
        {
            id: 'shirtSize',
            name: 'shirtSize',
            label: 'ไซส์เสื้อ',
            placeholder: '---- เลือกรายการ ----',
            options: shirtSizes.map((shirtSize) => ({
                value: shirtSize.value,
                label: shirtSize.label,
            })),
        },
    ],
};
