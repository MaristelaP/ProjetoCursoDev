var oe = [
  {
     "nome": "Lavanda", 
     "propriedades_emocionais": " Para momentos de tensão e estresse. Usado em casos de insônia, impaciência, preocupação, medos e estados de choque. Regula o sono de crianças.",
     "propriedades_vibracionais": " Remove indecisões e conflitos emocionais, proporciona leveza, acalma estados conturbados. Equilibra os 7 chakras.",
     "propriedades_fisicas": " Cicatrizante e anti-inflamatório, é usado para regenerar a pele, trata acne, equilibra peles oleosas e ressecadas, micose, combate dermatites, furúnculos, pé de atleta, alergias, eczemas. Por ser cicatrizante também trata queimaduras, estrias e queloides. Analgésico, é muito usado para amenizar dores de cabeça, enxaqueca, sinusite, asma, dores musculares, dores reumáticas. Ameniza assaduras e reações a picadas de insetos.",
     "precaucoes": " Considerado seguro."
  },

  {
      "nome": "Anis Estrelado",
      "propriedades_emocionais": " Sedativo e neuroprotetor.",
      "propriedades_vibracionais": " Elimina a tensão, medos, bloqueios e timidez. Aumenta a libido. Incentiva a conduzir a própria história. Aumenta a vitalidade e abundância. Promove clareza e aumenta a intuição. Atua fortemente no 2°, 3°,5° e 6° chakra.",
      "propriedades_fisicas": " Antioxidante. Estimula a síntese de colágeno na pele. Promove viço e brilho a pele. Antiespasmódico é indicado para cólicas menstruais. Expectorante. Inibidor de apetite. Digestivo e diurético. Alivia sintomas da menopausa e TPM.  Antidiabético.",
      "precaucoes": " Contraindicado para gestantes, epiléticos, crianças de até 5 anos, pele com fissuras e pacientes com endometriose, câncer no seio ou no sistema reprodutivo. Não utilize concentração maior que 2% em aplicações dérmicas . Não utilize concomitantemente com medicação anticoagulante."
  },
  
  {
    "nome": "Bergamota", 
    "propriedades_emocionais": " Equilibrador emocional, reduz a ansiedade e depressão.",
    "propriedades_vibracionais": " Promove otimismo e ânimo. Estimula coragem e confiança, eliminando medos em geral. Dissipa a raiva, ressentimento e ciúme. Ativa o 2°, 3° e 5° chakra.",
    "propriedades_fisicas": " Cicatrizante e anti-inflamatório, eficiente para tratamento de psoríase. Imunoestimulante, ajuda a combater desequilíbrios de várias ordens, de leucorreia a cistite, de herpes a resfriado e gripe.",
    "precaucoes": " É fotossensibilizante, não se exponha ao sol por até 12 horas após o uso tópico. Contraindicado para crianças com até 2 anos. "
  },
  
  {
    "nome": "Copaiba",
    "propriedades_emocionais": " Foco espiritual.",
    "propriedades_vibracionais": " Promove a fidelidade, a humildade e a sabedoria. Estimula o 1°, 6° e 7° chakra.",
    "propriedades_fisicas": " Cicatrizante, indicado para o pós-operatório, pois reduz edemas, inchaços e hematomas. Também trata acne, psoríase, eczema, ulcerações cutâneas, pele rachada e sensível. Antibiótico, antioxidante, anti-inflamatório e expectorante para casos de bronquite e asma. Fungicida, trata herpes, furúnculos e fungos na pele e unha. Antitumoral, apresenta potencial para regredir certos tipos de células cancerosas. Também é antiviral, imunoestimulante, clareador de manchas, diurético e analgésico.", 
    "precaucoes": " Considerado seguro."
  },

  {
    "nome": " Camomila Romana",
    "propriedades_emocionais": " Promove serenidade, eliminando a raiva e a agressividade.",
    "propriedades_vibracionais": " Atua em casos de dificuldade de desprendimento do passado. Equilibra o 3º, 4º, 5º e 6º chakra.",
    "propriedades_fisicas": " Comumente indicado em casos de inchaço no rosto, dermatite, eczema, picadas de inseto, alergias, queimaduras, pele inflamada e acne. Poderoso calmante, analgésico, anti-inflamatório e antiespasmódico. Combate dores de cabeça e até mesmo enxaquecas crônicas. Em shampoos clareia os cabelos. Excelente para cólicas e assaduras em bebês.",
    "precaucoes": " Considerado seguro."
  },

  {
    "nome": " Hortelã Pimenta",
    "propriedades_emocionais": " Estimulante e revigorante. Ativa a concentração e melhora a memória.",
    "propriedades_vibracionais": " Considerado pelos terapeutas como um marco de transformação, por auxiliar a romper barreiras e transformar emoções fortes e contidas como raiva, traumas, medos, pânico, choque, histeria e ódio. Atua nos 7 chakras.",
    "propriedades_fisicas": " Analgésico poderoso, auxilia em casos de dor de cabeça e enxaqueca crônica. Repelente de mosquitos. Anti-inflamatório. Expectorante, é recomendado para rinite e sinusite. Estimula o crescimento de novas células epiteliais, e é usado para o clareamento de manchas.",
    "precaucoes": " Contraindicado para epiléticos, hipertensos, gestantes, lactantes e crianças de até 7 anos. Pode sensibilizar peles sensíveis, aumente a diluição."
  },

  {
    "nome": " Eucalipto Globulus",
    "propriedades_emocionais": " Estimulante mental.",
    "propriedades_vibracionais": " Equilibra energia e dissolve pensamentos negativos e repetitivos. Desperta consciência coletiva. Atua no 4° chakra.",
    "propriedades_fisicas": " Anti-inflamatório, usado em picadas de inseto, feridas, dores musculares e artrite. Antimicrobiano, ajuda em casos de infecções na garganta e herpes. Analgésico, alivia dores crônicas e pós operatória. Antisséptico, repelente.",
    "precaucoes": " Contraindicado para crianças até 6 anos."
  }
]


$(document).ready(function() {
 // console.log(oe)
  
  
  $("#container_oe").append("Utilize este formulário para fazer sua pesquisa.");
  
  $("#pesq").on("click",function(){
  //  console.log("clicado")
    var oleo = $("#oleo").val();
    var emocional = $("#emocional").val();
    var vibracional = $("#vibracional").val();
    var fisica = $("#fisica").val();
   // console.log(oleo);
   // console.log(emocional);
    $("#container_oe").html("");
    var oe_filtrado = oe.filter(function(objeto){
      return objeto.nome.toLowerCase().includes(oleo.toLowerCase()) && objeto.propriedades_emocionais.includes(emocional) 
      && objeto.propriedades_vibracionais.includes(vibracional) && objeto.propriedades_fisicas.includes(fisica); 
      
    });
    if (oe_filtrado.length == 0 ){
      $("#container_oe").append("Nenhum resultado encontrado");
    }
   // console.log(oe_filtrado)
    $.each(oe_filtrado,function(i,item){
      $("#container_oe").append("<div><h5>"+item.nome+"</h5><br>"+"<h6>Propriedades Emocionais:</h6>"+item.propriedades_emocionais+"<br>"+"<h6>Propriedades Vibracionais:</h6>"+
      item.propriedades_vibracionais+"<br>"+"<h6>Propriedades Físicas:</h6>"+item.propriedades_fisicas+"<br>"+"<h6>Precauções:</h6>"+item.precaucoes+"</div>");
    });
  
  });
  
    
  $('.parallax').parallax();
});
