bootstrap-validator
===================

A simple jQuery validation plugin for bootstrap based templates with a lot of customization.

## **Getting Started**
--------------------------------------
Download the file from [src/](https://github.com/vivekhas3/bootstrap-validator/tree/master/src "source files") directory. You can download either the original version or the minified one(named as .min.js).

### **Including it in your page**
----
As this plugin is dedicated to bootstrap based responsive websites, there are a few basic set of how ach input element should look like.

     <div class="control-group">
       <label for="id_mobilePhone"Mobile Number</label>
       <div class="controls">
         <input id="id_mobilePhone" name="mobilePhone">
         <span class="help-block"</span>
        </div>
       </div>
       <script type='text/javascript'>
         $().validate(); //As simple as this!!!
       </script>
### **Advanced usage**
This plugin has a number of customizable features and these will be discusses one by one here:
	The following are the options that can be passed on whili initializing the plugin:
- **class_name** - Only attributes with this class name will be included for validation. Default is all input elements in the form.

- **event_name** - Sometimes you may have to listen for a customized event such as 'IfClicked' (used in icheck plugin). Default will be change. Any valid jQuery event can be passed.

- **attr_name** - You can specify on what basis the plugin should address the DOM elements. It can be either by name or ID. Default is ID.

- **post_url** - The target URL to which the data has to be posted.(A JSON response will be expected on success).

- **post_data** - By default only the item name/ID & its value will be passed. You can add more data to a dictionary and pass it to this argument. Default will be empty.

- **attrs** - By default only the item name/ID & its value will be passed. You can add more attributes by specifying them as an array. For each item in the list a DOM lookup will happen by adding id_ to the given name and its value will be fetched. Default will be empty. 

### **Examples**
 Detailed examples of each argument discussed above will be added here:
    
    <script type='text/javascript'>
    	$().validate({\
        'class_name':'validate', 'event_name':'ifToggled',\
        'attr_name':'name', 'post_url':"http://google.com/validate/", \
        'post_data':{'Timestamp':new Date().toString()}, \
        'attrs':['page_id','page_name']\
        });
    <script>
    
## **Reporting an Issue**
1. Make sure the problem you're addressing is reproducible.
2. Use [http://jsbin.com](http://jsbin.com "jsbin") or [http://jsfiddle.net](http://jsfiddle.net "jsfiddle") to provide a test page.
3. Indicate what browsers the issue can be reproduced in. **Note: IE versions < 7 Compatibilty modes issues will not be addressed.**
4. Version of the plugin.

## **Contributing**
Contributions are always welcomme :)

## **License**
Copyright (c) 2014 Vivek Soundrapandi

