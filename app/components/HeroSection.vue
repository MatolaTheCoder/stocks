<script setup lang="ts">
import { profile } from '~/data/portofolio'

// O título cresce um pouco e desvanece ao descer (só transform e opacity)
const progress = useScrollProgress(450)
const titleStyle = computed(() => ({
  opacity: 1 - progress.value,
  transform: `scale(${1 + progress.value * 0.12})`,
}))
</script>

<template>
  <section
    id="topo"
    class="relative flex min-h-svh flex-col justify-end overflow-hidden bg-night px-6 pt-32 pb-14 md:px-12 lg:px-16 lg:pb-16"
  >
    <!-- Fundo: brilho suave, sem foto -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute -top-1/3 -right-1/4 size-[60rem] rounded-full bg-lilac/15 blur-3xl" />
      <div class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-night to-transparent" />
    </div>

    <div class="relative grid gap-10 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-7 xl:col-span-6">
        <p class="text-lg text-mist/80">{{ profile.greeting }}</p>
        <h1
          class="mt-3 origin-left font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-white will-change-[transform,opacity]"
          :style="titleStyle"
        >
          {{ profile.role }}
        </h1>
        <div class="mt-10 flex flex-wrap items-center gap-3">
          <a href="#contacto" class="glass-button rounded-full px-8 py-4 text-[17px] text-white">
            Fala comigo
          </a>
          <a
            v-if="profile.cv"
            :href="profile.cv"
            download
            class="rounded-full px-4 py-4 text-[17px] text-mist/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Descarregar CV
          </a>
        </div>
      </div>

      <p class="max-w-sm text-lg leading-relaxed text-mist/85 lg:col-span-3 lg:col-start-10">
        {{ profile.intro }}
      </p>
    </div>
  </section>
</template>
