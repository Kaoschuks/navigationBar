import { Component, OnInit, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { NavigationBar, NavigationBarPluginEvents } from '@hugotomazi/capacitor-navigation-bar';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private navigatorBar: any = NavigationBar
  
  async ngOnInit() {
    const res: any = await this.navigatorBar.setColor({
      color: '#000000'
    })
    console.log(res)


    const color: any = await this.navigatorBar.getColor();
    console.log(color)
  }
}



