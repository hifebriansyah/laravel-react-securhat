<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <title>SCH</title>
        <link href="{{url('/').mix('gen/css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="manifest" href="/manifest.json" />

        <!-- Favicon -->
        <link rel="icon" type="image/png" sizes="72x72" href="./images/icons/icon-72x72.png">

        <!-- Chrome App -->
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ff2d7a">

        <!-- Safari App -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-title" content="Securhat">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">

        <style>
            .component-login {
                position: absolute;
                top: calc(50% - 50px);
                left: 50%;
                transform: translate(-50%, -50%);
            }

            body {
                background-color: #ff2d7a;
            }

            img {
                width: 10rem;
                margin: 0 auto;
                display: block;
            }

            button {
                background-color: #ff2d7a !important;
                width: 350px !important;
                margin: 50px auto !important;
                border-radius: 50px !important;
                border: 2px solid #fff !important;
                color: #fff !important;
            }

            input,
            input:hover,
            input:focus,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill {
                -webkit-text-fill-color: white !important;
                -webkit-box-shadow: 0 0 0 150px #ff2d7a inset !important;
                background-image: none !important;
                color:#fff !important;
                background-color: #ff2d7a !important;
                background: #ff2d7a !important;
                border:none !important;
                border-bottom: 2px solid #fff !important;
                font-size: 2rem !important;
                padding: 0.8rem !important;
                width: 350px !important;
                margin: 32px auto !important;
                border-radius: 0px !important;
                outline: none !important;
                box-shadow: none;
                width: 100%;
                display: block;
                outline-offset: 0;
            }

            input::placeholder {
                color:#fff !important;
            }
        </style>
    </head>
    <body>
        <div id="root" class="container-fluid"></div>
        <script>url = "{{url('/')}}";</script>
        <script src="{{url('/').mix('gen/js/apps/login.js')}}" ></script>
        <script src="{{url('gen/js/sw.js')}}" ></script>
        <noscript>
            <div style="border: 1px solid purple; padding: 10px">
                <span style="color:red">JavaScript is not enabled!</span>
            </div>
        </noscript>
    </body>
</html>