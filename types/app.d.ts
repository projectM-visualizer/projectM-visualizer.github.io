declare global {
  type MyAppConfig = {
    name: string;
    version: string;
    description: string;
    url: string;
    settings: {};
  };
}

export {};
