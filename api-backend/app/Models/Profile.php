<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_english',
        'name_bangla',
        'father_name',
        'mother_name',
        'mobile_number',
        'dob',
        'address',
        'educational_info',
        'cv_file',
    ];

    // Optionally, specify the table if it's not following the plural convention
    // protected $table = 'profiles'; 
}
