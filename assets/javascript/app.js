function typeWriter(texts, element) {
    let i = 0;
    let j = 0;
    const interval = setInterval(() => {
      if (i < texts[j].length) {
        element.textContent = texts[j].slice(0, i + 1);
        i++;
      } else {
        i = 0;
        j++;
        if (j === texts.length) {
          j = 0;
        }
      }
    }, 100);
  }
  const texts = [
    "Halo saya Dimas Fajar  ",
    "Mahasiswa semester 4 di Politeknik Negeri Jember  ",
    "Terimakasih sudah mengunjungi website ini  ",
  ];
  const heading = document.querySelector(".home h1");
  typeWriter(texts, heading);
  