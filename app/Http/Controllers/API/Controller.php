<?php

namespace App\Http\Controllers\API;

class Controller extends \App\Http\Controllers\Controller
{
    public function noNull($input)
    {
        foreach ($input as &$value) {
            if (is_array($value)) {
                $value = $this->noNull($value);
            }
        }

        ksort($input);
        
        return array_filter($input);
        //return array_filter($input, function ($v, $k) {return !is_null($v);}, ARRAY_FILTER_USE_BOTH);
    }

    public function respond($collections)
    {
        // somehow can't use is_bool on ternary
        if (!is_object($collections)) {
            $collections = ['data' => $collections];
        } else {
            $collections = (get_class($collections) == 'Illuminate\Pagination\LengthAwarePaginator')
                ? $collections->toArray()
                : ['data' => $collections->toArray()];
        }

        return response()->json($this->noNull($collections));
    }
}
