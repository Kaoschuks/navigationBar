import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { NavigationBar, NavigationBarPluginEvents } from '@hugotomazi/capacitor-navigation-bar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private navigatorBar: any = NavigationBar
  
  async ngOnInit() {
    const res: any = await this.navigatorBar.setColor({
      color: '#c63c63'
    })
    console.log(res)


    const color: any = await this.navigatorBar.getColor();
    console.log(color)
  }
}
