 const items = [];

        function addItem() {
            const itemInput = document.getElementById('itemInput');
            const dataInput = document.getElementById('dataInput');
            const item = itemInput.value.trim();
            const data = dataInput.value;

            if (item && data) {
                const newItem = { item, data };
                items.push(newItem);

                const li = document.createElement('li');
                li.textContent = `${item} - ${data}`;
                document.getElementById('todoList').appendChild(li);

                itemInput.value = '';
                dataInput.value = '';
            } else {
                alert('Compila tutti i campi');
            }
        }

        document.getElementById('dataInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addItem();
        });
        document.getElementById('itemInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addItem();
        });

        function saveItems() {
            localStorage.setItem('todoItems', JSON.stringify(items));
        }

        function loadItems() {
            const saved = localStorage.getItem('todoItems');
            if (saved) {
                items.push(...JSON.parse(saved));
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `${item.item} - ${item.data}`;
                    document.getElementById('todoList').appendChild(li);
                });
            }
        }

        const originalAddItem = addItem;
        addItem = function() {
            originalAddItem();
            saveItems();
        };

        function deleteItem(index) {
            items.splice(index, 1);
            renderList();
            saveItems();
        }

        function renderList() {
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = '';
            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.justifyContent = 'space-between';
                li.style.alignItems = 'center';
                
                const span = document.createElement('span');
                span.textContent = `${item.item} - ${item.data}`;
                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '✓';
                deleteBtn.onclick = () => deleteItem(index);
                
                li.appendChild(span);
                li.appendChild(deleteBtn);

                                deleteBtn.style.marginLeft = '10px';
                todoList.appendChild(li);
            });
        }

        // Modify loadItems to use renderList
        const originalLoadItems = loadItems;
        loadItems = function() {
            const saved = localStorage.getItem('todoItems');
            if (saved) {
                items.push(...JSON.parse(saved));
            }
            renderList();
        };

        // Modify addItem to use renderList
        addItem = function() {
            const itemInput = document.getElementById('itemInput');
            const dataInput = document.getElementById('dataInput');
            const item = itemInput.value.trim();
            const data = dataInput.value;

            if (item && data) {
                items.push({ item, data });
                itemInput.value = '';
                dataInput.value = '';
                renderList();
                saveItems();
            } else {
                alert('Compila tutti i campi');
            }
        };

        loadItems();