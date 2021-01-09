import { Component, Input } from "@angular/core";

@Component({
  selector: "posts",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class PostsComponent {
  @Input() name: string;
}
