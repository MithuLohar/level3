import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { LoginComponent } from "./login/login.component";
import { ChatComponent } from "./chat/chat.component";
import { FormsModule } from "@angular/forms";
const approutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signin", component: SigninComponent },
  { path: "chat", component: ChatComponent }
];
@NgModule({
  declarations: [AppComponent, SigninComponent, LoginComponent, ChatComponent],
  imports: [BrowserModule, RouterModule.forRoot(approutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
