<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class InventoryItem extends Model
{
    public function stockTransactions():HasMany
    {
        return $this->hasMany(StockTransaction::class);
    }
}
