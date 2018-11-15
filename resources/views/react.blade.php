<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="{{ env('APP_NAME') }}"/>
    <meta property="og:url" content="{{ env('MIX_APP_URL') }}"/>
    <meta property="fb:app_id" content="722236854807128"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="http://market.zerocarbonproject.com/images/logo-black-fb.png"/>
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