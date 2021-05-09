import { readFileSync } from 'fs';

export abstract class Parser {
  public readonly defaultPath = 'src/core/default-values';

  protected getFile(path: string): string {
    const file = readFileSync(path, { encoding: 'utf-8' });
    return file;
  }
}
