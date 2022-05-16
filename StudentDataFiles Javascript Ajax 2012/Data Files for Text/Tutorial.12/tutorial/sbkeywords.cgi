#!/usr/bin/perl -w

#Confirm that perl is located in the /usr/bin/perl folder
#of your Web server

#All perl scripts should use strict
use strict;

use CGI;
my $cgi_object = new CGI();

# Printout out the header
print $cgi_object->header();

# Retrieve the value of the suggest parameter 
my $input = $cgi_object->param('suggest');

# This is the hashtable holding a list of the SBlogger keywords
# This could just as easily placed in a MySQL database.

my @keys = (
    { searchkey => "49ers" },
    { searchkey => "76ers" },
    { searchkey => "Angels" },
    { searchkey => "Astros" },
    { searchkey => "Athletics" },
    { searchkey => "Baseball" },
    { searchkey => "Basketball" },
    { searchkey => "Bears" },
    { searchkey => "Bengals" },
    { searchkey => "Bills" },
    { searchkey => "Blue Jays" },
    { searchkey => "Bobcats" },
    { searchkey => "Braves" },
    { searchkey => "Brewers" },
    { searchkey => "Broncos" },
    { searchkey => "Browns" },
    { searchkey => "Buccaneers" },
    { searchkey => "Bucks" },
    { searchkey => "Bulls" },
    { searchkey => "Cardinals St. Louis Baseball" },
    { searchkey => "Cardinals St. Louis Football" },
    { searchkey => "Cavaliers" },
    { searchkey => "Celtics" },
    { searchkey => "Chargers" },
    { searchkey => "Chiefs" },
    { searchkey => "Clippers" },
    { searchkey => "Colts" },
    { searchkey => "Cowboys" },
    { searchkey => "Cubs" },
    { searchkey => "Diamondbacks" },
    { searchkey => "Dodgers" },
    { searchkey => "Dolphins" },
    { searchkey => "Eagles" },
    { searchkey => "Falcons" },
    { searchkey => "Football" },
    { searchkey => "Giants New York Football" },
    { searchkey => "Giants San Francisco Baseball" },
    { searchkey => "Grizzlies" },
    { searchkey => "Hawks" },
    { searchkey => "Heat" },
    { searchkey => "Hornets" },
    { searchkey => "Indians" },
    { searchkey => "Jaguars" },
    { searchkey => "Jazz" },
    { searchkey => "Jets" },
    { searchkey => "Kings Sacramento Basketball" },
    { searchkey => "Knicks" },
    { searchkey => "Lakers" },
    { searchkey => "Lions" },
    { searchkey => "Magic" },
    { searchkey => "Mariners" },
    { searchkey => "Marlins" },
    { searchkey => "Mavericks" },
    { searchkey => "Mets" },
    { searchkey => "MLB" },
    { searchkey => "Nationals" },
    { searchkey => "NBA" },
    { searchkey => "Nets" },
    { searchkey => "NFL" },
    { searchkey => "Nuggets" },
    { searchkey => "Orioles" },
    { searchkey => "Pacers" },
    { searchkey => "Packers" },
    { searchkey => "Padres" },
    { searchkey => "Panthers" },
    { searchkey => "Patriots" },
    { searchkey => "Phillies" },
    { searchkey => "Pirates" },
    { searchkey => "Pistons" },
    { searchkey => "Raiders" },
    { searchkey => "Rams" },
    { searchkey => "Raptors" },
    { searchkey => "Ravens" },
    { searchkey => "Red Sox" },
    { searchkey => "Reds" },
    { searchkey => "Redskins" },
    { searchkey => "Rockets" },
    { searchkey => "Royals" },
    { searchkey => "Saints" },
    { searchkey => "Seahawks" },
    { searchkey => "Senators" },
    { searchkey => "Spurs" },
    { searchkey => "Steelers" },
    { searchkey => "Suns" },
    { searchkey => "Texans" },
    { searchkey => "Tigers" },
    { searchkey => "Timberwolves" },
    { searchkey => "Titans" },
    { searchkey => "Trail Blazers" },
    { searchkey => "Twins" },
    { searchkey => "Vikings" },
    { searchkey => "Warriors" },
    { searchkey => "White Sox" },
    { searchkey => "Wizards" },
    { searchkey => "Yankees" }
); 

# Keep track of the number of hits using the count variable
my $count = 0;

# Start printing the keyword hits in an array in JSON format
print "{\"searchResults\": [\n";

# Loop through the list of keys to locate the number of hits
foreach my $row (@keys) {
   if ( $row->{searchkey} =~ /^$input/i) {
      $count++;
      if ($count == 1) {
         print "\"$row->{searchkey}\"\n"
      } else {
         print ",\"$row->{searchkey}\"\n"
      }

# Limit the number of hits to 5
      if ($count == 5) {
         last;
      }
   }
}

# Conclude printing the hits in JSON format
print "]\n}";