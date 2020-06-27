# Simple contact form with Azure Static Web Apps

This codebase shows how to build a simple contact form with Azure Static Web Apps and Azure Functions.

## How to use

- Copy / Fork this repository / Get your static website to GitHub (public or private)

- Create an Azure Static Web App, point to your GitHub repo --> [Getting started](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html))

- Create a reCAPTCHA v3 token --> [portal](https://www.google.com/recaptcha/)

  Add your site key to the index.html on line 25

- Create a SendGrid (free) subscription --> [here](https://sendgrid.com/pricing/)

- After first deployment add configuration keys via the Azure Portal:

  `RecaptchaKey`: the secret key from reCAPTCHA
  
  `SendGridKey`: the secret from SendGrid allowing you to send mails via their API