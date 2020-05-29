/* local modules */
function info(text){
    console.log("INFO:", text);
    return text;
}
function error(text){
    console.log("ERROR:", text);
    return text;
}

module.exports = {info, error};

/* parciales modules */
module.exports.info = function info(text){
    console.log("INFO:", text);
    return text;
}
module.exports.error = function error(text){
    console.log("ERROR:", text);
    return text;
}

/* or */
/* module.exports.info =info ; */
/* and delete module.exports.info de la funcion*/
