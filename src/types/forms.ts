export type SubmitUnlockFormType = {
      password: string,
      shortUrl: string | undefined
}

export type SubmitShortenUrlFormType = {
  "originalUrl": string,
  "baseUrl": string,
    alias?: string,
    password?: string,
    expiration?: string,
}