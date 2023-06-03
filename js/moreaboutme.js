var nightMode = true
 $('.mode').on('click', function () {
if (nightMode == true) {
     
        $('.fa-toggle-on').addClass('fa-toggle-off').removeClass('fa-toggle-on')
        $('body').css({
            backgroundColor: '#F7F9FC'
        })
        $('div').css({
            backgroundColor: 'white',
            borderRadius: '30px'
        })
        $('.img1').css({
            backgroundColor: '#6CBFE7',
            borderRadius: '30px'
        })
        $('.container').css({
            backgroundColor: '#F7F9FC'
        })
        $('strong').css({
            color: '#3E5CE3'
        })
        $('.menu').css({
            backgroundColor: '#F7F9FC'
        })
        $('.texts').css({
            backgroundColor: '#F7F9FC'
        })
        $('header').css({
            backgroundColor: '#F7F9FC'
        })
        $('footer').css({
            backgroundColor: '#F7F9FC'
        })
        $('.miniCon').css({
            backgroundColor: '#F7F9FC'
        })
        $('p').css({
            color: '#676767'
        })
        $('a').css({
            color: '#676767'
        })
        $('.btn').css({
            color: 'white'
        })
        $('.contactbtn').css({
            color: 'white'
        })
       
        $("a").hover(function () {
            $(this).css({
                color: "#3E5CE3"
            })
        });
        $("a").mouseleave(function () {
            $(this).css({
                color: "#676767"
            })
            $('.active').css({
                color: '#3E5CE3'
            })
        })

        $('.left').css({
            backgroundColor: '#F7F9FC'
        })
       
        $('.right').css({
            backgroundColor: '#F7F9FC'
        })
        $('.text0').css({
            backgroundColor: '#F7F9FC'
        })
        $('.text1').css({
            backgroundColor: '#F7F9FC'
        })
        $('.skills').css({
            backgroundColor: '#F7F9FC'
        })
        $('.skill').css({
            backgroundColor: '#F7F9FC'
        })
        $('.myProgress').css({
            backgroundColor: '#F7F9FC',
            borderColor:'#3E5CE3'
        })
        $('.lefts').css({
            backgroundColor: '#F7F9FC'
        })
        $('.rights').css({
            backgroundColor: '#F7F9FC'
        })
        $('#myBar1').css({
            backgroundColor: '#3E5CE3',
            color:'white'
        })
        $('#myBar2').css({
            backgroundColor: '#3E5CE3',
            color:'white'
        })
        $('#myBar3').css({
            backgroundColor: '#3E5CE3',
            color:'white'
        })
        $('#myBar4').css({
            backgroundColor: '#3E5CE3',
            color:'white'
        })
        $('.text').css({
            backgroundColor: 'white'
        })
        $('.social').css({
            backgroundColor: '#F7F9FC'
        })
       
        $('h1').css({
            color: 'black'
        })
        $('h3').css({
            color: '#3E5CE3'
        })
        $('h2').css({
            color: 'black'
        })
        $('h4').css({
            color: 'black'
        })
        $('.bottomsp').css({
            color: 'black'
        })
         $('.social').css({
            backgroundColor: 'white'
        })
        $('.h31').css({
            color: '#565555'
        })
        $('.fa-brands').css({
            backgroundColor: '#3E5CE3'
        })
        $(".fa-brands").hover(function () {
            $(this).css({
                backgroundColor: '#2f1284',
                color: 'white'
            })
        });
        $(".fa-brands").mouseleave(function () {
            $(this).css({
                backgroundColor: '#3E5CE3'
            })
        })
        $(".btn").hover(function () {
            $(this).css({
                backgroundColor: '#3E5CE3',
                color: 'white'
            })
        });
        $(".btn").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232'
            })
        });
        $(".contactbtn").hover(function () {
            $(this).css({
                backgroundColor: '#3E5CE3',
                color: 'white'
            })
        });
        $(".contactbtn").mouseleave(function () {
            $(this).css({
                backgroundColor: '#323232'
            })
        });
        $('.river').css({
            color: '#3E5CE3'
        })
        $('.images1').removeAttr('src')
        $('.images1').attr('src','./images/logo-dark.svg')

        $('.decor').removeAttr('src')
        $('.decor').attr('src','./images/icon3.png')


        nightMode = false
    }
    else {
       
                $('.fa-toggle-off').addClass('fa-toggle-on').removeClass('fa-toggle-off')
                $('body').css({
                    backgroundColor: '#0F0F0F'
                })
                $('div').css({
                    backgroundColor: '',
                    borderRadius: '30px'
                })
              
                $('.container').css({
                    backgroundColor: '#0F0F0F'
                })
                $('strong').css({
                    color: '#FFFFFF'
                })
                $('.menu').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.texts').css({
                    backgroundColor: '#0F0F0F'
                })
                $('header').css({
                    backgroundColor: '#0F0F0F'
                })
                $('footer').css({
                    backgroundColor: '#0F0F0F'
                })
                $('.miniCon').css({
                    backgroundColor: '#0F0F0F'
                })
                
                 $('.info').css({
            color: 'white'
        })
                
                
                $('.icon').css({
                    color: 'white'
                })
              

                $("a").hover(function () {
                    $(this).css({
                        color: "white"
                    })
                });
                $("a").mouseleave(function () {
                    $(this).css({
                        color: "#8B8B8B"
                    })
                     $('.active').css({
                    color: '#FFFFFF'
                })
                })
        
                 
        
                $('h1').css({
                    color: 'white'
                })
                $('h3').css({
                    color: '#3E5CE3'
                })
                $('h4').css({
                    color: 'white'
                })
                $('h2').css({
                    color: 'white'
                })
                $('.bottomsp').css({
                    color: 'white'
                })
                $('.h31').css({
                    color: '#565555'
                })
               
                $('.myProgress').css({
                    backgroundColor: '#0F0F0F',
                    borderColor:'white'
                })
                $('#myBar1').css({
                    backgroundColor: 'white',
                    color:'black'
                })
                $('#myBar2').css({
                    backgroundColor: 'white',
                    color:'black'
                })
                $('#myBar3').css({
                    backgroundColor: 'white',
                    color:'black'
                })
                $('#myBar4').css({
                    backgroundColor: 'white',
                    color:'black'
                })
                $('.fa-brands').css({
                    backgroundColor: '#181818',
                    color:'white'
                })
                $(".fa-brands").hover(function () {
                    $(this).css({
                        backgroundColor: 'white',
                        color:'#181818' 
                    })
                });
                $(".fa-brands").mouseleave(function () {
                    $(this).css({
                        backgroundColor: '#181818',
                        color:'white'
                    })
                })
                $(".btn").hover(function () {
                    $(this).css({
                        backgroundColor: 'white',
                        color: '#181818'
                    })
                });
                $(".btn").mouseleave(function () {
                    $(this).css({
                        backgroundColor: '#323232',
                        color:'white'
                    })
                });
                $(".contactbtn").hover(function () {
                    $(this).css({
                        backgroundColor: 'white',
                        color: '#181818'
                    })
                });
                $(".contactbtn").mouseleave(function () {
                    $(this).css({
                        backgroundColor: '#323232',
                        color:'white'
                    })
                });
                $('.images1').removeAttr('src')
        $('.images1').attr('src','./images/logo.svg')

        $('.decor').removeAttr('src')
        $('.decor').attr('src','./images/icon2.png')


                nightMode = true
        
        }
})

