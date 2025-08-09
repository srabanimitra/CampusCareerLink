<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Example of scheduling a built-in Laravel command (e.g., clear cache daily at midnight)
        $schedule->command('cache:clear')->dailyAt('00:00');

        // Example of scheduling a custom command
        $schedule->command('custom:task')->everyMinute();  // Runs every minute
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        // Load all the custom commands
        $this->load(__DIR__.'/Commands');

        // Include additional commands from the routes/console.php file
        require base_path('routes/console.php');
    }
}
