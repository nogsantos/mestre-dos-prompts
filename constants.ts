
import type { ExamplePrompt } from './types';

export const EXAMPLE_PROMPTS: ExamplePrompt[] = [
  {
    title: "Gerador de Roteiro de Viagem",
    prompt: "Aja como um planejador de viagens especialista. Crie um roteiro detalhado de 7 dias para uma viagem a Tóquio, Japão, para um casal interessado em cultura, gastronomia e tecnologia. O orçamento é moderado. Inclua sugestões de bairros para se hospedar, restaurantes para cada dia (café da manhã, almoço, jantar) com estimativa de preço, atrações diárias com horários e dicas de transporte público. O formato deve ser um markdown bem estruturado.",
    category: "Planejamento",
  },
  {
    title: "Criador de Persona de Marketing",
    prompt: "Crie uma persona de marketing detalhada para um novo aplicativo de meditação para iniciantes. Inclua nome, idade, profissão, demografia, objetivos, frustrações, e uma breve história de fundo. A persona deve ser alguém que está começando a se interessar por mindfulness, mas se sente sobrecarregado com a quantidade de opções e informações.",
    category: "Marketing",
  },
  {
    title: "Revisor de Código Python",
    prompt: "Aja como um engenheiro de software sênior e especialista em Python. Analise o seguinte trecho de código para uma função que calcula o n-ésimo número de Fibonacci. Forneça feedback sobre eficiência, legibilidade, e boas práticas (PEP 8). Sugira uma versão otimizada usando memoização ou programação dinâmica.\n\n```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n```",
    category: "Código",
  },
  {
    title: "Gerador de Ideias para Posts",
    prompt: "Gere 5 ideias criativas para posts de blog para uma empresa que vende cafés especiais de origem única. Cada ideia deve incluir um título atraente, um breve resumo do conteúdo e sugestões de palavras-chave para SEO. O público-alvo são entusiastas de café que apreciam qualidade e sustentabilidade.",
    category: "Conteúdo",
  },
];
