#import "@preview/touying:0.6.1": *
#import themes.simple: *

#show: simple-theme.with(
  aspect-ratio: "4-3",
  footer: [Backend INF-530],
)

#title-slide[
  = Desarrollo web backend
  *(INF-530)*\
  Ingenieria Informatica
  
]


#focus-slide[
  Hector Josue Condori Chambi

  _Cel: 72421629_
]
== INF530 - Desarollo web backend
#figure(
  image("qr.jpeg", height: 85%),
)

= ¿Que es Backend?

== Desarrollo web

#table(
  columns: (1fr,1fr),
  gutter: 1em,
  fill: gray.lighten(90%),
  inset: .5em,
  table.cell(colspan: 2)[
    #set align(center)
   ===  Desarrollo web
   // Define que es el desarrollo web
   Trata de la creación de software que se apoya a el protocolo *HTTP*, el cual es el protocolo de comunicación de la web(Navegadores).
  ],
  [
    === Frontend
    // Define que es el frontend
    Es la parte visual de la web, es decir, lo que el usuario ve y con lo que interactua.
 ],
  [
    === Backend
    // Define que es el backend
    Es la parte que se encarga de la lógica de negocio, es decir, de la parte que no se ve, pero que es la que hace que la web funcione.
   ]
)
== Relacion Entre el backend y el frontend
#slide[
  #set align(center)
  #figure(
  image("frontend-backend.png", height: 70%),
  caption: [Relación entre frontend y backend]
  )
]

= Primer parcial
#import "@preview/timeliney:0.2.0"

== Objetivo
#set text(15pt)
#timeliney.timeline(
  show-grid: true,
  {
    import timeliney: *
      
    headerline(group(([*2023*], 4)), group(([*2024*], 4)))
    headerline(
      group(..range(4).map(n => strong("Q" + str(n + 1)))),
      group(..range(4).map(n => strong("Q" + str(n + 1)))),
    )
  
    taskgroup(title: [*HTML, CSS y JS*], {
      task("Research the market", (0, 2), style: (stroke: 2pt + gray))
      task("Conduct user surveys", (1, 3), style: (stroke: 2pt + gray))
    })

    taskgroup(title: [*Git y Github*], {
      task("Create mock-ups", (2, 3), style: (stroke: 2pt + gray))
      task("Develop application", (3, 5), style: (stroke: 2pt + gray))
      task("QA", (3.5, 6), style: (stroke: 2pt + gray))
    })

    taskgroup(title: [*Marketing*], {
      task("Press demos", (3.5, 7), style: (stroke: 2pt + gray))
      task("Social media advertising", (6, 7.5), style: (stroke: 2pt + gray))
    })

    milestone(
      at: 3.75,
      style: (stroke: (dash: "dashed")),
      align(center, [
        *Conference demo*\
        Dec 2023
      ])
    )

    milestone(
      at: 6.5,
      style: (stroke: (dash: "dashed")),
      align(center, [
        *App store launch*\
        Aug 2024
      ])
    )
  }
)