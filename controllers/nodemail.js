var nodemailer = require('nodemailer');

exports.sendmail = function (req, res, next) {
    var mail = req.body.mailaddress;
    //检测邮箱地址是否为空
    if (!mail) {
        return res.render("index", {message: "请输入邮箱地址！"});
    }
    //检测邮箱地址是否符合规范
    var reg = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;
    if (!mail.match(reg)) {
        return res.render("index", {message: "邮箱地址不符合规范，请重新输入！"});
    }
    //邮件发送
    var transporter = nodemailer.createTransport({
        service: '163',
        auth: {
            user: '',//你的163邮箱账号
            pass: ''//你的163邮箱密码
        }
    });
    var mailOptions = {
        from: '', // sender address
        to:mail, // list of receivers
        subject: '测试邮件', // Subject line
        text: 'Nodejs之邮件发送', // plaintext body
        html:"<h2>欢迎关注我的GitHub，一起学习Nodejs。https://github.com/Chen-xy</h2>"
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(!error){
            return res.render("index", {message: "邮件发送成功，请注意查收！"});
        }else{
            console.log(error);
            return res.render("index", {message: "邮件发送失败，请稍后重试！"});
        }
    });

};
