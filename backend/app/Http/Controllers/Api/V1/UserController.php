<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\User;

class UserController extends Controller
{
    public function index(): UserCollection
    {
        $users = User::all();
        return new UserCollection($users);
    }
}
