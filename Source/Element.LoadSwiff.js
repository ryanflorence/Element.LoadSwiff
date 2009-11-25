Element.implement({
	
	loadSwiff: function(path, options){
		var swiff = new Swiff(path, options);
		this.store('swiff',swiff);
		swiff.inject(this);
		return this;
	}
	
});