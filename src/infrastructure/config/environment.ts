// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Enviroment {
  static getInstance (): Record<string, string | number> {
    return {
      port: process.env.PORT ?? 3333
    }
  }
}
