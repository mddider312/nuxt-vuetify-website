<template>
    <v-app>
      <v-container>
        <v-row class="text-center">
          <v-col>
            <v-card color="primary" class="white--text">
              <v-card-title>Welcome to Our Nuxt.js Website</v-card-title>
              <v-card-subtitle>This website is built with Nuxt.js and Vuetify.</v-card-subtitle>
              <v-card-actions>
                <NuxtLink to="/about" class="white--text">
                  <v-btn color="secondary">Learn More</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  