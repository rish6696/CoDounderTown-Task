import  Joi from 'joi'

export const loginSchema =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})


export const SignUpSchema =Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    name:Joi.string().required(),
    reEnterPassword:Joi.string().required()
})


