<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

  protected $table = 'questions';

  public function answers()
  {
    $this->hasMany('App\Answer');
  }
}
