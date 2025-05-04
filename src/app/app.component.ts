import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./ui/card/card.component";
import { FooterComponent } from "./ui/footer/footer.component";
import { NavComponent } from './ui/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, FooterComponent, CardComponent],
  template: `
    <app-nav></app-nav>
    <main class="container mx-auto px-4 sm:px-6 md:px-8 py-6 min-h-screen">
      <app-card></app-card>
    </main>
    <app-footer></app-footer>
  `,
  styles: [],
  standalone: true,
})
export class AppComponent {
  title = 'psl-resources';
}
