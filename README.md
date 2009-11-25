Element.LoadSwiff
===============

Element.LoadSwiff extends the Element native object to include the _loadSwiff_ method to load a swiff into the element.

### Example

    $('element').loadSwiff('test.swf',{
      id: 'test_movie',
      width: 550,
      height: 200,
      params: {
        wmode: 'transparent'
      }
    }).addClass('keep-on-chaining');

View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/Element.LoadSwiff) for usage and examples.