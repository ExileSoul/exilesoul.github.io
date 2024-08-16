<template>
    <div class="home-container">
        <video autoplay muted loop class="background-video">
            <source src="@/assets/videos/Video_Final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div class="overlay-text">
            <h1 class="name">Gabriel Baillargeon</h1>
            <h2 class="title">{{ $t('jobTitle') }}</h2>
            <v-btn flat color="transparent" class="mt-16" @click="dialog = true"
                >{{ $t('overview') }}
            </v-btn>
        </div>
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title class="headline">{{
                    $t('overview')
                }}</v-card-title>
                <v-card-text>
                    <p>
                        {{ $t('overviewContent') }}
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            dialog: false,
        };
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Playfair+Display:wght@900&display=swap');

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

.home-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6); /* Optional dark overlay */
}

.overlay-text {
    position: absolute;
    text-align: center;
    color: #f1f1f1; /* Soft white color */
    z-index: 1;
}

.name {
    font-family: 'Playfair Display', serif; /* Stylized serif font */
    font-size: 4em;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7); /* Subtle shadow */
    margin: 0;
    padding: 0;
}

.title {
    font-family: 'Roboto', sans-serif; /* Clean sans-serif font */
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #d4af37; /* Gold color for title */
    text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5); /* Subtle shadow */
    margin-top: 0.5em;
    margin-bottom: 0;
}
.arrow-container {
    margin-top: 2em;
}

.scroll-arrow {
    font-size: 2.5em;
    color: #d4af37; /* Matching gold color */
    text-decoration: none;
    transition: transform 0.3s ease;
}

.scroll-arrow:hover {
    transform: translateY(100px); /* Move down on hover */
}

.overview-section {
    padding: 50px 20px;
    background-color: #ffffff; /* White background for the overview */
    color: #333333; /* Dark text for contrast */
    text-align: center;
}
</style>
