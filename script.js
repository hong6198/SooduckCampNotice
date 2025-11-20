fetch("notices.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("notice-container");

    data.forEach(notice => {
      const box = document.createElement("div");
      box.className = "notice-box";
      box.innerHTML = `
        <div class="notice-header">
          <div>${notice.title}</div>
          <div class="arrow">▼</div>
        </div>
        <div class="notice-content">${notice.content}</div>
      `;
      container.appendChild(box);
    });

    // 아코디언 기능
    document.querySelectorAll('.notice-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');

        if(content.style.maxHeight){
          content.style.maxHeight = null;
          content.classList.remove('open');
          arrow.style.transform = 'rotate(0deg)';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.classList.add('open');
          arrow.style.transform = 'rotate(180deg)';
        }
      });
    });
  })
  .catch(err => console.error("공지 불러오기 실패:", err));
