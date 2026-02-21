import type { Instantiable } from '../../view/types/types';

export class JSONService {
  provider: JSONProvider;
  constructor() {
    this.provider = JSONProvider.getInstance();
  }
  getArray<T = any>(json: string, clazzType: Instantiable<T>): T[] {
    var data = this.provider.getByPath<T[]>(json);
    return data.map((item) => new clazzType(item));
  }
  getObject<T = any>(json: string, clazzType: Instantiable<T>): T {
    var data = this.provider.getByPath<T>(json);
    return new clazzType(data);
  }
}

export class JSONProvider {
  public static instance: JSONProvider;

  public modules: Record<string, unknown>;
  static getInstance() {
    if (JSONProvider.instance == null) {
      JSONProvider.instance = new JSONProvider();
    }
    return JSONProvider.instance;
  }

  private constructor() {
    this.modules = import.meta.glob('/src/data/**/*.json', {
      eager: true,
      import: 'default',
    });
  }

  getByPaths(paths: string[]): string[] {
    var base64s: string[] = [];
    paths.forEach((path) => {
      base64s.push(this.getByPath(path));
    });

    return base64s;
  }

  getByPath<T>(path: string): T {
    var filename = `/src/data/${path}`;
    try {
      return this.modules[filename] as T;
    } catch (err) {
      console.error(`${filename} was not found`);
    }
    return null as T;
  }
}
