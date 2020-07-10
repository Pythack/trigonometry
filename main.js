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
      function isMobile() {
      var check = false;
      (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
            check = true;
      })(navigator.userAgent||navigator.vendor||window.opera);
      return check;
      };
     
