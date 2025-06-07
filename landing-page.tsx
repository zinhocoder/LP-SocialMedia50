"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight, Play, ArrowRight, Sparkles, Star, Clock, Shield, Check } from "lucide-react"
import Image from "next/image"
import LimitedOfferBanner from "./components/LimitedOfferBanner.tsx"

export default function LandingPage() {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    setShowVideo(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 100)
  }

  return (
    
    <div className="flex flex-col min-h-screen">
      <LimitedOfferBanner />
      {/* Hero Section with VSL */}
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100">
  <div className="absolute inset-0 bg-cover bg-center opacity-5"></div>
  <div className="container px-4 mx-auto max-w-6xl relative z-10">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <img src="/logoazul.png" alt="Logo" className="h-20 md:h-24 w-auto" />


              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-pink-500 leading-tight">
                <span>Nunca é tarde para aprender e se</span> destacar nas redes sociais
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-700">
                Mesmo sem saber nada de tecnologia, você pode criar conteúdo, crescer online <span className="text-pink-600"><br/>e até fazer uma renda extra!</span>
              </h2>
              <p className="text-xl text-gray-600">
                Um curso simples, direto e feito para quem tem mais de 50 anos e quer perder o medo da Internet, aprender passo a passo e se sentir confiante para usar as redes sociais com liberdade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
  href="https://pay.hotmart.com/D99483408X?off=sy32nphk&_hi=eyJjaWQiOiIxNzQ3MjQyMTc2NTIyODA3NjQ0NzI2NTE3NjcwOTAwIiwiYmlkIjoiMTc0NzI0MjE3NjUyMjgwNzY0NDcyNjUxNzY3MDkwMCIsInNpZCI6ImFkMmFlZDIzYWEzNTRiMTZhOTgzODFmZTJiYWUxODM5In0=.1747361783581&bid=1747361787902"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-fit max-w-full overflow-hidden"
>
  <Button
    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 
    text-lg md:text-lg text-base py-5 md:py-7 px-6 md:px-8 rounded-xl shadow-lg 
    transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
    border-b-4 border-pink-800 active:border-b-0 active:mt-1 
    w-full sm:w-auto"
  >
    <Sparkles className="mr-2 h-5 w-5" />
    <span className="text-sm text-white sm:text-base md:text-lg text-center">
      Quero Vencer o Medo da Tecnologia
    </span>
    <ChevronRight className="ml-2 h-5 w-5" />
  </Button>
</a>


              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] md:h-[420px] border border-gray-100">
  {!showVideo ? (
    <div
      className="relative w-full h-full cursor-pointer group"
      onClick={handleVideoClick}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/monicavsl3.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 flex items-center justify-center shadow-lg group-hover:from-pink-600 group-hover:to-pink-800 transition-all">
          <Play className="h-10 w-10 text-white ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <p className="text-white text-lg font-medium">
          Assista ao vídeo e descubra como começar
        </p>
      </div>
    </div>
  ) : (
    <video
      ref={videoRef}
      controls
      autoPlay
      className="w-full h-full object-cover"
      playsInline
    >
      <source src="/monicavsl3.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos HTML5.
    </video>
  )}
