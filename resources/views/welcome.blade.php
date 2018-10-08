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
    </head>
    <body>
        <div id="root" class="container-fluid"></div>
        <script>url = "{{url('/')}}";</script>
        <script src="{{url('/').mix('js/apps/post.js')}}" ></script>
    </body>
</html>