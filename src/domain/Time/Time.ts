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
    let formattedMinutes = rawMinutes.toString().split('.')[0];
    if (rawMinutes === 60) {
      formattedMinutes = '0';
    }
    return formattedMinutes;
  }

  /**
   * getSeconds
   */
  public getSeconds() {
    const rawSeconds = (this.rawSeconds % 60).toFixed(0);
    return rawSeconds.toString();
  }

  /**
   * getHours
   */
  public getHours() {
    const rawHours = this.rawSeconds / 3600;
    const formattedHours = rawHours.toString().split('.')[0];
    return formattedHours;
  }
}
