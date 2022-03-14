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
            <a
              class="btn btn-ghost btn-sm rounded-btn"
              v-scroll-to="'#contact_section'"
            >
              Contact
            </a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="btn btn-ghost rounded-btn">
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="
                p-2
                shadow
                menu menu-compact
                dropdown-content
                text-bg-primary
                rounded-box
                w-52
                glass
              "
            >
              <li v-for="(theme, index) in themes" :key="index">
                <button
                  :data-set-theme="theme"
                  data-act-class="active"
                  class="rounded-btn"
                >
                  {{ theme }}
                </button>
              </li>
            </ul>
          </div>
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
              href="/cv_Jesus_Rafael_Nava_Cruz.pdf"
              download=""
              >Descargar CV</a
            >
            <button
              class="btn btn-outline btn-secondary"
              v-scroll-to="'#portfolio_section'"
            >
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
          <img
            class="mask mask-squircle w-9/12"
            src="/img/profile_img.jpg"
            alt="Jesus Rafael Profile Photo"
          />
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
          <div class="bg-primary h-1 w-48 mt-0 mb-10"></div>
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

              <div
                v-for="(url, i) in project.urls"
                :key="i"
                class="flex flex-wrap items-end mt-4"
              >
                <a :href="url.web" target="_blank" v-if="url.web">
                  <svg style="width: 40px; height: 40px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                </a>
                <a :href="url.repo" target="_blank" v-if="url.repo">
                  <svg style="width: 40px; height: 40px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" id="contact_section">
        <div class="text-center flex flex-col justify-center items-center">
          <h1 class="text-4xl font-bold pt-10 text-primary" id="about_section">
            Contacto
          </h1>
          <div class="bg-primary h-1 w-48 mt-0 mb-10"></div>
        </div>

        <div class="text-center">
          <h1 class="text-3xl text-primary font-bold mb-5">
            ¿Necesitas ayuda para tus proyectos?
          </h1>
          <p class="text-lg text-primary font-semibold">
            ¡Buscas un desarrollador front-end para construir tus aplicaciones o
            sitios web?
          </p>
          <p class="text-lg text-primary font-semibold mb-5">
            Puedes contactarme por
            <span class="font-bold">correo electrónico</span>,
            <span class="font-bold">redes sociales</span> y
            <span class="font-bold">Whatsapp</span> que te dejo aqui abajo
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-center">
          <a
            href="mailto:jrnc9802@gmail.com"
            target="_blank"
            class="text-error mx-5"
          >
            <svg style="width: 50px; height: 50px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/el_rafinia"
            target="_blank"
            class="text-info mx-5"
          >
            <svg style="width: 50px; height: 50px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/el.rafinia/?hl=es-la"
            target="_blank"
            class="text-pink-600 mx-5"
          >
            <svg style="width: 50px; height: 50px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/7772670869"
            target="_blank"
            class="text-green-500 mx-5"
          >
            <svg style="width: 50px; height: 50px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
              />
            </svg>
          </a>
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
import { themeChange } from "theme-change";
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
          years: "Mayo 2021 - Marzo 2022",
          description:
            "Diseño, creación e implemetación del sistema SUIM (Sistema Universal de Información Médica)",
        },
        {
          company: "CloudAppi LATAM",
          title: "Desarrollador Front-end",
          years: "Marzo 2022 - Actualmente",
          description: "Desarrollador de Front-end",
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
          urls: [{ web: "https://www.ittec.mx/", repo: "" }],
        },
        {
          title: "SUIM",
          description:
            "Como desarrollador Front-end, creando el diseño del Sistema Universal de Información Médica, basado en el diseño AdminLTE, creado con componentes de Vuetify, utilizando también librerías y herramientas como Vuex, Axios (para el consumo de microservicios), SGV.js, Cornerstone (Para crear el visualizador de imagenes formato DICOM) y JWT para la seguridad del mismo",
          technology: [
            "HTML",
            "CSS",
            "VueJs",
            "JavaScript",
            "Vuetify",
            "Axios",
            "Git",
          ],
          urls: [{ web: "https://erillamhc.com/", repo: "" }],
        },
        {
          title: "Portafolio",
          description: "Creación de portafolio personal",
          technology: ["HTML", "CSS", "Vuejs", "Nuxt", "Javascript", "DaisyUI"],
          urls: [
            {
              web: "https://jesusrafaelnavacruz.vercel.app/",
              repo: "https://github.com/JesusRafaelNavaCruz/portafolio",
            },
          ],
        },
        {
          title: "Calculadora",
          description: "Calculadora con funciones basicas ",
          technology: ["HTML", "CSS", "Vuejs", "Javascript"],
          urls: [
            { web: "https://determined-meitner-b8cd1f.netlify.app", repo: "" },
          ],
        },
      ],
      themes: [
        "light",
        "dark",
        "bumblebee",
        "emerald",
        "valentine",
        "halloween",
        "fantasy",
        "black",
        "luxury",
        "dracula",
      ],
    };
  },
  computed: {
    currentDate() {
      const currentYear = new Date();
      return currentYear.getFullYear();
    },
  },
  mounted() {
    themeChange(false);
  },
};
</script>
