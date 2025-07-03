<template>
  <v-sheet class="eighthD d-flex flex-column align-center justify-center">
    <!-- Naslov -->
    <div class="text-center mb-10">
      <h2>
        <span
          style="
            color: #00a9c0;
            font-weight: 700;
            font-family: 'Cinzel', serif;
            font-size: 2rem;
            color: #af9458;
          "
          >{{ t("title_part1") }}</span
        ><br /><span
          style="
            font-family: 'Great Vibes', cursive;
            color: #222;
            font-size: 2rem;
          "
          >{{ t("title_part2") }}</span
        >
      </h2>
      <div class="underline mx-auto"></div>
    </div>

    <!-- Kontakt info kartice -->
    <div
      class="contact-cards d-flex justify-center mb-10"
      style="gap: 24px; flex-wrap: wrap"
    >
      <v-card class="contact-card" elevation="2" outlined>
        <v-card-text class="text-center">
          <v-icon size="28" color="#af9458">mdi-map-marker</v-icon>
          <div class="mt-2 font-weight-medium">{{ t("contact_find_us") }}</div>
          <div class="contact-info">
            Centar 54<br />
            52100 Šišan<br />
            Hrvatska
          </div>
        </v-card-text>
      </v-card>

      <v-card class="contact-card" elevation="2" outlined>
        <v-card-text class="text-center">
          <v-icon size="28" color="#af9458">mdi-email</v-icon>
          <div class="mt-2 font-weight-medium">
            {{ t("contact_send_email") }}
          </div>
          <a href="mailto:sainantonniodoo@gmail.com" class="contact-link"
            >sainantonniodoo@gmail.com</a
          >
        </v-card-text>
      </v-card>

      <v-card class="contact-card" elevation="2" outlined>
        <v-card-text class="text-center">
          <v-icon size="28" color="#af9458">mdi-phone</v-icon>
          <div class="mt-2 font-weight-medium">{{ t("contact_call_us") }}</div>
          <a href="tel:+38552397132" class="contact-link">+123456789</a>
        </v-card-text>
      </v-card>
    </div>

    <!-- Forma za poruku -->
    <v-card class="message-card" elevation="2" outlined>
      <v-card-text>
        <div class="text-center mb-4">
          <v-icon size="28" color="#af9458">mdi-email</v-icon>
          <div class="mt-2 font-weight-medium">
            {{ t("contact_send_message") }}
          </div>
        </div>

        <v-form>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                :label="$t('form.name')"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :label="$t('form.email')"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                :label="$t('form.phone')"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            :label="$t('form.subject')"
            outlined
            dense
          ></v-text-field>
          <v-textarea
            :label="$t('form.message')"
            outlined
            rows="4"
            maxlength="500"
            counter
            dense
          ></v-textarea>
          <v-btn color="#af9458" class="mt-4" rounded>{{
            t("form.send")
          }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

.eighthD {
  width: 100vw;
  background-color: white;
  padding: 40px 20px;
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #af9458;
  margin: 0 auto 40px;
  border-radius: 2px;
}

.contact-cards {
  max-width: 900px;
  width: 100%;
}

.contact-card {
  width: 280px;
  padding: 24px;
  background-color: #fafafa;
  border-radius: 6px;
}

.contact-info {
  margin-top: 8px;
  color: #af9458;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.3;
}

.contact-link {
  color: #af9458;
  font-weight: 500;
  text-decoration: none;
}

.message-card {
  max-width: 900px;
  width: 100%;
  padding: 32px;
  background-color: #fafafa;
  border-radius: 6px;
}
</style>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>