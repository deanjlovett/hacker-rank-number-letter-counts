# hacker-rank-number-letter-counts

Project Euler

Number letter counts

Problem 17

https://projecteuler.net/problem=17


If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

# Solved 2022-10-07 (October 7)


### How To Run

#### How to run javascript version:

```
$ node nlc.js -s s100
10

$ node nlc.js -s r1-10
39

$ node nlc.js -s r1-1000
21124

$ node nlc.js s100
  in: 100  output: One Hundred 

  character count: 10

$ node nlc.js r1-10

  in: 1  output: One 
  in: 2  output: Two 
  in: 3  output: Three 
  in: 4  output: Four 
  in: 5  output: Five 
  in: 6  output: Six 
  in: 7  output: Seven 
  in: 8  output: Eight 
  in: 9  output: Nine 
  in: 10  output: Ten 

  total character count: 39

$ node nlc.js r1-1000

  in: 1  output: One 
  in: 2  output: Two 
  in: 3  output: Three 
  in: 4  output: Four 
  in: 5  output: Five 
  ...
  ...
  ...
  in: 996  output: Nine Hundred and Ninety Six 
  in: 997  output: Nine Hundred and Ninety Seven 
  in: 998  output: Nine Hundred and Ninety Eight 
  in: 999  output: Nine Hundred and Ninety Nine 
  in: 1000  output: One Thousand 

  total character count: 21124

```