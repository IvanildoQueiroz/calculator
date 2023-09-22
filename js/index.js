function createCaulculator(){
    
    return {
        display: document.querySelector('.display'),
        start(){
            this.clickBottons();
           
        },
        clickBottons(){
            document.addEventListener('click',e=>{
            const el = e.target;
            if(el.classList.contains('btn-number')){
                this.writeDisplay(el.innerText)
            }
            if(el.classList.contains('btn-clear')){
                this.display.value = "";
            };
            if(el.classList.contains('btn-result')){
                this.showResult()
            };
            if(el.classList.contains('btn-del')){
                this.clearDigit()
            }
          }); 
         
        },
        writeDisplay(valor){
            this.display.value += valor;
        },
       
        clearDigit(){
            this.display.value =this.display.value.slice(0,-1);
        },
        showResult(){
            let result = this.display.value;
            try{
               result = eval(result)
               if(!result){
                alert("calculo invalido")
                return
               }
               this.display.value = String(result)
            }catch(e){
                alert("conta invalida");
               
            }
            if(this.display.value === "")return ""
        }

    }
}
const calculator = createCaulculator()
calculator.start()