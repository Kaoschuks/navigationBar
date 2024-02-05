import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  private navigatorBar: any = Capacitor.Plugins['NavigationBar']
  
  async ngOnInit() {
    const res: any = await this.navigatorBar.setColor({
      color: '#36c36c'
    })
    console.log(res)


    const color: any = await this.navigatorBar.getColor();
    console.log(color)
  }
}
