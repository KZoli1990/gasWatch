import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gaswatch';
  public count: number = 0;
  private interval: any = null;
  public isCounting: boolean = false;
  public countingSpeed: number = 1000;
  public numArr:Array<any> = ['0','1','2','3','4','5','6','7','8','9','0'];

  public counter(stop: boolean) {
    if (stop) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.count++;
      }, this.countingSpeed);
      
    }
    this.isCounting = !stop;
  }

  public counterSpeeding(increase: boolean) {
    if (increase) {
      if (this.countingSpeed < 1000) {
        this.countingSpeed += 50;
      }
    } else {
      if (this.countingSpeed > 50) {
        this.countingSpeed -= 50;
      }
    }
    
    if (this.isCounting) {
      this.counter(true);
      this.counter(false);
    }
    
  }
}

