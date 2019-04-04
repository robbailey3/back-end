import { environment } from 'src/environments/environment';

export class Debug {
  static log(...args: any[]): void {
    if (environment.isDebug) {
      console.log(...args);
    }
  }
  static error(...args: any[]): void {
    if (environment.isDebug) {
      console.error(...args);
    }
  }
}
