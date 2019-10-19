import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth.routing.module";
import {AuthModule} from "../../modules/auth/auth.module";
import {SignInPageComponent} from "./pages/sign-in.page.component";
import {SignUpPageComponent} from "./pages/sign-up.page.component";
import {SignInsPageComponent} from "./pages/sign-ins.page.component";
import {SignUpsPageComponent} from "./pages/sign-ups.page.component";
import {ProviderViewsModule} from "../providers/provider.views.module";
import {SignInFormComponent} from "./components/sign-in.form.component";
import {SignUpFormComponent} from "./components/sign-up.form.component";

@NgModule({
  imports: [
    AuthModule,
    SharedModule,
    AuthRoutingModule,
    ProviderViewsModule,
  ],
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    SignInPageComponent,
    SignUpPageComponent,
    SignInsPageComponent,
    SignUpsPageComponent,
  ],
  exports: [
    SignInFormComponent,
  ]
})
export class AuthViewsModule {}
