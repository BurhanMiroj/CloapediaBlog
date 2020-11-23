const mixin = require('laravel-mix');

mixin.postCss("tailwind/css/tailwind.css", "public/css", [
    require('tailwindcss')
])
.setPublicPath("public")