<template>
    <main class="container-fluid">

        <div class="row my-3">
            <div class="col">
                <h1 class="my-4 text-center">App Météo avec Vue.js</h1>
            </div>
        </div>

        <div class="row w-75 m-auto">
            <div class="col-12">
                <div class="form-group mb-5">
                    <label for="position">Entrez le nom d'une ville :</label>
                    <input
                        type="text"
                        id="position"
                        class="form-control"
                        placeholder="Paris"
                        v-model="requete"
                        @keypress.enter="goMeteo"
                    />
                </div>
            </div>

            <div class="col" v-if="temps">
                <h2 class="h3 text-center mb-3">{{ temps.name }}</h2>

                <div class="card text-center px-5 py-3 flex-row justify-content-between align-items-center">
                    
                    <div class="icone-cadre p-2 rounded rounded-circle">
                        <img
                            class="icone-temps"
                            :src="`http://openweathermap.org/img/wn/${temps.weather[0].icon}@2x.png`"
                            alt="Illustration du temps"
                        />
                    </div>

                    <div class="card-body text-left w-75 ml-5 justify-content-between">
                        <!-- Température -->
                        <div class="mb-4">
                            <span class="h4 card-title"> Température ▸ </span>
                            <span class="card-text">{{ temps.main.temp.toFixed() }} °C</span>
                        </div>
                        <!-- Temps -->
                        <div>
                            <span class="h4 card-title"> Temps ▸ </span>
                            <span class="card-text">{{ capitalizeFirstLetter(temps.weather[0].description) }}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </main>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Meteo",
        data() {
            return {
                requete: "",
                temps: undefined,
                api_code: process.env.VUE_APP_OPEN_WEATHER_APPID,
                url_recherche: "https://api.openweathermap.org/data/2.5/weather?",
            };
        },
        methods: {
            goMeteo() {
                axios
                    .get(
                        `${this.url_recherche}q=${this.requete}&units=metric&appid=${this.api_code}&lang=fr`
                    )
                    .then((reponse) => {
                        // console.log(reponse);
                        this.temps = reponse.data;
                        console.log(this.temps);
                    });
                this.requete = "";
            },
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        },
    };
</script>

<style scoped>
    input::placeholder{
        color: rgb(172, 170, 170);
    }

    .icone-cadre {
        background-color: #e4e8f5;
    }

    .icone-temps {
        width: 70px;
        height: 70px;
    }

    .card-text{
        font-size: 18px;
    }
</style>
