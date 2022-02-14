<template>
  <div>
    <!-- Navbar -->
    <section>
      <div class="navbar shadow-lg bg-neutral text-neutral-content">
        <div class="px-2 mx-2 navbar-start">
          <span class="text-lg font-bold">
            <svg
              style="width: 24px; height: 24px"
              class="inline-block w-5 mr-2 stroke-current"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
              />
            </svg>

            Jesus Nava
          </span>
        </div>
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <a
              class="btn btn-ghost btn-sm rounded-btn"
              v-scroll-to="'#home_section'"
            >
              Inicio
            </a>
            <a
              class="btn btn-ghost btn-sm rounded-btn"
              v-scroll-to="'#about_section'"
            >
              Sobre mi
            </a>
            <a
              class="btn btn-ghost btn-sm rounded-btn"
              v-scroll-to="'#portfolio_section'"
            >
              Portafolio
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn"> Contact </a>
          </div>
        </div>
        <div class="navbar-end">
          <button class="btn btn-square btn-ghost">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Inicio -->
    <section>
      <div
        class="hero min-h-screen"
        style="background-image: url(/img/bg_hero.jpg)"
        id="home_section"
      >
        <div class="hero-overlay bg-opacity-70"></div>
        <div class="text-center hero-content text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-2 text-2xl">Hola, soy</h1>
            <h1 class="mb-5 text-5xl font-bold">Jesus Nava</h1>
            <p class="mb-5 text-1xl">
              Programador web con más de dos años de experiencia en el
              desarrollo de aplicaciones y sitios web con HTML, CSS y
              JavaScript.
            </p>
            <a
              class="btn btn-primary mr-5"
              href="/docs"
              download="cv_Jesus_Rafael_Nava_Cruz.pdf"
              >Descargar CV</a
            >
            <button class="btn btn-outline" v-scroll-to="'#portfolio_section'">
              Portafolio
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre mi -->
    <section>
      <div class="container mb-5">
        <div class="text-center flex flex-col justify-center items-center">
          <h1 class="text-4xl font-bold pt-10" id="about_section">Sobre mi</h1>
          <div class="divider w-48 mt-0"></div>
        </div>

        <div
          class="
            grid grid-cols-1
            lg:grid-cols-2
            px-0
            md:px-3
            gap-10
            items-center
            justify-items-center
          "
        >
          <div class="text-lg">
            <p class="mb-3">
              ¡Hola!, Mi nombre es
              <span class="font-bold">Jesus Rafael Nava Cruz</span> <br />
              Soy un apasionado
              <span class="font-semibold">Desarrollador Front-end</span> que
              tiene como objetivo mejorar día con día para darte la mejor
              solución y calidad a tus proyectos; y poder así cumplir nuestros
              objetivos de la mano, siempre con la mejor disposición
            </p>
            <p>
              Comencé mi carrera en el 2019, cuando estaba cursando el ultimo
              año de mi universidad, creando proyectos de aplicaciones web con
              <span class="font-semibold">Struts2</span>. Poco después, empecé a
              trabajar con aplicaciones web creadas con JavaScript con el
              framework de <span class="font-semibold">DojoJs</span>. Desde
              entonces, me he empapado de conocimientos con nuevas tecnologías
              con <span class="font-semibold">VueJs</span>.
              <br />
              Y gracias a eso actualmente participo en la creación de un sistema
              para la unificación de información médica, de cual fui el creador
              del diseño.
            </p>
          </div>
          <img src="/img/RAFA-min.png" alt="Jesus Rafael Profile Photo" />
        </div>
      </div>

      <div class="container mb-5">
        <div
          class="text-center flex flex-col justify-center items-center mb-10"
        >
          <h1 class="text-4xl font-bold pt-10" id="about_section">
            Habilidades
          </h1>
          <div class="divider w-48 mt-0"></div>
        </div>

        <div
          class="
            grid grid-cols-1
            lg:grid-cols-2
            px-0
            md:px-3
            gap-x-10 gap-y-4
            mb-10
          "
        >
          <div v-for="(skill, index) in skills" :key="index">
            <span class="text-lg">{{ skill.name }}</span>
            <div class="w-full bg-gray-700 rounded-full">
              <div
                class="
                  bg-primary
                  text-xs
                  font-medium
                  text-blue-100 text-center
                  p-0.5
                  leading-none
                  rounded-full
                "
                :style="`width: ${skill.progress}`"
              >
                {{ skill.progress }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <div
          class="text-center flex flex-col justify-center items-center mb-10"
        >
          <h1 class="text-4xl font-bold pt-10" id="about_section">Educación</h1>
          <div class="divider w-48 mt-0"></div>
        </div>

        <div
          class="
            grid grid-cols-1
            lg:grid-cols-2
            px-0
            md:px-3
            gap-x-10 gap-y-4
            mb-10
          "
        >
          <div
            class="card shadow-2xl lg:card-side bg-primary text-primary-content"
            v-for="(education, index) in educations"
            :key="index"
          >
            <div class="card-body">
              <svg
                class="mb-3"
                style="width: 40px; height: 40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
                />
              </svg>
              <h1 class="text-3xl mb-2">{{ education.title }}</h1>
              <p class="text-base">
                Escuela: <span>{{ education.school }}</span>
              </p>
              <p class="text-base">
                Graduado: <span>{{ education.graduated }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <div
          class="text-center flex flex-col justify-center items-center mb-10"
        >
          <h1 class="text-4xl font-bold pt-10" id="about_section">
            Experiencia
          </h1>
          <div class="divider w-48 mt-0"></div>
        </div>

        <div
          class="
            grid grid-cols-1
            lg:grid-cols-2
            px-0
            md:px-3
            gap-x-10 gap-y-4
            mb-10
          "
        >
          <div
            class="card shadow-2xl lg:card-side bg-primary text-primary-content"
            v-for="(experience, index) in experiences"
            :key="index"
          >
            <div class="card-body">
              <svg
                class="mb-3"
                style="width: 40px; height: 40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z"
                />
              </svg>
              <h1 class="text-3xl mb-2">{{ experience.title }}</h1>
              <p class="text-base">
                Compañia: <span>{{ experience.company }}</span>
              </p>
              <p class="text-base">
                Periodo: <span>{{ experience.years }}</span>
              </p>
              <p class="text-base">
                Descripción: <span>{{ experience.description }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <div
          class="text-center flex flex-col justify-center items-center mb-10"
        >
          <h1 class="text-4xl font-bold pt-10" id="about_section">Logros</h1>
          <div class="divider w-48 mt-0"></div>
        </div>

        <div
          class="
            grid grid-cols-1
            lg:grid-cols-2
            px-0
            md:px-3
            gap-x-10 gap-y-4
            mb-10
          "
        >
          <div
            class="card shadow-2xl lg:card-side bg-primary text-primary-content"
            v-for="(award, index) in awards"
            :key="index"
          >
            <div class="card-body">
              <svg
                class="mb-3"
                style="width: 40px; height: 40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.2 10.7L16.6 16L12 12.2L7.4 16L8.8 10.8L4.6 7.3L10 7L12 2L14 7L19.4 7.3L15.2 10.7M14 19H13V16L12 15L11 16V19H10C8.9 19 8 19.9 8 21V22H16V21C16 19.9 15.11 19 14 19Z"
                />
              </svg>
              <h1 class="text-3xl mb-2">{{ award.title }}</h1>
              <p class="text-base">{{ award.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portafolio -->
    <section class="bg-base-content pb-10" id="portfolio_section">
      <div class="container">
        <div class="text-center flex flex-col justify-center items-center">
          <h1 class="text-4xl font-bold pt-10 text-primary" id="about_section">
            Portafolio
          </h1>
          <div class="divider w-48 mt-0"></div>
        </div>

        <div
          class="
            grid grid-cols-1
            lg:grid-cols-3
            px-0
            md:px-3
            gap-x-10 gap-y-4
            mb-10
          "
        >
          <div
            class="card shadow-2xl lg:card-side bg-primary text-primary-content"
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="card-body">
              <svg
                class="mb-3"
                style="width: 40px; height: 40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
                />
              </svg>
              <h1 class="text-3xl mb-2">{{ project.title }}</h1>
              <p class="text-base mb-3">{{ project.description }}</p>
              <div class="flex flex-wrap items-center">
                <div
                  class="badge badge-lg mx-1 my-2"
                  v-for="(tech, subindex) in project.technology"
                  :key="subindex"
                >
                  {{ tech }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section>
      <footer class="items-center p-4 footer bg-neutral text-neutral-content">
        <div class="items-center grid-flow-col">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"
            />
          </svg>
          <p>
            Jesus Nava | Copyright © {{ currentDate }} - Todos los derechos
            reservados
          </p>
        </div>
        <div
          class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"
        >
          <a
            href="https://www.linkedin.com/in/jesus-rafael-nava-cruz-b08296201/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                fill="currentColor"
                d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </a>
          <a href="https://github.com/JesusRafaelNavaCruz" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </a>
          <a href="https://gitlab.com/RafaelNC98" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                fill="currentColor"
                d="M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.84L6.83 3.33C6.72 3 6.4 2.75 6.04 2.75H6.04C5.67 2.75 5.35 3 5.24 3.33L3.13 9.82C3.13 9.82 3.13 9.83 3.13 9.83L2.06 13.11C1.9 13.61 2.07 14.15 2.5 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11M8.15 10.45L10.72 18.36L4.55 10.45M13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61M17.97 3.94L19.78 9.5H16.16M14.86 10.45L13.07 15.96L12 19.24L9.14 10.45M6.03 3.94L7.84 9.5H4.23M3.05 13.69C2.96 13.62 2.92 13.5 2.96 13.4L3.75 10.97L9.57 18.42M20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69"
              />
            </svg>
          </a>
          <a href="https://twitter.com/el_rafinia" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      skills: [
        { name: "Vuejs", progress: "90%", icon: "" },
        { name: "NodeJs", progress: "60%", icon: "" },
        { name: "Flutter", progress: "10%", icon: "" },
        { name: "Angular", progress: "20%", icon: "" },
        { name: "HTML5", progress: "100%", icon: "" },
        { name: "CSS", progress: "80%", icon: "" },
        { name: "JavaScript", progress: "90%", icon: "" },
        { name: "Axios", progress: "10%", icon: "" },
        { name: "API Rest", progress: "60%", icon: "" },
        { name: "VS Code", progress: "80%", icon: "" },
        { name: "Docker", progress: "10%", icon: "" },
        { name: "PWA", progress: "10%", icon: "" },
      ],
      educations: [
        {
          title: "TSU. Tecnologías de la Información",
          school: "Universidad Tecnológica de Emiliano Zapata",
          graduated: "Julio 2019",
        },
        {
          title: "ING. Tecnologías de la Información",
          school: "Universidad Tecnológica de Emiliano Zapata",
          graduated: "Abril 2021",
        },
      ],
      experiences: [
        {
          company: "ITTEC",
          title: "Desarrollador Web",
          years: "Noviembre 2019 - Mayo 2021",
          description:
            "Creación de sitios web, actualización y mantenimiento de sistemas web",
        },
        {
          company: "Erillam Healthcare",
          title: "Desarrollador Front-end",
          years: "Mayo 2021 - Actualmente",
          description:
            "Diseño, creación e implemetación del sistema SUIM (Sistema Universal de Información Médica)",
        },
      ],
      awards: [
        {
          title: "Sitio web ITTEC",
          description:
            "Internacionalización del sitio, funciones de animación con CSS, maquetación con bootstrap, SEO",
        },
        {
          title: "SUIM",
          description:
            "Creación e implementación del Sistema Universal de Información Médica",
        },
      ],
      projects: [
        {
          title: "Sitio web ITTEC",
          description:
            "Internacionalización del sitio, funciones de animación con CSS, maquetación con bootstrap, SEO",
          technology: [
            "HTML",
            "CSS",
            "Vue Js",
            "JavaScript",
            "Git",
            "Bootstrap",
          ],
        },
        {
          title: "SUIM",
          description:
            "Diseño y desarrollo de Front-end del Sistema Universal de Información Medica (SUIM)",
          technology: [
            "HTML",
            "CSS",
            "VueJs",
            "JavaScript",
            "Vuetify",
            "Axios",
            "Git",
          ],
        },
        {
          title: "Portafolio",
          description: "Creación de portafolio personal",
          technology: ["HTML", "CSS", "Vuejs", "Nuxt", "Javascript", "DaisyUI"],
        },
      ],
    };
  },
  computed: {
    currentDate() {
      const currentYear = new Date();
      return currentYear.getFullYear();
    },
  },
};
</script>
