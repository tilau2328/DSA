export interface CreateConnectionDto {
  readonly provider: string;
  readonly state: string;
  readonly code: string;
}
