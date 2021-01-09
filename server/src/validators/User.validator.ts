import Joi,{  ObjectSchema } from 'joi'

export const createBlogValidator:ObjectSchema=Joi.object({
    title:Joi.string().required(),
    body :Joi.string().required(),
    tags :Joi.array().items(Joi.string()).optional()
})

export const getBlogsValidator:ObjectSchema=Joi.object({
    tags:Joi.string().optional()
})
