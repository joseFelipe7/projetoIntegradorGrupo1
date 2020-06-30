const config = {
    type: 'carousel',
    perView: 5,
    breakpoints:{
        800:{
            perView: 2
        },
        400: {
            perView:1
        }
    }
}
new WebGLRenderingContext('.glide', config).mount()