function favorite(){
    document.getElementById('apply').classList.remove('active') 
    document.getElementById('favorite').classList.add('active')
    document.getElementById("favDivs").style.display= 'block'
    document.getElementById("applyDiv").style.display= 'none'
    
}
function apply(){
    document.getElementById('favorite').classList.remove('active') 
    document.getElementById('apply').classList.add('active')
    document.getElementById("favDivs").style.display= 'none'
    document.getElementById("applyDiv").style.display= 'block'
}
function expand(){
    // document.getElementById('job').style.height = 'auto'
    document.getElementById('job').classList.toggle('expandtrue')

}