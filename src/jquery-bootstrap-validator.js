/*!
 * jQuery Validation Plugin for bootstrap templates 0.0.0
 * https://github.com/vivekhas3/bootstrap-validator
 *
 * Copyright (c) 2014 Vivek Soundrapandi
 * Released under the MIT license
 *
 * Examples:
 *        $().validate();
 *       $().validate({'class_name':'validate_check','event_name':'ifToggled'});
 *       $().validate.on_success = function()
 *       {
 *       }
 */
(function($) {
    $.fn.validate = function(options) {
        var settings = $.extend({}, $.fn.validate.defaults, options);
        this.attr_name = settings.attr_name;
        var event_listener = settings.class_name ? '.' + settings.class_name : 'input';
        $('form').on(settings.event_name, event_listener, begin_validate);

        function begin_validate() {
            $this = $(this);
            var data = get_post_data();
            post_ajax(data);
        }

        function get_post_data() {
            var data = settings.post_data;
            var value_map = {
                'text': $this.val(),
                'hidden': $this.val(),
                'checkbox': $this.is(':checked')
            };
            data[$this.attr(settings.attr_name)] = value_map[$this.attr('type')];
            $.each(settings.attrs, function(index, field_name) {
                data[field_name] = $('#id_' + field_name).val();
            });
            return data;
        }

        function post_ajax(data) {
            $.ajax({
                url: make_url(),
                type: 'POST',
                dataType: 'json',
                data: data,
                async: true
            })
                .done(parse_json_response);
        }

        function make_url() {
            return settings.post_url;
        }

        function parse_json_response(response) {
            if ($.isEmptyObject(response)) {
                $.fn.validate.populate_error($this.attr(settings.attr_name), '');
            } else {
                $.each(response, $.fn.validate.populate_error);
            }
        }
        return $(this);
    };
    $.fn.validate.on_success = $.noop;
    $.fn.validate.on_error = $.noop;
    $.fn.validate.defaults = {
        class_name: 'validate',
        event_name: 'change',
        attr_name: 'name',
        post_url: '/validate',
        post_data: {},
        attrs: ['page_name', 'page_id']
    };
    $.fn.validate.populate_error = function(field_name, field_value) {
        /* 
                A public method that can be called on document ready, to prefill errors from Django's context dictionary
            */
        var field = $.fn.validate.attr_name == 'name' ? $('#id_' + field_name) : $('#' + field_name);
        if (field_value === '') {
            console.log(field);
            field.parents('.control-group').addClass('success').removeClass('error').find('span.help-block').text(field_value);
            $.fn.validate.on_success();
        } else {
            field.parents('.control-group').addClass('error').removeClass('success').find('span.help-block').text(field_value);
            $.fn.validate.on_error();
        }
    };
}(jQuery));
