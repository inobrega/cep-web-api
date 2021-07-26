import joi from '@hapi/joi';

export const getAddressByZipCode = joi.object({
  params: joi.object({
    cep: joi.number().required(),
  }),
});
