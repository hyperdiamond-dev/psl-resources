import { Component, Input } from "@angular/core";


@Component({
  selector: "app-card",
  template: `
  <div class="card lg:card-side bg-base-100 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">{{ title }}</h2>
    <p>{{ content }}.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Button</button>
    </div>
  </div>
</div>
  `, 
  styles: [],
  standalone: true,
})
export class CardComponent {
  @Input() title: string = "Card Title";
  @Input() content: string = "Card Content";
  @Input() buttonText: string = "Click Me";
  constructor() {
    // Initialize any properties or perform setup here
  }

  ngOnInit() {
    console.log("CardComponent initialized");
    // This lifecycle hook is called after the component is initialized
    // You can perform additional setup here if needed
  }
}