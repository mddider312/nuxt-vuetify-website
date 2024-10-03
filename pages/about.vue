<template>
    <v-app>
      <v-container>
        <v-row class="text-center">
          <v-col>
            <v-card>
              <v-card-title>About Us</v-card-title>
              <v-card-text>
                We are creating a website using Nuxt.js and Vuetify to show a simple example of an enhanced UI.
              </v-card-text>
              <v-card-actions>
                <NuxtLink to="/">
                  <v-btn color="info">Back to Home</v-btn>
                </NuxtLink>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  