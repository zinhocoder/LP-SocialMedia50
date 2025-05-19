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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WXL397L3');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXL397L3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}
