#Installacion de dependencias

npm i

## Iniciar server
npm run start


##diagrama del comportamiento

                           ┌───────────────────────┐
                           │     Usuario web       │
                           └─────────┬─────────────┘
                                     │
                                     ▼
                        Solicita página (HTTP GET)
                                     │
                                     ▼
                    ┌────────────────────────────────────┐
                    │        Angular SSR (Express)       │
                    │        puerto 4000 (por ej.)       │
                    └──────────────┬─────────────────────┘
                                   │
           Usa @nguniversal/express-engine para renderizar Angular
                                   │
                                   ▼
                  Renderiza HTML completo con contenido estático
                                   │
                                   ▼
             ┌─────────────────────────────────────────────┐
             │         Tu app Angular en modo SSR          │
             └─────────────────────────────────────────────┘
                                   │
                                   ▼
                Hace peticiones HTTP al "server-fake"
                                   │
                                   ▼
           ┌────────────────────────────────────────────┐
           │             server-fake (Express)          │
           │        Simula una API en localhost:3000    │
           └────────────────────────────────────────────┘
                                   │
                                   ▼
                       Retorna datos simulados (JSON)
                                   │
                                   ▼
          Angular los inserta en el HTML renderizado en el servidor
                                   │
                                   ▼
                SSR responde al navegador con HTML completo
                                   │
                                   ▼
                   El navegador muestra contenido renderizado
                                   │
                                   ▼
                Angular toma control del DOM (hydration/client boot)

