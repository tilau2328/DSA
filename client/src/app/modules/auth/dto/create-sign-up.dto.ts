import {CreateConnectionDto} from "../../providers/dto/create-connection.dto";

export interface CreateSignUpDto {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly connections: CreateConnectionDto[];
}
