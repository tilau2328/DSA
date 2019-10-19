import {CreateConnectionDto} from "../../providers/dto/create-connection.dto";

export interface CreateSignInDto {
  username?: string;
  password?: string;
  connection?: CreateConnectionDto;
}
