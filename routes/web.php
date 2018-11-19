<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Admin Routes

// Public React Route
Route::view('/{path?}', 'react')
     ->where('path', '^((?!api|admin|login|register|home).)*$')
     ->name('react');

Auth::routes();

Route::get('/admin', 'Admin\HomeController@index')->name('home');
Route::get('/admin/answers', 'AnswerController@index')->name('admin.answers')->middleware('auth');

Route::get('/admin/questions', 'QuestionController@index')->name('admin.questions')->middleware('auth');
Route::post('admin/questions', 'QuestionController@store')->name('admin.questions')->middleware('auth');