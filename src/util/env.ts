import dotenv from 'dotenv';

dotenv.config();

const env = {
  /* Http Interface Config */
  httpPort: parseInt(process.env.HTTP_PORT || '', 10),
  httpBodyLimit: process.env.HTTP_BODY_LIMIT,

  /* Application Config */
  httpActive: process.env.HTTP_ACTIVE === 'true',
  addressProcessorUrl: process.env.ADDRESS_PROCESSOR_URL || 'https://viacep.com.br/ws',
};

export { env };
