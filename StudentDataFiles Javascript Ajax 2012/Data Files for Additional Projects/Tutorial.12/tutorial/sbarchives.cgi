#!/usr/bin/perl -w

# Confirm that perl is located in the /usr/bin/perl folder on the server

#All perl scripts should use strict
use strict;

use CGI;
my $cgi_object = new CGI();

# Print out the http header 
print $cgi_object->header();


# Retrieve the value of the skey parameter 
my $input = $cgi_object->param('skey');

# This is the hashtable storing a sample of archived articles in HTML format 
my @articles = (
    { searchkey => "Packers",
      content => "<h1>A Cheesy Monument</h1>
                  <h6>Keyword: Packers</h6>
                  <p>Green Bay native Jeff Miller   
                     loves Packers QB Brian Paulson. And he loves the
                     Packers. And he loves cheese. So what could be more 
                     natural than carving a life-size statue of his beloved 
                     player in a huge block of gouda? Speaking of natural, 
                     Jeff's wife is starting to complain about the natural 
                     odor of the monument. 'I suppose I'll have to give it 
                     up, ' sighed Jeff.</p>
                  <p>For his next creation, Jeff can do the entire porous GB 
                     defense ... in swiss cheese; or he can simply do a 
                     statue of beleaguered GB defense back Chris Conners in 
                     toast.</p>
                  <cite>Posted: 11/1/2010 @ 1:25 am</cite>"
    },
    { searchkey => "Baseball",
      content => "<h1>Next Time, Rent It!</h1>
                  <h6>Keyword: Baseball</h6>
                  <p>Astro relief pitcher Dabne Lipscomb will be on the 
                     disable list for the next three weeks. It seems Dabne
                     cut the index finger on his throwing hand trying to open
                     a new DVD. The movie that he couldn't wait to see? 
                     <i>Blade Runner</i>.</p>
                  <p>Lipscomb is no stranger to unusual injuries.
                     Last year he was out for 3 weeks with a lower back injury
                     due to what he termed as a very <i>violent sneeze</i>.
                     The year before that he was laid up due to an alergic
                     reaction to pine tar.
                     It would seem that Lipscomb's initials are not DL for
                     nothing!</p>
                  <cite>Posted: 6/14/2011 @ 3:12 pm</cite>"
    },
    { searchkey => "Baseball",
      content =>"<h1>Basebrawl</h1>
                  <h6>Keyword: Baseball</h6>
                  <p>Pittsburgh and
                     Los Angeles, decided to end their years on a high note,
                     or perhaps a low one, with the biggest bench-clearing
                     brawl of the season. Apparently with nothing to play 
                     for, but plenty to fight for, six players were ejected,
                     including Pirate skipper, Whyte Kohlmann.
                  </p>
                  <p>The brawl started when Pirate pitcher, Gary Tribbit
                     threw a brush-back pitch at New York slugger, Yale
                     Iverson in retaliation for Iverson's 3rd-inning
                     homerun. I thought he spent a little too much time
                     trotting around
                     the bases,' explained Tribbit. Given
                     Iverson's anemic 0.215 batting average, you have
                     to give him the benefit of the doubt. It was only the
                     3rd time he's cleared the fences this year and no doubt
                     he was in a state of shock.
                  </p>
                  <cite>Posted: 9/18/2011 @ 12:05 pm</cite>"
    },
    { searchkey => "Basketball",
      content => "<h1>Jenkins on Ice</h1>
                  <h6>Keyword: Basketball</h6>     
                  <p>Retired NBA star Dennis Jenkins announced today that 
                     he has signed a contract with <em>Long Sleep</em> to
                     have his body frozen before death, to be revived only 
                     when medical science has discovered a cure to the aging
                     process.
                  </p>
                  <p>'Lots of guys get frozen for cancer and stuff, '
                     explains the always-entertaining Jenkins, 'I just want
                     to return once they can give me back my eternal youth.'
                     [sic] Perhaps Jenkins is also hoping medical science can 
                     cure his free-throw shooting  - 47% and falling during 
                     his last year in the league.</p>
                  <p>A reader tells us that Jenkins may not be aware that
                     part of the <em>Long Sleep</em> process is to remove the             
                     head, keeping only the brain to be revived. This would 
                     be a problem for Jenkins since he would be left with his 
                     least-valuable asset.</p>
                  <cite>Posted: 8/10/2012 @11:39 am</cite>"
    },
    { searchkey => "Texans",
      content => "<h1>Check that Pen!</h1>
                  <h6>Keyword: Texans</h6>
                  <p>After a long holdout, ESPN is reporting that Houston 
                     Texans running back JT Olson has come to terms with the 
                     team, signing a three-year deal for $12 million. 'I'm 
                     really happy with the contract,' claims JT, 'and I'm 
                     looking forward to holding out again next year for an 
                     even bigger contract after I win the rushing title!'</p>
                  <p>My advice to the Texans: Check JT's pen to make sure 
                     it wasn't filled with disappearing ink!</p>
                  <cite>Posted: 8/9/2012 @ 10:31 pm</cite>"
    }
); 

# Keep track of the number of hits using the count variable
my $count = 0;
foreach my $row (@articles) {
   if ( $row->{searchkey} =~ /^$input$/i) {
      $count ++;
      print "$row->{content}"
   }
}

# If no hits, print this fact
if ($count == 0) {
   print "<h1>No Articles Found</h1><p>Come back again, we're still setting up our database!</p>";
}