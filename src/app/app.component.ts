import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Olivier Roessel';

  constructor() {
    this.addClarity();
  }

  addClarity() {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.innerHTML = "(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, 'clarity', 'script', '4o9o9rn8yw');";
    document.head.prepend(script);
  }
}