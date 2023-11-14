export interface CreateSubmissionDTO {
  source_code: string;
  stdin: string;
  expected_output: string;
  language_id: number;
  cpu_time_limit: number;
  memory_limit: number;
}
