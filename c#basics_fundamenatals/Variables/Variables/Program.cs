using System;

namespace Variables
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var number = 2;
            var count = 10;
            var totalPrice = 29.95f;
            var character = 'A';
            var firstName = "Antonio";
            var isWorking = false;

            Console.WriteLine(number);
            Console.WriteLine(count);
            Console.WriteLine(totalPrice);
            Console.WriteLine(character);
            Console.WriteLine(firstName);
            Console.WriteLine(isWorking);
            
            Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
        }
    }
}