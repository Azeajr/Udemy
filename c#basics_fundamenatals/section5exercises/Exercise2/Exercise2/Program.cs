using System;

namespace Exercise2
{
    internal static class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter two integers and then ENTER");

            var numbers = Console.ReadLine()?.Split();

            if (int.TryParse(numbers?[0], out var a) && int.TryParse(numbers?[1], out var b))
            {
                Console.WriteLine("Maximum: " + (a > b ? a : b));
            }
            else
            {
                Console.WriteLine("Invalid input");
            }
        }
    }
}