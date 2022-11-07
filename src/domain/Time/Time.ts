export class Time {
  private rawSeconds: number;
  constructor(seconds: number) {
    this.rawSeconds = seconds;
  }

  /**
   * getMinutes
   */
  public getMinutes() {
    const rawMinutes = this.rawSeconds / 60;
    const formattedMinutes = rawMinutes.toString().split('.')[0];
    return formattedMinutes;
  }

  /**
   * getSeconds
   */
  public getSeconds() {
    const rawSeconds = (this.rawSeconds % 60).toFixed(0);
    return rawSeconds.toString();
  }
}
