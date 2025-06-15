"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Play,
  ArrowRight,
  Sparkles,
  Star,
  Shield,
  MessageCircle,
  BookOpen,
  Video,
  Users,
  Award,
  Heart,
  Clock,
  Gift,
  Camera,
  FileText,
  Mic,
  Dumbbell,
  Mail,
  BookMarked,
  Target,
  TrendingUp,
  Zap,
  Crown,
  Gem,
  Phone,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Rocket,
  Lightbulb,
  Trophy,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [showVideoControls, setShowVideoControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0 // Reinicia o vídeo
      videoRef.current.muted = false // Ativa o áudio
      videoRef.current.play() // Garante que está tocando
      setShowVideoControls(true) // Mostra os controles e esconde overlay
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Faixa Vermelha de Oferta */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-2 md:py-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
        <div className="relative z-10 flex items-center justify-center gap-1 md:gap-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold px-2 md:px-4">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 animate-bounce flex-shrink-0" />
          <span className="animate-pulse text-center text-white leading-tight">
            OFERTA POR TEMPO LIMITADO - ÚLTIMAS HORAS!
          </span>
          <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 animate-bounce flex-shrink-0" />
        </div>
      </div>

      {/* SEÇÃO 1 – Hero Section Profissional */}
      <section className="relative py-8 sm:py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-32 md:w-72 h-32 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 md:top-40 right-5 md:right-10 w-32 md:w-72 h-32 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-4 md:-bottom-8 left-10 md:left-20 w-32 md:w-72 h-32 md:h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container px-3 sm:px-4 mx-auto max-w-7xl relative z-10">
          {/* Badge Superior */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center px-3 sm:px-4 md:px-8 py-2 md:py-4 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-yellow-900 text-xs sm:text-sm md:text-sm font-bold shadow-2xl mb-4 sm:mb-6 md:mb-8 border-2 border-yellow-200 animate-pulse max-w-[95%] mx-auto">
              <Crown className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2 md:mr-3 flex-shrink-0" />
              <span className="text-center leading-tight">EXCLUSIVO: Para mulheres 50+ que querem se reinventar</span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1 sm:ml-2 md:ml-3 flex-shrink-0" />
            </div>
          </div>

          {/* Headlines Principais */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Se você tem mais de 50,
              </span>
              <br />
              <span className="text-white">sente que ficou pra trás</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300">
                na internet…
              </span>
            </h1>

            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/20 shadow-2xl mb-6 sm:mb-8 md:mb-12 mx-2 sm:mx-4 md:mx-0">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                mas no fundo sente vontade de aprender e se expressar —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  esta pode ser a virada que você esperava.
                </span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mb-4 sm:mb-6 md:mb-8">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-400 flex-shrink-0" />
                <span className="text-center text-white leading-tight">
                  Aprenda a usar redes sociais com leveza e transforme sua vivência em uma nova fonte de renda.
                </span>
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-400 flex-shrink-0" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg text-white font-bold mb-6 sm:mb-8 md:mb-12 bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-400/30 mx-2 sm:mx-4 md:mx-0">
              <Video className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 animate-pulse flex-shrink-0" />
              <span className="text-center text-white leading-tight">
                Assista ao vídeo e veja como mulheres como você estão conquistando sua independência digital.
              </span>
              <Play className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 animate-pulse flex-shrink-0" />
            </div>
          </div>

          {/* VSL Premium */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-0">
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[200px] sm:h-[250px] md:h-[350px] lg:h-[550px] border-2 md:border-4 border-gradient-to-r from-yellow-400 to-pink-400">
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={showVideoControls}
                  className="w-full h-full object-cover"
                  poster="/monicavsl6.mp4?height=550&width=1000"
                >
                  <source src="/monicavsl6.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>

                {/* Overlay escuro - só aparece quando não está com controles */}
                {!showVideoControls && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                )}

                {/* Play Button Premium - só aparece quando não está com controles */}
                {!showVideoControls && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleVideoClick}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl hover:from-pink-600 hover:to-purple-700 transition-all hover:scale-110 animate-pulse">
                        <Play className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 text-white ml-1 md:ml-2" />
                      </div>
                      <div className="absolute -inset-2 md:-inset-4 rounded-full border-2 md:border-4 border-white/30 animate-ping"></div>
                    </div>
                  </div>
                )}

                {/* Overlay Text - só aparece quando não está com controles */}
                {!showVideoControls && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4 md:p-10 pointer-events-none">
                    <div className="text-center">
                      <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3">
                        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-yellow-400 flex-shrink-0" />
                        <span className="leading-tight text-white">
                          Veja como mulheres como você estão transformando suas vidas
                        </span>
                        <Crown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-yellow-400 flex-shrink-0" />
                      </p>
                      <p className="text-yellow-300 text-xs sm:text-sm md:text-base lg:text-xl flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 font-semibold">
                        <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                        <span className="leading-tight text-white">
                          Clique para assistir agora e descobrir o segredo
                        </span>
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Principal Premium */}
          <div className="text-center px-2 sm:px-4 md:px-0">
            <Button
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 text-yellow-900 text-base sm:text-lg md:text-2xl py-4 sm:py-6 md:py-10 px-4 sm:px-6 md:px-16 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl 
              transform transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-3xl 
              border-b-4 md:border-b-8 border-yellow-600 active:border-b-2 md:active:border-b-4 active:mt-1 md:active:mt-2 font-black relative overflow-hidden group w-full max-w-md sm:max-w-lg md:max-w-none md:w-auto mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-pulse"></div>
              <div className="flex items-center justify-center gap-2 md:gap-4">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 animate-bounce flex-shrink-0" />
                <span className="leading-tight">QUERO APRENDER AGORA</span>
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 animate-bounce flex-shrink-0" />
              </div>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 text-white mt-4 sm:mt-6 md:mt-8 bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-400/30 mx-2 sm:mx-4 md:mx-0">
              <div className="flex items-center gap-2 md:gap-3">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm md:text-base text-white">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm md:text-base text-white">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm md:text-base text-white">Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 – Contexto do problema + bullets do que vai aprender */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container px-3 sm:px-4 mx-auto max-w-6xl">
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 px-2">
              Se você sente que tudo mudou rápido demais... e que ficou pra trás nesse novo mundo digital, saiba: você
              não está sozinha.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
              Muitas mulheres com mais de 50 anos acham que redes sociais não são para elas. Mas a verdade é que nunca
              foi tão fácil se posicionar, compartilhar sua experiência e começar a gerar renda com isso.
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-l-4 md:border-l-8 border-pink-500 p-4 sm:p-6 md:p-8 rounded-r-lg sm:rounded-r-xl md:rounded-r-2xl shadow-lg mx-2 sm:mx-4 md:mx-0">
              <p className="text-base sm:text-lg md:text-xl text-pink-700 font-bold flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
                <span className="text-center leading-tight">
                  E o melhor: você não precisa saber nada de tecnologia para começar.
                </span>
                <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 p-4 sm:p-6 md:p-8 lg:p-16 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border-2 border-pink-200 mb-8 sm:mb-12 md:mb-16 mx-2 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Com o método Do Zero ao Domínio Digital 50+, você vai aprender:
            </h3>

            <div className="grid gap-6 sm:gap-8 md:gap-10">
              {[
                {
                  icon: <Video className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                  title: "Aprender a usar Instagram, WhatsApp e YouTube de forma simples",
                  description:
                    'Pra conversar com quem ama, mostrar o que você faz e não se sentir mais "por fora" do mundo digital.',
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                  title: "Saber exatamente o que postar para atrair seguidores de verdade",
                  description:
                    "E sentir a alegria de ver pessoas comentando, curtindo e se conectando com aquilo que você compartilha.",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                  title: "Transformar sua história em conteúdo que inspira outras pessoas",
                  description: "Porque tudo o que você viveu até aqui tem valor — e pode tocar a vida de alguém.",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  icon: <Crown className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                  title: "Criar uma presença online que transmite confiança e verdade",
                  description: "Pra que vejam em você uma mulher forte, interessante e cheia de sabedoria pra dividir.",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />,
                  title: "Descobrir formas reais de ganhar dinheiro com o que você já sabe fazer",
                  description:
                    "E ver que é possível gerar renda com leveza, usando apenas o celular e sua experiência de vida.",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl text-white flex-shrink-0 shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center px-2 sm:px-4 md:px-0">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl 
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
              border-b-4 md:border-b-6 border-purple-800 active:border-b-2 active:mt-1 font-bold w-full max-w-sm sm:max-w-md md:max-w-none md:w-auto mx-auto"
            >
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="leading-tight text-white">Quero aprender passo a passo</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 – Apresentação do Curso */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100">
        <div className="container px-3 sm:px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-2">
              Do Zero ao Domínio Digital 50+
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              Um curso feito sob medida para mulheres que querem se sentir ativas, úteis e conectadas nesse novo mundo
              online — com liberdade e propósito.
            </p>
          </div>

          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-pink-600 flex-shrink-0" />
              <span>O que você vai aprender:</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-0">
              {[
                {
                  module: "Módulo 1",
                  title: "Perdendo o Medo da Tecnologia",
                  description:
                    "Dê os primeiros passos com segurança: aprenda a mexer no celular, entender os aplicativos e navegar com confiança.",
                  icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:h-8" />,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  module: "Módulo 2",
                  title: "Usando Instagram, Facebook e YouTube com Segurança",
                  description:
                    "Descubra como criar e usar suas redes sociais de forma prática, sem medo de errar e com orientações passo a passo.",
                  icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:h-8" />,
                  color: "from-green-500 to-green-600",
                },
                {
                  module: "Módulo 3",
                  title: "Criando Postagens com Sua História",
                  description:
                    "Aprenda a transformar sua experiência de vida em conteúdos que inspiram, conectam e encantam outras pessoas.",
                  icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:h-8" />,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  module: "Módulo 4",
                  title: "Perdendo a Vergonha de Gravar Vídeos",
                  description:
                    "Supere a insegurança de aparecer na câmera e veja como é simples gravar vídeos autênticos e envolventes.",
                  icon: <Video className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:h-8" />,
                  color: "from-red-500 to-red-600",
                },
                {
                  module: "Módulo 5",
                  title: "Criando uma Rotina Digital Leve e Sustentável",
                  description:
                    "Organize seu tempo online com equilíbrio, sem se sobrecarregar — e aproveite a tecnologia a seu favor.",
                  icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:h-8" />,
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  module: "Módulo 6",
                  title: "Começando a Ganhar Dinheiro Online",
                  description:
                    "Conheça formas reais de gerar renda com seus conteúdos, parcerias e tudo o que você já sabe fazer.",
                  icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:h-8" />,
                  color: "from-pink-500 to-pink-600",
                },
              ].map((module, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6">
                    <div
                      className={`bg-gradient-to-r ${module.color} p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl text-white shadow-lg flex-shrink-0`}
                    >
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm md:text-sm font-bold text-pink-600 mb-2 md:mb-3 bg-pink-100 px-2 md:px-3 py-1 rounded-full inline-block">
                        {module.module}
                      </div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">
                        {module.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{module.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-pink-50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border-2 border-pink-200 mb-8 sm:mb-12 md:mb-16 mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <Gift className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-pink-600 flex-shrink-0" />
              <span>Você recebe:</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Acesso vitalício ao curso completo",
                },
                {
                  icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Suporte durante o aprendizado",
                },
                {
                  icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Material de apoio com ideias de conteúdo",
                },
                {
                  icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Checklist para não se perder nos passos",
                },
                {
                  icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Acesso à comunidade com outras alunas 50+",
                },
                {
                  icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Atualizações futuras incluídas",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-md"
                >
                  <div className="text-pink-600 bg-pink-100 p-2 rounded-lg flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center px-2 sm:px-4 md:px-0">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl 
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
              border-b-4 md:border-b-6 border-purple-800 active:border-b-2 active:mt-1 font-bold w-full max-w-sm sm:max-w-md md:max-w-none md:w-auto mx-auto"
            >
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="leading-tight text-white">Quero começar agora</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 – Quem ensina + método + provas sociais */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="container px-3 sm:px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 px-2">
              Criado por quem vive na pele os desafios de aprender algo novo depois dos 50
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center mb-12 sm:mb-16 md:mb-20 px-2 sm:px-0">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-pink-200">
              <Image src="/monica.jpg?height=500&width=500" alt="Mônica Amoroso" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4">
                  <div className="bg-pink-600 p-2 sm:p-3 md:p-4 rounded-full">
                    <Users className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">+10.000 seguidores</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Aos 58 anos, Mônica sentia que o mundo digital não era pra ela — mas decidiu tentar. Com paciência,
                aprendeu sozinha a usar as redes sociais e, hoje, com mais de 10 mil seguidores, faz parcerias, gera
                renda e se sente ativa e valorizada.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Agora, ela ajuda outras mulheres a fazerem o mesmo — com acolhimento, simplicidade e confiança.
              </p>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-pink-200 shadow-lg">
                  <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-pink-600 flex-shrink-0" />
                  <p className="font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-tight">
                    Se ela conseguiu, você também pode.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-pink-200 shadow-lg">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-pink-600 flex-shrink-0" />
                  <p className="font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-tight">
                    E agora é a sua vez de descobrir que nunca é tarde para se sentir viva, conectada e realizada de
                    novo.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-pink-200 shadow-lg">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-pink-600 flex-shrink-0" />
                  <p className="font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-tight">
                    Você vai se sentir segura desde a primeira aula.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-pink-50 to-purple-50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border-2 border-pink-200 mb-8 sm:mb-12 md:mb-16 mx-2 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-pink-600 flex-shrink-0" />
              <span>Quem já passou por aqui diz:</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {[
                {
                  text: "Eu achava que não era pra mim, mas a Mônica ensina com tanto carinho que parece que está do meu lado.",
                  author: "Vera, 61 anos",
                  icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                  color: "from-pink-500 to-pink-600",
                },
                {
                  text: "Hoje tenho mais seguidores que minha neta! Obrigada por me mostrar que nunca é tarde.",
                  author: "Márcia, 54 anos",
                  icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                  color: "from-green-500 to-green-600",
                },
                {
                  text: "Voltei a me sentir ativa, útil e motivada!",
                  author: "Tânia, 64 anos",
                  icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                  color: "from-purple-500 to-purple-600",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all flex flex-col h-full"
                >
                  <div
                    className={`bg-gradient-to-r ${testimonial.color} p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl w-fit mb-3 sm:mb-4 md:mb-6 text-white shadow-lg`}
                  >
                    {testimonial.icon}
                  </div>
                  <div className="flex mb-3 sm:mb-4 md:mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 sm:mb-6 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg flex-grow">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mt-auto">
                    – {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center px-2 sm:px-4 md:px-0">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl 
              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
              border-b-4 md:border-b-6 border-purple-800 active:border-b-2 active:mt-1 font-bold w-full max-w-sm sm:max-w-md md:max-w-none md:w-auto mx-auto"
            >
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="leading-tight text-white">Quero aprender com a Mônica agora</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 – Oferta Especial + Bônus Melhorados */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-pink-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-5 md:top-10 left-5 md:left-10 w-20 md:w-40 h-20 md:h-40 rounded-full bg-white animate-pulse"></div>
          <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-30 md:w-60 h-30 md:h-60 rounded-full bg-white animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-10 md:w-20 h-10 md:h-20 rounded-full bg-white animate-pulse delay-2000"></div>
        </div>

        <div className="container px-3 sm:px-4 mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 text-white px-2">
            Uma nova fase começa com um passo simples — e com tudo o que você precisa já incluso.
          </h2>

          {/* Countdown Timer */}
          <div className="bg-red-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 mb-8 sm:mb-12 md:mb-16 shadow-2xl border-2 md:border-4 border-red-400 mx-2 sm:mx-4 md:mx-0">
            <h3 className="text-xl text-white sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 animate-pulse flex-shrink-0" />
              <span>OFERTA EXPIRA EM:</span>
            </h3>
            <div className="flex justify-center gap-2 sm:gap-4 md:gap-8">
              <div className="bg-white text-red-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 min-w-[60px] sm:min-w-[80px] md:min-w-[120px] shadow-xl">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-bold">HORAS</div>
              </div>
              <div className="bg-white text-red-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 min-w-[60px] sm:min-w-[80px] md:min-w-[120px] shadow-xl">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-bold">MIN</div>
              </div>
              <div className="bg-white text-red-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 min-w-[60px] sm:min-w-[80px] md:min-w-[120px] shadow-xl">
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-bold">SEG</div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-700 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-16 max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-pink-600 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
              <Gem className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
              <span>Acesso completo ao curso</span>
            </h3>
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-pink-600 mb-2 md:mb-4">R$ 97 à vista</div>
              <div className="text-base sm:text-lg md:text-2xl text-gray-600">ou 12x de R$ 9,70</div>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
              {[
                { icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />, text: "Acesso vitalício" },
                { icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />, text: "Suporte completo" },
                {
                  icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
                  text: "Comece mesmo sem experiência",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-pink-50 rounded-lg md:rounded-xl"
                >
                  <div className="text-pink-600 bg-pink-100 p-2 rounded-lg flex-shrink-0">{item.icon}</div>
                  <span className="text-pink-700 font-bold text-sm sm:text-base md:text-lg leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl mb-8 sm:mb-12 md:mb-16 border-2 md:border-4 border-yellow-300 mx-2 sm:mx-4 md:mx-0">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
              <span className="text-center leading-tight">BÔNUS EXCLUSIVOS — APENAS PARA QUEM GARANTIR HOJE:</span>
            </h3>
            <p className="font-bold text-base sm:text-lg md:text-xl leading-tight">
              IMPORTANTE: esses bônus são liberados somente durante o período de lançamento e podem sair do ar a
              qualquer momento.
            </p>
          </div>

          {/* Bônus Cards com Etiquetas - Responsivo e Alinhado */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0">
            {[
              {
                icon: <Camera className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />,
                title: "Guia de Fotografia com Smartphone",
                description: "Tire fotos incríveis mesmo sem equipamento profissional.",
                value: "R$ 67",
                bonus: "BÔNUS 1",
              },
              {
                icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />,
                title: "Planilha com +100 ideias de conteúdo",
                description: "Nunca mais fique sem saber o que postar.",
                value: "R$ 47",
                bonus: "BÔNUS 2",
              },
              {
                icon: <Mic className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />,
                title: "Ebook – Como se Apresentar no Instagram sem Medo",
                description: "Dê seus primeiros passos com mais segurança.",
                value: "R$ 37",
                bonus: "BÔNUS 3",
              },
              {
                icon: <BookMarked className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />,
                title: "30 ideias de conteúdo prontas para postar",
                description: "Conteúdos que conectam com o seu público de verdade.",
                value: "R$ 57",
                bonus: "BÔNUS 4",
              },
              {
                icon: <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />,
                title: "Exercícios Práticos Exclusivos",
                description: "Para treinar e aplicar o que aprender em cada módulo.",
                value: "R$ 77",
                bonus: "BÔNUS 5",
              },
              {
                icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />,
                title: "Modelos de Mensagens para Parcerias",
                description: "Use essas mensagens para começar a fechar parcerias reais.",
                value: "R$ 87",
                bonus: "BÔNUS 6",
              },
            ].map((bonus, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl border-2 md:border-4 border-pink-200 hover:shadow-3xl transition-all hover:scale-105 relative flex flex-col h-full"
              >
                {/* Etiqueta do Bônus */}
                <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                    {bonus.bonus}
                  </div>
                </div>

                {/* Header com ícone e badge GRÁTIS */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8 mt-2 md:mt-4">
                  <div className="bg-pink-100 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl text-pink-600">
                    {bonus.icon}
                  </div>
                  <div className="bg-green-500 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-lg font-bold">
                    GRÁTIS
                  </div>
                </div>

                {/* Título */}
                <h4 className="font-bold text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 md:mb-6 text-gray-900 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] flex items-center leading-tight">
                  {bonus.title}
                </h4>

                {/* Descrição */}
                <p className="text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-lg flex-grow">
                  {bonus.description}
                </p>

                {/* Valor - sempre no final */}
                <div className="text-center mt-auto">
                  <span className="bg-pink-600 text-white px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-lg">
                    Valor: {bonus.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bônus Especial - Apostila */}
          <div className="bg-white text-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-2 md:border-4 border-yellow-300 mb-8 sm:mb-12 md:mb-16 relative mx-2 sm:mx-4 md:mx-0">
            {/* Etiqueta Especial */}
            <div className="absolute -top-3 sm:-top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-yellow-900 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg border-2 border-yellow-300">
                BÔNUS ESPECIAL
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8 mt-4">
              <div className="bg-yellow-100 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl">
                <BookOpen className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-yellow-600" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Apostila completa – Criação de Conteúdos para 50+
                </h4>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Todo o material de apoio para acompanhar suas aulas com facilidade.
                </p>
              </div>
              <div className="bg-green-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                GRÁTIS
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl mb-8 sm:mb-12 md:mb-16 mx-2 sm:mx-4 md:mx-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              Esses bônus somam mais de R$ 450 em conteúdo — e estão liberados gratuitamente somente durante o
              lançamento.
            </p>
          </div>

          <div className="mb-8 sm:mb-12 md:mb-16 px-2">
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 text-white leading-relaxed">
              Você não precisa mais olhar para as redes sociais como algo "que não é pra você".
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              Este é o seu tempo. E você merece viver essa fase com autonomia, conexão e alegria.
            </p>
          </div>

          <div className="px-2 sm:px-4 md:px-0 mb-6 sm:mb-12 md:mb-16">
            <Button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-900 
    text-sm sm:text-lg md:text-2xl 
    py-3 sm:py-6 md:py-10 
    px-3 sm:px-6 md:px-16 
    rounded-lg sm:rounded-2xl md:rounded-3xl 
    shadow-xl sm:shadow-2xl transform transition-all duration-300 
    hover:scale-105 md:hover:scale-110 
    hover:shadow-2xl 
    border-b-4 md:border-b-8 border-yellow-600 active:border-b-2 md:active:border-b-4 
    active:mt-1 md:active:mt-2 
    font-extrabold w-full max-w-xs sm:max-w-lg md:max-w-none 
    md:w-auto mx-auto"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4">
                <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
                <span className="leading-tight text-center">
                  SIM, QUERO TODOS OS BÔNUS
                  <span className="hidden sm:inline"> (enquanto ainda estão no ar!)</span>
                </span>
                <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
              </div>
            </Button>
          </div>

          <div className="bg-white bg-opacity-20 p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/30 mx-2 sm:mx-4 md:mx-0">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center leading-tight">
                Garantia incondicional de 7 dias
              </h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6 text-white leading-relaxed">
              Você tem 7 dias para explorar tudo com calma.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6 text-white leading-relaxed">
              Se não sentir que isso é pra você, devolvemos 100% do valor.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
              É risco zero. Você só continua se amar o que vê.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 – FAQ + botão final + WhatsApp */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container px-3 sm:px-4 mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 px-2">
            Ainda com dúvidas? A gente responde!
          </h2>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                icon: <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                question: "E se eu me sentir perdida ou achar que é difícil pra mim?",
                answer:
                  "Não se preocupe. A Mônica explica tudo com calma, com linguagem simples, e ainda tem uma equipe e uma comunidade pra te ajudar no caminho.",
              },
              {
                icon: <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                question: "E se eu tiver vergonha de aparecer?",
                answer:
                  "Você não está sozinha. Muitas alunas começam assim. O curso tem um módulo só pra te ajudar a vencer essa insegurança, no seu tempo, com jeitinho e leveza.",
              },
              {
                icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                question: "Tenho mais de 60. Ainda dá tempo de aprender tudo isso?",
                answer:
                  "Dá, sim! Na verdade, esse curso foi feito especialmente pra mulheres como você. Sem pressa, sem pressão. Só com carinho, clareza e apoio.",
              },
              {
                icon: <Video className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                question: "Nunca fiz curso online. Vou saber acessar as aulas?",
                answer:
                  "Claro! As aulas são simples, passo a passo e você vai receber ajuda pra acessar tudo, seja pelo celular, tablet ou computador.",
              },
              {
                icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
                question: "E se eu me sentir perdida em algum momento?",
                answer:
                  "Você vai ter suporte completo e uma comunidade de mulheres passando pelo mesmo processo. Ninguém fica sozinha — estamos aqui pra te acompanhar.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 mx-2 sm:mx-0"
              >
                <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="text-pink-600 bg-pink-100 p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0">
                    {faq.icon}
                  </div>
                  <span className="leading-tight">{faq.question}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg sm:ml-12 md:ml-16">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 md:px-0">
            <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 md:border-4 border-green-300 inline-block max-w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-3 sm:mb-4 md:mb-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 flex-shrink-0" />
                <span className="text-center leading-tight">Quer falar direto com a gente no WhatsApp?</span>
              </h3>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base md:text-lg py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg w-full sm:w-auto">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span className="leading-tight text-white">Clique aqui para falar com nossa equipe</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-4 sm:py-6 md:py-10 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 border-t-2 md:border-t-4 border-pink-300">
        <div className="container px-3 sm:px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-center text-gray-700 font-semibold text-xs sm:text-sm md:text-base leading-tight">
              &copy; {new Date().getFullYear()} Mônica Amoroso. Todos os direitos reservados.
            </p>
            <p className="text-center text-gray-700 font-semibold text-xs sm:text-sm md:text-base leading-tight">
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
