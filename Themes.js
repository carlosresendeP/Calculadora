const ButtonTheme = document.querySelectorAll(".button-theme")
const ButtonThemeSelect = document.querySelector(".select")


const theme1 = document.getElementById("theme-1")
const theme2 = document.getElementById("theme-2")

//ler a posição dos botoes
ButtonTheme.forEach((item, index) => {
    //console.log(item);
    //console.log(index + 1) //posição
    let position = (index +1)

    ButtonThemeSelect.addEventListener("click", selectbutton(position))

}) 

//muda a cor do selecionado
function selectbutton(position){
    if (position == 1){
        ButtonThemeSelect.style.border = "2.4px solid var(--corBackspace)"

    }else if (position ==2){
        ButtonThemeSelect.style.border = "2.4px solid var(--corBackspace)"

    }else if (position ==3){
        ButtonThemeSelect.style.border = "2.4px solid var(--corBackspace)"
    }
}
