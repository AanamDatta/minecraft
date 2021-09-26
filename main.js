
var canvas = new fabric.Canvas('myCanvas');
playerx = 10;
playery = 10;

blockimagewidth = 30;
blockimageheight = 30;

var playerobject = "";
var blockimageobject = "";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img)
    {
playerobject = Img;
playerobject.scaleToWidth(150)
playerobject.scaleToHeight(150)
playerobject.set({
    top:playery,
    left:playerx

});
canvas.add(playerobject)
    }
    )
}
function new_image (get_image) {
    fabric.Image.fromURL(get_image,function(Img)
    {
blockimageobject = Img;
blockimageobject.scaleToWidth(150)
blockimageobject.scaleToHeight(150)
blockimageobject.set({
    top:playery,
    left:playerx

});
canvas.add(blockimageobject)
    }
    )
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift key pressed together")
        blockimagewidth= blockimagewidth + 10
        blockimageheight= blockimageheight+10
        document.getElementById("current_width").innerHTML=blockimagewidth
        document.getElementById("current_height").innerHTML=blockimageheight

    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift key pressed together")
        blockimagewidth= blockimagewidth - 10
        blockimageheight= blockimageheight- 10
        document.getElementById("current_width").innerHTML=blockimagewidth
        document.getElementById("current_height").innerHTML=blockimageheight
        
    }
    if (keyPressed== '38'){
up ();
console.log("up")
    }
    if (keyPressed== '40'){
        down ();
        console.log("down")
            }
            if (keyPressed== '37'){
                left ();
                console.log("left")
                    }
                    if (keyPressed== '39'){
                        right ();
                        console.log("right")

                            }

                        if (keyPressed=='87') {
                            new_image('wall.jpg')
                            console.log("w")
                        }
                        if (keyPressed=='71') {
                            new_image('ground.png')
                            console.log("g")
                        }
                        if (keyPressed=='76') {
                            new_image('light_green.png')
                            console.log("l")
                        }
                        if (keyPressed=='84') {
                            new_image('trunk.jpg')
                            console.log("t")
                        }
                        if (keyPressed=='82') {
                            new_image('roof.jpg')
                            console.log("r")
                        }
                        if (keyPressed=='89') {
                            new_image('yellow_wall.png')
                            console.log("y")
                        }
                        if (keyPressed=='68') {
                            new_image('dark_green.png')
                            console.log("d")
                        }
                        if (keyPressed=='85') {
                            new_image('unique.png')
                            console.log("u")
                        }
                        if (keyPressed=='67') {
                            new_image('cloud.jpg')
                            console.log("c")
                        }

                        }
                        function up() {
                            if (playery >= 0 ) {
                                playery = playery- blockimageheight
                            console.log("blockimageheight" + blockimageheight)
                            console.log("when up arrow key is pressed, X =" + playerx +"y = " + playery);
                            canvas.remove(playerobject);
                            player_update();

                            }

                        } 
                        function down() {
                            if (playery <= 500 ) {
                                playery = playery + blockimageheight
                            console.log("blockimageheight" + blockimageheight)
                            console.log("when up arrow key is pressed, X =" + playerx +"y = " + playery);
                            canvas.remove(playerobject);
                            player_update();
                             
                            }

                        }
                        function left() {
                            if (playerx >= 0 ) {
                                playerx = playerx- blockimagewidth
                            console.log("blockimagewidth" + blockimagewidth)
                            console.log("when up arrow key is pressed, X =" + playerx +"y = " + playery);
                            canvas.remove(playerobject);
                            player_update();
                             
                            }
                        }

                        function right() {
                            if (playerx <= 850) {
                                playerx = playerx+ blockimagewidth
                            console.log("blockimagewidth" + blockimagewidth)
                            console.log("when up arrow key is pressed, X =" + playerx +"y = " + playery);
                            canvas.remove(playerobject);
                            player_update();
                             
                            }
                        }
