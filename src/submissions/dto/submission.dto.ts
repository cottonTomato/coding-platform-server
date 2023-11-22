export interface CreateSubmissionDTO {
  source_code: string;
  stdin: string;
  expected_output: string;
  language_id: number;
  cpu_time_limit: number;
  memory_limit: number;
}

export interface GetSubmissionDTO {
  token: string;
  compiler_output: string;
  exit_code: number;
  stderr: string;
  status: {
    id: number;
    description: string;
  };
  time: string;
  memory: number;
}
