 jQuery("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
        //alert("You are on step "+stepNumber+" now");
        if (stepPosition === 'first') {
            jQuery("#prev-btn").addClass('disabled');
        } else if (stepPosition === 'final') {
            jQuery("#next-btn").addClass('disabled');
        } else {
            jQuery("#prev-btn").removeClass('disabled');
            jQuery("#next-btn").removeClass('disabled');
        }
    });
    // Toolbar extra buttons
    var btnFinish = jQuery();
    var btnCancel = jQuery();
    // Smart Wizard
    jQuery('#quizstep').smartWizard({
        selected: 0,
        theme: 'default',
        transitionEffect: 'fade',
        showStepURLhash: false,
        toolbarSettings: {
            toolbarPosition: 'both',
            toolbarButtonPosition: 'end',
            toolbarExtraButtons: [btnFinish, btnCancel]
        }
    });
    // External Button Events

    jQuery("#prev-btn").on("click", function(event) {
        // Navigate previous
        event.preventdefault()
        jQuery('#smartwizard').smartWizard("prev");
        return true;
    });
    jQuery("#next-btn").on("click", function(event) {
        // Navigate next
        event.preventdefault()
        jQuery('#smartwizard').smartWizard("next");
        return true;
    });
    jQuery("#theme_selector").on("change", function(event) {
        // Change theme
        event.preventdefault()
        jQuery('#smartwizard').smartWizard("theme", jQuery(this).val());
        return true;
    });