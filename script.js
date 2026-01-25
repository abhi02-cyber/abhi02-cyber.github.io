// fetch("programs.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("programList");
    data.forEach(item => {
      list.innerHTML += `
        <div class="program-card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <a href="${item.link}" target="_blank">View More</a>
        </div>
      `;
    });
  });
Future me results ya features add karne ke kaam aayega
console.log("Expert Science Classes website loaded");
