import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'fr', 'ta'])
    translate.setDefaultLang('en')
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/)? browserLang : 'en');
  }


  displayList = [
    {
      label: "No"
    },
    {
      label: "Name"
    },
    {
      label: "Email"
    },
    {
      label: "Phone"
    },
    {
      label: "Password"
    }
  ]


}
