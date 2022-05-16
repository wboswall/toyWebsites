/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 2

   Function List:
   tipTitle(n)
      Used to return the title for tip "n"

   tipText(n)
      Used to return the text of tip "n"
*/


function tipTitle(n) {
   var title = new Array();
   title[1] = "Damaged Tiles";   
   title[2] = "Sanding Wood"; 
   title[3] = "Dealing with Ice";
   title[4] = "Weed Killers";
   title[5] = "Effective Mowing";
   title[6] = "Lighting the Outdoors";
   title[7] = "Using a Sump Pump";
   title[8] = "Sagging Gutters";
   title[9] = "Long-lasting Brushes";
   title[10] = "Using Downspouts";
   return title[n];
}

function tipText(n) {
   var text = new Array();
   text[1] = "To replace a tile, blast a hair dryer at full force onto the ragged " +
             "edge of the tile that's chipped. Once it heats up, press a large wood " +
             "chisel into that edge to lift away the tile, then use the chisel or a " +
             "putty knife to remove any remaining adhesive.";
   text[2] = "Before you stain wood, first sand it down to a silky smoothness, using " +
             "successively finer grades of sandpaper. Once it's smoooth, soak a rag " +
             "in turpentine and rub it into the wood. As the turpentine dries, the wood's " +
             "grain will rise. Sand this down with super-fine grit, making sure never to " +
             "sand against the grain. You're now ready to stain.";
   text[3] = "Not sure how to take care of an icy driveway? Rock salt clears the ice, " +
             "but it can kill nearby vegetation and damage the concrete below. Luckily, " +
             "there's now a whole handful of environmentally-friendly products that melt " +
             "the ice without ruining your lawn or sidewalk. You can also go the " +
             "old-fashioned route and spread ash, sand or gravel on the ice to provide " +
             "better traction.";
   text[4] = "To control your weeds you may need " +
             "to use chemical weed killers. Don't spread a weed killer on a newly " +
             "seeded lawn. That may do more harm than good. If you spray weed killer with " +
             "a garden-hose attachment, wait for a calm day with little or no wind to prevent " +
             "it from spreading to adjoining flower patches and harming them. Finally, spray " +
             "between mowings so that the chemical can sink into the weeds.";
   text[5] = "Don't mow your grass when it's wet; that damages the blades and your lawn alike. "+
             "Don't buzz cut an overgrown lawn to get back on schedule. Instead, cut the grass " +
             "back in increments, never by more than a third of its current length. However, do cut " +
             "your lawn as high as about three inches. That length helps limit weed growth, reduces " +
             "the need for watering and promotes a strong root structures. Don't cut your lawn " +
             "obsessively.";
   text[6] = "Use outdoor lights with a photocell unit or a timer so they will turn off during the day. " +
             "Turn off decorative outdoor gas lamps; eight gas lamps burning year round use as much " +
             "natural gas as it takes to heat an average-size home during an entire winter. Finally, " +
             "if you live in a cold climate, be sure to buy a lamp with a cold-weather ballast.";
   text[7] = "Dealing with basement flooding? Get a sump pump if you don't already have one. " +
             "If you do have one, consider a second one for emergency situations. If your sump pump " +
             "is electric, get a battery-operated version as a backup since power outages often " +
             "accompany heavy storms. Be sure to check your pump for problems. First, disconnect " +
             "the pump and clean out any debris; then reconnect it and pour in enough water for a " +
             "test.";
   text[8] = "If your gutters aren't draining quickly and drip long after the rain, water " +
             "may be collecting in a low spot caused by sagging. If that's the case, grab a friend " +
             "and snap a chalk line along the gutter using both ends of its top edge as your guiding " +
             "points. (You should have a slope of 1 inch for every 16 feet of gutter). Look for spots " +
             "where the gutter's edge falls below the chalk line, then refasten the spikes, straps " +
             "or brackets that hold it in place.";
   text[9] = "Excessive soaking is the number one menace to the lifespan of a paintbrush. Instead of " +
             "soaking, clean your brush immediately according to the directions. When using oil base " +
             "paints, clean thoroughly in solvent, kerosene or thinner, then comb and place back in " +
             "the keeper.";
   text[10]= "To effectively get the water away from your house, you can let your downspout " +
             "empty onto a splash block or send the runoff to " +
             "an extension gutter. Or you can get a retractable downspout extender that " +
             "unfurls as it fills with water, and contracts as the water stops flowing, " +
             "tucking neatly under the downspout and remaining out of the way of lawn mowers.";
   return text[n];
}
