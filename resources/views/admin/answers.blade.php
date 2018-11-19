@extends('layouts.app')

@section('content')
    <div class="ui container stackable fluid">
        <table class="ui table blue">
            <thead>
                <tr>
                    <th>Question Name</th>
                    <th>Answer</th>
                    <th>Created</th>
                </tr>
            </thead>

            <tbody>
                @foreach( $answers as $answer )
                    <tr>
                        <td>{{ $answer->question_name }}</td>
                        <td>{{ $answer->answer }}</td>
                        <td>{{ $answer->created_at }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
