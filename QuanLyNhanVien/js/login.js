function dang_nhap(){
    var obj = {}
    obj.UserName = UserName.value
    obj.Password = Password.value
    var kq =  Dang_Nhap(obj)
    if(kq != 'loginfalse')
    {
        alert("Đăng nhập thành công!!!")
        chuyen_trang_index()

    }else{
        alert("Đăng nhập thất bại!!!")
    }
}