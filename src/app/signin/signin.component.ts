import { FormsModule, NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  constructor() {}
  submit(form: NgForm) {
    console.log(form.value.email);
    const user = form.value.email;
    localStorage.setItem("email", user);
    sessionStorage.setItem("email", user);
    if (sessionStorage.getItem("email") == user) {
      console.log("i deed it");
    }
  }
  ngOnInit() {}
}
