<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
        <title>SCH</title>
        <link href="{{url('/').mix('css/app.css')}}" rel="stylesheet" type="text/css">
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
        </style>
    </head>
    <body>
        <div id="root" class="container-fluid"></div>
        <script>url = "{{url('/')}}";</script>
        <script src="{{url('/').mix('js/apps/login.js')}}" ></script>
        <script src="{{url('/js/sw.js')}}" ></script>
        <noscript>
            <div style="border: 1px solid purple; padding: 10px">
                <span style="color:red">JavaScript is not enabled!</span>
            </div>
        </noscript>
    </body>
</html>