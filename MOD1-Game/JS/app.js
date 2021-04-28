let color = e => {

    //document.getElementById("white")

    if(e.target.contains("white")){
        e.target.remove("white");
        e.target.add("blue");
    }
}