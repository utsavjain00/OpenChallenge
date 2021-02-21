import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:'[cardHighlighter]'
})
export class cardHighlighterDirective implements OnInit{

    /* Custom Directive for styling card on hovering.
    Hostbindng for accessing backgroundColor*/ 
    @HostBinding('style.backgroundColor') backgroundColor:string;

    constructor()
    {

    }
    ngOnInit()
    {

    }
    //On entering into card, card color will change into 'Mediumorchid'  
    @HostListener('mouseenter') mouseover(eventData:Event){
        
        this.backgroundColor='mediumorchid';
    }
    //On Leaving card , card color will change 'into White' 
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor='white';
    }
}