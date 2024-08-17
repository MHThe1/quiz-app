const questions = {
  friends: [
    { id: 'q1', text: 'What is the name of Ross and Carol’s son?', answers: ['Ben', 'Jack', 'Michael', 'Adam'] },
    { id: 'q2', text: 'Which character famously said, "We were on a break!"?', answers: ['Ross', 'Chandler', 'Joey', 'Monica'] },
    { id: 'q3', text: 'What is the name of the coffee house where the friends often hang out?', answers: ['Central Perk', 'The Coffee Bean', 'Cafe Central', 'Perk & Brew'] },
    { id: 'q4', text: 'Which character had a twin sister named Ursula?', answers: ['Phoebe', 'Rachel', 'Monica', 'Janice'] },
    { id: 'q5', text: 'Who was the last of the six friends to find out about Monica and Chandler’s relationship?', answers: ['Ross', 'Phoebe', 'Joey', 'Rachel'] },
    { id: 'q6', text: 'What is the name of Joey’s stuffed penguin?', answers: ['Hugsy', 'Benny', 'Waddles', 'Penguin Joe'] },
    { id: 'q7', text: 'What job does Chandler do at the beginning of the series?', answers: ['Data processor', 'Advertising executive', 'Transponster', 'Accountant'] },
    { id: 'q8', text: 'What does Rachel’s sister Amy call Emma, Rachel and Ross’s baby?', answers: ['Ella', 'Emily', 'Emmett', 'Esme'] },
    { id: 'q9', text: 'Which friend was famously overweight as a teenager?', answers: ['Monica', 'Chandler', 'Joey', 'Rachel'] },
    { id: 'q10', text: 'What was the name of Ross’s second wife?', answers: ['Emily', 'Rachel', 'Carol', 'Susan'] }
  ],

  brooklynNineNine: [
    { id: 'q1', text: 'What is the name of Jake Peralta’s partner?', answers: ['Amy Santiago', 'Rosa Diaz', 'Terry Jeffords', 'Gina Linetti'] },
    { id: 'q2', text: 'Who is the captain of the 99th precinct?', answers: ['Ray Holt', 'Rosa Diaz', 'Jake Peralta', 'Amy Santiago'] },
    { id: 'q3', text: 'What is Terry Jeffords’ favorite snack?', answers: ['Yogurt', 'Cookies', 'Chips', 'Pretzels'] },
    { id: 'q4', text: 'What is Gina Linetti known for?', answers: ['Her eccentric personality', 'Her baking skills', 'Her singing', 'Her detective work'] },
    { id: 'q5', text: 'What is the name of Jake Peralta’s nemesis?', answers: ['Detective Daniels', 'Detective Hawkins', 'Detective Peralta', 'Detective Boyle'] },
    { id: 'q6', text: 'Which precinct does the show revolve around?', answers: ['99th', '22nd', '55th', '77th'] },
    { id: 'q7', text: 'What is Captain Holt’s husband’s name?', answers: ['Kevin Cozner', 'Jake Peralta', 'Terry Jeffords', 'Charles Boyle'] },
    { id: 'q8', text: 'What is Rosa Diaz’s favorite type of music?', answers: ['Heavy metal', 'Jazz', 'Classical', 'Pop'] },
    { id: 'q9', text: 'Which character often says “Cool, cool, cool, cool, cool, cool, cool, cool, cool, cool, cool.”?', answers: ['Jake Peralta', 'Terry Jeffords', 'Charles Boyle', 'Gina Linetti'] },
    { id: 'q10', text: 'What is Captain Holt’s favorite hobby?', answers: ['Star Trek', 'Cooking', 'Golf', 'Reading'] }
  ],

  himym: [
    { id: 'q1', text: 'What is the name of Ted\'s on-again, off-again girlfriend?', answers: ['Robin', 'Lily', 'Victoria', 'Stella'] },
    { id: 'q2', text: 'What instrument does Ted steal for Robin?', answers: ['Blue French horn', 'Red trumpet', 'Yellow tuba', 'Green saxophone'] },
    { id: 'q3', text: 'Which character is known for saying, "Legendary!"?', answers: ['Barney', 'Ted', 'Marshall', 'Robin'] },
    { id: 'q4', text: 'What is the name of the bar where the group often hangs out?', answers: ['MacLaren\'s', 'Puzzles', 'Central Pub', 'The Drunken Clam'] },
    { id: 'q5', text: 'Who was Ted\'s best man at his wedding to Stella?', answers: ['Marshall', 'Barney', 'Robin', 'Lily'] },
    { id: 'q6', text: 'What is the name of Lily and Marshall’s son?', answers: ['Marvin', 'James', 'Lucas', 'Henry'] },
    { id: 'q7', text: 'What job does Barney have?', answers: ['Please', 'Banker', 'Lawyer', 'Architect'] },
    { id: 'q8', text: 'What is the name of Ted\'s college girlfriend?', answers: ['Karen', 'Trudy', 'Victoria', 'Jeanette'] },
    { id: 'q9', text: 'What fruit does Ted wake up to after a drunken night out?', answers: ['Pineapple', 'Apple', 'Banana', 'Orange'] },
    { id: 'q10', text: 'Which character is Canadian?', answers: ['Robin', 'Barney', 'Lily', 'Ted'] }
  ],


  theOffice: [
    { id: 'q1', text: 'What is the name of the paper company where the show is set?', answers: ['Dunder Mifflin', 'Utica Paper', 'Staples', 'Office Depot'] },
    { id: 'q2', text: 'Who is the Regional Manager of the Scranton branch?', answers: ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Ryan Howard'] },
    { id: 'q3', text: 'What is the name of Michael Scott’s movie?', answers: ['Threat Level Midnight', 'The Office Movie', 'The Scranton Strangler', 'Jim & Pam'] },
    { id: 'q4', text: 'Which character has a beet farm?', answers: ['Dwight Schrute', 'Jim Halpert', 'Andy Bernard', 'Stanley Hudson'] },
    { id: 'q5', text: 'Who is Pam’s husband?', answers: ['Jim Halpert', 'Dwight Schrute', 'Ryan Howard', 'Michael Scott'] },
    { id: 'q6', text: 'What is the name of the receptionist at the Scranton branch?', answers: ['Pam Beesly', 'Angela Martin', 'Kelly Kapoor', 'Toby Flenderson'] },
    { id: 'q7', text: 'Who becomes the new Regional Manager at the end of the series?', answers: ['Jim Halpert', 'Dwight Schrute', 'Michael Scott', 'Andy Bernard'] },
    { id: 'q8', text: 'What is the name of the show within the show?', answers: ['The Office', 'Dunder Mifflin', 'Jim & Pam', 'Threat Level Midnight'] },
    { id: 'q9', text: 'What does Dwight call his office at his farm?', answers: ['The Beet Farm', 'The Schrute Estate', 'The Dark Lord’s Lair', 'The Office'] },
    { id: 'q10', text: 'What is Michael Scott’s favorite song?', answers: ['“That’s What She Said”', '“Take Me Home, Country Roads”', '“The Little Drummer Boy”', '“The First Noel”'] }
  ],

  bigBangTheory: [
    { id: 'q1', text: 'What is Sheldon Cooper’s IQ?', answers: ['187', '180', '160', '200'] },
    { id: 'q2', text: 'What is Leonard Hofstadter’s profession?', answers: ['Experimental Physics', 'Engineering', 'Mathematics', 'Astronomy'] },
    { id: 'q3', text: 'What is the name of Sheldon’s girlfriend who becomes his wife?', answers: ['Amy Farrah Fowler', 'Penny', 'Bernadette Rostenkowski', 'Priya'] },
    { id: 'q4', text: 'What is the name of Penny’s ex-boyfriend who is also an actor?', answers: ['Beverly Hofstadter', 'Wil Wheaton', 'Rajesh Koothrappali', 'Howard Wolowitz'] },
    { id: 'q5', text: 'What is Howard Wolowitz’s profession?', answers: ['Engineer', 'Physicist', 'Astronomer', 'Chemist'] },
    { id: 'q6', text: 'Which character is known for their inability to get a date in the earlier seasons?', answers: ['Rajesh Koothrappali', 'Sheldon Cooper', 'Leonard Hofstadter', 'Howard Wolowitz'] },
    { id: 'q7', text: 'What is the name of Sheldon’s favorite comic book store?', answers: ['The Comic Center of Pasadena', 'The Nerd Emporium', 'The Geek Hut', 'The Comic Cave'] },
    { id: 'q8', text: 'What is the name of the group of friends in the show?', answers: ['The Big Bang Theory', 'The Nerd Herd', 'The Geek Squad', 'The Brain Trust'] },
    { id: 'q9', text: 'What is Penny’s last name?', answers: ['Hofstadter', 'Harrison', 'Wheaton', 'Rostenkowski'] },
    { id: 'q10', text: 'What is Rajesh’s pet name for his dog?', answers: ['Cinnamon', 'Peanut', 'Buddy', 'Max'] }
  ]
};

export default questions;
