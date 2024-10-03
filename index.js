const mainpage = document.querySelector(".mainpage");
const taskpage = document.querySelector(".taskCategory");
const task = Array.from(document.getElementsByClassName("task"));
const backbtn = document.querySelector(".backbtn");
const addbtn = document.querySelector(".taskaddbtn");
const addpage = document.querySelector(".addTask");
const blurdiv = document.querySelector(".blurdiv");
const categoryDiv = document.getElementById("categoryDiv");
const img_indivisual = document.getElementById("image_indivisual");
const task_type = document.getElementById("taskType");
//const taskSize_indivisual = document.getElementById("task_number");
const xyz = document.getElementById("xyz");
const addtaskbtn = document.getElementById('addNewTask')
var mainTaskIndivisual = "ko";
let task_main_wrapper = "oli"
let task_complete = false;
let karo = 'po'
let tom = 'df'
let tomm = 'df'

let category = [
  {
    task: [
      {
        id: "a1",
        text: "Going to drop mom",
        isCompleted: false,
      },
      {
        id: "a2",
        text: "wash bike",
        isCompleted: false,
      },
      {
        id: "a3",
        text: "buy car",
        isCompleted: false,
      },
      {
        id: "a4",
        text: "buy Pen",
        isCompleted: false,
      },
    ],
    title: "Personal",
    img: "boy.png",
  },
  {
    task: [
      {
        id: "a12",
        text: "clean the home",
        isCompleted: false,
      },
      {
        id: "a22",
        text: "give water to the plant",
        isCompleted: false,
      },
      {
        id: "a32",
        text: "wash all the clothes",
        isCompleted: false,
      },
    ],
    title: "Work",
    img: "briefcase.png",
  },
  {
    task: [
      {
        id: "a822",
        text: "penut butter-2 pkt",
        isCompleted: false,
      },
      {
        id: "a342",
        text: "creatine-2",
        isCompleted: false,
      },
    ],
    title: "Shopping",
    img: "shopping.png",
  },
  {
    task: [
      {
        id: "a82c2",
        text: "complete the todo list",
        isCompleted: false,
      },
      {
        id: "a34v2",
        text: "binary search -2 qstns",
        isCompleted: false,
      },
      {
        id: "a3f4v2",
        text: "complete mangodb",
        isCompleted: false,
      },
    ],
    title: "Coding",
    img: "web-design.png",
  },
  {
    task: [
      {
        id: "a8bh2c2",
        text: "take care of nail",
        isCompleted: false,
      },
      {
        id: "ha34v2",
        text: "going to check up",
        isCompleted: false,
      },
    ],
    title: "Health",
    img: "healthcare.png",
  },
  {
    task: [
      {
        id: 1,
        text: " Fun data",
        isCompleted: false,
      },
      {
        id: 2,
        text: "have 5 set if leg",
        isCompleted: false,
      },
      {
        id: 3,
        text: "going to check up",
        isCompleted: false,
      },
      {
        id: 4,
        text: "iam fit",
        isCompleted: false,
      },
    ],
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    task: [
      {
        id: "3o",
        text: "java - revision",
        isCompleted: false,
      },
      {
        id: "h4",
        text: "complete the assignment",
        isCompleted: false,
      },
    ],
    title: "Education",
    img: "education.png",
  },
  {
    task: [
      {
        id: "3owe",
        text: "pay the college due",
        isCompleted: false,
      },
      {
        id: "her4",
        text: "have to earn money in agelOne",
        isCompleted: false,
      },
    ],
    title: "Finance",
    img: "saving.png",
  },
];
let categories='op'
const objtask=JSON.stringify(category)
localStorage.setItem('obj',objtask)
categories=JSON.parse(localStorage.getItem('obj'))
function storageUpdate()
{
  localStorage.setItem('obj',JSON.stringify(categories))
  categories=JSON.parse(localStorage.getItem('obj'))
}
//Category Add to the main page task category
categories.forEach((item, i) => {
  const taskdetail = document.createElement('div')
  const boyimg = document.createElement('img')
  const dot3img = document.createElement('img')
  const categoryName = document.createElement('h3')
  taskdetail.setAttribute('class', 'task group mx-auto md:mx-auto mt-10 text-xl w-[85%] md:w-[85%] p-2 bg-gray-300 rounded-xl shadow-md shadow-slate-700 py-4 hover:-translate-y-2 transition 500 ease-in-out')
  taskdetail.setAttribute('id', i)

  boyimg.setAttribute('class', 'float-left w-[70px] h-[70px]')
  boyimg.setAttribute('id', `${item.title}`)
  boyimg.src = `images/${item.img}`

  dot3img.setAttribute('class', 'float-right opacity-60 invisible group-hover:visible mt-6 w-[20px] h-[20px]')
  dot3img.src = 'images/dot3.png'

  categoryName.innerHTML = `<span class="mr-28 float-right"> ${item.title}<span class="text-lg"><br><span id="task${i}">${item.task.length}</span> task Only </span></span>`
  categoryName.setAttribute('id', `${item.title}`)
  taskdetail.appendChild(boyimg)
  taskdetail.appendChild(dot3img)
  taskdetail.appendChild(categoryName)
  categoryDiv.appendChild(taskdetail)
  
})

