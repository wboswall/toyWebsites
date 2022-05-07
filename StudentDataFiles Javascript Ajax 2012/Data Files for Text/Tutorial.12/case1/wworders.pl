#!/usr/bin/perl -w

# Confirm that perl is located in the /usr/bin/perl folder on the server

#All perl scripts should use strict
use strict;

use CGI;
my $cgi_object = new CGI();

# Print out the http header 
print $cgi_object->header();


# Retrieve the value of the skey parameter 
my $user = $cgi_object->param('user');
my $pwd  = $cgi_object->param('pwd');

# This is the hashtable storing a sample of archived orders in HTML format 
my @orders = (
    { username => "RachelWilson",
      password => "kaboom",
      orderhistory => 
        "<table id='orderinfo'>
         <thead>
         <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
         </tr>
         </thead>
         <tbody>
          <tr>
            <td class='tdtext' rowspan='5'>6/16/2013</td>
            <td class='tdtext'>1)</td>
            <td class='tdtext'>Long Sparklers (box 20)</td>
            <td>1</td>
            <td>19.95</td>
            <td>19.95</td>
         </tr>
         <tr>
            <td class='tdtext'>2)</td>
            <td class='tdtext'>Goblin Fountain</td>
            <td>2</td>
            <td>29.95</td>
            <td>59.90</td>
         </tr>
         <tr>
            <td class='tdtext'>3)</td>
            <td class='tdtext'>Dragon Fountain</td>
            <td>2</td>
            <td>25.50</td>
            <td>51.00</td>
         </tr>
         <tr>
            <td class='tdtext'>4)</td>
            <td class='tdtext'>Nighteyes (box 10)</td>
            <td>1</td>
            <td>29.95</td>
            <td>29.95</td>
         </tr>
         <tr>
            <td class='tdtext'>5)</td>
            <td class='tdtext'>Assorted items Box #1</td>
            <td>1</td>
            <td>19.95</td>
            <td>19.95</td>
         </tr>
         <tr>
            <th class='sub' colspan='3'>Subtotal</th>
            <td class='sub'>7</td>
            <td class='sub' />
            <td class='sub'>\$180.75</td>
         </tr>
         <tr>
            <td class='tdtext' rowspan='4'>6/11/2013</td>
            <td class='tdtext'>1)</td>
            <td class='tdtext'>Assorted items Box #2</td>
            <td>1</td>
            <td>29.95</td>
            <td>29.95</td>
         </tr>
         <tr>
            <td class='tdtext'>2)</td>
            <td class='tdtext'>Phoenix Fountain</td>
            <td>2</td>
            <td>34.42</td>
            <td>68.84</td>
         </tr>
         <tr>
            <td class='tdtext'>3)</td>
            <td class='tdtext'>Firecracker 80 Strings of 16</td>
            <td>4</td>
            <td>7.50</td>
            <td>30.00</td>
         </tr>
         <tr>
            <td class='tdtext'>4)</td>
            <td class='tdtext'>Bottle rockets with stars and report (box 20)</td>
            <td>5</td>
            <td>13.99</td>
            <td>69.95</td>
         </tr>
         <tr>
            <th class='sub' colspan='3'>Subtotal</th>
            <td class='sub'>12</td>
            <td class='sub' />
            <td class='sub'>\$198.74</td>
         </tr>
         <tr>
            <th class='grand' colspan='3'>Grand Total</th>
            <td class='grand'>19</td>
            <td class='grand' />
            <td class='grand'>\$379.49</td>
         </tr>
         </tbody>
         </table>"
    },
    { username => "BernardAdams",
      password => "sparkler",
      orderhistory => 
        "<table id='orderinfo'>
         <thead>
         <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td class='tdtext' rowspan='3'>6/17/2013</td>
            <td class='tdtext'>1)</td>
            <td class='tdtext'>Pyro blast Assortment #2</td>
            <td>1</td>
            <td>79.95</td>
            <td>79.95</td>
         </tr>
         <tr>
            <td class='tdtext'>2)</td>
            <td class='tdtext'>Screaming Dragons</td>
            <td>2</td>
            <td>29.95</td>
            <td>59.90</td>
         </tr>
         <tr>
            <td class='tdtext'>3)</td>
            <td class='tdtext'>Whistling Artillery (case)</td>
            <td>2</td>
            <td>93.50</td>
            <td>187.00</td>
         </tr>
         <tr>
            <th class='sub' colspan='3'>Subtotal</th>
            <td class='sub'>5</td>
            <td class='sub' />
            <td class='sub'>\$326.85</td>
         </tr>
         <tr>
            <th class='grand' colspan='3'>Grand Total</th>
            <td class='grand'>5</td>
            <td class='grand' />
            <td class='grand'>\$326.85</td>
         </tr>
         </tbody>
         </table>"
    }
);

# Keep track of the number of hits using the count variable
my $count = 0;

foreach my $row (@orders) {
   if ($row->{username} =~ /^$user$/ && $row->{password} =~ /^$pwd$/) {
      $count++;
      print "$row->{orderhistory}";
      last;
   }
}


# If no hits, print this fact
if ($count == 0) {
   print "<p>We have no records for your user ID and password</p>";
}