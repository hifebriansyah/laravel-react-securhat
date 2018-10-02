<?php

use App\Models\Post;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 30) as $key => $value) {
        	Post::create([
	            'user_id' => rand(1,3),
	            'title' => $faker->sentence(5),
	            'body' => $faker->paragraph(3)
	        ]);
        }
    }
}
