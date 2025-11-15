
export interface ExamplePrompt {
  title: string;
  prompt: string;
  category: string;
}

export interface AnalysisResult {
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}
