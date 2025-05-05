const cal=document.querySelector('#cal-but');
cal.addEventListener('click',function(e){
    const height=parseInt(document.querySelector('#text1').value);
    const weight=parseInt(document.querySelector('#text2').value);
    const result=document.querySelector('#result');
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`please give me valid index ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`please give me valid index ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
        
    }

})
document.querySelector('#but1').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#text1').value = '';
    document.querySelector('#text2').value = '';
    document.querySelector('#result').innerHTML = '';
    console.log(alert("done!"))
});
  const toggleBtn = document.getElementById("modeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "🌙" : "🌞";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "🌙";
    } else {
      toggleBtn.textContent = "🌞";
    }
  };

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function applyResponsiveStyles(e) {
    const nav = document.querySelector(".nav-bar");
    const h1 = document.querySelector("h1");
    const inputBar = document.querySelector(".input-bar");
    const footer = document.querySelector(".footer-class");
    const button2 = document.querySelector(".button2");
  
    if (e.matches) {
      nav.style.flexDirection = "column";
      nav.style.rowGap = "0.5rem";
      h1.style.fontSize = "22px";
      inputBar.style.gap = "1rem";
      footer.style.padding = "1rem";
      footer.style.fontSize = "14px";
      button2.style.width = "80%";
      button2.style.marginLeft = "0";
    } else {
      nav.style.flexDirection = "row";
      nav.style.rowGap = "0";
      h1.style.fontSize = "32px";
      inputBar.style.gap = "2rem";
      footer.style.padding = "0.5rem 0 0 4.5rem";
      footer.style.fontSize = "16px";
      button2.style.width = "10%";
      button2.style.marginLeft = "88px";
    }
  }
  
  // Initial load
  applyResponsiveStyles(mediaQuery);
  
  // Listen for screen size changes
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", applyResponsiveStyles);
  } else {
    mediaQuery.addListener(applyResponsiveStyles); // For older browsers
  }
  