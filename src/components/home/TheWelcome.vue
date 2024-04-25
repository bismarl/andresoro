<template>
  <div>
    <div
      class="h-[350px] flex flex-col md:flex-row items-center p-8 bg-[url('src/assets/images/header.jpeg')] bg-no-repeat bg-cover bg-center-bottom">
      <div class="">
        <img src="@/assets/images/andre.jpg"
            class="h-48 w-48 rounded-full" alt="André Soro" />
      </div>
      <div class="md:ml-16 text-center md:text-left text-white">
        <h1 class="text-3xl md:text-5xl font-bold">André Soro, PhD</h1>
        <h2 class="text-lg md:text-2xl md:mt-6">Chercheur Scientifique à Université Laval</h2>
      </div>
    </div>
    <div class="py-10 md:py-auto px-8">
      <h2 class="text-xl mb-4 uppercase font-bold">A propos</h2>

      <p class="text-md my-4">
        <span class="font-bold">André Soro, PhD</span> est un chercheur postdoctoral au sein <a
          href="https://www.ffgg.ulaval.ca/sciences-du-bois-et-de-la-foret" target="_blank"><span class="badge">Département des sciences du
          bois et de la forêt</span></a> de l'Université Laval (Québec, Canada). Sous la supervision
        de Jean Bousquet, PhD et Patrick Lenz, PhD,
        il travaille sur une variété de sujets de recherche en sciences forestières.
        Ses travaux de recherche actuels, faisant partie du projet d'envergure <span class="font-bold">FastTRAC
          II</span>, portent sur la sélection génomique pour l'amélioration de la
        croissance et les traits adaptatifs chez l'épinette noire et rouge.
      </p>

      <p class="text-md my-4">
        André a plusieurs années d'expérience de recherche et d'enseignement. Il a en effet travaillé sur une variété de
        sujets de recherche à la Faculté de
        foresterie,
        de géographie et de géomatique de l'Université Laval, ou il a également enseigné entre autre le cours d'Anatomie
        et structure du bois. Il est également associé au <a
          href="https://ressources-naturelles.canada.ca/nos-ressources-naturelles/forets-et-foresterie/le-service-canadien-forets"
          target="_blank">Service Canadien des forêts</a> et a fait partie du Centre de recherche sur les matériaux
        renouvelables de l'Université Laval. Durant son séjour en France, il était professeur de lycée en science de la
        vie et la terre.

      </p>

      <p class="text-md my-4">
        Originaire de la Côte d'Ivoire, André a obtenu son <span class="font-semibold">Doctorat en Science
          forestières</span> à l'Université Laval
        (Québec, Canada) sous
        la supervision de Alexis Chim, Patrick Lenz et Jean Bousquet. Il est également titulaire
        d'un <span class="font-semibold">Master en Gestion des sols et services écosystémiques</span> de
        Agroparistech-Paris Saclay et un <span class="font-semibold">Master en Ecologie Biodiversité Evolution</span> de
        l'Université Sorbonne (Paris, France). Avant cela, il a obtenu une <span class="font-semibold">Licence en
          biologie et écologie générale</span> à Université d'El-tarf (El-tarf, Algérie).
      </p>

      <h2 class="text-xl mt-12 mb-4 uppercase font-bold">Intérêts de Recherche</h2>

      <p class="text-md my-4">
        Ma passion pour la recherche scientifique est enracinée dans mon désir de comprendre et de préserver les
        écosystèmes forestiers.
        À travers mes études et mes recherches, j'ai été captivé par la complexité des interactions entre les arbres,
        leur environnement et les facteurs génétiques qui façonnent leur croissance et leur adaptation.
        Ainsi mes
        principaux domaines d'Intérêts de recherche
        sont la <span class="badge">génétique forestière</span>, la <span class="badge">physiologie des arbres</span>,
        la <span class="badge">science du bois</span> et la <span class="badge">sylviculture</span>.
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply bg-green-400 px-1 py-0 mt-4;
}
</style>