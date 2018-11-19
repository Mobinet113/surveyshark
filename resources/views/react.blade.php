<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />
    <!-- Icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png">

    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/manifest.json">

    <meta property="og:title" content="{{ env('APP_NAME') }}"/>
    <meta property="og:url" content="{{ env('MIX_APP_URL') }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:description"
          content="Survey Shark is a bespoke survey tool for team members. Designed by Now|Comms."/>

    <link rel="apple-touch-icon" sizes="180x180"
          href="https://www.zerocarbonproject.com/wp-content/uploads/fbrfg/apple-touch-icon.png?v=kPxJ6y3lgO">
    <link rel="icon" type="image/png" sizes="32x32"
          href="https://www.zerocarbonproject.com/wp-content/uploads/fbrfg/favicon-32x32.png?v=kPxJ6y3lgO">
    <link rel="icon" type="image/png" sizes="16x16"
          href="https://www.zerocarbonproject.com/wp-content/uploads/fbrfg/favicon-16x16.png?v=kPxJ6y3lgO">
    <link rel="manifest"
          href="https://www.zerocarbonproject.com/wp-content/uploads/fbrfg/site.webmanifest?v=kPxJ6y3lgO">
    <link rel="shortcut icon"
          href="https://www.zerocarbonproject.com/wp-content/uploads/fbrfg/favicon.ico?v=kPxJ6y3lgO">


    <title>{{ env('APP_NAME') }}</title>

</head>
<body>

<div id="survey-shark-wrapper"></div>
<script src="{{ mix('js/app.js')  }}?101"></script>

</body>

<footer>

</footer>
</html>