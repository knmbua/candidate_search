export interface Candidate {
  login: string;
  name: string;
  location?: string | null;
  email: string;
  company: string;
  bio: string;
  avatar_url: string;
  html_url: string
}