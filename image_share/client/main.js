import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var img_data = [
   {
      img_src:"laptops.jpg",
      img_alt:"some laptops on a table" 
   }, 
   {
      img_src:"bass.jpg",
      img_alt:"a bass player" 
   }, 
   {
      img_src:"beard.jpg",
      img_alt:"some musicians with beards" 
   }, 
];

Template.images.helpers({images:img_data});


Template.images.events({
	'click .js-image':function(event){
		$(event.target).css("width", "50px");
	}
});

/* Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
 */