
function util_load_css(event)
{
    var headID = document.getElementsByTagName("head")[0];         
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = 'css/'+this.id + '.css';
    
    // DEBUG: alert(cssNode.href);
    cssNode.media = 'screen';
    headID.appendChild(cssNode);

    // Set the label to reflect our current palette
    var palette_label = document.getElementById("palette-label");
    if (palette_label) {
	palette_label.innerHTML = this.id;
	palette_label.style.color = currentStrokeStyle;
	//DEBUG: alert(currentStrokeStyle);
	//DEBUG: alert(this.id);
    }
}

function util_refresh_state() {

    // Set the label to reflect our current palette
    var palette_label = document.getElementById("palette-label");
    if (palette_label) {
	palette_label.style.color = currentStrokeStyle;
    }
    var pen_label = document.getElementById("pen");
    if (pen_label) {
	pen_label.style.color = currentStrokeStyle;
    }
}