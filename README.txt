FEATURES:
 Drupal 7 API.
 Removed "libraries" module dependencie. D7 has native libraries support.
 Added some usage description.
 Drupal 7 .js "file format".

SUPPORTED FIELD TYPES: 
  'textfield', 'password', 'textarea'

EXAMPLE OF USAGE:

In form alter or your form builder function:

  $form['name'] => array(
   // '#type' => 'textfield',
   ....
    '#placeholder' => t('Enter your name here'),
    ...
  );
  
  OR 
  
  $form['name'] => array(
   // '#type' => 'textfield',
   ...
    '#placeholder' => TRUE, // the label will be used as placeholder.
    '#placeholder_label_hidden' => TRUE, // the label will be hidden.
   ...
  );
  
  OR
  
  // in form_alter
  $form['name']['#placeholder'] = TRUE; // the label will be used as placeholder.
  $form['name']['#placeholder_label_hidden'] = TRUE; // the label will be hidden.

STYLING:
  ::-webkit-input-placeholder {
    color: #999;
    font:14px Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
  }
  :-moz-placeholder {
    color: #999;
    font:14px Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
  }
  .placeholder {
    color: #999;
    font:14px Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
  }


TODO:
 Add web interface.

BASED ON: 
  http://drupal.org/project/Placeholder
  Not the same as http://drupal.org/node/1209904

OTHER MODULES:
  http://drupal.org/project/compact_forms
