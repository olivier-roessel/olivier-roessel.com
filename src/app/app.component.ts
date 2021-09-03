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
    this.addMicrodata();
  }

  addClarity() {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.innerHTML = "(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, 'clarity', 'script', '4o9o9rn8yw'); window.clarity('consent');";
    document.head.prepend(script);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  addMicrodata() {
    let script = document.createElement('script');
    script.type = "text/javascript";
    let schema =
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Strasbourg",
        "addressRegion": "Alsace",
        "postalCode": "67100",
        "streetAddress": "51, presqu'île André Malraux"
      },
      "email": "mailto:olivier.roessel@outlook.com",
      "image": "https://olivier-roessel.com/assets/img/profile.webp",
      "jobTitle": "Développeur web front-end",
      "name": "Olivier Roessel",
      "givenName": "Olivier",
      "familyName": "Roessel",
      "gender": "https://schema.org/Male",
      "telephone": "(+33)786072924",
      "url": "https://olivier-roessel.com/"
    };
    script.innerHTML = JSON.stringify(schema);
    document.head.prepend(script);
  }
}