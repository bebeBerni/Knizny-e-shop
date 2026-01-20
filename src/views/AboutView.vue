<template>
  <v-container class="py-10">
   
    <v-row justify="center">
      <v-col cols="12" md="9" class="text-center">
        <h1 class="text-h4 text-md-h3 font-weight-bold">
          O nás
        </h1>

        <p class="text-body-1 mt-3">
          Sme moderný knižný e-shop, ktorého cieľom je sprístupniť kvalitné knihy
          každému – rýchlo, jednoducho a za férové ceny.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-10" dense>
      <v-col cols="12" md="4">
        <v-card class="pa-6" rounded="xl" elevation="1">
          <div class="text-h6 font-weight-bold mb-2">📚 Naša misia</div>
          <div class="text-body-2">
            Chceme podporovať čítanie a vzdelávanie. Vyberáme knihy, ktoré
            inšpirujú, rozvíjajú a prinášajú radosť.
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-6" rounded="xl" elevation="1">
          <div class="text-h6 font-weight-bold mb-2">🚚 Ako fungujeme</div>
          <div class="text-body-2">
            Objednávky spracúvame každý pracovný deň. Spolupracujeme
            s overenými dodávateľmi, aby sa knihy dostali k tebe čo najrýchlejšie.
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-6" rounded="xl" elevation="1">
          <div class="text-h6 font-weight-bold mb-2">🤝 Prečo my</div>
          <div class="text-body-2">
            Férové ceny, rýchle doručenie, jednoduché vrátenie
            a podpora zákazníkov, na ktorú sa môžeš spoľahnúť.
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'AboutPage'
}
</script>
