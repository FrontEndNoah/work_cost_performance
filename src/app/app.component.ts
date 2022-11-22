import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  /** 平均日薪 6 */
  dailyWage = 500;
  /** 工作时长 7 */
  workingHours = 8;
  /** 通勤时长 8 */
  commuteHours = 1;
  /** 摸鱼时长 9 */
  loafHours = 2;
  /** 学历 10 */
  education = 1;
  /** 工作环境 11 */
  workEnvironment = 1;
  /** 异性环境 12 */
  oppositeSixEnvironment = 1;
  /** 同事环境 13 */
  colleagueEnvironment = 1;
  /** 职业资格 14 */
  qualificationsEnvironment = 1;
  // 是/** 30前上班 15 */
  load830 = 1;
  /** 城市环境 16 */
  cityEnvironment = 1;
  // ((D6*D11*D12*D13)/(35*(D7+D8-0.5*D9)*D10*D14))*D15
  // ((D6*D11*D12*D13/D16)/(35*(D7+D8-0.5*D9)*D10*D14))*D15

  ngOnInit() {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      if (ctx) {
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0);
        const dataUri = c.toDataURL('image/png');
        const style = `padding: 200px;background-size: contain;background-repeat: no-repeat;background-image: url(${dataUri})`;
        console.log('%c ', style);
      }
    };
    img.src = 'https://super-mumoo.github.io/work_cost_performance/assets/test.png';
  }
}
