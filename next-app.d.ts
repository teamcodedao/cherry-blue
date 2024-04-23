export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_METADATABASE_URL: string;
      NEXT_PUBLIC_COIN_URL: string;
      NEXT_PUBLIC_COIN_ADDRESS: string;
      NEXT_PUBLIC_TWITTER_URL: string;
      NEXT_PUBLIC_TELEGRAM_URL: string;
    }
  }
}
