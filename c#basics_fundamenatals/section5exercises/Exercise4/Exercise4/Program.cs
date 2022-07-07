using System;

namespace Exercise4
{
    internal static class Program
    {
        private static void SpeedCamera(int speed, int limit)
        {
            if (speed > limit)
            {
                var demerit = (speed - limit) / 5;
                Console.WriteLine("Demerits: " + demerit);

                if (demerit > 12)
                {
                    Console.WriteLine("License Suspended");
                }
            }
            else
            {
                Console.WriteLine("OK");
            }
        }
        
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter speed");
            if (int.TryParse(Console.ReadLine(), out var speed))
            {
                SpeedCamera(speed, 50);
            }
            else
            {
                Console.WriteLine("Invalid input");
            }
        }
    }
}