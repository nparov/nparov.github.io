/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*!
 * NPA OpenROV custom scripts
 */

// Removes displayNone from the 'clickOurNames'
$('#clickNamesDiv').removeClass('displayNone');

// Displays the team member's bio in the place of 'click our names...'
function putBioOnScreen(memberName){
	if (memberName.getAttribute('id') == 'ourAmazingTeam'){
		$('.memberShowing').removeClass('memberShowing').addClass('displayNone');
		$('#clickNamesBanner').removeClass('displayNone').addClass('memberShowing');
	} else {
		var memberNameId = memberName.getAttribute('name');
		$('.memberShowing').removeClass('memberShowing').addClass('displayNone');
		$('#'+memberNameId).removeClass('displayNone').addClass('memberShowing');	
	}
}
