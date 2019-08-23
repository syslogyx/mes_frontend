import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.scrollToTop();
    });
  }

  // Scroll to top when angular route changes
  scrollToTop() {
    document.querySelector(".page-wrapper").scroll({
      top: 0,
      left: 0,
    });
  }
}
