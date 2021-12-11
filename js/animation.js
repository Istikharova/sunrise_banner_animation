
// tl
const logo = gsap.timeline()
const untergang = gsap.timeline()
const uebergang = gsap.timeline()
const wesunrise = gsap.timeline()
const boxs = gsap.timeline()
const text = gsap.timeline()



untergang.to('.container',{
    backgroundColor: '#e6003c', 
    duration: 1
})
.to('.container',{
    backgroundColor:'#aa1937',
    duration:3
})


//sunrise logo
wesunrise.to('.balken',{
    duration:2,
    y:-400,

})
//we sunrise button
.fromTo(".we",{
    display:'none',
    opacity:0,},{
    
    opacity:1,
    display:'block',
    duration:1,
    ease:"back",
    
    
})
.to('.we',{
    scale: 1.2, 
    yoyo:true,
    ease: 'linear',
    duration:1,
    repeat:-1
},'-=');


// click animation für we sunrise 
document.querySelector('.we').addEventListener('click', ()=>{
    
    
    gsap.set('.we',{
        duration:0.1,
        delay:0.2,
        display:'none'
        })
        
    //sonnenuntergang section verschwinden
    uebergang.to('.sonnenuntergang',{
        display:'none',
        duration:2,
        backgroundColor:'#eeeeee'
    }, 0)
    .to('.container',{
        backgroundColor: '#eeeeee', 
        duration:2
    }, 0)
    
    //sunrise logo
    logo.to('.balken',{
        height: 'auto',
        top:'90%',
        ease:'slow',
        backgroundColor:'#eeeeee',
        duration:1,
    }).to('.logo',{
        duration:4,
        delay:1,
        y:-800, 
        
    },'+=')
    
    

    //we sunrise box
    boxs.set('#boxes',{
        display:'block',
    })
    .to('#boxes',{
        display:'block',
        duration:2,
    })
    .fromTo('.boxs',{
        y:-600,
        opacity: 0
    },{
        y:200,
        opacity:1,
        duration:1.5,
        delay:1,
        ease:"back",
        stagger: {
            amount: 1,
            from: 'start',
            },
    //für we sunrise box hover effekt
    onComplete: function(){
            //hover effeckt für mobile box
        document.querySelector('.mobile').addEventListener('mouseenter', () => {
                
            text.set('.mobile', {
                scale: 1.2
                
                })
            .to('.titel_m', {
                display:'block',
                text:"We Mobile Abos M, L oder XL",
                duration: 0.5, 
                ease: 'linear',
                
                })
            .to('.text_m', {
                display:'block',
                text:"Bis zu 35% Rabatt für 2 Jahre",
                duration: 0.5, 
                ease: 'linear'     
                })
            .set('.angebot',{
                display:'block'
                });
            });
        document.querySelector('.mobile').addEventListener('mouseleave', () =>{
            text.to('.mobile', {
                scale: 1
                })
            .to('.titel_m', {
                display:'none'
                })
            .to('.text_m', {
                display:'none'   
                })
            })
            //hover effekt für internet
        document.querySelector('.internet').addEventListener('mouseenter', () => {
                
            text.set('.internet', {
                scale: 1.2
                })
            .to('.titel_i', {
                display:'block',
                text:"High-Speed-Internet",
                duration: 0.5, 
                ease: 'linear'
                })
            .to('.text_i', {
                display:'block',
                text:"Ab CHF 40.-/Monat",
                duration: 0.5, 
                ease: 'linear'     
                })
            .set('.angebot',{
                display:'block'
                })
            });
        document.querySelector('.internet').addEventListener('mouseleave', () =>{
            text.to('.internet', {
                scale: 1
                })
            .to('.titel_i', {
                display:'none'
                
                })
            .to('.text_i', {
                display:'none' 
                })
                
            })
            //hover effekt für tv
        document.querySelector('.tv').addEventListener('mouseover', () => {
                
            text.set('.tv', {
                scale: 1.2
                })
            .to('.titel_tv', {
                display:'block',
                text:"High-speed-Internet + TV",
                duration: 0.5, 
                ease: 'linear'
                })
            .to('.text_tv', {
                display:'block',
                text:"Für nur CHF 59.-/Monat",
                duration: 0.5, 
                ease: 'linear'     
                })
            .set('.angebot',{
                display:'block'
                })
            });
        document.querySelector('.tv').addEventListener('mouseleave', () =>{
            text.to('.tv', {
                scale: 1
                })
            .to('.titel_tv', {
                display:'none'
                })
            .to('.text_tv', {
                display:'none'   
                })
                
            })
            //zum angegob hover effekt
        document.querySelector('.angebot').addEventListener('mouseover', () =>{
            gsap.to('.angebot', {
                scale: 1.4
                })
            })
        document.querySelector('.angebot').addEventListener('mouseleave', () =>{
            gsap.to('.angebot', {
                scale: 1
                })
            })

        }
    
    })
.to('.box a',{
    rotationY:20,
    yoyo:true,
    repeat:-1,
    })


})









