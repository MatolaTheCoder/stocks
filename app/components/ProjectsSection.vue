<script setup lang="ts">
import { projects } from '~/data/portofolio'
</script>

<template>
  <section id="projecto" class="bg-paper px-4 py-20 text-ink sm:px-6 lg:px-8 lg:py-28">
    <div class="mx-auto w-full max-w-[1160px]">
      <h2 class="font-serif text-4xl leading-tight sm:text-5xl">Projectos</h2>
      <p class="mt-3 max-w-xl text-lg text-stone">Alguns dos produtos que ajudei a construir.</p>

      <!-- Em computador os cartões empilham-se ao fazer scroll; em telemóvel fluem normalmente -->
      <ol class="mt-12 flex flex-col gap-8 pb-8 lg:mt-16 lg:gap-16 lg:pb-24">
        <li
          v-for="(project, i) in projects"
          :key="project.id"
          class="stack-card"
          :style="{ '--i': i, zIndex: i + 1 }"
        >
          <article
            class="grid overflow-hidden rounded-3xl bg-night text-mist shadow-[0_20px_50px_rgb(0_0_0/0.25)] md:grid-cols-2 lg:min-h-[26rem]"
          >
            <div class="order-2 flex flex-col justify-between gap-8 p-6 sm:p-10 md:order-1 lg:p-12">
              <div>
                <p class="font-mono text-sm text-lilac">0{{ i + 1 }} / 0{{ projects.length }}</p>
                <h3 class="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">{{ project.title }}</h3>
                <p class="mt-4 max-w-md text-base leading-relaxed text-mist/85">{{ project.description }}</p>
                <ul class="mt-5 flex flex-wrap gap-2">
                  <li v-for="tag in project.tags" :key="tag" class="glass rounded-full px-3 py-1 text-sm">{{ tag }}</li>
                </ul>
              </div>
              <a
                v-if="project.href"
                :href="project.href"
                class="glass-button inline-flex w-fit rounded-full px-6 py-3 text-white"
              >
                Ver projecto
              </a>
            </div>

            <div class="relative order-1 h-56 sm:h-72 md:order-2 md:h-auto">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.imageAlt ?? project.title"
                width="1200"
                height="900"
                :loading="i === 0 ? 'eager' : 'lazy'"
                class="absolute inset-0 size-full object-cover"
              >
              <div
                v-else
                aria-hidden="true"
                class="absolute inset-0 bg-linear-to-br from-[#666F98] to-[#51597F]"
              />
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .stack-card {
    position: sticky;
    top: calc(var(--nav-h) + var(--i) * 1rem);
  }
}
</style>
