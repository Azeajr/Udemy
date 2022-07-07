using System;

namespace Exercise1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter a number from 1 to 10");
            if (!int.TryParse(Console.ReadLine(), out int num))
            {
                Console.WriteLine("Invalid value entered");
            }
            else if(num >= 1 && num <= 10)
            {
                Console.WriteLine("Valid");
            }
            else
            {
                Console.WriteLine("Invalid");
            }
        }
    }
}