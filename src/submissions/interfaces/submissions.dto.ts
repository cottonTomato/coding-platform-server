export interface LanguageConfig {
  language_id: number;
  cpu_time_limit: number;
  memory_limit: number;
}

export interface CreateSubmissionDTO extends LanguageConfig {
  source_code: string;
  stdin: string;
  expected_output: string;
}
