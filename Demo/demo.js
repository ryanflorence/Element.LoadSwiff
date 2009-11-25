window.addEvent('domready',function(){
	
	$('load').addEvent('click',function(){
		$('test').loadSwiff('test.swf',{
		  id: 'test_movie',
	    width: 550,
	    height: 200,
	    params: {
	        wmode: 'transparent'
	    }
		}).addClass('swiffified'); // the whole point is to chain it like so
		
		$('log').set('disabled',false);
		$('load').set('disabled',true);
	});
	
	$('log').addEvent('click',function(){
		console.log($('test').retrieve('swiff'));
	});
	
});