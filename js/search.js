var cities = [
    {"value":"M7", "label":"Ahmedabad (All)"},
    {"value":"S48", "label":"Ahmedabad Central"},
    {"value":"S46", "label":"Ahmedabad East"},
    {"value":"S44", "label":"Ahmedabad North"},
    {"value":"S45", "label":"Ahmedabad South"},
    {"value":"S47", "label":"Ahmedabad West"},
    {"value":"other_S49", "label":"Ahmedabad Other"},
    {"value":"M3", "label":"Bangalore (All)"},
    {"value":"S27", "label":"Bangalore Central"},
    {"value":"S25", "label":"Bangalore East"},
    {"value":"S23", "label":"Bangalore North"},
    {"value":"S24", "label":"Bangalore South"},
    {"value":"S26", "label":"Bangalore West"},
    {"value":"other_S28", "label":"Bangalore Other"},
    {"value":"M562", "label":"Chandigarh"},
    {"value":"S50", "label":"Chandigarh"},
    {"value":"S170", "label":"Mohali"},
    {"value":"S103", "label":"Panchkula"},
    {"value":"S318", "label":"Zirakpur"},
    {"value":"S356", "label":"Kharar"},
    {"value":"M5", "label":"Chennai (All)"},
    {"value":"S38", "label":"Chennai Central"},
    {"value":"S35", "label":"Chennai North"},
    {"value":"S36", "label":"Chennai South"},
    {"value":"S37", "label":"Chennai West"},
    {"value":"other_S39", "label":"Chennai Other"},
    {"value":"M1", "label":"Delhi \/ NCR"},
    {"value":"S5", "label":"Delhi Central"},
    {"value":"S3", "label":"Delhi East"},
    {"value":"S1", "label":"Delhi North"},
    {"value":"S2", "label":"Delhi South"},
    {"value":"S4", "label":"Delhi West"},
    {"value":"S6", "label":"Dwarka"},
    {"value":"S11", "label":"Faridabad"},
    {"value":"S10", "label":"Ghaziabad"},
    {"value":"S8", "label":"Greater Noida"},
    {"value":"S9", "label":"Gurgaon"},
    {"value":"S7", "label":"Noida"},
    {"value":"other_S12", "label":"Delhi Other"},
    {"value":"M6", "label":"Hyderabad (All)"},
    {"value":"S42", "label":"Gr. Hyderabad"},
    {"value":"S385", "label":"Gajularamaram"},
    {"value":"S40", "label":"Hyderabad"},
    {"value":"S41", "label":"Secunderabad"},
    {"value":"other_S43", "label":"Hyderabad Other"},
    {"value":"M4", "label":"Kolkata (All)"},
    {"value":"S33", "label":"Kolkata Central"},
    {"value":"S31", "label":"Kolkata East"},
    {"value":"S29", "label":"Kolkata North"},
    {"value":"S30", "label":"Kolkata South"},
    {"value":"S32", "label":"Kolkata West"},
    {"value":"other_S34", "label":"Kolkata Other"},
    {"value":"M2", "label":"Mumbai (All)"},
    {"value":"S283", "label":"Mumbai Andheri-Dahisar"},
    {"value":"S290", "label":"Mumbai Beyond Thane"},
    {"value":"S284", "label":"Mumbai - Central Line"},
    {"value":"S285", "label":"Mumbai Harbour"},
    {"value":"S286", "label":"Mumbai Navi"},
    {"value":"S287", "label":"Mumbai South"},
    {"value":"S288", "label":"Mumbai South West"},
    {"value":"S289", "label":"Mumbai Thane"},
    {"value":"S291", "label":"Mumbai Mira Road and Beyond"},
    {"value":"other_S292", "label":"Mumbai Other"},
    {"value":"M8", "label":"Other Major Cities"},
    {"value":"S51", "label":"Indore"},
    {"value":"S53", "label":"Kochi"},
    {"value":"S54", "label":"Ludhiana"},
    {"value":"S52", "label":"Jaipur"},
    {"value":"S299", "label":"Pune"},
    {"value":"M9", "label":"Andhra Pradesh"},
    {"value":"S353", "label":"Ongole"},
    {"value":"S56", "label":"Anantapur"},
    {"value":"S57", "label":"Guntakal"},
    {"value":"S58", "label":"Guntur"},
    {"value":"S59", "label":"Kurnool"},
    {"value":"S383", "label":"Kamareddy"},
    {"value":"S60", "label":"Nellore"},
    {"value":"S382", "label":"Khamman"},
    {"value":"S381", "label":"Etcherla"},
    {"value":"S380", "label":"Nalgonda"},
    {"value":"S61", "label":"Nizamabad"},
    {"value":"S62", "label":"Razahmundry"},
    {"value":"S63", "label":"Tirupati"},
    {"value":"S64", "label":"Vijayawada"},
    {"value":"S384", "label":"Vetapallem"},
    {"value":"S65", "label":"Vishakhapatnam"},
    {"value":"S66", "label":"Warangal"},
    {"value":"other_S67", "label":"Andhra Other"},
    {"value":"M10", "label":"Arunachal Pradesh"},
    {"value":"S68", "label":"Itanagar"},
    {"value":"other_S69", "label":"Arunachal Other"},
    {"value":"M11", "label":"Assam"},
    {"value":"S70", "label":"Guwahati"},
    {"value":"S71", "label":"Silchar"},
    {"value":"other_S72", "label":"Assam Other"},
    {"value":"M12", "label":"Bihar"},
    {"value":"S73", "label":"Bhagalpur"},
    {"value":"S74", "label":"Patna"},
    {"value":"other_S75", "label":"Bihar Other"},
    {"value":"M13", "label":"Chattisgarh"},
    {"value":"S76", "label":"Bhillai"},
    {"value":"S77", "label":"Raipur"},
    {"value":"other_S78", "label":"Chattisgarh Other"},
    {"value":"M14", "label":"Delhi"},
    {"value":"M15", "label":"Goa"},
    {"value":"S331", "label":"Aldona"},
    {"value":"S327", "label":"Anjuna"},
    {"value":"S330", "label":"Bagmalo"},
    {"value":"S326", "label":"Calangute"},
    {"value":"S338", "label":"Mapusa"},
    {"value":"S332", "label":"Merces"},
    {"value":"S79", "label":"Panaji"},
    {"value":"S80", "label":"Panjim"},
    {"value":"S329", "label":"Porvorim"},
    {"value":"S337", "label":"Siolim"},
    {"value":"S328", "label":"Vagator"},
    {"value":"S81", "label":"Vasco Da Gama"},
    {"value":"other_S82", "label":"Goa Other"},
    {"value":"M16", "label":"Gujarat"},
    {"value":"S83", "label":"Anand"},
    {"value":"S85", "label":"Bharuch"},
    {"value":"S86", "label":"Bhavnagar"},
    {"value":"S87", "label":"Bhuj"},
    {"value":"S88", "label":"Gandhinagar"},
    {"value":"S89", "label":"Gir"},
    {"value":"S90", "label":"Jamnagar"},
    {"value":"S91", "label":"Kandla"},
    {"value":"S92", "label":"Porbandar"},
    {"value":"S93", "label":"Rajkot"},
    {"value":"S94", "label":"Surat"},
    {"value":"S95", "label":"Vadodara"},
    {"value":"S378", "label":"Vapi"},
    {"value":"other_S96", "label":"Gujarat Other"},
    {"value":"M17", "label":"Haryana"},
    {"value":"S97", "label":"Ambala"},
    {"value":"S379", "label":"Bahadurgarh"},
    {"value":"S345", "label":"Dharuhera"},
    {"value":"S98", "label":"Karnal"},
    {"value":"S354", "label":"Kundli"},
    {"value":"S99", "label":"Kurukshetra"},
    {"value":"S343", "label":"Palwal"},
    {"value":"S341", "label":"Rewari"},
    {"value":"S100", "label":"Panipat"},
    {"value":"S101", "label":"Rohtak"},
    {"value":"S102", "label":"Sonipat"},
    {"value":"other_S104", "label":"Haryana Other"},
    {"value":"M18", "label":"Himachal Pradesh"},
    {"value":"S333", "label":"Baddi"},
    {"value":"S319", "label":"Chail"},
    {"value":"S105", "label":"Dalhousie"},
    {"value":"S106", "label":"Dharamsala"},
    {"value":"S321", "label":"Kasauli"},
    {"value":"S322", "label":"Kufri"},
    {"value":"S107", "label":"Kulu"},
    {"value":"S108", "label":"Manali"},
    {"value":"S323", "label":"Rajghar"},
    {"value":"S109", "label":"Shimla"},
    {"value":"S320", "label":"Solan"},
    {"value":"other_S110", "label":"HP Other"},
    {"value":"M19", "label":"Jammu & Kashmir"},
    {"value":"S111", "label":"Jammu"},
    {"value":"S112", "label":"Srinagar"},
    {"value":"other_S113", "label":"J&K Other"},
    {"value":"M20", "label":"Jharkhand"},
    {"value":"S114", "label":"Bokaro"},
    {"value":"S115", "label":"Dhanbad"},
    {"value":"S116", "label":"Jamshedpur"},
    {"value":"S117", "label":"Ranchi"},
    {"value":"other_S118", "label":"Jharkhand Other"},
    {"value":"M21", "label":"Karnataka"},
    {"value":"S119", "label":"Belgaum"},
    {"value":"S120", "label":"Bellary"},
    {"value":"S121", "label":"Bidar"},
    {"value":"S122", "label":"Dharwad"},
    {"value":"S123", "label":"Gulbarga"},
    {"value":"S124", "label":"Hubli"},
    {"value":"S125", "label":"Kolar"},
    {"value":"S126", "label":"Mangalore"},
    {"value":"S127", "label":"Mysore"},
    {"value":"other_S128", "label":"Karnataka Other"},
    {"value":"M22", "label":"Kerala"},
    {"value":"S129", "label":"Alappuzha"},
    {"value":"S130", "label":"Calicut"},
    {"value":"S131", "label":"Ernakulam"},
    {"value":"S132", "label":"Kollam"},
    {"value":"S133", "label":"Kottayam"},
    {"value":"S134", "label":"Palakkad"},
    {"value":"S135", "label":"Palghat"},
    {"value":"S136", "label":"Thrissur"},
    {"value":"S137", "label":"Trivandrum"},
    {"value":"S138", "label":"Wayanad"},
    {"value":"other_S139", "label":"Kerala Other"},
    {"value":"M23", "label":"Madhya Pradesh"},
    {"value":"S140", "label":"Bhopal"},
    {"value":"S141", "label":"Gwalior"},
    {"value":"S142", "label":"Jabalpur"},
    {"value":"S143", "label":"Ujjain"},
    {"value":"other_S144", "label":"MP Other"},
    {"value":"M24", "label":"Maharashtra"},
    {"value":"S355", "label":"Baramati"},
    {"value":"S267", "label":"Ahmednagar"},
    {"value":"S268", "label":"Akola"},
    {"value":"S357", "label":"Alibaug"},
    {"value":"S269", "label":"Amravati"},
    {"value":"S270", "label":"Aurangabad"},
    {"value":"S271", "label":"Bhandara"},
    {"value":"S272", "label":"Bid"},
    {"value":"S273", "label":"Buldana"},
    {"value":"S274", "label":"Chandrapur"},
    {"value":"S275", "label":"Dhule"},
    {"value":"S276", "label":"Gadchiroli"},
    {"value":"S277", "label":"Hingoli"},
    {"value":"S278", "label":"Jalgaon"},
    {"value":"S279", "label":"Jalna"},
    {"value":"S280", "label":"Kolhapur"},
    {"value":"S281", "label":"Konkan"},
    {"value":"S282", "label":"Latur"},
    {"value":"S293", "label":"Nagpur"},
    {"value":"S294", "label":"Nanded"},
    {"value":"S295", "label":"Nandurbar"},
    {"value":"S296", "label":"Nasik"},
    {"value":"S297", "label":"Osmanabad"},
    {"value":"S298", "label":"Parbhani"},
    {"value":"S300", "label":"Raigarh"},
    {"value":"S301", "label":"Ratnagiri"},
    {"value":"S302", "label":"Sangli"},
    {"value":"S316", "label":"Shirdi"},
    {"value":"S303", "label":"Satara"},
    {"value":"S304", "label":"Sholapur"},
    {"value":"S305", "label":"Sindhudurg"},
    {"value":"S306", "label":"Wardha"},
    {"value":"S307", "label":"Washim"},
    {"value":"S308", "label":"Yavatmal"},
    {"value":"S309", "label":"Maharashtra Other"},
    {"value":"M25", "label":"Manipur"},
    {"value":"S154", "label":"Imphal"},
    {"value":"other_S155", "label":"Manipur Other"},
    {"value":"M26", "label":"Meghalya"},
    {"value":"S156", "label":"Shillong"},
    {"value":"other_S157", "label":"Meghalaya Other"},
    {"value":"M27", "label":"Mizoram"},
    {"value":"S158", "label":"Aizwal"},
    {"value":"other_S159", "label":"Mizoram Other"},
    {"value":"M28", "label":"Nagaland"},
    {"value":"S160", "label":"Dimapur"},
    {"value":"other_S161", "label":"Nagaland Other"},
    {"value":"M29", "label":"Orissa"},
    {"value":"S162", "label":"Bhubaneshwar"},
    {"value":"S163", "label":"Cuttack"},
    {"value":"S164", "label":"Paradeep"},
    {"value":"S165", "label":"Puri"},
    {"value":"S166", "label":"Rourkela"},
    {"value":"other_S167", "label":"Orissa Other"},
    {"value":"M30", "label":"Punjab"},
    {"value":"S168", "label":"Amritsar"},
    {"value":"S169", "label":"Jalandhar"},
    {"value":"S171", "label":"Pathankot"},
    {"value":"S172", "label":"Patiala"},
    {"value":"other_S173", "label":"Punjab Other"},
    {"value":"M31", "label":"Rajasthan"},
    {"value":"S174", "label":"Ajmer"},
    {"value":"S175", "label":"Alwar"},
    {"value":"S342", "label":"Behror"},
    {"value":"S176", "label":"Bhilwara"},
    {"value":"S317", "label":"Bhiwadi"},
    {"value":"S179", "label":"Kota"},
    {"value":"S177", "label":"Jaisalmer"},
    {"value":"S178", "label":"Jodhpur"},
    {"value":"S340", "label":"Neemrana"},
    {"value":"S344", "label":"Shahjapur"},
    {"value":"S180", "label":"Udaipur"},
    {"value":"other_S181", "label":"Rajasthan Other"},
    {"value":"M32", "label":"Sikkim"},
    {"value":"S182", "label":"Gangtok"},
    {"value":"other_S183", "label":"Sikkim Other"},
    {"value":"M33", "label":"Tamil Nadu"},
    {"value":"S184", "label":"Coimbatore"},
    {"value":"S185", "label":"Erode"},
    {"value":"S311", "label":"Kodaikanal"},
    {"value":"S310", "label":"Kancheepuram"},
    {"value":"S352", "label":"Karur"},
    {"value":"S186", "label":"Hosur"},
    {"value":"S312", "label":"Mamandur"},
    {"value":"S187", "label":"Madurai"},
    {"value":"S188", "label":"Ooty"},
    {"value":"S189", "label":"Salem"},
    {"value":"S313", "label":"Samayaparam"},
    {"value":"S314", "label":"Thiruporur"},
    {"value":"S190", "label":"Tirunelveli"},
    {"value":"S191", "label":"Trichy"},
    {"value":"S315", "label":"Uthiramerur"},
    {"value":"S192", "label":"Vellore"},
    {"value":"other_S193", "label":"TN Other"},
    {"value":"M34", "label":"Tripura"},
    {"value":"S194", "label":"Agartala"},
    {"value":"other_S195", "label":"Tripura Other"},
    {"value":"M35", "label":"Uttar Pradesh"},
    {"value":"S196", "label":"Agra"},
    {"value":"S373", "label":"Azamgarh"},
    {"value":"S375", "label":"Amethi"},
    {"value":"S197", "label":"Aligarh"},
    {"value":"S198", "label":"Allahabad"},
    {"value":"S371", "label":"Budaun"},
    {"value":"S370", "label":"Bhadohi"},
    {"value":"S377", "label":"Barabanki"},
    {"value":"S199", "label":"Bareilly"},
    {"value":"S368", "label":"Basti"},
    {"value":"S365", "label":"Etawah"},
    {"value":"S363", "label":"Firozabad"},
    {"value":"S200", "label":"Faizabad"},
    {"value":"S366", "label":"Hapur"},
    {"value":"S367", "label":"Gonda"},
    {"value":"S374", "label":"Ghazipur"},
    {"value":"S201", "label":"Gorakhpur"},
    {"value":"S360", "label":"Hardoi"},
    {"value":"S361", "label":"Jhansi"},
    {"value":"S202", "label":"Kanpur"},
    {"value":"S203", "label":"Lucknow"},
    {"value":"S204", "label":"Mathura"},
    {"value":"S362", "label":"Moradabad"},
    {"value":"S205", "label":"Meerut"},
    {"value":"S358", "label":"Muzaffarnagar"},
    {"value":"S372", "label":"Mau"},
    {"value":"S369", "label":"Mirzapur"},
    {"value":"S364", "label":"Rampur"},
    {"value":"S376", "label":"Rai Bareilly"},
    {"value":"S206", "label":"Shahjanpur"},
    {"value":"S359", "label":"Saharanpur"},
    {"value":"S207", "label":"Varanasi"},
    {"value":"S208", "label":"Vrindavan"},
    {"value":"other_S209", "label":"UP Other"},
    {"value":"M36", "label":"Uttarakhand"},
    {"value":"S210", "label":"Dehradun"},
    {"value":"S211", "label":"Haridwar"},
    {"value":"S212", "label":"Mukteswar"},
    {"value":"S213", "label":"Nainital"},
    {"value":"S339", "label":"Rishikesh"},
    {"value":"S214", "label":"Roorkee"},
    {"value":"S215", "label":"Rudrapur"},
    {"value":"other_S216", "label":"Uttarakhand Other"},
    {"value":"M37", "label":"West Bengal"},
    {"value":"S217", "label":"Durgapur"},
    {"value":"S218", "label":"Kharagpur"},
    {"value":"S334", "label":"Haldia"},
    {"value":"S336", "label":"Sonarpur"},
    {"value":"S335", "label":"Uttarpara"},
    {"value":"other_S219", "label":"WB Other"},
    {"value":"M38", "label":"Union Territory"},
    {"value":"S220", "label":"D&N Haveli"},
    {"value":"S221", "label":"Daman & Diu"},
    {"value":"S222", "label":"Pondicherry"}
];