</div>

          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100 py-4 border-y border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <Image src={`/placeholder.svg?height=32&width=32`} alt="User" width={32} height={32} />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">+500 alunos satisfeitos</p>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
              <p className="text-sm font-medium text-gray-600 ml-1">4.9/5 (328 avaliações)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 rounded-full p-1">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-600">Garantia de 7 dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-600 to-pink-800">
              O que você vai conquistar<br/>com esse curso :
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aprenda a usar redes sociais do zero",
                description: "Chega de confusão, aqui você vai aprender como usar Instagram, Youtube e até Whatsapp com calma e clareza",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Perca o medo de aparecer nas redes",
                description: "Vamos te ensinar como gravar vídeos, tirar fotos e se expressar com confiança",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Descubra como gerar renda extra com o que você já sabe",
                description: "Tem gente da sua idade vendendo, ensinando e criando, você também pode transformar conhecimento em dinheiro",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              },
               {
                title: "Divirta-se aprendendo algo novo e útil",
                description: "A tecnologia pode sim ser leve, divertida e até transformar sua rotina. E você vai ver isso acontecer",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Conquiste a sua independência digital",
                description: "Chega de depender dos outros para mexer no celular. Aqui você aprende a usar a tecnologia com liberdade",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Faça parte de uma comunidade acolhedora 50+",
                description: "Você vai aprender com apoio, junto de outras pessoas que também estão dando os primeiros passos",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 bg-pink-100 p-3 rounded-full w-max">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-pink-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <svg
            className="w-12 h-12 mx-auto mb-6 text-pink-300 opacity-80"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sabe o que acontece quando você <br/>aprende a usar as redes?
          </h2>
          <p className="text-xl opacity-90 text-white">
            Você ganha voz, independência e novas possibilidades!<br/> Se você tem 50+ e quer dominar o básico sem complicação, este curso é pra você!
          </p>
          <div className="mt-12 flex justify-center">
  <a
  href="https://pay.hotmart.com/D99483408X?off=sy32nphk&_hi=eyJjaWQiOiIxNzQ3MjQyMTc2NTIyODA3NjQ0NzI2NTE3NjcwOTAwIiwiYmlkIjoiMTc0NzI0MjE3NjUyMjgwNzY0NDcyNjUxNzY3MDkwMCIsInNpZCI6ImFkMmFlZDIzYWEzNTRiYWgzODFmZTJiYWUxODM5In0=.1747361783581&bid=1747361787902"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full sm:w-fit text-center"
>
  <Button
    className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 
               text-white text-lg sm:text-2xl py-5 sm:py-6 px-6 sm:px-14 rounded-xl 
               shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl 
               border-b-4 border-pink-800 active:border-b-0 active:mt-1 
               w-full sm:w-auto flex items-center justify-center"
  >
    <span className="text-sm text-white sm:text-2xl">Clique Agora e Veja como Funciona</span>
    <ChevronRight className="ml-2 sm:ml-3 h-5 sm:h-7 w-5 sm:w-7" />
  </Button>
</a>
</div>
        </div>
      </section>

      {/* Solution Section */}
<section className="py-20 bg-gradient-to-bl from-purple-50 via-white to-pink-50">
  <div className="container px-4 mx-auto max-w-6xl">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-pink-500 to-pink-700">
        Apresentando:<br/><span className="text-pink-600">Criação de Conteúdos para 50+</span>
      </h2>
      <p className="text-xl text-gray-600">
        Um material completo para ajudar você a iniciar sua jornada digital<br/>com confiança e autenticidade.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
        <Image
          src="/ebookcapa.png?height=500&width=400"
          alt="Conteúdo do curso"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="bg-white bg-opacity-90 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-pink-600 font-bold">Mais de 80 páginas de conteúdo prático</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-white to-pink-50 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-2 rounded-full mt-1">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Primeiros Passos no Mundo Digital</h3>
              <p className="text-gray-600">
                Escolhendo a plataforma certa, instalando aplicativos e criando seu perfil com segurança.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white to-pink-50 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-2 rounded-full mt-1">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Encontrando sua Voz Autêntica</h3>
              <p className="text-gray-600">
                Desenvolvendo seu estilo único e compartilhando suas experiências valiosas.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white to-pink-50 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-2 rounded-full mt-1">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Universo Digital na Prática</h3>
              <p className="text-gray-600">Técnicas para criar conteúdo envolvente e construir uma comunidade.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white to-pink-50 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-2 rounded-full mt-1">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-pink-700">Dicas e Tutoriais Passo a Passo</h3>
              <p className="text-gray-600">Guias práticos para fotos, vídeos e interações nas redes sociais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Botão centralizado no final da seção */}
  <div className="mt-12 w-full px-4 sm:px-0">
  <a
    href="https://pay.hotmart.com/D99483408X?off=sy32nphk&_hi=eyJjaWQiOiIxNzQ3MjQyMTc2NTIyODA3NjQ0NzI2NTE3NjcwOTAwIiwiYmlkIjoiMTc0NzI0MjE3NjUyMjgwNzY0NDcyNjUxNzY3MDkwMCIsInNpZCI6ImFkMmFlZDIzYWEzNTRiYWgzODFmZTJiYWUxODM5In0=.1747361783581&bid=1747361787902"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full sm:w-fit text-center mx-auto"
  >
    <Button
      className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 
                 text-white text-base sm:text-2xl py-5 sm:py-6 px-4 sm:px-14 rounded-xl 
                 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl 
                 border-b-4 border-pink-800 active:border-b-0 active:mt-1 
                 w-full sm:w-auto flex items-center justify-center"
    >
      <span className="text-sm text-white sm:text-2xl">Quero Usar as Redes Sociais com Confiança</span>
      <ChevronRight className="ml-2 sm:ml-3 h-5 sm:h-7 w-5 sm:w-7" />
    </Button>
  </a>
