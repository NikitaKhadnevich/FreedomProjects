// const storage = {
//     getItem(key) {
//         JSON.parse(localStorage.getItem(key))
//     }
// };


// storage.getItem('str');

      
      let todos = JSON.parse(localStorage.getItem("todos")) || [];

    //   let todos;
    //   const persistedTodos = JSON.parse(localStorage.getItem("todos"));

    //   if(persistedTodos) {
    //     todos = persistedTodos;
    //   } else {
    //     todos = [];
    //   }
      

      const deleteTodo = (index) => {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
      };

      const addTodo = (value) => {
        const task = {
            value,
            createdAt: new Date(),
        };
        
        todos.push(task);
        
        localStorage.setItem("todos", JSON.stringify(todos));
      };

      const sortBy = (val) => {
        switch (val) {
          case "name":
            todos.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a.value < b.value) {
                return -1;
              } else return 0;
            });
            break;
          case "date":
            todos.sort((a, b) => {
              if (+a.createdAt < +b.createdAt) {
                return 1;
              } else if (+a.createdAt > +b.createdAt) {
                return -1;
              } else return 0;
            });
            break;
        }

        render();
      };

      const render = (data = todos) => {
        const innerData = data.reduce((str, item, i) => {
          return (
            str +
            `<li>
              <span data-num="${i}" id="deleteButton">\&times</span>
              <p>${item?.value}</p>
              <p>${item?.createdAt}</p> 
            </li>`
          );
        }, "");

        ul.innerHTML = innerData;
      };

      button.onclick = function (e) {
        e.preventDefault();
        const { value } = input;

        addTodo(value);
        render();
      };

      ul.onclick = function (e) {
        if (e.target.id === "deleteButton") {
          deleteTodo(e.target.dataset.num);


          render();
        }
      };

      sort.onchange = function (e) {
        sortBy(e.target.value);

        render();
      };

      filter.addEventListener('input', function (e) {
        const { value: inputValue } = e.target; // e.target.value

        const filteredData = todos.filter( 
            function(item, i, arr) {
                return item.value.includes(inputValue);
            }
        );

        render(filteredData);
      });


     render();