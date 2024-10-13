<template>
    <header class="header w-100">
        <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
            <ul class="navbar-nav mx-0 my-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'some-page'}">Some Page</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'about'}">About</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
