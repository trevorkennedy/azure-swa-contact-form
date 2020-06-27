const querystring = require('querystring');
const reCAPTCHA = require('recaptcha2');
const ejs = require('ejs');
const fs = require('fs');

var recaptcha = new reCAPTCHA({
    secretKey: process.env["RecaptchaKey"],
    ssl: true
});

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var redirectUrl = req.query.redirectUrl || "/";
    var form = querystring.parse(req.body);

    if (!form['g-recaptcha-response']) {
        context.res = {
            status: 400,
            value: error
        };
        return;
    }

    await recaptcha.validate(form['g-recaptcha-response']); context.bindings.sendGrid = getEmail(form);
    context.res = {
        status: 302,
        headers: {
            "location": redirectUrl
        }
    };
    return;

    function getEmail(formData) {
        let body = ejs.render(fs.readFileSync("ContactForm/mailtemplate.ejs", 'utf-8'), formData, {})
        var message = {
            subject: "Contact Form was submitted",
            content: [{
                type: 'text/html',
                value: body
            }]
        };

        return message;
    }
};