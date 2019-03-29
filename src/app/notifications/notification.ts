export class Notification {
  public isActive = true;
  constructor(
    public message: string,
    public type: string,
    public cancellable: boolean = true
  ) {
    setTimeout(() => {
      this.hide();
    },         10000);
  }
  show() {
    this.isActive = true;
  }
  hide() {
    this.isActive = false;
  }
}
