Native: Element {#Element}
========================

Extends the Element native object to include the _loadSwiff_ method to load a swiff into the element.

### Demo

<iframe src="http://mooshell.net/rpflo/jNfYY/embedded/?tabs=result,js,html,css" style="width: 100%; height:400px"></iframe>

Element Method: loadSwiff {#Element:loadSwiff}
----------------------------------

Loads a `.swf` file into the Element.  Mostly helpful when chaining.

### Arguments

Identical to the Swiff object arguments, but omit the container.

1. path - (_string_) The path to the .swf file passed to Swiff.
2. properties - (_obj_) The options to pass to Swiff.

### Syntax

    $('element').loadSwiff('test.swf',{
      id: 'test_movie',
      width: 550,
      height: 200,
      params: {
        wmode: 'transparent'
      }
    });

### Returns

* (_element_) The Element.