<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function index(): UserCollection
    {
        $users = User::paginate(1);
        return new UserCollection($users);
    }

    public function store(UserStoreRequest $request): UserResource
    {

        $validated = $request->validated();
        $user = User::create($validated);

        return new UserResource($user);
    }
    
    public function show(User $user): ?UserResource
    {
        return new UserResource($user);
    }

    public function update(UserUpdateRequest $request, User $user): UserResource
    {
        $validated = $request->validated();
        $user->update($validated);
        return new UserResource($user);
    }

    public function destroy(User $user): JsonResponse
    {
        $user->delete();
        return response()->json([ 'message' => 'User deleted']);
    }
}
