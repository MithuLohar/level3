import { Component, OnInit } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  submit(form: NgForm) {
    console.log(form.value.email);
    const user = form.value.email;
    localStorage.setItem("email", user);
    sessionStorage.setItem("email", user);
    if (sessionStorage.getItem("email") == user) {
      console.log("this is " + sessionStorage.getItem("email"));
      this.router.navigate(["/chat"]);
    }
  }

  ngOnInit() {}
}
