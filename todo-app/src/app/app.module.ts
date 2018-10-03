import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TodoDataService } from "./todo-data.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