//function for id
let ind_id=createId()
function createId()
{
  const x='ABCDEFGHIJk'
  let p=Math.floor(Math.random()*x.length+0)
  let q=Math.floor(Math.random()*x.length+0)
  let r=Math.floor(Math.random()*x.length+0)
    return `${Math.floor(`${Math.random()*100000+1}`)}${x[p]}${x[q]}${x[r]}`
}
update()
function update(id = 'op') {
  let total_len = 0
  categories.forEach((itm, i) => {
      document.getElementById(`task${i}`).innerHTML=itm.task.length
    total_len = total_len + itm.task.length
     if (i==id) {
      document.getElementById(`task_number${i}`).innerHTML= itm.task.length
     }
  })
  document.getElementById('task_size').innerText = total_len
}

categories.forEach((item, i) => {
  let task_name=document.createElement('h3')
  task_name.setAttribute('class','ml-[9rem] mt-[2rem]')
  task_name.innerHTML=`<span class="hidden -ml-[1rem] mt-[2rem] text-4xl"><span class="text-lg"><span id="task_number${i}" class="ml-6">5</span> task<br></span><span id="taskType${i}">Personal</span></span>`
  task_name.setAttribute('id',`${i}ABC`)
  let task_main_wrapper = document.createElement("div");
  task_main_wrapper.setAttribute(
    "class",
    " hidden font-thin font-serif text-white ml-[3%] mt-[10%]  w-[94%] max-h-[90%] flex flex-col gap-4 overflow-scroll"
  );
  task_main_wrapper.setAttribute("id", `${i}AB`);
  xyz.appendChild(task_name);
  xyz.appendChild(task_main_wrapper);
  item.task.forEach((item) => {
    let mainTaskIndivisual = document.createElement("div");
    const mainTask_checkbox = document.createElement("input");
    const mainTask_label = document.createElement("label");
    const mainTask_imgtic = document.createElement("img");
    const mainTask_imgdelete = document.createElement("img");

    mainTaskIndivisual.setAttribute(
      "class",
      "task_indivisual relative group grid grid-cols-6 grid-flow-col bg-purple-500 rounded-md cursor-pointer "
    );
    mainTaskIndivisual.setAttribute('id', item.id)

    if (item.isCompleted)
      mainTask_checkbox.setAttribute('class', 'bg-green-400 checkbox relative m-2 w-[20px] h-[20px] bg-white appearance-none ring-1 ring-gray-950 rounded-full ')
    else mainTask_checkbox.setAttribute(
      "class",
      "checkbox relative m-2 w-[20px] h-[20px] bg-white appearance-none ring-1 ring-gray-950 rounded-full "
    );

    if (item.isCompleted)
      mainTask_label.setAttribute("class", "line-through col-span-4 m-2  text-sm  w-[70%]")
    else mainTask_label.setAttribute("class", "col-span-4 m-2  text-sm  w-[70%]");

    mainTask_label.innerText = item.text;

    if (item.isCompleted) {
      mainTask_imgtic.setAttribute('class', 'ticmark absolute left-[0.5rem] mt-[10px] w-[17px] h-[17px] hidden group-hover:block')
      mainTask_imgtic.classList.remove('hidden')
    }
    else {
      mainTask_imgtic.setAttribute(
        "class",
        "ticmark absolute left-[0.5rem] mt-[10px] w-[17px] h-[17px] hidden group-hover:block"
      );
    }
    mainTask_imgtic.setAttribute("src", "images/tic.png");

    mainTask_imgdelete.setAttribute(
      "class",
      "del_t  absolute mt-2 w-[20px] h-[20px] right-[1rem] hover:scale-125"
    );
    mainTask_imgdelete.setAttribute("src", "images/delete.png");

    mainTaskIndivisual.appendChild(mainTask_checkbox);
    mainTaskIndivisual.appendChild(mainTask_label);
    mainTaskIndivisual.appendChild(mainTask_imgtic);
    mainTaskIndivisual.appendChild(mainTask_imgdelete);
    task_main_wrapper.appendChild(mainTaskIndivisual);

    //complete Task
    mainTaskIndivisual.addEventListener("click", (e) => {
      // complete the task
      categories.forEach((item, i) => {
        item.task.forEach((item, j) => {
          if (!item.isCompleted && e.target.id == item.id) {
            mainTaskIndivisual.children[0].classList.add("bg-green-400");
            mainTaskIndivisual.children[1].classList.add("line-through");
            mainTaskIndivisual.children[2].classList.remove("hidden");
            categories[i].task[j].isCompleted = true
          }
          else if (item.isCompleted && e.target.id == item.id) {
            mainTaskIndivisual.children[0].classList.remove("bg-green-400");
            mainTaskIndivisual.children[1].classList.remove("line-through");
            mainTaskIndivisual.children[2].classList.add("hidden");
            categories[i].task[j].isCompleted = false
          }
        })
      })
    });
  });
})

