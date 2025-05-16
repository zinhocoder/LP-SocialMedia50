import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Redes Sociais para 50+: Compartilhe Sua Experiência e Gere Renda com o que Você Já Sabe!',
  description: 'Sinta-se confiante no mundo digital! Descubra como pessoas com mais de 50 anos estão superando o medo da tecnologia, aprendendo a criar conteúdo de forma simples e autêntica — e ainda transformando isso em uma nova fonte de renda. É hora de mostrar ao mundo o que só você tem: vivência, sabedoria e histórias únicas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
