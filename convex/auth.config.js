const rawDomain = process.env.CLERK_JWT_ISSUER_DOMAIN;
const domain = rawDomain.replace(/\/\.well-known\/.*$/, '').replace(/\/$/, '');

export default {
  providers: [
    {
      domain,
      applicationID: 'convex',
    },
  ],
};
