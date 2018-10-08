<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SCH</title>
        <link href="{{url('/').mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#ff2d7a">

        <style>
            .form-group input {
                padding: 1.6rem;
                font-size: 1.6rem;
                border-radius: 50px;
            }

            .component-login {
                background: white;
                padding: 1.6rem;
                font-size: 2rem;
            }

            button.btn {
                padding: 0.8rem 1.6rem;
                font-size: 1.6rem;
                border-radius: 50px;
            }
        </style>
    </head>
    <body>
        <div id="root" class="container-fluid"></div>
        <script>url = "{{url('/')}}";</script>
        <script src="{{url('/').mix('js/apps/login.js')}}" ></script>
    </body>
</html>