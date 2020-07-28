export default {
  jwt: {
    secret: process.env.APP_SECRET || 'non-nullable-value',
    expiresIn: '1d',
  },
};
