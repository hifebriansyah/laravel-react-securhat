<?php

use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        User::create([
            'name' => 'inara risyah',
            'email' => 'inara@securhat.com',
            'password' => bcrypt('secret'),
            'img' => '1.jpg'
        ]);

        foreach (range(2, 3) as $key => $value) {
        	$name = $faker->firstName().' '.$faker->lastName();
        	$email = strtolower(str_replace(' ', '.', $name)).'@gmail.com';

        	User::create([
	            'name' => $name,
	            'email' => $email,
	            'password' => bcrypt('secret'),
                'img' => $value.'.jpg'
	        ]);
        }
    }
}
