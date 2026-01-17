export interface Environment {
  HOST: string;
}

const environments: Record<string, Environment> = {
  dev: {
    HOST: '/',
  },
  firebase: {
    HOST: '/',
  },
  github: {
    HOST: '/cesperanca/',
  },
};

export class Env {
  private static instance: Env;
  private static environment: string;
  private constructor() {}
  static init(environment: string) {
    if (!Env.instance) {
      Env.instance = new Env();
      Env.environment = environment;
      console.log('Env init', { environment });
    }
    return Env.instance;
  }
  static getEnv(): Environment {
    if (!Env.environment) {
      throw new Error('No Environment set. Call init.');
    }
    return environments[Env.environment];
  }
}
