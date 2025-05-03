export default function (content) {
    // <h1>Paramount Restaurant</h1>
    //   <div class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur itaque odit blanditiis minus aut debitis. Rerum tenetur voluptas ipsa numquam assumenda, reprehenderit saepe pariatur tempore totam, excepturi, aperiam libero.</div>
    //   <div class="about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quasi eligendi quas facilis voluptas dolores esse molestiae, culpa harum ipsam asperiores nostrum iure laudantium obcaecati illo quia labore beatae ducimus!</div>
    //   <div class="about timings">
    //     <ul>
    //       <li><strong>Monday - Friday:</strong> 11:30 AM - 2:30 PM (Lunch), 6:00 PM - 10:00 PM (Dinner)</li>
    //       <li><strong>Saturday:</strong> 12:00 PM - 3:00 PM (Lunch), 6:30 PM - 10:30 PM (Dinner)</li>
    //       <li><strong>Sunday:</strong> 12:00 PM - 4:00 PM (All Day), 6:00 PM - 9:00 PM (Dinner)</li>
    //     </ul>
    //   </div>
    const rootEl = content;
    const h1 = document.createElement("h1");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    h1.innerHTML = "Paramount Restaurant";
    rootEl.appendChild(h1);

    div1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur itaque odit blanditiis minus aut debitis. Rerum tenetur voluptas ipsa numquam assumenda, reprehenderit saepe pariatur tempore totam, excepturi, aperiam libero.";
    div2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur itaque odit blanditiis minus aut debitis. Rerum tenetur voluptas ipsa numquam assumenda, reprehenderit saepe pariatur tempore totam, excepturi, aperiam libero.";
    li1.innerHTML = '<strong>Monday - Friday:</strong> 11:30 AM - 2:30 PM (Lunch), 6:00 PM - 10:00 PM (Dinner)';
    li2.innerHTML = '<strong>Saturday:</strong> 12:00 PM - 3:00 PM (Lunch), 6:30 PM - 10:30 PM (Dinner)';
    li3.innerHTML = "<strong>Sunday:</strong> 12:00 PM - 4:00 PM (All Day), 6:00 PM - 9:00 PM (Dinner)";
    div3.classList.add('about', 'timings');
    div2.classList.add('about');
    div1.classList.add('about');

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    rootEl.appendChild(div1);
    rootEl.appendChild(div2);
    rootEl.appendChild(div3);

    div3.appendChild(ul);

}