<?php

use App\Models\Comment;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 3000) as $key => $value) {
        	Comment::create([
	            'user_id' => rand(1,3),
	            'post_id' => rand(1,100),
	            'body' => $faker->paragraph(3),
                'created_at' => $faker->dateTime()
	        ]);
        }
    }
}
