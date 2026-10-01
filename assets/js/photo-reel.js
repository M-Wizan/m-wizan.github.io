const photos = [

    {
        src: "/assets/images/photos/Reina_pepiada.jpg",
        title: "👨‍🍳 Cooking",
        description: "Reina pepiada: a Venezuelan arepa dish."
    },

    {
        src: "/assets/images/photos/another_latte_art_attempt.jpg",
        title: "☕ Home-barista things",
        description: "Another attempt at latte art."
    },

    {
        src: "/assets/images/photos/bass_smoke.jpg",
        title: "🎵 Music",
        description: "Look at all that smoke."
    },

    {
        src: "/assets/images/photos/birthday_cake.jpg",
        title: "🍰 Baking",
        description: "A homemade birthday cake."
    },

    {
        src: "/assets/images/photos/brownies.jpg",
        title: "🍰 Baking",
        description: " Brownies with seasalt."
    },

    {
        src: "/assets/images/photos/carrot_cake.jpg",
        title: "🍰 Baking",
        description: "Carrot cake is the best."
    },

    {
        src: "/assets/images/photos/chili_con_carne.jpg",
        title: "👨‍🍳 Cooking",
        description: "Chili con carne."
    },

    {
        src: "/assets/images/photos/chinese_milk_skin_yoghurt.jpg",
        title: "🍰 Baking...? Not sure if it counts",
        description: "Chinese milk skin yoghurt made in an instant pot."
    },

    {
        src: "/assets/images/photos/church_trombone.jpg",
        title: "🎵 Music",
        description: "Giving a performance inside a church in Utrecht."
    },

    {
        src: "/assets/images/photos/cinnamon_rolls.jpg",
        title: "🍰 Baking",
        description: "Homemade cinnamon rolls."
    },

    {
        src: "/assets/images/photos/cookies_milk.jpg",
        title: "🍰 Baking",
        description: "Cookies and milk!"
    },

    {
        src: "/assets/images/photos/custom_keyboard.jpg",
        title: "🎲 Random",
        description: "The first time I built a custom mechanical keyboard."
    },

    {
        src: "/assets/images/photos/decorating_cake.jpg",
        title: "🍰 Baking",
        description: "Baking and decorating a cake!"
    },

    {
        src: "/assets/images/photos/ecuadorian_ceviche.jpg",
        title: "👨‍🍳 Cooking",
        description: "Ecuadorian ceviche."
    },

    {
        src: "/assets/images/photos/encebollado.jpg",
        title: "👨‍🍳 Cooking",
        description: "Encebollado: Ecuadorian soup with tuna."
    },

    {
        src: "/assets/images/photos/epok_epok_pusar.jpg",
        title: "👨‍🍳 Cooking",
        description: "Epok-epok pusar: Malay curry puffs with flaky pastry."
    },

    {
        src: "/assets/images/photos/gig_bird.jpg",
        title: "🎵 Music",
        description: "Very interesting gig I had with friends."
    },

    {
        src: "/assets/images/photos/gochujang_steak_noodles.jpg",
        title: "👨‍🍳 Cooking",
        description: "Noodles with Gochujang steak."
    },

    {
        src: "/assets/images/photos/heart_coffee.jpg",
        title: "☕ Home-barista things",
        description: "An attempt at making a heart."
    },

    {
        src: "/assets/images/photos/jazz_band_trombones.jpg",
        title: "🎵 Music",
        description: "The jazz band trombone section!"
    },

    {
        src: "/assets/images/photos/jazz_trombone.JPG",
        title: "🎵 Music",
        description: "The first and last time I ever wore suspenders."
    },

    {
        src: "/assets/images/photos/mee_soto.jpg",
        title: "👨‍🍳 Cooking",
        description: "Mee soto: the Malay/Indonesian chicken soup that heals your soul."
    },

    {
        src: "/assets/images/photos/pan_de_yuca.jpg",
        title: "🍰 Baking",
        description: "Pan de yuca: very addictive bread made from cheese and tapioca flour."
    },

    {
        src: "/assets/images/photos/pasta_alla_norma.jpg",
        title: "👨‍🍳 Cooking",
        description: "Pasta alla norma: needs more burrata."
    },

    {
        src: "/assets/images/photos/red_velvet_cake.jpg",
        title: "🍰 Baking",
        description: "Red velvet cakes are a classic."
    },

    {
        src: "/assets/images/photos/ropa_vieja.jpg",
        title: "👨‍🍳 Cooking",
        description: "Ropa vieja: a classic Cuban dish."
    },

    {
        src: "/assets/images/photos/rvrc.jpg",
        title: "🎵 Music",
        description: "Fun times at RVRC."
    },

    {
        src: "/assets/images/photos/rvrc2.jpg",
        title: "🎵 Music",
        description: "More fun times at RVRC."
    },

    {
        src: "/assets/images/photos/strawberry_cake.jpg",
        title: "🍰 Baking",
        description: "Strawberry shortcake: but the Asian way (i.e., less sweet)."
    },

    {
        src: "/assets/images/photos/thai_duck_pineapple_curry.jpg",
        title: "👨‍🍳 Cooking",
        description: "Thai duck pineapple curry."
    },

    {
        src: "/assets/images/photos/utrecht.jpg",
        title: "🎵 Music",
        description: "Interesting caption from the Utrecht brass competition for wind orchestras."
    },

    {
        src: "/assets/images/photos/wind_symph.jpg",
        title: "🎵 Music",
        description: "World Music Contest, Kerkrade."
    },

    {
        src: "/assets/images/photos/windsymph_trombones.jpg",
        title: "🎵 Music",
        description: "World Music Contest, Kerkrade. Go trombones!"
    },

    {
        src: "/assets/images/photos/yoghurt_cake.jpg",
        title: "🍰 Baking",
        description: "Yoghurt cake."
    }

];


let currentPhoto = 0;


function loadPhoto(i){

    currentPhoto = i;

    document.getElementById("photo-display").src =
        photos[i].src;

    document.getElementById("photo-title").textContent =
        photos[i].title;

    document.getElementById("photo-description").textContent =
        photos[i].description;
}


function nextPhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }

    loadPhoto(currentPhoto);
}


function previousPhoto(){

    currentPhoto--;

    if(currentPhoto < 0){
        currentPhoto = photos.length - 1;
    }

    loadPhoto(currentPhoto);
}


function randomPhoto(){

    let r;

    do {
        r = Math.floor(Math.random() * photos.length);
    }
    while(r === currentPhoto && photos.length > 1);

    loadPhoto(r);
}


window.addEventListener("load", function(){
    loadPhoto(0);
});
