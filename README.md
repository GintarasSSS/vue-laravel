<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Project setup

* ``composer create-project laravel/laravel vue-laravel`` 
* ``./vendor/bin/sail up -d``
* ``./vendor/bin/sail artisan migrate``
* ``./vendor/bin/sail npm i vue@3``

## Install Vue plugin to use Laravel

* ``./vendor/bin/sail npm i @vitejs/plugin-vue``
* ``vite.config.js:16`` - init in vite config

## Init hot reload

* ``vite.config.js:12``

## Install Bootstrap

* ``./vendor/bin/sail npm install -D bootstrap@5.3.3``
* ``resources/js/app.js:2`` - load Boostrap styles

## Vue installations

* ``./vendor/bin/sail npm i less --dev`` - less preprocessor
* ``./vendor/bin/sail npm install vue-router@4``
* ``./vendor/bin/sail npm install vuex@next --save``

## Setup import alias

* ``vite.config.js:23``
* ``jsconfig.json`` - PHPStorm IDE setting for alias

## Run project

* ``./vendor/bin/sail npm run dev``