</div>


</section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-tr from-purple-100 via-pink-50 to-purple-100">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-pink-600">
            Este curso é pra você que…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quer se reinventar e provar que nunca é tarde",
                description: "Está pronto para viver algo novo, aprender com leveza e mostrar que a idade é só um número.",
              },
              {
                title: "Sente que tem muito a compartilhar com o mundo",
                description: "Deseja transformar sua experiência de vida em algo que inspira, conecta e ajuda outras pessoas.",
              },
              {
                title: "Quer usar a internet de forma criativa e segura",
                description: "Tem vontade de aprender a usar as redes sociais, mas do seu jeito — com clareza, calma e apoio.",
              },
              {
                title: "Está cansado de só assistir e quer participar de verdade",
                description: "Deseja sair do papel de espectador e começar a criar conteúdo, se expressar e ser ouvido.",
              },
              {
                title: "Quer transformar seu tempo livre em renda extra",
                description: "Descubra como sua experiência, carisma e histórias de vida podem ser fonte de inspiração — e de lucro — nas redes sociais. Ganhe dinheiro sendo quem você é!",
              },
              {
                title: "Quer se divertir, aprender e se sentir vivo",
                description: "Acredita que aprender pode (e deve!) ser leve, divertido e cheio de significado.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-pink-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-700">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-bl from-pink-50 via-white to-purple-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-l from-pink-700 via-pink-500 to-pink-700">
            Histórias de Sucesso
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Helena, 62 anos",
                text: "Este curso mudou minha vida! Agora consigo compartilhar minhas receitas no Instagram e já tenho mais de 500 seguidores.",
                image: "/people2.png?height=100&width=100",
              },
              {
                name: "Carlos Alberto, 58 anos",
                text: "Nunca pensei que poderia me tornar um criador de conteúdo. Hoje compartilho minhas viagens e conecto-me com pessoas do mundo todo.",
                image: "/people1.png?height=100&width=100",
              },
              {
                name: "Lúcia Ferreira, 65 anos",
                text: "As dicas de fotografia e vídeo são excelentes! Consegui melhorar muito a qualidade do meu conteúdo sem gastar com equipamentos caros.",
                image: "/people3.png?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-pink-200">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-700">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-20 bg-gradient-to-tr from-purple-100 via-pink-50 to-purple-100">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image src="/monica.jpg?height=400&width=400" alt="Mônica Amoroso" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-600 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="22"></line>
                    </svg>
                  </div>
                  <p className="text-white font-medium">@adivinheondeeuestou</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-pink-800 via-pink-600 to-pink-800">
                Quem é Mônica Amoroso?
              </h2>
              <p className="text-lg text-gray-600">
                Tenho 64 anos e sou o que as pessoas chamam de "influenciadora da terceira idade" em Serra Negra, São
                Paulo. Há 3 anos, decidi criar uma conta no Instagram chamada @adivinheondeeuestou, focada em
                compartilhar as belezas do turismo em Serra Negra e no Circuito das Águas.
              </p>
              <p className="text-lg text-gray-600">
                No início, confesso que estava apreensiva. Afinal, o que uma senhora de 60 e poucos anos poderia
                oferecer no mundo digital? Para minha surpresa, encontrei uma comunidade acolhedora e ávida por conteúdo
                autêntico e maduro.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, compartilho minha experiência para ajudar outras pessoas 50+ a descobrirem o poder das redes
                sociais para conectar, compartilhar e até mesmo gerar renda extra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-bl from-pink-50 via-white to-purple-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-pink-500">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Preciso ter experiência com tecnologia para aproveitar o material?",
                answer:
                  "Não! O material foi desenvolvido pensando justamente em quem tem pouca ou nenhuma experiência com tecnologia. Começamos do básico e avançamos gradualmente.",
              },
              {
                question: "Quanto tempo leva para ver resultados?",
                answer:
                  "Isso varia de pessoa para pessoa, mas muitos alunos começam a ver resultados nas primeiras semanas, especialmente no engajamento com familiares e amigos. Para construir uma audiência maior, pode levar alguns meses de dedicação consistente.",
              },
              {
                question: "Preciso aparecer em vídeos?",
                answer:
                  "Não necessariamente. Embora vídeos sejam uma forma poderosa de conexão, você pode criar conteúdo apenas com fotos e textos se preferir. O material cobre todas essas possibilidades.",
              },
              {
                question: "Posso realmente ganhar dinheiro com isso?",
                answer:
                  "Sim, é possível! Muitos criadores de conteúdo 50+ estão monetizando seu conhecimento e experiência. O material inclui dicas sobre como começar a gerar renda, mas lembre-se que isso geralmente acontece após construir uma audiência engajada.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-pink-50 p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-pink-700">
                  <div className="bg-pink-100 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-gradient-to-tr from-purple-100 via-pink-50 to-purple-100">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white md:text-2x1 font-medium shadow-sm mb-4">
              BÔNUS ESPECIAL POR TEMPO LIMITADO!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via-pink-500 to-pink-700">
              Bônus Especiais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ao adquirir o material hoje, você também recebe estes bônus exclusivos para acelerar sua jornada digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-pink-700">Guia de Fotografia com Smartphone</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Aprenda a tirar fotos profissionais usando apenas o seu celular, com técnicas simples e eficazes
                    para todas as idades.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">15 páginas de dicas práticas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Configurações ideais para cada situação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-pink-700">Planilha de Ideias de Conteúdo</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Nunca mais fique sem ideias! 100+ sugestões de conteúdo específicas para o público 50+.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Organizado por categorias e datas comemorativas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Modelo de calendário editorial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-pink-700">Criação de Conteúdos para 50+</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    O guia mais completo e acolhedor para quem quer começar a criar nas redes sociais, mesmo sem experiência!
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Passo a passo para Instagram, Facebook e YouTube</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Exercícios e tutoriais simples para aplicar no seu ritmo</span>
                    </li>
                  </ul>
                       <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Estratégias reais usadas por uma influenciadora 50+</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Mais de 70 páginas com ideias, dicas e plano de conteúdo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-pink-700">EBOOK - Como se Apresentar no Instagram sem Medo</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Guia simples e acolhedor para você mostrar quem é de forma leve, verdadeira e sem travas!
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Dicas práticas para perder o medo da câmera</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Estratégias para gravar vídeos com mais segurança</span>
                    </li>
                  </ul>
                      <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Roteiro para sua primeira apresentação nas redes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">Exercícios para fortalecer sua autoconfiança digital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-pink-600 to-pink-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white"></div>
        </div>

        <div className="container px-4 mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold text-lg shadow-lg flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Oferta por tempo limitado
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Investimento Especial</h2>

          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">
            Todo o conhecimento e experiência para transformar sua relação com a tecnologia e as redes sociais.
          </p>

          <div className="bg-white text-gray-700 rounded-2xl shadow-2xl p-10 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-5 right-0 left-0 mx-auto w-max">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-800 px-6 py-2 rounded-full font-bold shadow-lg flex items-center">
                <Star className="mr-1 h-5 w-5 fill-yellow-800" />
                Melhor Oferta
                <Star className="ml-1 h-5 w-5 fill-yellow-800" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-pink-600">Material Completo</h3>
            <div className="flex justify-center items-center gap-3 mb-8">
              <span className="text-gray-500 line-through text-xl">R$ 197,00</span>
              <span className="text-5xl font-bold text-pink-600">R$ 97,00</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Economia de R$ 100</span>
            </div>

            <div className="mb-8">
              <p className="font-bold text-pink-600 text-2xl">Hoje por apenas: R$ 97,00</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-left text-pink-700">Guia completo com mais de 80 páginas de conteúdo prático</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-left text-pink-700">
                  Tutoriais passo a passo para todas as principais redes sociais
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-left text-pink-700">Dicas de fotografia e vídeo específicas para 50+</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-left text-pink-700">Exercícios práticos para fixar o aprendizado</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                <p className="text-left text-pink-700">Acesso vitalício</p>
              </div>
            </div>

           <a
  href="https://pay.hotmart.com/D99483408X?off=sy32nphk&_hi=eyJjaWQiOiIxNzQ3MjQyMTc2NTIyODA3NjQ0NzI2NTE3NjcwOTAwIiwiYmlkIjoiMTc0NzI0MjE3NjUyMjgwNzY0NDcyNjUxNzY3MDkwMCIsInNpZCI6ImFkMmFlZDIzYWEzNTRiMTZhOTgzODFmZTJiYWUxODM5In0=.1747361783581&bid=1747361787902"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full max-w-full overflow-hidden"
>
  <Button
    className="
      w-full 
      max-w-full
      bg-gradient-to-r from-pink-500 to-pink-700 
      hover:from-pink-600 hover:to-pink-800 
      text-white 
      text-lg 
      py-8 
      rounded-xl 
      shadow-lg 
      transform transition-all duration-300 
      hover:scale-105 hover:shadow-xl 
      border-b-4 border-pink-800 
      active:border-b-0 active:mt-1
      
      /* Ajustes para mobile */
      py-6
      sm:py-8
      flex
      items-center
      justify-center
      gap-2
      overflow-hidden
    "
  >
    <Sparkles className="h-5 w-5" />
    <span className="whitespace-normal text-white break-words text-center">
      Quero Começar Minha Transformação Agora
    </span>
    <ArrowRight className="h-5 w-5" />
  </Button>
</a>



            <div className="mt-6 flex justify-center">
              <div className="relative bg-green-50 border-2 border-green-500 rounded-lg p-5 flex items-center gap-3 max-w-xs">
                <div className="absolute -top-5 -right-5 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform rotate-12">
                  <p className="text-white font-bold text-sm leading-tight text-center">7 DIAS</p>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm text-green-800 font-medium">Satisfação garantida ou seu dinheiro de volta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Premium */}
      <section className="py-20 bg-gradient-to-bl from-pink-50 via-white to-purple-50">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-10 md:p-12 text-center shadow-xl border border-pink-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-pink-600 to-pink-800">
              Pronto para Iniciar Sua Jornada Digital?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Não deixe que a idade seja um obstáculo para aproveitar tudo o que o mundo digital tem a oferecer.
              Junte-se a milhares de pessoas 50+ que estão transformando suas vidas através das redes sociais.
            </p>

       <div className="w-full flex justify-center px-4">
  <a
    href="https://pay.hotmart.com/D99483408X?off=sy32nphk&_hi=eyJjaWQiOiIxNzQ3MjQyMTc2NTIyODA3NjQ0NzI2NTE3NjcwOTAwIiwiYmlkIjoiMTc0NzI0MjE3NjUyMjgwNzY0NDcyNjUxNzY3MDkwMCIsInNpZCI6ImFkMmFlZDIzYWEzNTRiMTZhOTgzODFmZTJiYWUxODM5In0=.1747361783581&bid=1747361787902"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-lg"
  >
    <Button
      className="w-full bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 
      text-white text-base sm:text-xl py-7 px-7 sm:px-10 rounded-xl 
      shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
      border-b-4 border-pink-800 active:border-b-0 active:mt-1 text-center"
    >
      <Sparkles className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
      Quero Transformar <br/>Minha Vida Digital
    </Button>
  </a>
</div>





            <p className="mt-8 text-lg text-pink-600 font-medium">
              Sua nova jornada digital começa com um único clique!
            </p>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-6 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border-t border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Mônica Amoroso. Todos os direitos reservados.
            </p>
            <p className="text-center text-gray-500 text-sm mt-2 md:mt-0">
              Desenvolvido por{" "}
              <a
                href="https://www.devpro.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-pink-600 hover:text-pink-700 transition-colors"
              >
                DevPro
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
