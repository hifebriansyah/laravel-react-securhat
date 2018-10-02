<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OauthTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            'name' => 'Laravel Personal Access Client',
            'secret' => 'PLMq4BILNPaeOJFYQGrZVjtXFNcoEtiWKu6wdZ4a',
            'redirect' => '',
            'personal_access_client' => 1,
            'password_client' => 0,
            'revoked' => 0
        ]);

        DB::table('oauth_clients')->insert([
            'name' => 'Laravel Password Grant Client',
            'secret' => 'zdHncT6MDDhkqh8wNjOrlNGmsRcm6meU3n0kytYm',
            'redirect' => '',
            'personal_access_client' => 0,
            'password_client' => 1,
            'revoked' => 0
        ]);

    	DB::table('oauth_access_tokens')->insert([
            'id' => 'b33a501d8b0966cd1dc60b97571bbfce8cbaa74e70653b83104b58c5f4d0f4566cd8df8aecfa3a03',
            'user_id' => '1',
            'client_id' => '2',
            'scopes' => '[]',
            'revoked' => 0,
            'created_at' => '2018-10-01 21:46:54',
            'updated_at' => '2018-10-01 21:46:54',
            'expires_at' => '2018-10-01 21:46:54'
        ]);

        DB::table('oauth_personal_access_clients')->insert([
            'id' => '1',
            'client_id' => '1',
            'created_at' => '2018-10-01 21:46:54',
            'updated_at' => '2018-10-01 21:46:54'
        ]);


        //eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzM2E1MDFkOGIwOTY2Y2QxZGM2MGI5NzU3MWJiZmNlOGNiYWE3NGU3MDY1M2I4MzEwNGI1OGM1ZjRkMGY0NTY2Y2Q4ZGY4YWVjZmEzYTAzIn0.eyJhdWQiOiIyIiwianRpIjoiYjMzYTUwMWQ4YjA5NjZjZDFkYzYwYjk3NTcxYmJmY2U4Y2JhYTc0ZTcwNjUzYjgzMTA0YjU4YzVmNGQwZjQ1NjZjZDhkZjhhZWNmYTNhMDMiLCJpYXQiOjE1Mzg0OTUyMzksIm5iZiI6MTUzODQ5NTIzOSwiZXhwIjoxNTcwMDMxMjM5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.OomeSY5_tgb9LyttbPze_VyzAz7yDdxaMaIxUaedqnt3FJovFDZpIYdETzdk75_o_jliTxRNB0DQ8rHIMN5vDbuBVEBxxhSKk-gbogdswpMZ-WPgLUSkcaaBwdGSR_dasnXt4pUe-GAjCjm5uRfbrrxs0AVkzN-I7RD9FmWvUI0L30uvHkchvHmtlwRcbECoVQYDgeLpQLuLbq0Z0tcLnrkXEXysfmtfESTceYGVNqou5Mb4djRU971_NFVMxkINXMSyAIIYDk1CoKFqXrbdiLQpWF4uMmhjPICD66MvXi1cQ1FdUdGGDvBmF26WIQbCT57VikTnNMa9Vv-eaWUBVg_r5b0JENZeqKKfrR2u-7aYV5BAceFvYVchxYVuzGnT3NzPd5gzIRxcv2pfev2aGvwomFHHNAijZrNZ1p0ImtDuEtQhRYJ_rflyCAXb5mp9GF38yD7pVRdyGq7R5iENYYijCK6_wGBqlULFTVFquPJfnHs3lClu1PD73M5VXqQw7eaGiBbhMFhxA8s6oARmN56M8W5TTeJkLJYoE-0kma3JOKnWIjIs0HhJSbiq-IV01F8giu0c-5Vawvjw1vZSvUnxJ2pfXeqKHDy6vv2PX_RsOsi99o0mn-17Au0zXzRhM0IjrFG4y1qU31ktAeCteBs_d8XllcYVZ0Zk0UMwWIQ
    }
}
