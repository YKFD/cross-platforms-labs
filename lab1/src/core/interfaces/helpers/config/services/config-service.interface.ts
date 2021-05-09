export interface IConfigService {
  get(key: string): string;
  getOrDef(key: string, def: any): any;
  getOrError(key: string): any;
}
