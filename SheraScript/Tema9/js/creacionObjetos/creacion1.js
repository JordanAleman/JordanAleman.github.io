    var star = {};
    
    star["Polaris"] = new Object;
    star["Mizar"] = new Object;
    star["Aldebaran"] = new Object;
    star["Rigel"] = new Object;
    star["Castor"] = new Object;
    star["Albireo"] = new Object;
    star["Acrux"] = new Object;
    star["Gemma"] = new Object;
    star["Procyon"] = new Object;
    star["Sirius"] = new Object;
    star["Rigil Kentaurus"] = new Object;
    star["Deneb"] = new Object;
    star["Vega"] = new Object;
    star["Altair"] = new Object;

    star["Polaris"].constellation = "Ursa Minor";
    star["Mizar"].constellation = "Ursa Major";
    star["Aldebaran"].constellation = "Taurus";
    star["Rigel"].constellation = "Orion";
    star["Castor"].constellation = "Gemini";
    star["Albireo"].constellation = "Cygnus";
    star["Acrux"].constellation = "Crux";
    star["Gemma"].constellation = "Corona Borealis";
    star["Procyon"].constellation = "Canis Minor";
    star["Sirius"].constellation = "Canis Major";
    star["Rigil Kentaurus"].constellation = "Centaurus";
    star["Deneb"].constellation = "Cygnus";
    star["Vega"].constellation = "Lyra";
    star["Altair"].constellation = "Aquila";

    star["Polaris"].type = "Double/Cepheid";
    star["Mizar"].type = "Spectroscopic Binary";
    star["Aldebaran"].type = "Irregular Variable";
    star["Rigel"].type = "Supergiant with Companion";
    star["Castor"].type = "Multiple/Spectroscopic";
    star["Albireo"].type = "Double";
    star["Acrux"].type = "Double";
    star["Gemma"].type = "Eclipsing Binary";
    star["Procyon"].type = "Double";
    star["Sirius"].type = "Double";
    star["Rigil Kentaurus"].type = "Double";
    star["Deneb"].type = "Supergiant";
    star["Vega"].type = "White Dwarf";
    star["Altair"].type = "White Dwarf";

    star["Polaris"].spectralClass = "F7";
    star["Mizar"].spectralClass = "A1 V";
    star["Aldebaran"].spectralClass = "K5 III";
    star["Rigel"].spectralClass = "B8 Ia";
    star["Castor"].spectralClass = "A1 V";
    star["Albireo"].spectralClass = "K3 II";
    star["Acrux"].spectralClass = "B1 IV";
    star["Gemma"].spectralClass = "A0 V";
    star["Procyon"].spectralClass = "F5 IV";
    star["Sirius"].spectralClass = "A1 V";
    star["Rigil Kentaurus"].spectralClass = "G2 V";
    star["Deneb"].spectralClass = "A2 Ia";
    star["Vega"].spectralClass = "A0 V";
    star["Altair"].spectralClass = "A7 V";

    star["Polaris"].mag = 2.0;
    star["Mizar"].mag = 2.3;
    star["Aldebaran"].mag = 0.85;
    star["Rigel"].mag = 0.12;
    star["Castor"].mag = 1.58;
    star["Albireo"].mag = 3.1;
    star["Acrux"].mag = 0.8;
    star["Gemma"].mag = 2.23;
    star["Procyon"].mag = 0.38;
    star["Sirius"].mag = -1.46;
    star["Rigil Kentaurus"].mag = -0.01;
    star["Deneb"].mag = 1.25;
    star["Vega"].mag = 0.03;
    star["Altair"].mag = 0.77;


for (const estrella in star) {
    document.querySelector("#rellenoTablaCreacion1").innerHTML += 
        `
            <tr>
                <td>${estrella}</td>
                <td>${star[estrella].constellation}</td>
                <td>${star[estrella].type}</td>
                <td>${star[estrella].spectralClass}</td>
                <td>${star[estrella].mag}</td>
            </tr>
        `; 
}