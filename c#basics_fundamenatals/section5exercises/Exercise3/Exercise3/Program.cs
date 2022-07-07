using System;

namespace Exercise3
{
    internal static class Program
    {
        public static string PictureFormat(int width, int height)
        {
            return width > height ? "Landscape" : "Portrait";
        }
        
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter width");
            if (!int.TryParse(Console.ReadLine(), out var width))
            {
                Console.WriteLine("Invalid input");
                return;
            }
            Console.WriteLine("Enter height");
            if (!int.TryParse(Console.ReadLine(), out var height))
            {
                Console.WriteLine("Invalid");
                return;
            }
            
            Console.WriteLine(PictureFormat(width, height));
        }
    }
}