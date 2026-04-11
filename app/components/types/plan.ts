
export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations?: string[];
  buttonText: string;
  buttonStyle: string;
  popular: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}