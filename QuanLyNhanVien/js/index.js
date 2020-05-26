
load_data();

function load_data() {
    var html = "";
    Doc_Danh_Sach_Nhan_Vien().forEach(element => {
        html += `<tr>
         <td scope="row">${element.Account.UserName}</td>
         <td>${element.Account.Password.substr(0,40)+"..."}</td>
         <td>${element.Email}</td>
         <td><td><button type="button" class="btn btn-primary" onclick="sua('${element.Account.UserName}','${element.Account.Password}','${element.Email}')" data-toggle="modal" data-target="#modelId">
         Sửa
       </button></td></td>
       </tr>`
    });
 

 
    content.innerHTML = html;
}


function sua(username, password, email) {
    UserName.value = username
    Password.value = password
    Email.value = email
}

function DongYSua() {

    var acc = {};
    acc.UserName = UserName.value;
    acc.Password = Password.value;
    var emp = {};
    emp.Account = acc;
    emp.Email = Email.value;
    document.getElementById("closeSua").click();
    Sua_Tai_Khoan_Nhan_Vien(emp)
    load_data()
}