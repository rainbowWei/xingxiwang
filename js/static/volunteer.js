//选项卡效果
$(".tab2 li").mouseover(function(){
    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
        $(".content1>div").eq(_index).addClass("on2").siblings().removeClass("on2");
        $(this).addClass("tab_on").siblings().removeClass("tab_on");
       
});



$("#submit").on("click",function(){
    var Name = $('#name').val();
    var Age = $('#age').val();
    var City = $('#city').val();
    var Phone = $('#phone').val();
    var Mailbox = $('#mailbox').val();
    var WeChat = $('#weChat').val();
    var Culture = $('#culture').val();
    var Speciality = $('#speciality').val();
    var Occupation = $('#occupation').val();
    var Scholl = $('#scholl').val();
    var Project = $('#project').val();
    var Experience = $('#experience').val();

    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
    // var contac = /^1[345789]\d{9}$/g;
        if((Mailbox == "")){
            alert("邮箱不能为空！！");
            return false;
        }else if((Age == "")){
            alert("年龄不能为空！！");
            return false;
        }else if(!re.exec(Mailbox)){
            alert("输入邮箱不合法");
              return;
        }else{
            alert("提交成功");
        }
     
        // $.ajax({
        //         url:'',
        //         data:{},
        //         dataType:'html',
        //         type:'post',
        //         success:function(mydata){
        //             alert("提交成功");
        //             $('#name').val("");
        //             $('#age').val("");
        //             $('#city').val("");
        //             $('#phone').val("");
        //             $('#mailbox').val("");
        //             $('#weChat').val("");
        //             $('#culture').val("");
        //             $('#speciality').val("");
        //             $('#occupation').val("");
        //             $('#scholl').val("");
        //             $('#project').val("");
        //             $('#experience').val("");
                    
                    
        //         }
        //     })
});