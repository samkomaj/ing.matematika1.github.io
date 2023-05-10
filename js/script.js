let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





// Define global DOM handler to format 'latex' into an HTML span
MathBox.DOM.Types.latex = MathBox.DOM.createClass({
    render: function (el) {
        this.props.innerHTML = katex.renderToString(this.children);
        return el('span', this.props);
    }
});

var mathbox;
var totalSlides = 3;
var currentSlide = 1;
show_slide(currentSlide)
document.getElementById('slide-number').innerHTML = currentSlide + '/' + totalSlides;

// Also navigate through slides with blue arrows in our webpage
$('#next').on('click', function () {
    var slide = currentSlide;
    if (slide < totalSlides) {
        $('.step-' + slide).removeClass('active');
        $('.step-' + slide).children('.extra').removeClass('active');
        $('#disqus_thread').removeClass('active');
        slide += 1;
        $('.step-' + slide).addClass('active');
        $('.step-' + slide).children('.extra').addClass('active');
        currentSlide = slide;
        show_slide(currentSlide)
        document.getElementById('slide-number').innerHTML = currentSlide + '/' + totalSlides;
    }
    if (slide === totalSlides) {
        $('#disqus_thread').addClass('active');
    }
});
$('#previous').on('click', function () {
    var slide = currentSlide;
    if (slide > 1) {
        $('.step-' + slide).removeClass('active');
        $('.step-' + slide).children('.extra').removeClass('active');
        $('#disqus_thread').removeClass('active');
        slide -= 1;
        $('.step-' + slide).addClass('active');
        $('.step-' + slide).children('.extra').addClass('active');
        currentSlide = slide;
        show_slide(slide)
        document.getElementById('slide-number').innerHTML = currentSlide + '/' + totalSlides;
    }
    if (slide === totalSlides) {
        $('#disqus_thread').addClass('active');
    }
});

