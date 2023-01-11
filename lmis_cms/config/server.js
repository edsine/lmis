module.exports = ({ env }) => ({
  host: env('HOST', '172.29.20.142'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
