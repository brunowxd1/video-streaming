import { Joi, celebrate, Segments, Modes } from 'celebrate';

const getChunkValidator = celebrate(
  {
    [Segments.PARAMS]: {
      quality: Joi.number().required(),
      range: Joi.number().required(),
    },
  },
  { abortEarly: false },
  { mode: Modes.FULL },
);

export { getChunkValidator };
