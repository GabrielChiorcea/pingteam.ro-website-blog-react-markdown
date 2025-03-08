module.exports = {
  async sendEmail(ctx) {
    const { name, email, message } = ctx.request.body;
    try {
      await strapi.plugin('email').service('email').send({
        to: 'admin@brandivo.ro',
        subject: 'Mesaj nou din formularul de contact',
        text: `Ai primit un mesaj de la ${name} (${email}):\n\n${message}`,
      });
     await strapi.entityService.create('api::contact-message.contact-message', {
        data: {
          name,
          email,
          message,
        },
      });
      ctx.send({ message: 'Email trimis cu succes!' });
    } catch (error) {
      console.error('Error sending email:', error);
      ctx.throw(500, 'Eroare la trimiterea emailului');
    }
  },
};
