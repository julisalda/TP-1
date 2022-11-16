let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", saveStudent);
let student = new Student();
let inscription = new Inscriptions;
let id = 1;
let add = true;
let idSeleccionado = null;

function saveStudent(){
    let studentName = document.getElementById("name").value;
    let studentSurname = document.getElementById("surname").value;
    let studentDNI = document.getElementById("dni").value;
    let studentAge = document.getElementById("age").value;
    let studentCurse = document.getElementById("curse").value;


    if(studentName == "" || studentSurname == ""){
        alert("Hay campos obligatorios vacios");
        return false;
    }

    if(add == true){
        let newStudent = new Student();

        newStudent.setName(studentName);
        newStudent.setSurname(studentSurname);
        newStudent.setDNI(studentDNI);
        newStudent.setAge(studentAge);
        newStudent.setCurse(studentCurse);
        id = id + 1;

        inscription.createStudent(newStudent)
        updateList(newStudent);
        
        clear();

    }else{
        let selected = inscription.getStudentById(idSelected);
        selected.name = studentName;
        selected.surname = studentSurname;
        selected.DNI = studentDNI;
        selected.age = studentAge;
        selected.curse = studentCurse;
        inscription.updateStudent(selected,idSeleccionado);
    }
};


function updateList(newStudent){
    let bodyTable = document.getElementById("tbody");
    let listaActualizada = inscription.getInscriptions();
    let contenidoDeLaTabla = '';
    for (let index = 0; index < listaActualizada.length; index++) {
        const nuevalista = listaActualizada[index];
        contenidoDeLaTabla += `
        <tr>
            <th scope="row">${newStudent.getName()}</th>
            <td>${newStudent.getSurname()}</td>
            <td>${newStudent.getDNI()}</td>
            <td>${newStudent.getAge()}</td>
            <td>${newStudent.getCurse()}</td>
                <button class="btn btn-warning" onclick="verPorId(${student.getId()})">
                    Modificar
                </button>
                <button class="btn btn-danger" onclick="eliminar(${student.getId()})">
                    Eliminar
                </button>
            </td>
        </tr>
        `;
    }
    bodyTable.innerHTML = contenidoDeLaTabla;
}


function clear() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("curse").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("age").value = "";

}


function seeById(id) {
    let selected = inscription.getInscriptionById(id);
    document.getElementById("name").value = selected.getName();
    document.getElementById("surname").value = selected.getSurname();
    document.getElementById("DNI").value = selected.getDNI();
    document.getElementById("age").value = selected.getAge();
    document.getElementById("curse").value = selected.getCurse();

    // deshabilito el modo agregar
    add = false;

    // guardo el id del registro
    idSelected = id;

}

