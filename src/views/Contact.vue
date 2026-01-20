<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 text-md-h3 font-weight-bold">
          Kontakt
        </h1>
        <p class="text-body-1 mt-3">
          Máš otázky? Napíš nám alebo nás kontaktuj cez uvedené údaje.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-10" dense>
      <v-col cols="12" md="5">
        <v-card class="pa-6" rounded="xl" elevation="1">
          <h3 class="text-h6 font-weight-bold mb-4">
            📍 Kontaktné údaje
          </h3>

          <p><strong>Email:</strong> info@kniznyobchod.sk</p>
          <p><strong>Telefón:</strong> +421 900 000 000</p>
          <p><strong>Adresa:</strong> Knižná 12, 811 01 Bratislava</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card class="pa-6" rounded="xl" elevation="1">
          <h3 class="text-h6 font-weight-bold mb-4">
            ✉️ Napíšte nám
          </h3>

          <v-form @submit.prevent="submit">
            <v-text-field
              label="Meno"
              variant="outlined"
              required
              class="mb-3"
            />

            <v-text-field
              label="Email"
              type="email"
              variant="outlined"
              required
              class="mb-3"
            />

            <v-textarea
              label="Vaša správa"
              variant="outlined"
              rows="4"
              required
              class="mb-4"
            />

            <v-btn
              size="large"
              rounded="lg"
              type="submit"
            >
              Odoslať správu
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  methods: {
    submit() {
      alert('Správa bola odoslaná (simulácia)')
    }
  }
}
</script>