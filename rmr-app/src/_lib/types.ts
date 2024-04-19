export type MenuItem = {
  id: number;
  name: string;
};

export enum Locales {
  EN = "en",
  ES = "es",
}

export interface NavUrl {
  path?: string;
}
