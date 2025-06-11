<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ServiceRequest extends Model
{
    public function commissions():HasMany
    {
        return $this->hasMany(Commission::class);
    }

    public function employee():BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function service():BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    public function vehicle():BelongsTo
    {
        return $this->belongsTo(Vehicle::class);
    }
}