function show_slide(slide) {
    clean();
    switch (slide) {
        case 1: 
            var mt = build_simple_graph(-1, 5, -1, 5);
        break;

        case 2:
            mathbox_config = {
                element: document.getElementById('visualization'),
                plugins: ['core', 'controls', 'cursor'],
                controls: {
                    klass: THREE.OrbitControls, 
                },
                size: {
                    height: (window.innerWidth <= 960) ? 500 : 600
                },
                camera: {
                    fov: 60 // Field-of-view (degrees)
                }
            };

            view_config = {range: [[-1, 5], [-1, 5]], scale: [1.5, 1.5], position: [0, 0]};

            var view = build_now(mathbox_config, view_config);

            var xAxis = view.axis( {axis: 1, width: 6, detail: 40, color: colors.x,} );
            var xScale = view.scale( {axis: 1, divide: 5, nice:true, zero:true} );
            var xTicks = view.ticks( {width: 5, size: 15, color: "black", zBias:2} );
            var xFormat = view.format( {digits: 2, font:"Arial", weight: "bold", style: "normal", source: xScale} );
            var xTicksLabel = view.label( {color: "black", zIndex: 1, points: xScale, text: xFormat} );
    
            var yAxis = view.axis( {axis: 2, width: 6, detail: 40, color: colors.y} );
            var yScale = view.scale( {axis: 2, divide: 5, nice:true, zero:false} );
            var yTicks = view.ticks( {width: 5, size: 15, color: "black", zBias:2} );
            var yFormat = view.format( {digits: 2, font:"Arial", weight: "bold", style: "normal", source: yScale} );
            var yTicksLabel = view.label( {color: "black", zIndex: 1, points: yScale, text: yFormat} ); 

            view.array({
                id: "colors",
                live: false,
                data: [colors.x, colors.y].map(function (color) {
                    return [color.r, color.g, color.b, 1];
                }),
            });

            var grid = view.grid( {width: 5, divideX: 15, divideY: 10, opacity:0.7, color: 0xb0b0b0});

            view.array({ data: [[5.3, 0.2, 0], [0, 5.5, 0],],
                channels: 3, // necessary
                live: false,

            }).text({ data: ["Ox", "Oy"], weight: "bold", })
              .label({ color: 0xFFFFFF, colors: "#colors", zIndex: 1, });

            view.array({ data: [[0, 0, 0], [2, 2, 0],], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[2, 2, 0], [4, 2, 0],], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[3.5, 2.5, 0],], channels: 3, live: false,})
                .text({ data: ["f(x)"], weight: "bold",  })
                .label({ color: '#3090FF', zIndex: 1, });

        break;
        case 3:
            mathbox_config = {
                element: document.getElementById('visualization'),
                plugins: ['core', 'controls', 'cursor'],
                controls: {
                    klass: THREE.OrbitControls, 
                },
                size: {
                    height: (window.innerWidth <= 960) ? 500 : 600
                },
                camera: {
                    fov: 60 // Field-of-view (degrees)
                }
            };

            view_config = {range: [[-1, 5], [-1, 5]], scale: [1.5, 1.5], position: [0, 0]};

            var view = build_now(mathbox_config, view_config);

            var xAxis = view.axis( {axis: 1, width: 6, detail: 40, color: colors.x,} );
            var xScale = view.scale( {axis: 1, divide: 5, nice:true, zero:true} );
            var xTicks = view.ticks( {width: 5, size: 15, color: "black", zBias:2} );
            var xFormat = view.format( {digits: 2, font:"Arial", weight: "bold", style: "normal", source: xScale} );
            var xTicksLabel = view.label( {color: "black", zIndex: 1, points: xScale, text: xFormat} );
    
            var yAxis = view.axis( {axis: 2, width: 6, detail: 40, color: colors.y} );
            var yScale = view.scale( {axis: 2, divide: 5, nice:true, zero:false} );
            var yTicks = view.ticks( {width: 5, size: 15, color: "black", zBias:2} );
            var yFormat = view.format( {digits: 2, font:"Arial", weight: "bold", style: "normal", source: yScale} );
            var yTicksLabel = view.label( {color: "black", zIndex: 1, points: yScale, text: yFormat} ); 

            view.array({
                id: "colors",
                live: false,
                data: [colors.x, colors.y].map(function (color) {
                    return [color.r, color.g, color.b, 1];
                }),
            });

            var grid = view.grid( {width: 5, divideX: 15, divideY: 10, opacity:0.7, color: 0xb0b0b0});

            view.array({ data: [[5.3, 0.2, 0], [0, 5.5, 0],],
                channels: 3, // necessary
                live: false,

            }).text({ data: ["Ox", "Oy"], weight: "bold", })
              .label({ color: 0xFFFFFF, colors: "#colors", zIndex: 1, });

            view.array({ data: [[0, 0, 0], [2, 2, 0],], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[2, 2, 0], [2, 0, 0],], channels: 3, live: false,})
                .line({ width: 3, color: 'red' });

            view.array({ data: [[2, 2, 0], [4, 2, 0],], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[4, 2, 0], [4, 0, 0],], channels: 3, live: false,})
                .line({ width: 3, color: 'red' });

            view.array({ data: [[1.5, 1.3, 0], [3, 1.3, 0],], channels: 3, live: false,})
                .text({ data: ["S1","S2"], weight: "bold",  })
                .label({ color: 'red', zIndex: 1, });

            view.array({ data: [[3.5, 2.5, 0],], channels: 3, live: false,})
                .text({ data: ["f(x)"], weight: "bold",  })
                .label({ color: '#3090FF',  zIndex: 1, });



            view.array({ data: [[1, 0, 0],[0.5, 0.5, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[1.5 , 0, 0],[0.75, 0.75, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });  

            view.array({ data: [[2 , 0, 0],[1, 1, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[2.5 , 0, 0],[1.25, 1.25, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[3 , 0, 0],[1.5, 1.5, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[3.5 , 0, 0],[1.75, 1.75, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[4 , 0, 0],[2, 2, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[4 , 0.5, 0],[2.5, 2, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[4 , 1, 0],[3, 2, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });

            view.array({ data: [[4 , 1.5, 0],[3.5, 2, 0]], channels: 3, live: false,})
                .line({ width: 7, color: '#3090FF' });
              
            
        break;

        default:
    }
}


/*
 *
 * ==========================================================================
 * ==========================================================================
 * ==========================================================================
 * =============================UTILITY FUNCTIONS============================
 * ==========================================================================
 * ==========================================================================
 * ==========================================================================
 *
 * */

function clean() {
    if (mathbox != undefined) {
        mathbox.select('cartesian > *').remove()
    }
    var canvas = $('canvas:nth-of-type(1)');
    if (canvas != undefined) {
        canvas.remove();
    }

    var overlays = $('.mathbox-overlays')[0];
    if (overlays != undefined) {
        overlays.remove();
    }

    var loader = $('.mathbox-loader').first();
    if (loader != undefined && loader.parent() != undefined) {
        loader.parent().remove();
    }
}

function build_simple_graph(x_start, x_end, y_start, y_end) {
    mathbox = mathBox({
        element: document.getElementById('visualization'),
        plugins: ['core', 'controls', 'cursor'],
        controls: {
            klass: THREE.OrbitControls, // NOTE: using keyboard arrows for slides moves camera too
        },
        size: {
            height: (window.innerWidth <= 960) ? 500 : 600
        },
        camera: {
            fov: 60, // Field-of-view (degrees)
        }
    });


    var three = mathbox.three;
    three.camera.position.set(0, 0, 3);
    three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);

    //Axis colors
    colors = {
        x: new THREE.Color('black'),
        y: new THREE.Color('black')

    };

    // 2D cartesian
    var view = mathbox.cartesian({
        range: [
            [x_start, x_end],
            [y_start, y_end],
        ],
        scale: [1.5, 1.5],
        position: [0, 0],
    })
    // Axes + grid
    var xAxis = view.axis( {axis: 1, width: 6, detail: 40, color: colors.x,} );
    var xScale = view.scale( {axis: 1, divide: 5, nice:true, zero:true} );
    var xTicks = view.ticks( {width: 5, size: 15, color: "black", zBias:2} );
    var xFormat = view.format( {digits: 2, font:"Arial", weight: "bold", style: "normal", source: xScale} );
    var xTicksLabel = view.label( {color: "black", zIndex: 1, offset:[0,-20], points: xScale, text: xFormat} );
    
    var yAxis = view.axis( {axis: 2, width: 6, detail: 40, color: colors.y} );
    var yScale = view.scale( {axis: 2, divide: 5, nice:true, zero:false} );
    var yTicks = view.ticks( {width: 5, size: 15, color: "black", zBias:2} );
    var yFormat = view.format( {digits: 2, font:"Arial", weight: "bold", style: "normal", source: yScale} );
    var yTicksLabel = view.label( {color: "black", zIndex: 1, offset:[0,0], points: yScale, text: yFormat} );

    mathbox.select('axis')
        .set('end', true)
        .set('width', 5)

    view.array({
        id: "colors",
        live: false,
        data: [colors.x, colors.y].map(function (color) {
            return [color.r, color.g, color.b, 1];
        }),
    });

    view.grid({
        axes: [1, 2],
        width: 5,
        color: 0xb0b0b0,
        divideX: 10, 
        divideY: 10, 
        opacity: 0.7
    })

    view.array({
        data: [
            [5, 0.7 ,0], 
            [0.5, 5, 0],
        ],
        channels: 3, 
        live: false,

    }).text({
        data: ["Ox", "Oy"],
        weight: "bold",
        
    }).label({
        color: 0xFFFFFF,
        colors: "#colors",
        
        zIndex: 1,
    });


    return mathbox;
}

function build_now(mathbox_config, view_config) {
    mathbox = mathBox(mathbox_config);
    var three = mathbox.three;
    three.camera.position.set(0, 0, 3);
    three.renderer.setClearColor(new THREE.Color(0xFFFFFF), 1.0);
    var view = mathbox.cartesian(view_config);
    mathbox.select('axis').set('end', true).set('width', 5);
    return view;
}



