import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Olivier Roessel';

  constructor() {
    if (environment.production) {
      this.addAxeptio();
      this.addClarity();
    }
    console.log("Salut ! 👋 Tu cherches quoi par ici ? Si tu veux voir le code source du projet, visite https://bit.ly/OlivierRoessel-GitHub 👨‍💻");
  }

  addAxeptio() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = "window.axeptioSettings = { clientId: '64569dbb626209674e8abb8e', cookiesVersion: 'olivier-roessel' }; (function(d, s) { var t = d.getElementsByTagName(s)[0], e = d.createElement(s); e.async = true; e.src = '//static.axept.io/sdk.js'; t.parentNode.insertBefore(e, t);})(document, 'script'); void 0 === window._axcb && (window._axcb = []); window._axcb.push(function (axeptio) { axeptio.on('cookies:complete', function (choices) { if (choices.clarity) { window.clarity('consent'); } if (choices.google_analytics) { let async = document.createElement('script'); async.src = 'https://www.googletagmanager.com/gtag/js?id=G-2F2904ZV7N'; async.async = true; let script = document.createElement('script'); script.type = 'text/javascript'; script.innerHTML = \"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2F2904ZV7N');\"; document.head.prepend(async); document.head.prepend(script); }})});";
    document.head.prepend(script);
  }

  addClarity() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = "(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, 'clarity', 'script', '4o9o9rn8yw');";
    document.head.prepend(script);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
