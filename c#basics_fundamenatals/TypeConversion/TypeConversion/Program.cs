using System;

namespace TypeConversion
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            byte b = 1;
            int i = b;

            Console.WriteLine(i);

            i = 1000;

            b = (byte)i;

            Console.WriteLine(b);

            Console.WriteLine(i % 256);

            var number = "1234";

            i = Convert.ToInt32(number);
            Console.WriteLine(i);
            b = (byte)Convert.ToInt32(number);
            Console.WriteLine(b);
            Console.WriteLine(i % 256);

            try
            {
                b = Convert.ToByte(number);
                Console.WriteLine(b);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                // throw;
            }
        }
    }
}