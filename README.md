# trainne.Arch
Estruturando projeto backend para fins educacionais. Aplicando conceitos de separação de responsabilidades, modularizarão, código limpo e alguns conceitos de S.O.L.I.D e Clean Architecture.

```bash
.
├── config
├── domain
│   └── Session
│       ├── CreateSessionCookieService.spec.ts
│       ├── CreateSessionCookieService.ts
│       ├── CreateSessionService.ts
│       ├── index.ts
│       ├── ISessionDTO.ts
│       ├── ISessionInstanceFactory.ts
│       ├── SessionController.ts
│       ├── SessionInstanceFactory.ts
│       └── SessionRouter.ts
├── infra
│   ├── app.ts
│   ├── http
│   │   ├── external
│   │   │   └── SynsuiteEndpoint.ts
│   │   ├── HttpStatusCode.ts
│   │   └── useRoutes.ts
│   └── server.ts
├── shared
│   ├── errors
│   │   ├── AppError.ts
│   │   └── handler.ts
│   └── middlewares
│       └── routeNotFound.ts
└── @types
    └── IUseRouter.ts
```
