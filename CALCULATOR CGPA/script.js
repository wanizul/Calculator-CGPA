var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
  });

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
})

function mySubmit() {
    alert("Your message has been successfully sent!");
  }


  function update_gp( field, grade_point )
  {
    var textfield = "grade_gp_"+field;
  
    document.forms['forrm'].elements[textfield].value = grade_point;
  
    update_hours( field );
  }
  
  function update_hours( field )
  {
    var gradefield = "";
    var credit_hours = "";
    var grade = "";
    var gp = "";
    var hours = "";
  
    credit_hours = "points_"+field;
    gradefield = "gp_"+field;
    grade = "grade_gp_"+field;
  
    hours = document.forms['forrm'].elements[credit_hours].options[document.forms['forrm'].elements[credit_hours].selectedIndex].value;
    gp = document.forms['forrm'].elements[grade].value;
  
    if ((gp != "") && (hours != -0.5)) {
      document.forms['forrm'].elements[gradefield].value = Math.round( gp * hours * 100) / 100;
    } else {
      document.forms['forrm'].elements[gradefield].value = "";
    }
  }
  
  function update_gpas( )
  {
    var gradefield = "";
    var credit_hours = "";
    var gp = 0.0;
    var hours = 0.0
    var total_hours = 0.0;
    var sum_grade_points = 0.0;
    var index = 0;
    var credits = 1.0 * document.forms['gpa_info'].elements['doned'].value;
    var gpa = 1.0 * document.forms['gpa_info'].elements['gpa'].value;
    var grade_name;
  
    index = 1;
    while (index <= 15) {
      
      grade_name = "grade_"+index;
      update_gp( index, document.forms['forrm'].elements[grade_name].options[document.forms['forrm'].elements[grade_name].selectedIndex].value);
  
      gradefield = "gp_"+index;
      credit_hours = "points_"+index;
  
      hours = document.forms['forrm'].elements[credit_hours].options[document.forms['forrm'].elements[credit_hours].selectedIndex].value;
      gp = document.forms['forrm'].elements[gradefield].value;
  
      if ((gp != "") && (hours != "")) {
        total_hours += 1.0*hours;
      }
      sum_grade_points += 1.0*gp;
  
      index++;
    }
  
    document.forms['forrm'].elements['sum_credit_hours'].value = total_hours;
    document.forms['forrm'].elements['sum_grade_points'].value = sum_grade_points;
  
    if (total_hours > 0) {
      document.forms['forrm'].elements['term_gpa'].value = Math.round( sum_grade_points / total_hours * 10000) / 10000;
    } else {
      document.forms['forrm'].elements['term_gpa'].value = "";
    }
  
    document.forms['forrm'].elements['cumulative_gpa'].value = Math.round( 10000 * (sum_grade_points + gpa*credits) / (credits + total_hours) ) / 10000;
  }
  


