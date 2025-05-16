// Estilos adicionais para melhorar a aparência geral da página
// Estes estilos serão importados no componente principal

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    color: #6b7280; /* text-gray-500 equivalente - mais claro */
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #be185d; /* pink-700 equivalente */
  }
  
  .text-dark {
    color: #6b7280 !important; /* Substituindo texto escuro por cinza claro */
  }
  
  /* Estilos específicos para garantir que os textos tenham cores adequadas */
  p, span, div, li, a {
    color: #6b7280; /* gray-500 */
  }
  
  /* Exceções para elementos que precisam de destaque */
  .text-pink-600, .text-pink-700, .text-pink-800,
  .text-white, .text-yellow-400, .text-green-500, .text-green-600 {
    /* Manter estas cores como estão */
  }
  
  /* Garantir que os títulos de seção sejam mais vibrantes */
  section h2 {
    color: #be185d; /* pink-700 */
  }
  
  section h3 {
    color: #be185d; /* pink-700 */
  }
  
  /* Apenas títulos com classes específicas de cor devem manter suas cores */
  h1.text-pink-600, h2.text-pink-600, h3.text-pink-600,
  h1.text-pink-700, h2.text-pink-700, h3.text-pink-700,
  h1.text-white, h2.text-white, h3.text-white {
    /* Manter estas cores como estão */
  }
  
  /* Suporte para gradientes em textos */
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .guarantee-seal {
    position: relative;
    display: inline-block;
  }
  
  .guarantee-seal::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    background-color: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    transform: rotate(15deg);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`
