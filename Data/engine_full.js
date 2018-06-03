$(document).ready(function() {

	bindHead();
	bindHand();
	bindLeg();
	bindTorso();
	bindWeapon();
	$("[id^='div']").hide();
	
	
	 $("[name^='ddl_skill']").change(function () {
        Calculate();
		//ClearEmpty();
    });
	
	$("#ddl_sk1_lv").change(function () {
        Calculate();
    });
	
	$("#ddl_sk2_lv").change(function () {
        Calculate();
    });
	
	$("#ddl_sk3_lv").change(function () {
        Calculate();
    });
	
	$("#ddl_sk4_lv").change(function () {
        Calculate();
    });
	
	$("#ddl_sk5_lv").change(function () {
        Calculate();
    });
	
	$("#ddl_sk6_lv").change(function () {
        Calculate();
    });
	
	$("#ddl_sk6_2_lv").change(function () {
        Calculate();
    });
	
	
	$('#ddl_weap_type').change(function()	{
		
		bindWeapon($('#ddl_weap_type').val() );
	}
	
	);
	
	
	
	$('#ddl_item1').change(function()	{
		
		bindSkill1($('#ddl_item1').val());
	}
	
	);
	
	
	$('#ddl_item2').change(function()	{
		
		bindSkill2($('#ddl_item2').val());
	}
	
	);
	
	
	$('#ddl_item3').change(function()	{
		
		bindSkill3($('#ddl_item3').val());
	}
	
	);
	
	
	
	$('#ddl_item4').change(function()	{
		
		bindSkill4($('#ddl_item4').val());
	}
	
	);
	
	
	$('#ddl_item5').change(function()	{
		
		bindSkill5($('#ddl_item5').val());
	});
	
	$('#ddl_item6').change(function()	{
		
		bindSkill6();
	});
	
	}); //end ready
	
	
	function bindHead()
	{
		$('#ddl_item1').append('<option selected="true" disabled value="0">Please Select</option>');
		$('#ddl_item1').prop('selectedIndex', 0);
		
		$.getJSON('./Data/head.json', function(data){
			$.each(data, function(key, entry){
				
					$('#ddl_item1').append($('<option></option>').attr('value', entry.slot).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	function bindTorso()
	{
		$('#ddl_item2').append('<option selected="true" disabled value="0">Please Select</option>');
		$('#ddl_item2').prop('selectedIndex', 0);
		
		$.getJSON('./Data/torso.json', function(data){
			$.each(data, function(key, entry){
				
					$('#ddl_item2').append($('<option></option>').attr('value', entry.slot).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	function bindHand()
	{
		$('#ddl_item3').append('<option selected="true" disabled value="0">Please Select</option>');
		$('#ddl_item3').prop('selectedIndex', 0);
		
		$.getJSON('./Data/hand.json', function(data){
			$.each(data, function(key, entry){
				
					$('#ddl_item3').append($('<option></option>').attr('value', entry.slot).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	
	function bindLeg()
	{
		$('#ddl_item4').append('<option selected="true" disabled value="0">Please Select</option>');
		$('#ddl_item4').prop('selectedIndex', 0);
		
		$.getJSON('./Data/leg.json', function(data){
			$.each(data, function(key, entry){
				
					$('#ddl_item4').append($('<option></option>').attr('value', entry.slot).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	function bindLantern()
	{
		$('#ddl_item5').append('<option selected="true" disabled value="0">Please Select</option>');
		$('#ddl_item5').prop('selectedIndex', 0);
		
		$.getJSON('./Data/lantern.json', function(data){
			$.each(data, function(key, entry){
				
					$('#ddl_item5').append($('<option></option>').attr('value', entry.slot).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	function bindWeapon( tipo)
	{
		$('#ddl_item6').empty();
		$('#ddl_item6').append('<option selected="true" disabled value="0">Please Select</option>');
		$('#ddl_item6').prop('selectedIndex', 0);
		
		$.getJSON('./Data/weapon.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == tipo){
					$('#ddl_item6').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
				}
			}		
			)
		}
		
		);
	}
	
	
	
	function bindSkill1(typeS)
	{
		$('#ddl_skill1').empty();
		$('#ddl_skill1').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill1').prop('selectedIndex', 0);
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == typeS)
					$('#ddl_skill1').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	function bindSkill2(typeS)
	{
		$('#ddl_skill2').empty();
		$('#ddl_skill2').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill2').prop('selectedIndex', 0);
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == typeS)
					$('#ddl_skill2').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	
	function bindSkill3(typeS)
	{
		$('#ddl_skill3').empty();
		$('#ddl_skill3').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill3').prop('selectedIndex', 0);
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == typeS)
					$('#ddl_skill3').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	
	function bindSkill4(typeS)
	{
		
		$('#ddl_skill4').empty();
		$('#ddl_skill4').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill4').prop('selectedIndex', 0);
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == typeS)
					$('#ddl_skill4').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	
	function bindSkill5(typeS)
	{
		$('#ddl_skill5').empty();
		$('#ddl_skill5').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill5').prop('selectedIndex', 0);
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == typeS)
					$('#ddl_skill5').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	
	function bindSkill6()
	{
		$('#ddl_skill6').empty();
		$('#ddl_skill6_2').empty();
		$('#ddl_skill6').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill6').prop('selectedIndex', 0);
		$('#ddl_skill6_2').append('<option selected="true" disabled>Please Select</option>');
		$('#ddl_skill6_2').prop('selectedIndex', 0);
		
		var type1;var type2;var skill1LV; var skill2LV;
		
		$.ajax({
		  url: './Data/weapon.json',
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			$.each(data, function(key, entry){
				if(entry.name == $('#ddl_item6 option:selected').text()){
					type1 = entry.type1;
					type2 = entry.type2;
					//skill1LV = entry.skill1LV;
					//skill2LV = entry.skill2LV;
					return false;
				}
				
			});	
		  
		  }
		  
		 });
		 
		 
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == type1)
					$('#ddl_skill6').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
		
		
		$.getJSON('./Data/aspects.json', function(data){
			$.each(data, function(key, entry){
				if(entry.type == type2)
					$('#ddl_skill6_2').append($('<option></option>').attr('value', entry.id).text(entry.name)  );
			}		
			)
		}
		
		);
	}
	
	function Calculate(){
		
		$("[id^='div']").show();
		$('.skill').val('');
		$('.skillNum').val('0');
		var head1;
		var head2;
		var head1LV;
		var head2LV;
		var hand1;
		var hand2;
		var hand1LV;
		var hand2LV;
		var torso1;
		var torso2;
		var torso1LV;
		var torso2LV;
		var leg1;
		var leg2;
		var leg1LV;
		var leg2LV;
		var wea1;
		var wea2;
		var wea1LV;
		var wea2LV;
		
		$.ajax({
		  url: './Data/head.json',
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			$.each(data, function(key, entry){
				if(entry.name == $('#ddl_item1 option:selected').text()){
					head1 = entry.skill1;
					head2 = entry.skill2;
					head1LV = entry.skill1LV;
					head2LV = entry.skill2LV;
					return false;
				}
				
			});	
		  
		  }
		  
		 });
		 
		 $('#num'+head1).val(Number(head1LV)+Number($('#num'+head1).val()));
		 $('#num'+head2).val(Number(head2LV)+Number($('#num'+head2).val()));
		 
		 
		 $.ajax({
		  url: './Data/hand.json',
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			$.each(data, function(key, entry){
				if(entry.name == $('#ddl_item3 option:selected').text()){
					hand1 = entry.skill1;
					hand2 = entry.skill2;
					hand1LV = entry.skill1LV;
					hand2LV = entry.skill2LV;
					return false;
				}
				
			});	
		  
		  }
		  
		 });
		 
		 
		 $('#num'+hand1).val(Number(hand1LV)+Number($('#num'+hand1).val()));
		 $('#num'+hand2).val(Number(hand2LV)+Number($('#num'+hand2).val()));
		 
		  $.ajax({
		  url: './Data/torso.json',
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			$.each(data, function(key, entry){
				if(entry.name == $('#ddl_item2 option:selected').text()){
					torso1 = entry.skill1;
					torso2 = entry.skill2;
					torso1LV = entry.skill1LV;
					torso2LV = entry.skill2LV;
					return false;
				}
				
			});	
		  
		  }
		  
		 });
		 
		 $('#num'+torso1).val(Number(torso1LV)+Number($('#num'+torso1).val()));
		 $('#num'+torso2).val(Number(torso2LV)+Number($('#num'+torso2).val()));
		 
		 $.ajax({
		  url: './Data/leg.json',
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			$.each(data, function(key, entry){
				if(entry.name == $('#ddl_item4 option:selected').text()){
					leg1 = entry.skill1;
					leg2 = entry.skill2;
					leg1LV = entry.skill1LV;
					leg2LV = entry.skill2LV;
					return false;
				}
				
			});	
		  
		  }
		  
		 });
		 
		 $('#num'+leg1).val(Number(leg1LV)+Number($('#num'+leg1).val()));
		 $('#num'+leg2).val(Number(leg2LV)+Number($('#num'+leg2).val()));
		 
		/*

		
		*/
		$.ajax({
		  url: './Data/weapon.json',
		  dataType: 'json',
		  async: false,
		  success: function(data) {
			$.each(data, function(key, entry){
				if(entry.name == $('#ddl_item6 option:selected').text()){
					wea1 = entry.skill1;
					wea2 = entry.skill2;
					wea1LV = entry.skill1LV;
					wea2LV = entry.skill2LV;
					return false;
				}
				
			});	
		  
		  }
		  
		 });
		 
		 $('#num'+wea1).val(Number(wea1LV)+Number($('#num'+wea1).val()));
		 $('#num'+wea2).val(Number(wea2LV)+Number($('#num'+wea2).val()));
		
		
		skill1 = $('#ddl_skill1').val();
		skill1_lv = $('#ddl_sk1_lv').val();
		skill2 = $('#ddl_skill2').val();
		skill2_lv = $('#ddl_sk2_lv').val();
		skill3 = $('#ddl_skill3').val();
		skill3_lv = $('#ddl_sk3_lv').val();
		skill4 = $('#ddl_skill4').val();
		skill4_lv = $('#ddl_sk4_lv').val();
		skill5 = $('#ddl_skill5').val();
		skill5_lv = $('#ddl_sk5_lv').val();
		skill6 = $('#ddl_skill6').val();
		skill6_lv = $('#ddl_sk6_lv').val();
		skill6_2 = $('#ddl_skill6_2').val();
		skill6_2_lv = $('#ddl_sk6_2_lv').val();
		
		
		 $('#num'+skill1).val(Number(skill1_lv)+Number($('#num'+skill1).val()));
		 $('#num'+skill2).val(Number(skill2_lv)+Number($('#num'+skill2).val()));
		 $('#num'+skill3).val(Number(skill3_lv)+Number($('#num'+skill3).val()));
		 $('#num'+skill4).val(Number(skill4_lv)+Number($('#num'+skill4).val()));
		 $('#num'+skill5).val(Number(skill5_lv)+Number($('#num'+skill5).val()));
		 $('#num'+skill6).val(Number(skill6_lv)+Number($('#num'+skill6).val()));
		 $('#num'+skill6_2).val(Number(skill6_2_lv)+Number($('#num'+skill6_2).val()));
		
		//ClearEmpty();
		GetSkill();
	}
	
	
	function ClearEmpty()
	{
		//var emptySkill = 
		
		$('.skillNum').filter(function() { return $(this).val() == "0"; }).hide();
		/*
		emptySkill.each(function() {
			var id = this.id.substring(3, 5);
			$('#div'+id).hide();
		});*/
	}
	
	
	
	
	
	function GetSkill()
	{
	
	
		$('.skillNum').each(function(){
		
			var id = this.id.substring(3, 5);
			if($('#num'+id).val() == '0')
			{
				$('#div'+id).hide();
			}
			else
			{
				$.ajax({
				  url: './Data/aspects.json',
				  dataType: 'json',
				  async: false,
				  success: function(data) {
				$.each(data, function(key, entry){
				  if(entry.id == id)
				  { 
					var tmp = $('#num'+id).val();
					if(Number($('#num'+id).val()) > 6)
						tmp = "6";
					
					
					$('#lb'+id).val(entry[tmp]);
					//alert(entry[lv]);
					return false;
				  }
				});	
		  
				}
			  
			 });
			}
		
		});
		
		
		
		//ClearEmpty();
	
	}
	


	
