module.exports = ({ env }) => ({
  vite: {
    optimizeDeps: {
      exclude: ['@strapi/admin'],
    },
  },
  upload: {
    config: {
      breakpoints: {
        xxlarge: 2200,
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'mail.brandivo.ro'),
        port: env.int('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('SMTP_USER', 'admin@brandivo.ro'),
          pass: env('SMTP_PASS', 'ZcGmvXnZ9B'),
        },
tls: {
    rejectUnauthorized: false,
  }
      },
      settings: {
        defaultFrom: 'admin@brandivo.ro',
        defaultReplyTo: 'admin@brandivo.ro',
      },
    },
  },
});

