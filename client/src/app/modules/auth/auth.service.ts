import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthConnector} from "./auth.connector";
import {CreateSignInDto} from "./dto/create-sign-in.dto";
import {CreateSignUpDto} from "./dto/create-sign-up.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly authConnector: AuthConnector,
    private readonly router: Router,
  ) {}

  async signIn(createSignInDto: CreateSignInDto): Promise<void> {
    console.log(await this.authConnector.signIn(createSignInDto));
    await this.router.navigate(['']);
  }

  async signUp(createSignUpDto: CreateSignUpDto): Promise<void> {
    console.log(await this.authConnector.signUp(createSignUpDto));
    await this.router.navigate(['']);
  }
}
