const photos = [

    {
        src: "/images/photos/Reina_pepiada.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Reina pepiada: a Venezuelan arepa dish."
    },

    {
        src: "/images/photos/another_latte_art_attempt.jpg",
        category: "food",
        title: "☕ Home-barista things",
        description: "Another attempt at latte art."
    },

    {
        src: "/images/photos/bass_smoke.jpg",
        category: "music",
        title: "🎵 Music",
        description: "Look at all that smoke."
    },

    {
        src: "/images/photos/birthday_cake.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "A homemade birthday cake."
    },

    {
        src: "/images/photos/brownies.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Brownies with seasalt."
    },

    {
        src: "/images/photos/carrot_cake.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Carrot cake is the best."
    },

    {
        src: "/images/photos/chili_con_carne.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Chili con carne."
    },

    {
        src: "/images/photos/chinese_milk_skin_yoghurt.jpg",
        category: "food",
        title: "🍰 Baking...? Not sure if it counts",
        description: "Chinese milk skin yoghurt made in an instant pot."
    },

    {
        src: "/images/photos/church_trombone.jpg",
        category: "music",
        title: "🎵 Music",
        description: "Giving a performance inside a church in Utrecht."
    },

    {
        src: "/images/photos/cinnamon_rolls.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Homemade cinnamon rolls."
    },

    {
        src: "/images/photos/cookies_milk.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Cookies and milk!"
    },

    {
        src: "/images/photos/custom_keyboard.jpg",
        category: "other",
        title: "🛠 Miscellaneous",
        description: "The first time I built a custom mechanical keyboard."
    },

    {
        src: "/images/photos/decorating_cake.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Baking and decorating a cake!"
    },

    {
        src: "/images/photos/ecuadorian_ceviche.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Ecuadorian ceviche."
    },

    {
        src: "/images/photos/encebollado.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Encebollado: Ecuadorian soup with tuna."
    },

    {
        src: "/images/photos/epok_epok_pusar.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Epok-epok pusar: Malay curry puffs with flaky pastry."
    },

    {
        src: "/images/photos/gig_bird.jpg",
        category: "music",
        title: "🎵 Music",
        description: "Very interesting gig I had with friends."
    },

    {
        src: "/images/photos/gochujang_steak_noodles.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Noodles with Gochujang steak."
    },

    {
        src: "/images/photos/heart_coffee.jpg",
        category: "food",
        title: "☕ Home-barista things",
        description: "An attempt at making a heart."
    },

    {
        src: "/images/photos/jazz_band_trombones.jpg",
        category: "music",
        title: "🎵 Music",
        description: "The jazz band trombone section!"
    },

    {
        src: "/images/photos/jazz_trombone.JPG",
        category: "music",
        title: "🎵 Music",
        description: "The first and last time I ever wore suspenders."
    },

    {
        src: "/images/photos/mee_soto.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Mee soto: the Malay/Indonesian chicken soup that heals your soul."
    },

    {
        src: "/images/photos/pan_de_yuca.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Pan de yuca: very addictive bread made from cheese and tapioca flour."
    },

    {
        src: "/images/photos/pasta_alla_norma.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Pasta alla norma: needs more burrata."
    },

    {
        src: "/images/photos/red_velvet_cake.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Red velvet cakes are a classic."
    },

    {
        src: "/images/photos/ropa_vieja.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Ropa vieja: a classic Cuban dish."
    },

    {
        src: "/images/photos/rvrc.jpg",
        category: "music",
        title: "🎵 Music",
        description: "Fun times at RVRC."
    },

    {
        src: "/images/photos/rvrc2.jpg",
        category: "music",
        title: "🎵 Music",
        description: "More fun times at RVRC."
    },

    {
        src: "/images/photos/strawberry_cake.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Strawberry shortcake: but the Asian way (i.e., less sweet)."
    },

    {
        src: "/images/photos/thai_duck_pineapple_curry.jpg",
        category: "food",
        title: "👨‍🍳 Cooking",
        description: "Thai duck pineapple curry."
    },

    {
        src: "/images/photos/wind_symph.jpg",
        category: "music",
        title: "🎵 Music",
        description: "World Music Contest, Kerkrade."
    },

    {
        src: "/images/photos/windsymph_trombones.jpg",
        category: "music",
        title: "🎵 Music",
        description: "World Music Contest, Kerkrade. Go trombones!"
    },

    {
        src: "/images/photos/yoghurt_cake.jpg",
        category: "food",
        title: "🍰 Baking",
        description: "Yoghurt cake."
    }

];

let currentPhoto = 0;
let activePhotos = photos;


function loadPhoto(i){

    currentPhoto = i;

    document.getElementById("photo-display").src =
        activePhotos[i].src;

    document.getElementById("photo-title").textContent =
        activePhotos[i].title;

    document.getElementById("photo-description").textContent =
        activePhotos[i].description;
}


function nextPhoto(){

    currentPhoto++;

    if(currentPhoto >= activePhotos.length){
        currentPhoto = 0;
    }

    loadPhoto(currentPhoto);
}


function previousPhoto(){

    currentPhoto--;

    if(currentPhoto < 0){
        currentPhoto = activePhotos.length - 1;
    }

    loadPhoto(currentPhoto);
}


function randomPhoto(){

    let r;

    do {
        r = Math.floor(Math.random() * activePhotos.length);
    }
    while(r === currentPhoto && activePhotos.length > 1);

    loadPhoto(r);
}


function showCategory(category){

    activePhotos = photos.filter(
        photo => photo.category === category
    );

    currentPhoto = 0;

    loadPhoto(currentPhoto);
}


function showAll(){

    activePhotos = photos;

    currentPhoto = 0;

    loadPhoto(currentPhoto);
}


window.addEventListener("load", function(){
    loadPhoto(0);
});
