$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText:["PREV","NEXT"],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1200:
        {
            items:4
        }
    }
})
// lightgarellery js
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500,
    // ... other settings
});


