using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace SubStringSearch.Controllers
{
    [ApiController]
    [Route("substringchecker/{text}/{subtext}")]
    public class SubStringCheckController : ControllerBase
    {
        private string SubStringCheck(string text, string subtext)
        {
            List<int> subtextMatches = new List<int>();

            if (text.Contains(subtext))
            {
                //Look for the first char that matches
                for(int i = 0; i < text.Length; i++)
                {
                    //check the subsequent characters if they match
                    if (text[i] == subtext[0]) 
                    {
                        //check the whole substring is present
                        for(int subtextIndex = 0; subtextIndex < subtext.Length; subtextIndex++)
                        {
                            //avoid an out of bounds error
                            if (i + subtextIndex == text.Length)
                            {
                                break;
                            }
                            else
                            {
                                if (text[i + subtextIndex] == subtext[subtextIndex])
                                {
                                    //check if its the last character in subtext
                                    if (subtextIndex == subtext.Length - 1)
                                    {
                                        //Add this to the list of subtext starting values
                                        subtextMatches.Add(i);
                                        break;
                                    }
                                    continue;
                                }
                                else
                                {
                                    break;
                                }
                            }
                        }
                    }
                }
                //Turn the list of values into a string to print
                string subtextStartstr = "Subtext starts at text index:";
                for(int indexes = 0; indexes < subtextMatches.Count; indexes++)
                {
                    if (indexes > 0)
                    {
                        subtextStartstr = subtextStartstr + ", ";
                    }
                    
                    subtextStartstr = subtextStartstr + subtextMatches[indexes].ToString();
                }
                return "\"" + subtextStartstr + "\"";
            }
            else
            {
                return "\"Subtext does not appear in Text\"";
            }
        }

        private bool CheckStrings(string text, string subtext)
        {
            if(String.IsNullOrEmpty(text) || String.IsNullOrEmpty(subtext))
            {
                return false;
            }
            else if(subtext.Length > text.Length)
            {
                return false;
            }
            return true;
        }

        [HttpGet]
        public string substringchecker(string text, string subtext)
        {
            //ensure the strings are both acceptable
            string testText = text.Trim().ToLower();
            string testSubText = subtext.Trim().ToLower();
            Console.WriteLine(testText+" "+testSubText);
            if(!CheckStrings(testText, testSubText))
            {

                return "\"Error with one of the text strings, please try again\"";
            }
            //no problem with the strings so lets check for a substring
            return SubStringCheck(testText, testSubText);
        }
    }
}
