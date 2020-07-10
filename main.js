function calculate() {
      const angle = parseFloat(document.getElementById("angle").value);
      const arrondir = document.getElementById("arrondir").value;
      const degrestoradians = angle * Math.PI/180;
      var sinus = Math.sin(degrestoradians);
      var arsinus = sinus;
      if (arrondir == "unite") {
        arsinus = Math.round(sinus);
      }
      if (arrondir == "dixieme") {
        arsinus *= 10;
        arsinus = Math.round(sinus);
        arsinus /= 10;
      }
      if (arrondir == "centieme") {
        arsinus *= 100;
        arsinus = Math.round(sinus);
        arsinus /= 100;
      }
      if (arrondir == "millieme") {
        arsinus *= 1000;
        arsinus = Math.round(sinus);
        arsinus /= 1000;
      }
      var cosinus = Math.cos(degrestoradians);
      var arcosinus = cosinus;
      if (arrondir == "unite") {
        arcosinus = Math.round(cosinus);
      }
      if (arrondir == "dixieme") {
        arcosinus *= 10;
        arcosinus = Math.round(cosinus);
        arcosinus /= 10;
      }
      if (arrondir == "centieme") {
        arcosinus *= 100;
        arcosinus = Math.round(cosinus);
        arcosinus /= 100;
      }
      if (arrondir == "millieme") {
        arcosinus *= 1000;
        arcosinus = Math.round(cosinus);
        arcosinus /= 1000;
      }
      var tangeante = Math.tan(degrestoradians);
      var artangeante = tangeante;
      if (arrondir == "unite") {
        artangeante = Math.round(tangeante);
      }
      if (arrondir == "dixieme") {
        artangeante *= 10;
        artangeante = Math.round(tangeante);
        artangeante /= 10;
      }
      if (arrondir == "centieme") {
        artangeante *= 100;
        artangeante = Math.round(tangeante);
        artangeante /= 100;
      }
      if (arrondir == "millieme") {
        artangeante *= 1000;
        artangeante = Math.round(tangeante);
        artangeante /= 1000;
      }
      var adjacent = parseFloat( document.getElementById("inadjacent").value);
      var oppose = parseFloat(document.getElementById("inopposé").value);
      var hypothenus = parseFloat(document.getElementById("inhypothenus").value);
      if (adjacent != 0) {
        var oppose = tangeante * adjacent;
        var hypothenus = adjacent / cosinus;
        if (arrondir == "unite") {
          adjacent = Math.round(adjacent);
          oppose = Math.round(oppose);
          hypothenus = Math.round(hypothenus);
        }
        if (arrondir == "dixieme") {
          adjacent *= 10;
          adjacent = Math.round(adjacent);
          adjacent /= 10;
          oppose *= 10;
          oppose = Math.round(oppose);
          oppose /= 10;
          hypothenus *= 10;
          hypothenus = Math.round(hypothenus);
          hypothenus /= 10;
        }
        if (arrondir == "centieme") {
          adjacent *= 100;
          adjacent = Math.round(adjacent);
          adjacent /= 100;
          oppose *= 100;
          oppose = Math.round(oppose);
          oppose /= 100;
          hypothenus *= 100;
          hypothenus = Math.round(hypothenus);
          hypothenus /= 100;
        }
        if (arrondir == "millieme") {
          adjacent *= 1000;
          adjacent = Math.round(adjacent);
          adjacent /= 1000;
          oppose *= 1000;
          oppose = Math.round(oppose);
          oppose /= 1000;
          hypothenus *= 1000;
          hypothenus = Math.round(hypothenus);
          hypothenus /= 1000;
        }
      }
      else if (oppose != 0){
       var adjacent = oppose / tangeante;
       var hypothenus = oppose / sinus;
       if (arrondir == "unite") {
         adjacent = Math.round(adjacent);
         oppose = Math.round(oppose);
         hypothenus = Math.round(hypothenus);
       }
       if (arrondir == "dixieme") {
         adjacent *= 10;
         adjacent = Math.round(adjacent);
         adjacent /= 10;
         oppose *= 10;
         oppose = Math.round(oppose);
         oppose /= 10;
         hypothenus *= 10;
         hypothenus = Math.round(hypothenus);
         hypothenus /= 10;
       }
       if (arrondir == "centieme") {
         adjacent *= 100;
         adjacent = Math.round(adjacent);
         adjacent /= 100;
         oppose *= 100;
         oppose = Math.round(oppose);
         oppose /= 100;
         hypothenus *= 100;
         hypothenus = Math.round(hypothenus);
         hypothenus /= 100;
       }
       if (arrondir == "millieme") {
         adjacent *= 1000;
         adjacent = Math.round(adjacent);
         adjacent /= 1000;
         oppose *= 1000;
         oppose = Math.round(oppose);
         oppose /= 1000;
         hypothenus *= 1000;
         hypothenus = Math.round(hypothenus);
         hypothenus /= 1000;
       }
    }
      else if (hypothenus != 0){
        var adjacent = hypothenus * cosinus;
        var oppose = hypothenus * sinus;
        if (arrondir == "unite") {
          adjacent = Math.round(adjacent);
          oppose = Math.round(oppose);
          hypothenus = Math.round(hypothenus);
        }
        if (arrondir == "dixieme") {
          adjacent *= 10;
          adjacent = Math.round(adjacent);
          adjacent /= 10;
          oppose *= 10;
          oppose = Math.round(oppose);
          oppose /= 10;
          hypothenus *= 10;
          hypothenus = Math.round(hypothenus);
          hypothenus /= 10;
        }
        if (arrondir == "centieme") {
          adjacent *= 100;
          adjacent = Math.round(adjacent);
          adjacent /= 100;
          oppose *= 100;
          oppose = Math.round(oppose);
          oppose /= 100;
          hypothenus *= 100;
          hypothenus = Math.round(hypothenus);
          hypothenus /= 100;
        }
        if (arrondir == "millieme") {
          adjacent *= 1000;
          adjacent = Math.round(adjacent);
          adjacent /= 1000;
          oppose *= 1000;
          oppose = Math.round(oppose);
          oppose /= 1000;
          hypothenus *= 1000;
          hypothenus = Math.round(hypothenus);
          hypothenus /= 1000;
        }
      }
      coadjacent = adjacent;
      cooppose = oppose;
      cohypothenus = hypothenus;
      copysinus = arsinus;
      copycosinus = arcosinus;
      copytangeante = artangeante;
      document.getElementById("copyblock").style.display = "block";
      document.getElementById("result").innerHTML = "Voici les informations trigonométrique :<br/>-Sinus : " + arsinus + "<br/>-Cosinus : " + arcosinus + "<br/>-Tangeante : " + artangeante + "<br/>Et voici les longueurs :<br/>-Adjacent : " + adjacent + "<br/>-Opposé : " + oppose + "<br/>-Hypothénus : " + hypothenus;
    }
    function copy() {
      var copyselect = document.getElementById("copyselect").value;
      if (copyselect == "sinus") {
        document.getElementById("copyholder").value = copysinus;
      }
      if (copyselect == "cosinus") {
        document.getElementById("copyholder").value = copycosinus;
      }
      if (copyselect == "tangeante") {
        document.getElementById("copyholder").value = copytangeante;
      }
      if (copyselect == "adjacent") {
        document.getElementById("copyholder").value = coadjacent;
      }
      if (copyselect == "oppose") {
        document.getElementById("copyholder").value = cooppose;
      }
      if (copyselect == "hypothenus") {
        document.getElementById("copyholder").value = cohypothenus;
      }
      var copyText = document.getElementById("copyholder");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      alert("Le résultat : " + copyText.value + " a bien été copié dans le presse-papier. ");
    }
    function template(which){
      document.getElementById("hometemplate").style.display = "none";
      document.getElementById("trigotemplate").style.display = "none";
      document.getElementById("pkc1final").style.display = "none";
      document.getElementById(which).style.display = "block";
    }
      function resize() {
        document.getElementById('hometemplate').style.top = screen.height / 6 + "px";
        document.getElementById('hometemplate').style.left = screen.width / 3 + "px";
        document.getElementById('hometemplate').style.display = "block";
        document.getElementById('trigotemplate').style.top = screen.height / 6 + "px";
        document.getElementById('trigotemplate').style.left = screen.width / 3 + "px";
      }
