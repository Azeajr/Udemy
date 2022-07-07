using System;
using System.Text;

namespace ReferenceValuesTypes
{
    public class Person
    {
        public int Age;
    }
    
    internal class Program
    {
        public static void Main(string[] args)
        {
            var a = 10;
            var b = a;
            b++;

            // Pass by value
            Console.WriteLine(string.Format("a: {0} b: {1}", a, b));

            var array1 = new int[3] { 1, 2, 3 };
            var array2 = array1;
            array1[0] = 0;


            StringBuilder str = new StringBuilder("array1: [");
            foreach (var i in array1)
            {
                str.Append(i + ",");
            }

            str.Remove(str.Length - 1, 1).Append("]").AppendLine();

            str.Append("array2: [");
            foreach (var i in array2)
            {
                str.Append(i + ",");
            }

            str.Remove(str.Length - 1, 1).Append("]").AppendLine();

            Console.WriteLine(str);
            
            // Cleaner method of printing array elements
            Console.WriteLine("array1: [{0}]", string.Join(", ", array1));

            var number = 1;
            Increment(number);
            // Should still print 1 since a copy of number was passed and mutated not reference or pointer
            Console.WriteLine(number);

            var person = new Person() {Age = 20};
            MakeOld(person);
            // Should print 30 since person was passed as a reference and changes within the MakeOld function are
            // applied to the actual object not a copy
            Console.WriteLine(person.Age);

        }

        public static void Increment(int number)
        {
            number += 10;
        }

        public static void MakeOld(Person person)
        {
            person.Age += 10;
        }
    }
}