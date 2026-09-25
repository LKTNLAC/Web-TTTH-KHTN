function Tong()
{
    var s1, s2, kq;
    s1=document.getElementById('s1').value; 
    s2=document.getElementById('s2').value;
    s1=parseInt(s1,10);
    s2=parseInt(s2,10);
    kq=s1+s2;
    alert(s1 + " + " + s2 + " = " + kq)
}
$('#btn-dangnhap').click(function()
{
    var tendangnhap,matkhau;
    tendangnhap=$('#tendangnhap').val();
    matkhau=$('#matkhau').val();
    if(tendangnhap==""||matkhau=="")
    {
        alert("Thông tin không được để trống");
    }
    else
    {
        alert("Xin chào " + tendangnhap);
    }
})