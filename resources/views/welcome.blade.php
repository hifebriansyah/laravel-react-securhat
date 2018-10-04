<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Product listing Application</title>
        <link href="{{url('/').mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#ff2d7a">

        <style>
            body {
                color: #14171a;
                background: #e6ecf0;
            }
            * {
                margin: 0px;
                padding: 0px;
            }

            a:not([href]):not([tabindex]) {
                color: #ed0058;
            }

            .navbar {
                background-color: #ff2d7a; /*#fff;*/
                margin-bottom: 8px;
            }

            .navbar a{
                color: /*#ed0058*/ #fff;
            }

            .container-fluid{
                padding-right: 0px;
                padding-left: 0px;
            }

            .posts li{
                list-style: none;
                background: #fff;
                margin-bottom: 8px;
            }

            .posts .header{
                text-align: center;
            }

            .posts .header .img {
                width: 80px;
                height : 80px;
                margin: 0 auto;
                border-radius: 50%;
                border-bottom: 1px solid #ed0058;
                background-size: cover;
                background-position: center;
                background-image: url({{url('/')}}/uploads/dummy/22.jpg);
            }

            .posts .header {
                padding: 8px;
                padding-bottom: 0px;
                font-size: 20px;
            }

            .posts .header span {
                color: #c0c0c0;
                font-style: italic;
            }

            .posts .header a:before,
            .posts .header a:after {
                content: '\221D';
                display: inline-block;
                padding: 4px 12px;
                transform:/* translateY(2px)*/;
            }

            .posts .header a:before{
                transform: rotateY(180deg)/* translateY(2px)*/;
            }

            .posts .body {
                display: block;
                margin: 0px auto;
                content: "";
                border-bottom: 1px dashed #ddd;
                padding: 8px;
                padding-bottom: 16px;
                text-align: center;
                font-size: 24px;
            }

            .posts .footer {
                text-align: center;
            }

            .posts .footer a {
                display: block;
                padding: 8px;
            }

            .posts .footer a:hover {
                color: #ff2d7a;
                background: rgba(200,200,200,0.1);
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div id="root" class="container-fluid"></div>
        <script>url = "{{url('/')}}";</script>
        <script src="{{url('/').mix('js/app.js')}}" ></script>
    </body>
</html>