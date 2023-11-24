<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    public function index(): UserCollection
    {
        $users = User::all();
        return new UserCollection($users);
    }

    public function store(UserStoreRequest $request): UserResource
    {

        $validated = $request->validated();
        $user = User::create($validated);

        return new UserResource($user);
    }
}
