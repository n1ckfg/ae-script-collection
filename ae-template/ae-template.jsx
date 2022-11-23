{
		
// Sample Panel Setup

function buildUI(this_obj_) {
    var win = (this_obj_ instanceof Panel) ? this_obj_ : new Window('palette', 'Script Window',[760,345,1120,597]);

    //Jeff Almasol's solution to fix text color
    var winGfx = win.graphics;
    var darkColorBrush = winGfx.newPen(winGfx.BrushType.SOLID_COLOR, [0,0,0], 1);

    //-----------------------------------------------------
    //1. Draw buttons
    //buttons coordinates are X start, Y start, X end, Y end
    var butYoffset = 10; //8;
    var butYoffsetCap = 4;
    //--
    var butXstart = 8;
    var butXend = 149;//152;
    var butYstart = 15 + butYoffset;
    var butYend = 43 + butYoffset;
    var butYinc = 30;
    //--
    var colXstart = 4;
    var colXend = 165;
    var colYstart = 4 + butYoffset; //4;
    var colYendBase = 33;
    var colXinc = 170;

    //Basic button group
    var col1butCount = 1;
    win.panel1Group = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col1butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});
    win.panel1Group0 = win.panel1Group.add('button', [butXstart,butYstart+(butYinc*0),butXend,butYend+(butYinc*0)], 'Nulls for Pins');

    //--
    //Character button group
    var col2butCount = 0;
    //win.panel2Group = win.add('panel', [colXstart+(colXinc * 1),colYstart,colXend+(colXinc*1),colYendBase+(col2butCount*butYinc)], 'Rigging', {borderStyle: "etched"});
    win.panel2Group = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col2butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});

    //--
    //Advanced button group
    var col3butCount = 0;
    //win.panel3Group = win.add('panel', [colXstart+(colXinc * 2),colYstart,colXend+(colXinc*2),colYendBase+(col3butCount*butYinc)], 'Advanced', {borderStyle: "etched"});
    win.panel3Group = win.add('panel', [colXstart+(colXinc * 0),colYstart,colXend+(colXinc*0),colYendBase+(col3butCount*butYinc)+butYoffset+butYoffsetCap], "", {borderStyle: "etched"});

    //-----------------------------------------------------
    //2. Link buttons to functions
    win.panel1Group0.onClick = helloWorld;

    //Tooltips
    //win.panel1Group0.helpTip = "Creates a controller null for each puppet pin on a layer."; //helloWorld;

    //-----------------------------------------------------

    var selector = win.add("dropdownlist",[colXstart, colYstart, colXend, colYendBase],["Panel1","Panel2","Panel3"]);
    selector.onChange = function() {
        if (selector.selection == 0){
            win.panel1Group.visible = true;
            win.panel2Group.visible = false;
            win.panel3Group.visible = false;
        }else if (selector.selection == 1){
            win.panel1Group.visible = false;
            win.panel2Group.visible = true;
            win.panel3Group.visible = false;
        }else if (selector.selection == 2){
            win.panel1Group.visible = false;
            win.panel2Group.visible = false;
            win.panel3Group.visible = true;
        }        
    }
    selector.selection = 0;

    return win
}

var w = buildUI(this);

if (w.toString() == "[object Panel]") {
    w;
} else {
    w.show();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function helloWorld() {
    alert("Hello world!");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}