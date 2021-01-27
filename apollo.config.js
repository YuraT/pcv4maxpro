module.exports = {
  client: {
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}'],
    service: process.env.NODE_ENV === 'production' ? 'program' : 'programDev'
  }
};
