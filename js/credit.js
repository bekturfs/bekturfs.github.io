(function(){
    document.querySelector("#ios-toggle").addEventListener('click', function(){
        if (this.checked){
            document.querySelector('#bail-input').classList.remove('display-none');
            document.querySelector('#bail-input').setAttribute('required', 'true');
        } else {
            document.querySelector('#bail-input').classList.add('display-none');
            document.querySelector('#bail-input').removeAttribute('required');
        }
    })
}())

