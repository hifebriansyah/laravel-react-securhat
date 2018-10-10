<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SCH</title>
        <link href="{{url('/').mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Chrome App -->
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ff2d7a">

        <!-- Safari App -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-title" content="Securhat">
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <style>

            .fab.hide {
                right: -3rem;
            }

            .fab {
                position: fixed;
                width: 5rem;
                right: 1.5rem;
                bottom: 1.5rem;
                z-index: 1020;
                opacity: 1;
                transition: 0.5s;

            }

            .fab.active .fab-buttons {
                opacity: 1;
                visibility: visible;
            }

            .fab.active .fab-buttons__link {
                transform: scaleY(1) scaleX(1) translateY(-16px) translateX(0px);
            }

            .fab-action-button.active + .fab-buttons .fab-buttons__link:before {
                visibility: visible;
                opacity: 1;
                transform: scale(1);
                transform-origin: right center 0;
                transition-delay: 0.3s;
            }

            .fab-action-button {
                position: absolute;
                bottom: 0;
                display: block;
                width: 56px;
                height: 56px;
                background-color: #29B6F6;
                border-radius: 50%;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }

            .fab-buttons {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 50px;
                list-style: none;
                margin: 0;
                padding: 0;
                opacity: 0;
                visibility: hidden;
                transition: 0.2s;
            }

            .fab-action-button__icon {
                display: inline-block;
                width: 56px;
                height: 56px;
                background: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTIgMS42MSAwIDIuOTItMS4zMSAyLjkyLTIuOTJzLTEuMzEtMi45Mi0yLjkyLTIuOTJ6Ii8+Cjwvc3ZnPg==") center no-repeat;
            }

            .fab-buttons__item {
                display: block;
                text-align: center;
                margin: 12px 0;
            }

            .fab-buttons__link {
                display: inline-block;
                width: 40px;
                height: 40px;
                text-decoration: none;
                background-color: #ffffff;
                border-radius: 50%;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                transform: scaleY(0.5) scaleX(0.5) translateY(0px) translateX(0px);
                -moz-transition: .3s;
                -webkit-transition: .3s;
                -o-transition: .3s;
                transition: .3s;
            }

            [data-tooltip]:before {
                top: 50%;
                margin-top: -11px;
                font-weight: 600;
                border-radius: 2px;
                background: #585858;
                color: #fff;
                content: attr(data-tooltip);
                font-size: 12px;
                text-decoration: none;
                visibility: hidden;
                opacity: 0;
                padding: 4px 7px;
                margin-right: 12px;
                position: absolute;
                transform: scale(0);
                right: 100%;
                white-space: nowrap;
                transform-origin: top right;
                transition: all .3s cubic-bezier(.25, .8, .25, 1);
            }

            [data-tooltip].active:before {
                visibility: visible;
                opacity: 1;
                transform: scale(1);
                transform-origin: right center 0;
            }

            .icon-material {
                display: inline-block;
                width: 40px;
                height: 40px;
            }

            .icon-material_fb {
                background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1mYWNlYm9vayI+CgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHogICAgIE00MzMuNSw1MXY3Ni41aC01MWMtMTUuMywwLTI1LjUsMTAuMi0yNS41LDI1LjV2NTFoNzYuNXY3Ni41SDM1N1Y0NTloLTc2LjVWMjgwLjVoLTUxVjIwNGg1MXYtNjMuNzUgICAgQzI4MC41LDkxLjgsMzIxLjMsNTEsMzY5Ljc1LDUxSDQzMy41eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") center no-repeat;
            }

            .icon-material_gp {
                background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1ncGx1cyI+CgkJPHBhdGggZD0iTTIzNC42LDE3NS45NWMwLTI1LjUtMTUuMy03Ni41LTUzLjU1LTc2LjVjLTE1LjMsMC0zMy4xNSwxMC4yLTMzLjE1LDQzLjM1YzAsMzAuNiwxNS4zLDczLjk1LDUxLDczLjk1ICAgIEMxOTguOSwyMTYuNzUsMjM0LjYsMjE0LjIsMjM0LjYsMTc1Ljk1eiBNMjE5LjMsMzAwLjljLTIuNTUsMC01LjEsMC03LjY1LDBsMCwwYy03LjY1LDAtMzAuNiwyLjU1LTQ1LjksNy42NDkgICAgQzE0Ny45LDMxMy42NSwxMjcuNSwzMjYuNCwxMjcuNSwzNTEuOWMwLDI4LjA1LDI1LjUsNTYuMSw3Ni41LDU2LjFjMzguMjUsMCw2MS4yLTI1LjUsNjEuMi01MSAgICBDMjY1LjIsMzM5LjE1LDI1Mi40NSwzMjYuNCwyMTkuMywzMDAuOXogTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxICAgIFY1MUM1MTAsMjIuOTUsNDg3LjA1LDAsNDU5LDB6IE0xODEuMDUsNDM4LjZjLTcxLjQsMC0xMDQuNTUtNDAuOC0xMDQuNTUtNzYuNWMwLTEyLjc1LDIuNTUtNDAuOCwzOC4yNS02MS4xOTkgICAgYzIwLjQtMTIuNzUsNDUuOS0yMC40LDc5LjA1LTIyLjk1Yy01LjEtNS4xMDEtNy42NS0xMi43NS03LjY1LTI1LjVjMC01LjEsMC03LjY1LDIuNTUtMTIuNzVoLTEwLjJjLTUxLDAtODEuNi0zOC4yNS04MS42LTc2LjUgICAgYzAtNDMuMzUsMzMuMTUtOTEuOCwxMDQuNTUtOTEuOGgxMDcuMWwtNy42NDksNy42NUwyODMuMDUsOTYuOWwtMi41NSwyLjU1aC0xNy44NWMxMC4xOTksMTAuMiwyMi45NDksMjguMDUsMjIuOTQ5LDU2LjEgICAgYzAsMzUuNy0xNy44NSw1My41NS00MC44LDY4Ljg1Yy01LjEsMi41NS0xMC4yLDEwLjItMTAuMiwxNy44NXM1LjEsMTIuNzUsMTAuMiwxNS4zYzIuNTUsMi41NSw3LjY1LDUuMTAxLDEyLjc1LDcuNjUgICAgYzIwLjQsMTUuMyw0OC40NSwzMy4xNDksNDguNDUsNzMuOTVDMzA2LDM4NS4wNSwyNzIuODUsNDM4LjYsMTgxLjA1LDQzOC42eiBNNDMzLjUsMjU1aC01MXY1MUgzNTd2LTUxaC01MXYtMjUuNWg1MXYtNTFoMjUuNXY1MSAgICBoNTFWMjU1eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") center no-repeat;
            }

            .icon-material_tw {
                background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC10d2l0dGVyIj4KCQk8cGF0aCBkPSJNNDU5LDBINTFDMjIuOTUsMCwwLDIyLjk1LDAsNTF2NDA4YzAsMjguMDUsMjIuOTUsNTEsNTEsNTFoNDA4YzI4LjA1LDAsNTEtMjIuOTUsNTEtNTFWNTFDNTEwLDIyLjk1LDQ4Ny4wNSwwLDQ1OSwweiAgICAgTTQwMC4zNSwxODYuMTVjLTIuNTUsMTE3LjMtNzYuNSwxOTguOS0xODguNywyMDRDMTY1Ljc1LDM5Mi43LDEzMi42LDM3Ny40LDEwMiwzNTkuNTVjMzMuMTUsNS4xMDEsNzYuNS03LjY0OSw5OS40NS0yOC4wNSAgICBjLTMzLjE1LTIuNTUtNTMuNTUtMjAuNC02My43NS00OC40NWMxMC4yLDIuNTUsMjAuNCwwLDI4LjA1LDBjLTMwLjYtMTAuMi01MS0yOC4wNS01My41NS02OC44NWM3LjY1LDUuMSwxNy44NSw3LjY1LDI4LjA1LDcuNjUgICAgYy0yMi45NS0xMi43NS0zOC4yNS02MS4yLTIwLjQtOTEuOGMzMy4xNSwzNS43LDczLjk1LDY2LjMsMTQwLjI1LDcxLjRjLTE3Ljg1LTcxLjQsNzkuMDUxLTEwOS42NSwxMTcuMzAxLTYxLjIgICAgYzE3Ljg1LTIuNTUsMzAuNi0xMC4yLDQzLjM1LTE1LjNjLTUuMSwxNy44NS0xNS4zLDI4LjA1LTI4LjA1LDM4LjI1YzEyLjc1LTIuNTUsMjUuNS01LjEsMzUuNy0xMC4yICAgIEM0MjUuODUsMTY1Ljc1LDQxMy4xLDE3NS45NSw0MDAuMzUsMTg2LjE1eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") center no-repeat;
            }

            .icon-material_li {
                background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1saW5rZWRpbiI+CgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHogICAgIE0xNTMsNDMzLjVINzYuNVYyMDRIMTUzVjQzMy41eiBNMTE0Ljc1LDE2MC42NWMtMjUuNSwwLTQ1LjktMjAuNC00NS45LTQ1LjlzMjAuNC00NS45LDQ1LjktNDUuOXM0NS45LDIwLjQsNDUuOSw0NS45ICAgIFMxNDAuMjUsMTYwLjY1LDExNC43NSwxNjAuNjV6IE00MzMuNSw0MzMuNUgzNTdWMjk4LjM1YzAtMjAuMzk5LTE3Ljg1LTM4LjI1LTM4LjI1LTM4LjI1cy0zOC4yNSwxNy44NTEtMzguMjUsMzguMjVWNDMzLjVIMjA0ICAgIFYyMDRoNzYuNXYzMC42YzEyLjc1LTIwLjQsNDAuOC0zNS43LDYzLjc1LTM1LjdjNDguNDUsMCw4OS4yNSw0MC44LDg5LjI1LDg5LjI1VjQzMy41eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=") center no-repeat;
            }
        </style>
    </head>
    <body>
        <div id="root" class="container-fluid"></div>
        <script>url = "{{url('/')}}";</script>
        <script src="{{url('/').mix('js/apps/main.js')}}" ></script>
    </body>
</html>