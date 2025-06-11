<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employee extends Model
{
    public function serviceRequests():HasMany
    {
        return $this->hasMany(ServiceRequest::class);
    }

    public function commissions():HasMany
    {
        return $this->hasMany(Commission::class);
    }

    public function salaries():HasMany
    {
        return $this->hasMany(Salary::class);
    }
}
