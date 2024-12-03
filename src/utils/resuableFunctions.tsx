export const redirectLinkHandler = (link: string) => {
  window.open(link);
};

export const openEmail = () => {
  const email = "mohamedaasif.md@gmail.com";
  const mailtoLink = `mailto:${email}`;

  window.open(mailtoLink);
};
