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

    public function respond($collections, $meta = null)
    {
        // somehow can't use is_bool on ternary

        $status = 200;

        if (!is_object($collections)) {
            $collections = ['data' => $collections];
        } else {
            $data = $collections->toArray();

            if (get_class($collections) == 'Illuminate\Pagination\LengthAwarePaginator') {
                $collections = $data;
            } elseif (get_class($collections) == 'Illuminate\Support\MessageBag') {
                $collections = ['errors' => $data];
                $status = 422;
            } else {
                $collections = ['data' => $data];
            }
        }

        if ($meta) {
            $collections['meta'] = $meta;
        }

        return response()->json($this->noNull($collections), $status);
    }
}
