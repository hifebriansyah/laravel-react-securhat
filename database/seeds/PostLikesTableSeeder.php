<?php

use App\Models\Post;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class PostLikesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 10) as $value) {
            foreach (range(1, rand(1,5)) as $val) {
            	Post::find($value)->likes()->attach(rand(1,3));
            }
        }
    }
}
