/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAIL_TRANSPORT_HOST: string;
      MAIL_TRANSPORT_PORT: string;
      MAIL_TRANSPORT_USER: string;
      MAIL_TRANSPORT_PASS: string;
      MAIL_OPTION_FROM: string;
      TIME_TO_REMIND: string;
    }
  }
}

export {};