$(document).ready(function () {
    $('#city').focus(function () {
        $('#search-box').addClass('ui-header');
        $('#search-box').addClass('ui-bar-c');
        $('#search-box').attr('role', 'banner');
        $('#logo').slideUp();
        $('#index-search-filters').hide();
        $('#search-box input').val("");
        $('#search-box').css('width', '100%')
        $('.help-search').hide();
    });

    $("#city").autocomplete({
        target:$('#cities'),
        //source: 'data.cfc?method=search&returnformat=json&data=simple',
        source:cities,
        //link: 'list.html?term=',
        minLength:1
    });

    $('#cities').delegate('li', 'click', function (e) {
        var value = eval("abcdefghi = " + $(this).find('a').attr('data-autocomplete'));
        var city = value.label;
        var code = value.value;
        $('#search-box input').val(city);
        $("#city").autocomplete("clear");
        $('#index-search-filters').show();
        e.preventDefault();
		globals.city = code;
        return false;

    });

    $( ".slider.slider-min input" ).bind( "change", function(event, ui) {
        $('.budget .budget-min').text($(this).val());
		globals.budget_from = $(this).val();
    });
	$( "#property-type-select" ).bind( "change", function(event, ui) {
		globals.property_type = $(this).val();
    });
	$( "#bedroom-type-select" ).bind( "change", function(event, ui) {
		globals.bedroom = $(this).val();
    });
    $( ".slider.slider-max input" ).bind( "change", function(event, ui) {
        $('.budget .budget-max').text($(this).val());
		globals.budget_to = $(this).val();
    });

});