@extends('layouts.app')

@section('content')
    <div class="ui container stackable fluid">
        <table class="ui table blue">
            <thead>
            <tr>
                <th>Question Title</th>
                <th>Subtitle</th>
                <th>Type</th>
                <th>Created</th>
            </tr>
            </thead>

            <tbody>
            @foreach( $questions as $question )
                <tr>
                    <td>{{ $question->title }}</td>
                    <td>{{ $question->subtitle }}</td>
                    <td>{{ $question->type }}</td>
                    <td>{{ $question->created_at }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>


        <form class="ui form" method="POST" action="">
            @csrf

            <h2>New Question</h2>

            <div class="field">
                <label>Question Type</label>
                <select class="ui dropdown" name="type">
                    <option value="text">Normal Text</option>
                    <option value="textArea">Text Area</option>
                    <option value="checkbox">Multi-Select Checkboxes</option>
                    <option value="radio">Single-Selection Radio</option>
                    <option value="bool">Yes or No (boolean)</option>
                    <option value="slider">1-10 Score</option>
                </select>
            </div>

            <div class="two fields">
                <div class="field">
                    <label>
                        Question Name
                        <small>Programmatic title. No spaces</small>
                    </label>
                    <input type="text" name="name" placeholder="Question Name">
                </div>

                <div class="field">
                    <label>Question Title</label>
                    <input type="text" name="title" placeholder="Question Title">
                </div>
            </div>

            <div class="field">
                <label>Question Sub Title</label>
                <input type="text" name="subtitle" placeholder="Question Sub Title">
            </div>

            <div class="field">
                <label>Question Placeholder</label>
                <input type="text" name="placeholder" placeholder="Question Placeholder">
            </div>

            <div class="field">
                <h3>Answer Selections</h3>

                <div class="multi-input">
                    <div class="two fields repeatable">
                        <div class="field">
                            <label>Answer Title</label>
                            <input type="text" name="answerTitle[]" placeholder="Answer Title">
                        </div>
                        <div class="field">
                            <label>Answer Name</label>
                            <input type="text" name="answerName[]" placeholder="Answer Name">
                        </div>

                        <div class="field">
                            <label>&nbsp;</label>
                            <button class="ui button add-row" >+</button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="ui primary button">Create Question</button>
        </form>

    </div>
@endsection
