const rtlDocument = ()=>{
    var language = localStorage.getItem('language');
    var htmlEl = document.getElementsByTagName('html')[0];
    if(language === 'en')
        htmlEl.setAttribute('dir', 'ltr');
    else 
        htmlEl.setAttribute('dir', 'rtl');
};
rtlDocument();