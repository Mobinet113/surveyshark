<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <nav class="ui top attached menu">
        <a class="header item" href="/admin">{{ config('app.name', 'Laravel') }}</a>

        <a class="item" href="/admin/answers">Answers</a>
        <a class="item" href="/admin/questions">Questions</a>

        <div class="right item">
            <div class="ui simple dropdown item">
                @if ( Auth::user() )
                    {{ Auth::user()->name }}
                @endif
                <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item" href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>
                </div>
            </div>
        </div>
    </nav>


    <main class="py-4">
        @yield('content')
    </main>
</div>
</body>
</html>
