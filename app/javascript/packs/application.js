// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import * as ActiveStorage from "@rails/activestorage"
import "channels"

import mrujs from "mrujs";
import CableReady from "cable_ready"
import { CableCar } from "mrujs/plugins"
import * as Turbo from "@hotwired/turbo";
window.Turbo = Turbo;

mrujs.start({
  plugins: [
    new CableCar(CableReady)
  ]
})
ActiveStorage.start()

import "controllers"
import "stylesheets/application.scss"