// click to the main task page create indivisual taks page 
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("task")) {
     update(event.target.id)
   document.getElementById(`task_number${event.target.id}`).innerHTML= event.target.lastChild.firstElementChild.firstElementChild.children[1].innerHTML;
    document.getElementById(`${event.target.id}ABC`).firstElementChild.classList.remove('hidden')
    img_indivisual.setAttribute("src", event.target.firstElementChild.src);
    document.getElementById(`taskType${event.target.id}`).innerHTML = event.target.lastChild.id;
    document.getElementById(`${event.target.id}AB`).classList.remove('hidden')
    tom = `${event.target.id}AB`
    tomm= `${event.target.id}ABC`
     update(event.target.id)
    moveleft();
  }
})
//Add the new  content in he task
addtaskbtn.addEventListener('click', (e) => {
  categories.forEach((item, i) => {

    const taskvalue = document.getElementById('taskname').value
    const optionvalue = document.getElementById('category_type').value
    if (item.title == optionvalue) {
      const newobj = { id:ind_id, text: taskvalue, isCompleted: false }
      const AddMe = document.getElementById(`${i}AB`)

      let mainTaskIndivisual = document.createElement("div");
      const mainTask_checkbox = document.createElement("input");
      const mainTask_label = document.createElement("label");
      const mainTask_imgtic = document.createElement("img");
      const mainTask_imgdelete = document.createElement("img");

      mainTaskIndivisual.setAttribute(
        "class",
        "task_indivisual relative group grid grid-cols-6 grid-flow-col bg-purple-500 rounded-md cursor-pointer "
      );
      mainTaskIndivisual.setAttribute('id', '777')

      mainTask_checkbox.setAttribute(
        "class",
        "checkbox relative m-2 w-[20px] h-[20px] bg-white appearance-none ring-1 ring-gray-950 rounded-full "
      );

      mainTask_label.setAttribute("class", "col-span-4 m-2  text-sm  w-[70%]");

      mainTask_label.innerText = taskvalue;
      {
        mainTask_imgtic.setAttribute(
          "class",
          "ticmark absolute left-[0.5rem] mt-[10px] w-[17px] h-[17px] hidden group-hover:block"
        );
      }
      mainTask_imgtic.setAttribute("src", "images/tic.png");

      mainTask_imgdelete.setAttribute(
        "class",
        "del_t  absolute mt-2 w-[20px] h-[20px] right-[1rem] hover:scale-125"
      );
      mainTask_imgdelete.setAttribute("src", "images/delete.png");

      mainTaskIndivisual.appendChild(mainTask_checkbox);
      mainTaskIndivisual.appendChild(mainTask_label);
      mainTaskIndivisual.appendChild(mainTask_imgtic);
      mainTaskIndivisual.appendChild(mainTask_imgdelete);
      AddMe.appendChild(mainTaskIndivisual);

      //complete Task
      mainTaskIndivisual.addEventListener("click", (e) => {
        // complete the task
        categories.forEach((item, i) => {
          item.task.forEach((item, j) => {
            if (!item.isCompleted && e.target.id == item.id) {
              mainTaskIndivisual.children[0].classList.add("bg-green-400");
              mainTaskIndivisual.children[1].classList.add("line-through");
              mainTaskIndivisual.children[2].classList.remove("hidden");
              categories[i].task[j].isCompleted = true
            }
            else if (item.isCompleted && e.target.id == item.id) {
              mainTaskIndivisual.children[0].classList.remove("bg-green-400");
              mainTaskIndivisual.children[1].classList.remove("line-through");
              mainTaskIndivisual.children[2].classList.add("hidden");
              categories[i].task[j].isCompleted = false
            }
          })
        })
      });
       item.task.push(newobj)
       storageUpdate()
        update(i)
      // addupdate(optionvalue)
      movetop();
    }
  })
})
const moveleft = () => {
  mainpage.classList.toggle("mainWrapperMove");
};
//back btn function
backbtn.addEventListener("click", () => {
  
  document.getElementById(tomm).firstElementChild.classList.add('hidden')
  document.getElementById(tom).classList.add('hidden')
  moveleft();
  update()
  
});

//move addtask
const movetop = () => {
  addpage.classList.toggle("addtaskWrapperTop");
  addbtn.classList.toggle("addbtntglTop");
  blurdiv.classList.toggle("backdropblur");
  document.getElementById("taskname").value = "";
};
addbtn.addEventListener("click", movetop);

//Complete Task


//reset Task
function resetTask() {
  document.getElementById("taskname").value = "";
  movetop();
}
