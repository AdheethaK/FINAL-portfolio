window.addEventListener("DOMContentLoaded",()=>{
    const slider = new _3DRangeSlider("#rs");
});

class _3DRangeSlider{
    constructor(qs) {
        this.el=document.querySelector(qs);
        this.handle = this.el ?.querySelector("[data-handle]");
        this.range=this.el?.querySelector("[data-range]");
        this.value=1;
        this.min=1;
        this.max=15;
        this.step=1;
        this.active=false;
        this.rangeFocusTimeout=null;

        this.init();
    }
    init(){
        if(this.el){
            this.handle?.addEventListener("click",this.expand.bind(this));

            if(this.range){
                this.range.value=this.value;
                this.range.min=this.min;
                this.range.max=this.max;
                this.range.step=this.step;

                this.range.addEventListener("input",this.adjust.bind(this));
                document.addEventListener("click",this.collapse.bind(this));
                document.addEventListener("keydown",this.collapse.bind(this));
            }

            this.updateDisplay();
        }
    }
    expand(){
        this.active=true;
        this.handle.blur();
        this.handle.disabled = this.active;
        this.el.classList.remove("rs__pristine");
        this.el.classList.add("rs__active");

        clearTimeout(this.rangeFocusTimeout);
        this.rangeFocusTimeout = setTimeout(()=>
        this.range.focus(),1);
    }
    collapse(e){
        if(e.key === "Escape"||
            (!e.key && e.target === document.body)){

            this.active=false;
            this.handle.disabled=this.active;
            this.el.classList.remove("rs__active");
        }
    }
    adjust(e){
        this.value=e.target.value;
        this.updateDisplay();
    }
    updateDisplay(){
        if(this.el){
            //CSS variable
            this.el.style.setProperty("--rel-value",this.value - this.min);
            this.el.style.setProperty("--range-units",this.max - this.min);

            //displayed value
            const value =this.el.querySelector("[data-value]");

            if(value){
                value.textContent = this.value;
                console.log(value)
                remove_img();
                if(value.textContent == 1) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_01");
                }
                if(value.textContent == 2) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_02");
                }
                if(value.textContent == 3) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_03");
                }
                if(value.textContent == 4) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_04");
                }
                if(value.textContent == 5) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_05");
                }
                if(value.textContent == 6) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_06");
                }
                if(value.textContent == 7) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_07");
                }
                if(value.textContent == 8) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_08");
                }
                if(value.textContent == 9) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_09");
                }
                if(value.textContent == 10) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_10");
                }
                if(value.textContent == 11) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_11");
                }
                if(value.textContent == 12) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_12");
                }
                if(value.textContent == 13) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_13");
                }
                if(value.textContent == 14) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_14");
                }
                if(value.textContent == 15) {
                    $(".rs__handle").css("background-image","null").addClass("set_background_image_case_15");
                }
            }
        }
    }
}

const remove_img = ()=>{
    $(".rs__handle")
        .removeClass("set_background_image_case_01")
        .removeClass("set_background_image_case_02")
        .removeClass("set_background_image_case_03")
        .removeClass("set_background_image_case_04")
        .removeClass("set_background_image_case_05")
        .removeClass("set_background_image_case_06")
        .removeClass("set_background_image_case_07")
        .removeClass("set_background_image_case_08")
        .removeClass("set_background_image_case_09")
        .removeClass("set_background_image_case_10")
        .removeClass("set_background_image_case_11")
        .removeClass("set_background_image_case_12")
        .removeClass("set_background_image_case_13")
        .removeClass("set_background_image_case_14")
        .removeClass("set_background_image_case_15")
}
