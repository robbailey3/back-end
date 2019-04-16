export class Notification {
  public isActive = true;
  public timestamp: Date;
  constructor(
    public message: string,
    public type: string,
    public cancellable: boolean = true,
    public timeout: number = 5000
  ) {
    this.timestamp = new Date();
    setTimeout(() => {
      this.hide();
    },         this.timeout);
  }
  show() {
    this.isActive = true;
  }
  hide() {
    this.isActive = false;
  }
}
