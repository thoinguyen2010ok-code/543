/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2014 Adobe Inc.
* All Rights Reserved.
*
* NOTICE: Adobe permits you to use, modify, and distribute this file in
* accordance with the terms of the Adobe license agreement accompanying
* it. If you have received this file from a source other than Adobe,
* then your use, modification, or distribution of it requires the prior
* written permission of Adobe. 
**************************************************************************/

$(function() {
	'use strict';

	var csInterface = new CSInterface();
	var gExtensionId = "ColorSchemeDesigner3";

	function Persistent() {

		var event = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");

		event.extensionId = gExtensionId;
		csInterface.dispatchEvent(event);
	}


	function init() {

		Persistent();
	}
	
	init();

	
	$( "#accordion" ).accordion({heightStyle: "auto"});
	
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});

	$( "#button" ).button();
	$( "#button1" ).button();
	$( "#button2" ).button();
	$( "#button3" ).button();
	$( "#button4" ).button();
	$( "#button5" ).button();
	$( "#button6" ).button();
	$( "#button7" ).button();
	$( "#button8" ).button();
	$( "#radioset" ).buttonset();
	

	
	$( "#tabs" ).tabs();
	

	
	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});

	// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});
	

	
	$( "#datepicker" ).datepicker({
		inline: true
	});
	

	
	$( "#slider" ).slider({
		range: true,
		values: [ 17, 67 ]
	});
	

	
	$( "#progressbar" ).progressbar({
		value: 20
	});
	
	// Hover states on the static widgets
	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);
	
	
	$("#button1").click(function () { csInterface.evalScript('eyeALL()'); } );

	

	
});
