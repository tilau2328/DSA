import {ConnectionDto} from "../../providers/dto/connection.dto";

export interface SignUpDto {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly connections: ConnectionDto[];
}
