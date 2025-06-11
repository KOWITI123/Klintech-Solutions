<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicle extends Model
{

    public function serviceRequests():HasMany
    {
        return $this->hasMany(ServiceRequest::class);
    }

    public function payments():HasMany
    {
        return $this->hasMany(Payment::class);
    }

    public function cutomer():BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
}
