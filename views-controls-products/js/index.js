const nameProduct = document.getElementById("name");
const priceProduct = document.getElementById("price");
const descriptionProduct = document.getElementById("description");
const form = document.querySelector("form");
const buttonAdd = document.getElementById("button-add");
const buttonCancel = document.getElementById("button-cancel");
const tbody = document.getElementById("data");
const statusOK = 200;
let edit = false;
let idUpdateProduct;

/**
 * Función que carga los datos traidos por el metodo GET a la tabla
 * @param data
 */
const showProducts = (data) => {
  data.forEach((product) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>$${product.price}</td>
            <td>
                <button class="button-table button-update" id="update${product.id}"><i class="bi bi-pencil-square"></i></button>
                <button class="button-table button-delete" id="delete${product.id}"><i class="bi bi-trash3-fill"></i></button>
            </td>
        `;
    tbody.appendChild(tr);

    const buttonDelete = document.getElementById(`delete${product.id}`);
    const buttonUpdate = document.getElementById(`update${product.id}`);
    buttonDelete.addEventListener("click", () => {
      deleteProduct(product.id);
    });

    buttonUpdate.addEventListener("click", () => {
      idUpdateProduct = product.id;
      edit = true;
      buttonAdd.innerHTML = "Edit";
      loadForm(product.id);
    });
  });
};

buttonCancel.addEventListener("click", () => {
  cleanText();
  edit = false;
  buttonAdd.innerHTML = "Add";
});

/**
 * La funcion se encarga de consultar todos los datos a la API
 */
const show = async () => {
  const response = await fetch(endopintGET);
  const data = await response.json();
  const status = response.status;
  if (status !== statusOK) {
    alert(`Ha ocurrido un error: ${status}`);
    return;
  }
  showProducts(data);
};

/**
 * Función que agrega un nuevo producto metodo POST
 * @param newProduct
 */
const createNewProduct = async (newProduct) => {
  const response = await fetch(endpointPOST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
  const status = response.status;
  if (status !== statusOK) {
    alert(`No se pudo registrar, ha ocurrido un error: ${status}`);
    return;
  }
  alert("Se ha registrado con exito");
  location.reload();
};

/**
 * Función que se encarga de actualizar un producto metodo PUT
 * @param id
 * @param updateProduct
 */
const updateProduct = async (id, updateProduct) => {
  const response = await fetch(`${endpointPUT}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateProduct),
  });
  const status = response.status;
  if (status !== statusOK) {
    alert(`No se pudo actualizar, ha ocurrido un error: ${status}`);
    return;
  }
  alert("Se ha actualizado con exito");
  location.reload();
};

/**
 * Función que se encarga de eliminar un producto metodo DELETE
 * @param id
 */
const deleteProduct = async (id) => {
  const response = await fetch(`${endpointDELETE}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const status = response.status;
  if (status !== statusOK) {
    alert(`No se pudo eliminar, ha ocurrido un error: ${status}`);
    return;
  }
  alert("Se ha eliminado con exito");
  location.reload();
};

/**
 * Función que trae un producto por su id por el netodo GET y carga los datos al fotmulario para actualizar
 * @param id
 */
const loadForm = async (id) => {
  const response = await fetch(`${endpointGETId}/${id}`);
  const data = await response.json();
  const status = response.status;
  if (status !== statusOK) {
    alert(`Ha ocurrido un error: ${status}`);
    return;
  }
  nameProduct.value = data.name;
  priceProduct.value = data.price;
  descriptionProduct.value = data.description;
};

/**
 * Evento submit del formulario
 */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: nameProduct.value,
    description: descriptionProduct.value,
    price: Number(priceProduct.value),
  };
  // si edit es false se crea un nuevo prducto
  if (!edit) {
    createNewProduct(product);
  } else {
    updateProduct(idUpdateProduct, product);
  }
});

const cleanText = () => {
  nameProduct.value = "";
  priceProduct.value = "";
  descriptionProduct.value = "";
};

show();
