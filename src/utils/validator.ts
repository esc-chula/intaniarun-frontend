import joi from 'joi';

const user = {
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    gender: joi.string().valid('MALE', 'FEMALE', 'OTHER').required(),
    birthDate: joi.date().required(),
    province: joi.string().required(),
    email: joi
        .string()
        .email({ tlds: { allow: false } })
        .required(),
    phone: joi
        .string()
        .regex(/^[0-9]{10}$/)
        .required(),
    joinedYear: joi.number().allow(''),
    disease: joi.string().required(),
    bloodType: joi.string().valid('A', 'B', 'AB', 'O').required(),
    emergencyName: joi.string().required(),
    emergencyPhone: joi
        .string()
        .regex(/^[0-9]{10}$/)
        .required(),
    relationship: joi.string().required(),
    gmail: joi
        .string()
        .allow('')
        .regex(/^(?:(66|65|64|63)3\d{5}21@student.chula.ac.th)?$/)
        .message('Invalid gmail'),
    shirtSize: joi.string().required(),
    type: joi
        .string()
        .valid('VIP', 'STUDENT', 'ALUMNI', 'CHULA', 'PUBLIC')
        .required(),
    selectedPackage: joi.string().valid('3.711', '10.111').required(),
};

export const userSchema = joi.object(user);
