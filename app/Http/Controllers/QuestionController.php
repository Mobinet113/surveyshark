<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $questions = Question::all();

    return view('admin.questions')->with([ "questions" => $questions ]);
  }

  public function indexApi()
  {
    return Question::all();
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $question = new Question();

    $question->name = $request->name;
    $question->title = $request->title;
    $question->subtitle = $request->subtitle;
    $question->placeholder = $request->placeholder;
    $question->answers = json_encode( $request->answerTitle );
    $question->type = $request->type;

    $question->save();

    return redirect('/admin/questions');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Question $question
   * @return \Illuminate\Http\Response
   */
  public function show(Question $question)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Question $question
   * @return \Illuminate\Http\Response
   */
  public function edit(Question $question)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Question $question
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Question $question)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Question $question
   * @return \Illuminate\Http\Response
   */
  public function destroy(Question $question)
  {
    //
  }
}
