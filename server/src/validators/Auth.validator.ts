import Joi,{ number, ObjectSchema } from 'joi'

export const signUpValidator:ObjectSchema=Joi.object({
    name:Joi.string().required(),
    email :Joi.string().email().required(),
    password: Joi.string().required(),
})


export const loginValidator:ObjectSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

