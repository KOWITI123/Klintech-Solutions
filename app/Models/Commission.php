<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Commission extends Model
{
    public function employee():BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }
}
