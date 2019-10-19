import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProviderDto} from "./dto/provider.dto";
import {CreateProviderDto} from "./dto/create-provider.dto";
import {UpdateProviderDto} from "./dto/update-provider.dto";

@Injectable()
export class ProviderConnector {
  url = 'http://localhost:3000/auth/providers';

  constructor(private readonly http: HttpClient) {}

  async list(provider: string): Promise<ProviderDto[]> {
    return this.http.get<ProviderDto[]>(this.getUrl(provider)).toPromise();
  }

  async get(id: string): Promise<ProviderDto> {
    return this.http.get<ProviderDto>(this.getUrl(id)).toPromise();
  }

  async create(provider: string, createProviderDto: CreateProviderDto): Promise<ProviderDto> {
    return this.http.post(this.getUrl(), createProviderDto).toPromise();
  }

  async update(id: string, updateProviderDto: UpdateProviderDto): Promise<ProviderDto> {
    return this.http.patch<ProviderDto>(this.getUrl(id), updateProviderDto).toPromise();
  }

  async delete(id: string): Promise<string> {
    return this.http.delete<string>(this.getUrl(id)).toPromise();
  }

  private getUrl(id?: string) {
    return this.url + id ? `/${id}` : '';
  }
}
