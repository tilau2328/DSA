import {ConnectionDto} from "../../providers/dto/connection.dto";

export interface SignInDto {
  id: string;
  username?: string;
  connection?: ConnectionDto;
}
