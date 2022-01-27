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
      this.addClarity();
    }
    console.log("Salut ! 👋 Tu cherches quoi par ici ? Si tu veux voir le code source du projet, visite https://bit.ly/OlivierRoessel-GitHub 👨‍💻");
  }

  addClarity() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = "(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, 'clarity', 'script', '4o9o9rn8yw'); if (navigator.doNotTrack != 'yes' && navigator.doNotTrack != '1' && window.doNotTrack != '1') { window.clarity('consent'); }";
    document.head.prepend(script);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}