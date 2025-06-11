<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Payment extends Model
{
    public function serviceRequests():HasMany
    {
        return $this->hasMany(ServiceRequest::class);
    }

    public function vehicle():BelongsTo
    {
        return $this->belongsTo(Vehicle::class);
    }
}
