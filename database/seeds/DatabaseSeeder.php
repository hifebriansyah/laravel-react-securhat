<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	Schema::disableForeignKeyConstraints();
        $this->call(UsersTableSeeder::class);
        $this->call(PostsTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(PostLikesTableSeeder::class);
        $this->call(PostSharesTableSeeder::class);
        $this->call(OauthTableSeeder::class);
        Schema::enableForeignKeyConstraints();
    }
}
