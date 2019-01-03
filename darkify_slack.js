//SLACK_INTEROP_JS="/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js"
//Thanks to: https://gist.github.com/DrewML/0acd2e389492e7d9d6be63386d75dd99#gistcomment-2358430
document.addEventListener("DOMContentLoaded",function(){let tt__customCss=`
body {
    background: #222;
    color: #e6e6e6
}

a {
    color: #949494
}

a:link,
a:visited {
    color: #949494
}

a:active,
a:focus,
a:hover {
    color: #c7c7c7
}

hr {
    border-bottom: 1px solid #424242;
    border-top: 1px solid #222
}

h1,
h2,
h3,
h4 {
    color: #e6e6e6
}

h1 a {
    color: #e6e6e6
}

h1 a:active,
h1 a:hover,
h1 a:link,
h1 a:visited {
    color: #e6e6e6
}

.bordered {
    border: 1px solid #363636
}

.top_border {
    border-top: 1px solid #363636
}

.bottom_border {
    border-bottom: 1px solid #363636
}

.left_border {
    border-left: 1px solid #363636
}

.right_border {
    border-right: 1px solid #363636
}

.bullet {
    color: #949494
}

.alert,
.c-alert,
.c-alert--boxed {
    background-color: #363636;
    border-color: #000;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5)
}

.alert h4,
.c-alert h4,
.c-alert--boxed h4 {
    color: #e6e6e6
}

.alert-info {
    background-color: #363636;
    border-color: #000;
    color: #e6e6e6
}

.alert-info h4 {
    color: #e6e6e6
}

::-webkit-scrollbar-track {
    background: #363636 !important;
    border-left-color: #363636 !important;
    border-right-color: #363636 !important;
    color: #363636 !important
}

::-webkit-scrollbar-thumb {
    background: #545454 !important;
    border-left-color: #363636 !important;
    border-right-color: #363636 !important;
    color: #222 !important
}

::-webkit-scrollbar-corner {
    background: #222 !important
}

.supports_custom_scrollbar #messages_container::after {
    background: none !important
}

.monkey_scroll_bar {
    background: #424242
}

.monkey_scroll_handle_inner {
    background: #545454;
    border: 1px solid #828282
}

.monkey_scroll_bar_native_scrollbar_shim {
    background: transparent
}

#client-ui .monkey_scroll_bar {
    background: #424242
}

#client-ui .monkey_scroll_handle_inner {
    background: #545454;
    border: 3px solid #222
}

.c-scrollbar--monkey .c-scrollbar__track {
    background: #424242
}

.c-scrollbar--monkey .c-scrollbar__bar {
    background: #545454;
    box-shadow: 0 3px 0 #222, 0 -3px 0 #222
}

.client_channels_list_container {
    background-color: #363636;
    border-right-color: #222
}

#col_channels {
    color: #e6e6e6
}

.p-channel_sidebar {
    background-color: #363636;
    color: #e6e6e6
}

.p-channel_sidebar__channel,
.p-channel_sidebar__channel:hover,
.p-channel_sidebar__channel:link,
.p-channel_sidebar__channel:visited,
.p-channel_sidebar__link,
.p-channel_sidebar__link:hover,
.p-channel_sidebar__link:link,
.p-channel_sidebar__link:visited {
    color: rgba(230, 230, 230, 0.8) !important
}

.p-channel_sidebar__channel--selected,
.p-channel_sidebar__channel--selected:hover,
.p-channel_sidebar__channel--selected:link,
.p-channel_sidebar__channel--selected:visited,
.p-channel_sidebar__link--selected,
.p-channel_sidebar__link--selected:hover,
.p-channel_sidebar__link--selected:link,
.p-channel_sidebar__link--selected:visited {
    color: #e6e6e6
}

.p-channel_sidebar__channel:hover,
.p-channel_sidebar__link:hover {
    background: #222 !important
}

.p-channel_sidebar__header {
    color: #e6e6e6 !important
}

.p-channel_sidebar__channel--im-slackbot.p-channel_sidebar__channel--selected::before,
.p-channel_sidebar__channel--im.p-channel_sidebar__channel--selected .c-presence {
    color: #e6e6e6
}

.p-channel_sidebar__channel--im .c-presence--away {
    color: #949494
}

.p-channel_sidebar__channel--selected,
.p-channel_sidebar__link--selected {
    background: #545454 !important
}

.p-channel_sidebar__channel--selected:hover,
.p-channel_sidebar__link--selected:hover {
    background: #545454 !important
}

.p-channel_sidebar__channel--selected::after,
.p-channel_sidebar__channel--selected::before,
.p-channel_sidebar__channel--selected:hover::after,
.p-channel_sidebar__channel--selected:hover::before {
    color: #e6e6e6
}

.p-channel_sidebar__link--selected::after,
.p-channel_sidebar__link--selected::before {
    color: #e6e6e6
}

.p-channel_sidebar__badge,
.p-channel_sidebar__banner--mentions {
    background: #bf360c
}

.p-channel_sidebar .c-custom_scrollbar__thumb_vertical,
.p-channel_sidebar .c-scrollbar__bar {
    background: #545454
}

.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted):not(.p-channel_sidebar__channel--selected) .p-channel_sidebar__name,
.p-channel_sidebar__link--invites:not(.p-channel_sidebar__link--dim) .p-channel_sidebar__name,
.p-channel_sidebar__link--unread .p-channel_sidebar__name,
.p-channel_sidebar__quickswitcher:hover,
.p-channel_sidebar__section_heading_label--clickable:hover {
    color: whitesmoke !important
}

.p-channel_sidebar__close_container:hover {
    background: #000
}

.p-channel_sidebar__jumper {
    background: transparent !important
}

.channels_list_holder h2 {
    color: #e6e6e6 !important
}

.channels_list_holder h2.hoverable:not(.jquery_hover):hover {
    color: #e6e6e6;
    opacity: 0.8
}

.channels_list_holder ul {
    color: #e6e6e6 !important
}

.channels_list_holder ul li {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)
}

.channels_list_holder ul li .channel_name,
.channels_list_holder ul li .group_name,
.channels_list_holder ul li .im_name,
.channels_list_holder ul li .mpim_name,
.channels_list_holder ul li>a {
    background: #363636;
    color: rgba(230, 230, 230, 0.8) !important
}

.channels_list_holder ul li .channel_name:hover,
.channels_list_holder ul li .group_name:hover,
.channels_list_holder ul li .im_name:hover,
.channels_list_holder ul li .mpim_name:hover,
.channels_list_holder ul li>a:hover {
    background: #222 !important;
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem
}

.channels_list_holder ul li .primary_action.feature_user_custom_status:hover .im_name_background,
.channels_list_holder ul li .primary_action.im_name:hover .im_name_background,
.channels_list_holder ul li .primary_action:not(.feature_user_custom_status):hover {
    background: #222
}

.channels_list_holder ul li.mention a {
    color: #e6e6e6
}

.channels_list_holder ul li.unread:not(.muted_channel) .primary_action {
    color: whitesmoke !important
}

.channels_list_holder ul li.unread .prefix {
    color: #e6e6e6 !important;
    opacity: 1
}

.channels_list_holder .group_close,
.channels_list_holder .im_close,
.channels_list_holder .mpim_close {
    color: #949494 !important
}

.channels_list_holder .unread_highlights {
    background: #bf360c;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

.channels_list_holder .unread_msgs {
    background: #222;
    color: #e6e6e6
}

#channel_list_invites_link {
    border-bottom: 1px dotted #949494;
    color: #949494 !important;
    font-size: 0.9rem
}

#channel_list_invites_link:hover {
    border-bottom: 1px solid #949494
}

#quick_switcher_btn {
    background: #363636;
    border-top: 2px solid #363636
}

#quick_switcher_btn>i {
    color: #949494
}

#quick_switcher_btn:active,
#quick_switcher_btn:hover {
    background: #222;
    border-color: #222
}

#quick_switcher_btn:active>i,
#quick_switcher_btn:hover>i {
    color: #949494
}

#quick_switcher_btn:active #quick_switcher_label,
#quick_switcher_btn:hover #quick_switcher_label {
    color: #949494
}

#quick_switcher_label {
    color: #949494
}

.loading #loading-zone {
    background: #222
}

#loading_welcome {
    background-image: none
}

#loading_message p {
    color: #e6e6e6
}

#loading_message #loading_message_attribution {
    color: #949494
}

#loading_team_menu_bg,
#loading_user_menu_bg {
    background: #222;
    border: none
}

.infinite_spinner_bg,
.infinite_spinner_blue {
    stroke: #e6e6e6
}

body.loading #col_channels,
body.loading #col_channels_overlay,
body.loading #quick_switcher_btn,
body.loading #team_menu,
body.loading #team_menu_overlay {
    background-color: #363636
}

.p-degraded_list__loading {
    background-color: #222;
    color: #e6e6e6
}

input[type='url'],
input[type=tel],
input[type=color],
input[type=search],
input[type=date],
input[type=datetime-local],
input[type=datetime],
input[type=email],
input[type=month],
input[type=number],
input[type=password],
input[type=text],
input[type=time],
input[type=week] {
    background-color: #545454;
    border-color: #000;
    color: #e6e6e6
}

input[type='url']:focus,
input[type=tel]:focus,
input[type=color]:focus,
input[type=search]:focus,
input[type=date]:focus,
input[type=datetime-local]:focus,
input[type=datetime]:focus,
input[type=email]:focus,
input[type=month]:focus,
input[type=number]:focus,
input[type=password]:focus,
input[type=text]:focus,
input[type=time]:focus,
input[type=week]:focus {
    border-color: rgba(54, 54, 54, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(130, 130, 130, 0.6)
}

input[type=file]:focus {
    outline: #e6e6e6 dotted thin
}

input[type=checkbox]:focus,
input[type=radio]:focus {
    outline: #e6e6e6 dotted thin
}

select {
    background: #545454
}

select,
textarea {
    border: 1px solid #000;
    color: #e6e6e6
}

select:active,
select:focus,
textarea:active,
textarea:focus {
    border-color: #363636;
    box-shadow: 0 0 7px rgba(130, 130, 130, 0.15)
}

input:disabled,
input:disabled:active,
select:disabled,
textarea:disabled {
    border-color: #424242 !important
}

.no_touch input:hover,
.no_touch select:hover,
.no_touch textarea:hover {
    border-color: #363636
}

.no_touch label.select:hover select {
    border-color: #363636
}

.no_touch label.select:not(.disabled):hover::after {
    color: #363636
}

label.disabled {
    color: #e6e6e6
}

legend {
    border-bottom: 1px solid #828282
}

legend small {
    color: #949494
}

.uneditable-input,
.uneditable-textarea {
    background-color: #424242;
    border: 1px solid #000;
    color: #e6e6e6
}

.uneditable-input:focus,
.uneditable-textarea:focus {
    border-color: rgba(130, 130, 130, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(130, 130, 130, 0.6)
}

textarea {
    background-color: #545454;
    border: 1px solid #000;
    color: #e6e6e6
}

textarea:focus {
    border-color: rgba(130, 130, 130, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(130, 130, 130, 0.6)
}

::-webkit-input-placeholder {
    color: #e6e6e6 !important;
    -webkit-filter: none;
    filter: none;
    opacity: 0.5
}

::-moz-placeholder {
    color: #e6e6e6 !important;
    filter: none;
    opacity: 0.5
}

::placeholder {
    color: #e6e6e6 !important;
    filter: none;
    opacity: 0.5
}

[data-placeholder]:empty::before {
    color: #e6e6e6 !important
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #e6e6e6 !important;
    -webkit-filter: none;
    filter: none;
    opacity: 0.5
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #e6e6e6 !important;
    filter: none;
    opacity: 0.5
}

input::placeholder,
textarea::placeholder {
    color: #e6e6e6 !important;
    filter: none;
    opacity: 0.5
}

input[data-placeholder]:empty::before,
textarea[data-placeholder]:empty::before {
    color: #e6e6e6 !important
}

input[disabled],
input[readonly],
textarea[disabled],
textarea[readonly] {
    background-color: #545454 !important
}

.form-actions {
    background-color: #424242;
    border-top: 1px solid #363636
}

.help-block,
.help-inline {
    color: #949494
}

.input-append .add-on,
.input-prepend .add-on {
    background-color: #828282;
    border: 1px solid #545454;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

.btn {
    background-color: #545454;
    color: #e6e6e6 !important;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)
}

.btn.active,
.btn.hover,
.btn:active,
.btn:focus,
.btn:hover {
    background-color: #545454;
    color: #e6e6e6
}

.btn.btn_border {
    border: 2px solid #424242
}

.btn.disabled,
.btn:disabled {
    background-color: #000 !important
}

.btn.disabled:active,
.btn.disabled:hover,
.btn:disabled:active,
.btn:disabled:hover {
    background-color: #000 !important
}

.btn.btn_outline.btn_danger,
.btn.btn_outline.btn_warning {
    background-color: #bf360c !important;
    color: #e6e6e6 !important
}

.btn.btn_outline.btn_danger:focus,
.btn.btn_outline.btn_danger:hover,
.btn.btn_outline.btn_warning:focus,
.btn.btn_outline.btn_warning:hover {
    background-color: #222 !important;
    border-color: #bf360c !important;
    color: #bf360c !important
}

.btn.btn_outline.disabled {
    background: #424242 !important;
    color: #949494 !important
}

.btn.btn_outline.disabled:hover {
    background: #424242 !important;
    color: #949494 !important
}

.btn.btn_attachment {
    border-color: #545454
}

.btn.btn_attachment:focus,
.btn.btn_attachment:hover {
    background-color: #363636;
    border-color: #828282
}

.btn.btn_attachment.btn_danger {
    border-color: #bf360c
}

.btn.btn_attachment.btn_danger:focus,
.btn.btn_attachment.btn_danger:hover {
    border-color: #ef440f
}

.btn.btn_attachment.btn_primary {
    border-color: #828282
}

.btn.btn_attachment.btn_primary:focus,
.btn.btn_attachment.btn_primary:hover {
    border-color: #9c9c9c
}

.btn_basic:focus,
.btn_basic:hover {
    color: #e6e6e6
}

.btn_outline {
    background: #222;
    color: #949494 !important
}

.btn_outline::after {
    border: 1px solid #424242
}

.btn_outline.btn_transparent {
    color: rgba(84, 84, 84, 0.9) !important
}

.btn_outline.btn_transparent::after {
    border: 1px solid rgba(34, 34, 34, 0.5)
}

.btn_outline.btn_transparent.active,
.btn_outline.btn_transparent.hover,
.btn_outline.btn_transparent:active,
.btn_outline.btn_transparent:focus,
.btn_outline.btn_transparent:hover {
    background-color: rgba(84, 84, 84, 0.9) !important;
    color: #c7c7c7 !important
}

.btn_outline.btn_transparent.active,
.btn_outline.btn_transparent:active {
    background-color: rgba(84, 84, 84, 0.8) !important
}

.btn_outline.hover,
.btn_outline:focus,
.btn_outline:hover {
    background: #222;
    color: #c7c7c7 !important
}

.btn_outline:active {
    color: #c7c7c7
}

.btn_outline.active {
    color: #c7c7c7 !important
}

.btn_link {
    color: #949494
}

.btn_link:focus,
.btn_link:hover {
    color: #c7c7c7
}

.btn-group.open .btn.dropdown-toggle {
    background-color: #545454
}

.btn-group.open .btn-primary.dropdown-toggle {
    background-color: #424242
}

.btn-group>.btn+.dropdown-toggle {
    box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.125), inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px rgba(255, 255, 255, 0.05)
}

.btn.btn_success,
.btn_info {
    background-color: #222 !important
}

.btn_danger,
.btn_warning {
    background-color: #bf360c !important
}

.btn-danger .caret,
.btn-info .caret,
.btn-inverse .caret,
.btn-primary .caret,
.btn-success .caret,
.btn-warning .caret {
    border-bottom-color: #e6e6e6;
    border-top-color: #e6e6e6
}

.input_note {
    color: #e6e6e6
}

.c-enhanced_text_input {
    background-color: #545454;
    border-color: #363636;
    color: #949494
}

.c-enhanced_text_input.c-enhanced_text_input--active,
.c-enhanced_text_input:hover {
    border-color: #545454
}

.lazy_filter_select.disabled {
    background: #363636
}

.lazy_filter_select.disabled input.lfs_input {
    background: #828282
}

.lazy_filter_select .lfs_input_container {
    background-color: #545454;
    border-color: #000
}

.lazy_filter_select .lfs_input_container.active,
.lazy_filter_select .lfs_input_container:hover {
    border-color: #363636
}

.lazy_filter_select .lfs_input_container.active {
    box-shadow: 0 0 7px rgba(34, 34, 34, 0.15)
}

.lazy_filter_select .lfs_list_container {
    background: #222;
    border-color: #000;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
}

.lazy_filter_select .lfs_list .lfs_item.selected {
    color: #e6e6e6
}

.lazy_filter_select .lfs_list .lfs_item.selected .c-member__current-status .prevent_copy_paste,
.lazy_filter_select .lfs_list .lfs_item.selected .c-member__current-status--small::before,
.lazy_filter_select .lfs_list .lfs_item.selected .c-member__display-name,
.lazy_filter_select .lfs_list .lfs_item.selected .c-member__name,
.lazy_filter_select .lfs_list .lfs_item.selected .c-member__secondary-name {
    color: #e6e6e6 !important
}

.lazy_filter_select .lfs_list .lfs_item.disabled {
    color: #949494
}

.lazy_filter_select .lfs_list .lfs_item.active {
    background-color: #000;
    border-color: #363636;
    color: #e6e6e6
}

.lazy_filter_select .lfs_token {
    background: #222;
    border: 1px solid #000;
    color: #e6e6e6
}

.lazy_filter_select .lfs_token::after {
    color: #e6e6e6
}

.lazy_filter_select.single .lfs_input_container.active::after,
.lazy_filter_select.single .lfs_input_container:hover::after {
    color: #e6e6e6
}

#select_share_channels .lazy_filter_select .lfs_value .lfs_item.selected {
    color: #e6e6e6 !important
}

#select_share_channels .lazy_filter_select .lfs_value .lfs_item.selected .ts_icon:not(.presence_icon) {
    color: #949494 !important
}

#select_share_channels .lazy_filter_select .lfs_item {
    color: #949494 !important
}

#select_share_channels .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon) {
    color: #949494 !important
}

#message_edit_form .emo_menu {
    color: rgba(230, 230, 230, 0.3)
}

#message_edit_form .emo_menu.active .ts_icon_happy_smile,
#message_edit_form .emo_menu:hover .ts_icon_happy_smile {
    color: #828282
}

#message_edit_form.focus .emo_menu {
    color: rgba(230, 230, 230, 0.6)
}

#message_edit_form.focus #primary_file_button:not(:hover) {
    border-color: #363636
}

#message_edit_form.offline #message-input,
#message_edit_form.offline #primary_file_button {
    background-color: #363636 !important
}

#message_edit_form.offline #primary_file_button {
    border-color: #424242;
    color: #949494
}

#msg_form.focus #msg_input,
#msg_form.focus #primary_file_button:not(:hover):not(.active) {
    border-color: #363636
}

#msg_form #msg_input {
    background: padding-box #545454;
    border-color: #424242;
    border-left: 0;
    color: #e6e6e6
}

#msg_form #msg_input.focus~.msg_mentions_button:not(.hover) {
    color: #e6e6e6
}

#msg_form .msg_mentions_button {
    color: #949494
}

#msg_form .msg_mentions_button:hover {
    color: #e6e6e6
}

#msg_input {
    background: #545454;
    border-color: #424242;
    color: #e6e6e6
}

#msg_input::-webkit-input-placeholder {
    color: #e6e6e6 !important;
    -webkit-filter: none;
    filter: none;
    opacity: 0.5
}

#msg_input::-moz-placeholder {
    color: #e6e6e6 !important;
    filter: none;
    opacity: 0.5
}

#msg_input::placeholder {
    color: #e6e6e6 !important;
    filter: none;
    opacity: 0.5
}

#msg_input[data-placeholder]:empty::before {
    color: #e6e6e6 !important
}

#msg_input.focus,
#msg_input:focus {
    border-color: #363636
}

#msg_input.focus+#primary_file_button:not(:hover):not(.active),
#msg_input:focus+#primary_file_button:not(:hover):not(.active) {
    border-color: #363636
}

#msg_input+#primary_file_button:not(:hover):not(.active) {
    border-color: #424242
}

#msg_input+#primary_file_button.focus-ring:not(:hover):not(.active) {
    border-color: #424242
}

#msg_input.offline:not(.pretend-to-be-online) {
    background-color: #363636 !important;
    color: #949494
}

#msg_input.disabled,
#msg_input.ql-disabled {
    background-color: #363636;
    border-color: #363636;
    color: #949494
}

#msg_input_message {
    background-color: #363636;
    color: #e6e6e6
}

#primary_file_button {
    background: padding-box #545454;
    border-color: #424242;
    color: #949494
}

#primary_file_button.active,
#primary_file_button.focus-ring,
#primary_file_button:focus,
#primary_file_button:hover {
    background: #424242;
    border-color: #363636;
    color: #e6e6e6
}

#footer,
#footer.footer_msg_input {
    background: #222;
    box-shadow: inset 1px 0 0 0 #222
}

#footer.disabled #message-input,
#footer.disabled #msg_input {
    background: padding-box #363636 !important;
    border-color: #363636 !important
}

#footer_archives_table {
    color: #949494
}

#typing_text {
    color: #949494;
    filter: none
}

#notification_bar.wide #typing_text.overflow_ellipsis {
    -webkit-filter: none;
    filter: none
}

#special_formatting_text {
    color: #949494
}

#message_edit_container .inline_message_input_container,
#message_edit_container .inline_message_input_container.with_file_upload,
#reply_container.upload_in_threads .inline_message_input_container,
#reply_container.upload_in_threads .inline_message_input_container.with_file_upload,
#threads_msgs .inline_message_input_container,
#threads_msgs .inline_message_input_container.with_file_upload {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.inline_message_input_container .ql-container {
    border-color: #545454
}

.inline_message_input_container .ql-container.focus,
.inline_message_input_container .ql-container:active,
.inline_message_input_container .ql-container:hover {
    border-color: #828282
}

.c-message--editing {
    background: #363636;
    border-color: #363636;
    color: #e6e6e6
}

.c-message__editor__input {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.c-message__editor__input.focus {
    border-color: #363636;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15)
}

.c-message__editor__warning {
    color: #bf360c
}

#message_edit_container .message_input {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

#message_edit_container .message_input.focus {
    border-color: #363636;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15)
}

.ql-editor::-webkit-scrollbar-thumb {
    background-color: rgba(84, 84, 84, 0.5);
    color: #222
}

.ql-editor::-webkit-scrollbar-thumb:hover {
    background-color: rgba(84, 84, 84, 0.8)
}

.ql-placeholder,
.texty_legacy .ql-placeholder {
    color: #e6e6e6;
    filter: none
}

.ql-container.texty_single_line_input {
    background: #545454;
    border: 1px solid #363636;
    color: #e6e6e6
}

.ql-container.texty_single_line_input.focus,
.ql-container.texty_single_line_input:hover {
    border-color: #363636;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15)
}

.c-input_select {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.p-file_list__file_type_select .c-input_select__selected_value--placeholder {
    color: #e6e6e6
}

.c-input_select_options_list_container:not(.c-input_select_options_list_container--always-open) {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.c-input_select_options_list__option {
    color: #e6e6e6
}

.menu {
    background: #363636;
    border: 1px solid #222;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    color: #e6e6e6
}

.menu .menu_content {
    background: #363636 !important
}

.menu .menu_filter_container {
    background: #222
}

.menu .menu_filter_container input.menu_filter {
    border: 1px solid #424242
}

.menu .menu_filter_container input.menu_filter:focus {
    border-color: #545454
}

.menu .menu_filter_container .icon_search {
    color: #949494
}

.menu .menu_filter_container .icon_close {
    color: #949494 !important
}

.menu #menu_header .menu_simple_header {
    background: #000;
    border-color: #363636;
    color: #e6e6e6
}

.menu #menu_header .menu_simple_header a {
    color: #949494
}

.menu #menu_header .menu_simple_header a:hover {
    color: #c7c7c7
}

.menu #menu_header .menu_close {
    color: #e6e6e6
}

.menu .section_header .header_label {
    background-color: #363636;
    color: #949494
}

.menu .section_header>div.header_label_container {
    color: #949494
}

.menu ul li a {
    background: #363636;
    border-bottom: 0;
    color: #e6e6e6
}

.menu ul li a.delete_link {
    color: #bf360c
}

.menu ul li a:not(.inline_menu_link) {
    color: #e6e6e6
}

.menu ul li.highlighted a {
    background: #222;
    border-bottom-color: #000;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

.menu ul li.highlighted a .menu_item_details,
.menu ul li.highlighted a .prefix,
.menu ul li.highlighted a i,
.menu ul li.highlighted a ts-icon {
    color: #e6e6e6
}

.menu ul li.highlighted a.delete_link {
    color: #bf360c
}

.menu ul li.disabled a {
    color: #949494
}

.menu ul li i {
    color: #949494
}

.menu ul li.divider {
    border-bottom-color: #222
}

.menu ul li .menu_item_details {
    color: #949494
}

.menu:not(.keyboard_active) ul li:hover:not(.disabled) a {
    background: #222;
    border-bottom-color: #000;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

.menu:not(.keyboard_active) ul li:hover:not(.disabled) a .menu_item_details,
.menu:not(.keyboard_active) ul li:hover:not(.disabled) a .prefix,
.menu:not(.keyboard_active) ul li:hover:not(.disabled) a i,
.menu:not(.keyboard_active) ul li:hover:not(.disabled) a ts-icon {
    color: #e6e6e6
}

.menu:not(.keyboard_active) ul li:hover:not(.disabled) a.delete_link {
    color: #bf360c
}

.menu input {
    background: #363636;
    border: 1px solid #545454
}

.menu textarea {
    background: #363636;
    border: 1px solid #545454
}

.menu #menu_footer .menu_footer {
    background: #000;
    border-top: 1px solid #363636
}

.menu #monkey_scroll_wrapper_for_menu_items_scroller {
    background: #363636
}

.menu #menu_list_container #menu_list .menu_list_item a {
    color: #e6e6e6
}

.menu #menu_list_container #menu_list .menu_list_item.active a {
    background: #545454;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

#autocomplete_menu {
    color: #e6e6e6
}

#autocomplete_menu header {
    background-color: #222
}

#autocomplete_menu header .header_label {
    color: #949494
}

#autocomplete_menu header hr {
    border-bottom-color: transparent;
    border-top-color: #000
}

#autocomplete_menu h2 {
    color: #e6e6e6
}

#autocomplete_menu .no_results {
    color: #e6e6e6
}

#autocomplete_menu .keyword_match .modifier {
    color: #949494
}

#autocomplete_menu .boxed {
    background: #222;
    border: 1px solid #363636;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15)
}

#autocomplete_menu .pickmeup {
    border-bottom: 1px solid #363636
}

#autocomplete_menu.search_menu .section_header::before,
#autocomplete_menu.search_menu.unified .section_header::before {
    background-color: #545454
}

#autocomplete_menu.search_menu header,
#autocomplete_menu.search_menu.unified header {
    color: #e6e6e6
}

#autocomplete_menu.search_menu header .header_label::before,
#autocomplete_menu.search_menu.unified header .header_label::before {
    background-color: #363636
}

#autocomplete_menu.search_menu .query_header,
#autocomplete_menu.search_menu.unified .query_header {
    background-color: transparent
}

#autocomplete_menu.search_menu .query_header .search_query_preview,
#autocomplete_menu.search_menu.unified .query_header .search_query_preview {
    color: #e6e6e6
}

#autocomplete_menu.search_menu li.highlighted .result_item_btn,
#autocomplete_menu.search_menu.unified li.highlighted .result_item_btn {
    background: #363636;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

#autocomplete_menu.search_menu li.highlighted .modifier_icon,
#autocomplete_menu.search_menu.unified li.highlighted .modifier_icon {
    color: #949494
}

#autocomplete_menu.search_menu li.highlighted .action_btn,
#autocomplete_menu.search_menu.unified li.highlighted .action_btn {
    color: #e6e6e6
}

#autocomplete_menu.search_menu li.highlighted .delete_btn,
#autocomplete_menu.search_menu.unified li.highlighted .delete_btn {
    color: #949494
}

#autocomplete_menu.search_menu li.highlighted .delete_btn:focus,
#autocomplete_menu.search_menu li.highlighted .delete_btn:hover,
#autocomplete_menu.search_menu.unified li.highlighted .delete_btn:focus,
#autocomplete_menu.search_menu.unified li.highlighted .delete_btn:hover {
    color: #bf360c
}

#autocomplete_menu.search_menu li.highlighted .muted_text,
#autocomplete_menu.search_menu.unified li.highlighted .muted_text {
    color: #949494
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover {
    background: transparent
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .muted_text,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .muted_text,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .muted_text,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .muted_text,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .muted_text,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .muted_text,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .muted_text,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .muted_text {
    color: #949494
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .result_item_btn,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .result_item_btn,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .result_item_btn,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .result_item_btn,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .result_item_btn,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .result_item_btn,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .result_item_btn,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .result_item_btn {
    background: #363636;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .modifier_icon,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .modifier_icon,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .modifier_icon,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .modifier_icon,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .modifier_icon,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .modifier_icon,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .modifier_icon,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .modifier_icon {
    color: #949494
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .action_btn,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .action_btn,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .action_btn,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .action_btn,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .action_btn,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .action_btn,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .action_btn,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .action_btn {
    color: #e6e6e6
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .delete_btn,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .delete_btn,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .delete_btn,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .delete_btn,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .delete_btn,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .delete_btn,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn {
    color: #949494
}

#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .delete_btn:focus,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:focus .delete_btn:hover,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .delete_btn:focus,
#autocomplete_menu.search_menu .results.unified:not(.keyboard_active) li:hover .delete_btn:hover,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .delete_btn:focus,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:focus .delete_btn:hover,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .delete_btn:focus,
#autocomplete_menu.search_menu.unified .results.unified:not(.keyboard_active) li:hover .delete_btn:hover,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .delete_btn:focus,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:focus .delete_btn:hover,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .delete_btn:focus,
#autocomplete_menu.search_menu.unified:not(.keyboard_active) li:hover .delete_btn:hover,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn:focus,
#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn:hover,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn:focus,
#autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn:hover {
    color: #bf360c
}

#autocomplete_menu.search_menu .muted_text,
#autocomplete_menu.search_menu.unified .muted_text {
    color: #949494
}

#autocomplete_menu.search_menu .time_modifiers::before,
#autocomplete_menu.search_menu.unified .time_modifiers::before {
    background-color: #363636
}

#autocomplete_menu.search_menu .result_item_btn,
#autocomplete_menu.search_menu.unified .result_item_btn {
    color: #e6e6e6
}

#autocomplete_menu.search_menu .results.unified .unified_autocomplete_item .text,
#autocomplete_menu.search_menu.unified .results.unified .unified_autocomplete_item .text {
    color: #e6e6e6
}

#autocomplete_menu.search_menu .results.unified .unified_autocomplete_item .token,
#autocomplete_menu.search_menu.unified .results.unified .unified_autocomplete_item .token {
    background-color: #424242;
    color: #e6e6e6
}

#autocomplete_menu.search_menu .action_btn,
#autocomplete_menu.search_menu .modifier_icon,
#autocomplete_menu.search_menu.unified .action_btn,
#autocomplete_menu.search_menu.unified .modifier_icon {
    color: #949494
}

#autocomplete_menu.search_menu footer .keyword::before,
#autocomplete_menu.search_menu footer .modifier::before,
#autocomplete_menu.search_menu footer.unified .keyword::before,
#autocomplete_menu.search_menu footer.unified .modifier::before,
#autocomplete_menu.search_menu.unified footer .keyword::before,
#autocomplete_menu.search_menu.unified footer .modifier::before,
#autocomplete_menu.search_menu.unified footer.unified .keyword::before,
#autocomplete_menu.search_menu.unified footer.unified .modifier::before {
    background: #828282;
    border: 1px solid #545454;
    color: #e6e6e6
}

#autocomplete_menu.search_menu footer .selected .keyword::before,
#autocomplete_menu.search_menu footer .selected .modifier::before,
#autocomplete_menu.search_menu footer.unified .selected .keyword::before,
#autocomplete_menu.search_menu footer.unified .selected .modifier::before,
#autocomplete_menu.search_menu.unified footer .selected .keyword::before,
#autocomplete_menu.search_menu.unified footer .selected .modifier::before,
#autocomplete_menu.search_menu.unified footer.unified .selected .keyword::before,
#autocomplete_menu.search_menu.unified footer.unified .selected .modifier::before {
    background: rgba(84, 84, 84, 0.25);
    border: #828282
}

#autocomplete_menu.search_menu footer .modifier.incomplete::before,
#autocomplete_menu.search_menu footer.unified .modifier.incomplete::before,
#autocomplete_menu.search_menu.unified footer .modifier.incomplete::before,
#autocomplete_menu.search_menu.unified footer.unified .modifier.incomplete::before {
    background: #363636;
    border: 1px solid #000
}

.search_light_grey {
    color: #e6e6e6 !important
}

.highlighter_underlay .keyword::before {
    background: #828282;
    border: 1px solid #545454;
    color: #e6e6e6
}

.highlighter_underlay .modifier::before {
    background: #828282;
    border: 1px solid #545454;
    color: #e6e6e6
}

.highlighter_underlay .modifier.incomplete::before {
    background: #363636;
    border: 1px solid #000
}

.highlighter_underlay .selected .keyword::before,
.highlighter_underlay .selected .modifier::before {
    background: rgba(130, 130, 130, 0.25);
    border: #545454
}

.highlighter_underlay .ghost_text {
    color: #e6e6e6
}

.pickmeup {
    background: #222;
    border: 1px solid #363636;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15)
}

.pickmeup .pmu-instance .pmu-button {
    color: #e6e6e6
}

.pickmeup .pmu-instance .pmu-today.pmu-selected,
.pickmeup .pmu-instance .pmu-today:hover {
    background: #363636 !important
}

.pickmeup .pmu-instance .pmu-today.pmu-selected .pmu-today-border,
.pickmeup .pmu-instance .pmu-today:hover .pmu-today-border {
    background: #828282;
    color: #e6e6e6 !important
}

.pickmeup .pmu-instance .pmu-today-border {
    border: 2px solid #545454 !important;
    color: #828282 !important
}

.pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover {
    background: #545454;
    color: #e6e6e6
}

.pickmeup .pmu-instance .pmu-not-in-month {
    background: #222;
    color: #949494
}

.pickmeup .pmu-instance .pmu-not-in-month.pmu-selected {
    background: #545454
}

.pickmeup .pmu-instance .pmu-disabled {
    background: #222;
    color: #949494
}

.pickmeup .pmu-instance .pmu-disabled:hover {
    background: #222;
    color: #949494
}

.pickmeup .pmu-instance .pmu-selected {
    background: #545454;
    color: #e6e6e6
}

.pickmeup .pmu-instance nav {
    color: #949494
}

.pickmeup .pmu-instance nav:first-child:hover {
    color: #c7c7c7
}

.pickmeup .pmu-instance .pmu-months *,
.pickmeup .pmu-instance .pmu-years * {
    border: 1px solid #363636
}

.pickmeup .pmu-instance .pmu-day-of-week {
    color: #e6e6e6
}

.pickmeup .pmu-instance .pmu-day-of-week * {
    border: 1px solid #363636
}

.pickmeup .pmu-instance .pmu-days * {
    border: 1px solid #363636
}

.p-block_kit_date_picker_calendar_wrapper {
    background: #363636;
    border-color: #545454;
    color: #e6e6e6
}

.p-block_kit_date_picker_calendar_wrapper .c-calendar_view_header__title_btn {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.p-block_kit_date_picker_calendar_wrapper .c-date_picker_calendar__date--disabled,
.p-block_kit_date_picker_calendar_wrapper .c-mini_calendar__month_button:disabled {
    background: #545454;
    color: #828282
}

#menu.date_picker .pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover,
#menu.date_picker .pickmeup .pmu-selected {
    background: #545454
}

#menu.date_picker li.date_picker_item a {
    color: #e6e6e6
}

#menu.date_picker li.date_picker_item a:hover {
    color: #e6e6e6
}

#menu.date_picker li.date_picker_item.highlighted a {
    color: #949494
}

#file_member_filter {
    background: #000
}

#client-ui .member_filter {
    border: 1px solid #545454
}

#client-ui .member_file_filter_menu .searchable_member_list_scroller .team_list_item:hover .channel_page_member_row {
    background: #222
}

#client-ui .member_file_filter_menu .searchable_member_list_scroller .team_list_item:hover .member {
    color: #e6e6e6
}

#client-ui #team_list_container #team_filter .member_filter {
    background-color: #222;
    border-left: 1px solid #000
}

#client-ui #file_member_filter {
    border-color: #545454
}

#client-ui #file_member_filter .member_filter {
    border-color: #545454
}

#client-ui .team_tabs_container {
    border-bottom: 1px solid #000
}

#team_filter .icon_search {
    color: #949494
}

#team_filter a.icon_close {
    color: #949494
}

#team_filter a.icon_close:hover {
    color: #c7c7c7
}

.filter_header {
    background-color: #222
}

.popover_menu {
    background-color: #222;
    border-top: 1px solid #545454
}

.popover_menu .arrow::after {
    background-color: #000
}

.popover_menu .arrow_shadow::after {
    background-color: #222;
    box-shadow: 0 0 0 1px #545454, 0 0 3px rgba(0, 0, 0, 0.08)
}

.popover_menu.showing_header .arrow::after,
.popover_menu.showing_header .arrow_shadow::after {
    background-color: #222 !important
}

.popover_menu .content {
    background-color: #222
}

.tab_complete_ui {
    background: #222;
    border: 1px solid #363636;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5)
}

.tab_complete_ui .tab_complete_ui_header {
    background: padding-box #000;
    border-bottom: 1px solid #363636;
    color: #e6e6e6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

.tab_complete_ui ul.type_emoji li {
    color: #e6e6e6
}

.tab_complete_ui ul.type_members .broadcast_info,
.tab_complete_ui ul.type_members .realname {
    color: #e6e6e6
}

.tab_complete_ui ul.type_members .unify_broadcast {
    color: #e6e6e6
}

.tab_complete_ui ul.type_members .unify_broadcast .ts_icon_broadcast {
    color: #949494
}

.tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_name {
    color: #e6e6e6 !important
}

.tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_divider {
    border-bottom: 0;
    border-top-color: #363636
}

.tab_complete_ui ul.type_cmds li.tab_complete_ui_item .cmd-left-td,
.tab_complete_ui ul.type_cmds li.tab_complete_ui_item .cmd-right-td {
    color: #949494
}

.tab_complete_ui ul.type_cmds .cmdname {
    color: #e6e6e6
}

.tab_complete_ui ul.type_cmds .cmddesc {
    color: #949494
}

.tab_complete_ui li.tab_complete_ui_group,
.tab_complete_ui li.tab_complete_ui_item {
    border-bottom: 1px solid #363636
}

.tab_complete_ui li.tab_complete_ui_group.active,
.tab_complete_ui li.tab_complete_ui_item.active {
    background: #545454;
    border-bottom-color: #363636;
    text-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

.tab_complete_ui li.tab_complete_ui_group.active span,
.tab_complete_ui li.tab_complete_ui_item.active span {
    color: #e6e6e6 !important
}

.tab_complete_ui .not_in_channel {
    color: #949494
}

#team_menu {
    background: #363636;
    border-bottom: 2px solid #363636;
    color: #e6e6e6
}

#team_menu.active,
#team_menu:hover {
    background: #363636 !important;
    border-bottom-color: #363636 !important
}

#team_menu.active i,
#team_menu:hover i {
    color: #e6e6e6
}

#team_menu i {
    color: #949494
}

#team_menu .presence .presence_icon {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)
}

#team_menu .notifications_menu_btn,
#team_menu .team_name_caret {
    color: #e6e6e6 !important
}

#team_menu_user {
    color: #949494
}

#team_menu_user_details,
#team_menu_user_name {
    color: #e6e6e6 !important;
    opacity: 0.75
}

.slack_menu_section::before {
    border-top-color: #222
}

.slack_menu_header_secondary {
    color: #949494
}

.slack_menu_download {
    background-color: #363636
}

.slack_menu_download ts-icon {
    color: #949494
}

#menu_items_scroller::-webkit-scrollbar-track {
    background: #222 !important
}

#limit_meter:hover #limit_meter_message_body {
    color: #e6e6e6
}

#limit_meter_message_body {
    color: #949494
}

.channel_header {
    background: #222;
    box-shadow: inset 1px 0 0 0 #222
}

.channel_header .blue_on_hover:hover {
    color: #e6e6e6
}

#client_body:not(.onboarding)::before {
    background: #222;
    border-bottom: 1px solid #363636;
    box-shadow: inset 1px 0 0 0 #222
}

.messages_header {
    color: #e6e6e6
}

.channel_title .channel_name_container .channel_name {
    color: #e6e6e6
}

.channel_title .channel_name_container .channel_name.muted {
    color: #949494
}

.channel_title .channel_name_container .mpdm_member.away,
.channel_title .channel_name_container .ts_icon_shared_channel.away {
    color: #949494
}

.channel_title .channel_name_container .muted_icon {
    color: #949494
}

.channel_title .channel_name_container .muted_icon:hover {
    color: #bf360c
}

#im_title.away {
    color: #949494
}

.channel_header_info button {
    color: #949494
}

.channel_header_icon {
    color: #e6e6e6
}

.channel_calls_button .call_icon.call_window_offline {
    color: #949494
}

.channel_actions_toggle.active:focus,
.details_toggle.active:focus {
    color: #e6e6e6
}

#flex_menu_toggle.active,
#flex_menu_toggle.active:focus {
    color: #e6e6e6
}

#flex_menu_toggle .flex_menu_download_circle {
    background: #222
}

#flex_menu_toggle .flex_menu_download_circle canvas {
    background: #222
}

#flex_menu_toggle.unread #help_icon_circle_count {
    background-color: #bf360c;
    color: #fff
}

#flex_menu_toggle.open #help_icon_circle_count {
    background-color: #000;
    color: #e6e6e6
}

#canvases_toggle.active,
#details_toggle.active,
#recent_mentions_toggle.active,
#sli_recap_toggle.active,
#stars_toggle.active {
    background: #363636;
    color: #e6e6e6
}

#canvases_toggle.active:hover,
#details_toggle.active:hover,
#recent_mentions_toggle.active:hover,
#sli_recap_toggle.active:hover,
#stars_toggle.active:hover {
    background: #545454;
    color: #e6e6e6
}

#recent_mentions_toggle:hover {
    color: #bf360c
}

#rxn_toast_div {
    background: #000;
    border: 1px solid #545454
}

.presence {
    color: #949494
}

#edit_topic_inner:not(.unable_to_post)::before {
    background: #222;
    border-color: #363636
}

#edit_topic_trigger {
    color: #949494
}

.c-message_list__day_divider__label {
    color: #949494
}

.c-message_list__day_divider__label__pill {
    background: #222;
    position: relative
}

.c-message_list__day_divider__line {
    border-top-color: #363636
}

.day_divider,
.mention_day_container_div .day_divider {
    background: #222;
    color: #949494
}

.day_divider hr,
.mention_day_container_div .day_divider hr {
    border-bottom: 0;
    border-top: 1px solid #363636
}

.day_divider .day_divider_label {
    background: #222
}

.day_container .day_msgs {
    border-top: 1px solid #363636
}

.day_container.unread_day_container .day_msgs {
    border-color: #828282
}

.day_container .day_divider {
    background: none;
    color: #949494
}

.day_container .day_divider .day_divider_label {
    background: #222
}

.search_form {
    border-color: #545454
}

.search_form .search_input {
    background: transparent
}

.search_form:hover {
    border-color: #828282
}

.search_focused .search_form {
    border-color: #828282
}

.search_clear_icon .ts_icon_times_circle {
    color: #949494
}

#search_spinner {
    color: #e6e6e6
}

#search_container .search_input {
    background: transparent
}

#search_container .icon_search {
    color: #949494
}

#search_container .icon_close {
    color: #949494
}

#team_filter .icon_search,
#team_filter .ts_icon_spinner,
#user_group_filter .icon_search,
#user_group_filter .ts_icon_spinner,
.searchable_member_list_search_bar .icon_search,
.searchable_member_list_search_bar .ts_icon_spinner {
    color: #949494
}

#team_filter a.icon_close,
#user_group_filter a.icon_close,
.searchable_member_list_search_bar a.icon_close {
    color: #949494
}

#team_filter a.icon_close:hover,
#user_group_filter a.icon_close:hover,
.searchable_member_list_search_bar a.icon_close:hover {
    color: #c7c7c7
}

.c-search {
    background: transparent
}

.c-search_message__body {
    color: #e6e6e6
}

.p-search_filter__more_link {
    color: #e6e6e6
}

.p-search_filter__title_text {
    background: #363636;
    color: #e6e6e6
}

.p-search_filter__datepicker_trigger {
    background: #363636;
    border-color: #545454;
    color: #e6e6e6
}

.p-search_filter__datepicker_trigger:hover {
    color: #949494
}

.c-search_modal .c-search__input_box,
.c-search_modal .popover>div,
.c-search_modal:not(.c-search_modal--primarysearch) .c-search__input_box,
.c-search_modal:not(.c-search_modal--primarysearch) .popover>div {
    background: #363636;
    border-color: #545454;
    color: #e6e6e6
}

.c-search_autocomplete footer {
    background: #363636;
    border-color: #545454;
    color: #e6e6e6
}

.c-search_autocomplete__suggestion_item {
    color: #e6e6e6
}

.c-search_autocomplete__suggestion_item--selected {
    background-color: #424242
}

.c-search_autocomplete__suggestion_item .token {
    background-color: #222222;
    color: #e6e6e6
}

.c-search__input_and_close {
    border-bottom-color: #000
}

.c-search__input_and_close__close,
.c-search__input_box__clear,
.c-search__input_box__icon,
.c-search__section_header {
    color: #e6e6e6
}

#msgs_overlay_div {
    background: #222
}

#col_messages {
    box-shadow: inset 1px 0 0 0 #222
}

.c-mrkdwn__broadcast--mention,
.c-mrkdwn__broadcast--mention:hover,
.c-mrkdwn__highlight,
.c-mrkdwn__mention,
.c-mrkdwn__mention:hover,
.c-mrkdwn__subteam--mention,
.c-mrkdwn__subteam--mention:hover,
.mention_yellow_bg {
    color: #949494 !important
}

.c-message:hover .c-message__broadcast_preamble,
.c-message:hover .c-message__broadcast_preamble_outer {
    color: #949494
}

.c-message--hover .c-message__broadcast_preamble .c-message--focus .c-message__broadcast_preamble,
.c-message--hover .c-message__broadcast_preamble .c-message--focus .c-message__broadcast_preamble_outer,
.c-message--hover .c-message__broadcast_preamble_outer .c-message--focus .c-message__broadcast_preamble,
.c-message--hover .c-message__broadcast_preamble_outer .c-message--focus .c-message__broadcast_preamble_outer {
    color: #949494
}

.c-message--focus:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight),
.c-message--hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight),
.c-message:hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight) {
    background: rgba(0, 0, 0, 0.1)
}

.c-message--hover .c-message__body--automated .c-message--focus .c-message__body--automated,
.c-message:hover .c-message__body--automated {
    color: #949494
}

.c-message--hover .c-message__file_meta .c-message--focus .c-message__file_meta,
.c-message:hover .c-message__file_meta {
    color: #949494
}

.c-message--focus:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight) {
    background: rgba(0, 0, 0, 0.1)
}

.c-message--pinned,
.c-message--sli_highlight:not(.c-message--sli_highlight_negative),
.c-message--starred {
    background: rgba(0, 0, 0, 0.2)
}

.c-message--custom_response {
    background: rgba(0, 0, 0, 0.15)
}

.c-message--ephemeral,
.c-message--sli_highlight_negative {
    background: rgba(0, 0, 0, 0.1)
}

.c-message--pinned .c-message__label__icon {
    color: #bf360c
}

.c-message--custom_response .c-message__label__icon,
.c-message--sli_highlight .c-message__label__icon {
    color: #e6e6e6
}

.c-message--sli_highlight .c-message__label .c-mrkdwn__channel.internal_channel_link,
.c-message--sli_highlight .c-message__label .c-mrkdwn__member--link {
    color: #949494
}

.c-message--sli_highlight_negative .c-message__label {
    background: rgba(0, 0, 0, 0.1)
}

.c-message--resend .c-message__body {
    color: #949494
}

.c-message--deleting {
    background: rgba(191, 54, 12, 0.6)
}

.c-message--standalone {
    border-color: rgba(84, 84, 84, 0.1)
}

.c-message--unprocessed .c-message__body {
    animation: to-grey 50ms linear 10s forwards
}

.c-message__broadcast_preamble,
.c-message__broadcast_preamble_outer {
    color: #949494
}

.c-message__sender {
    color: #e6e6e6
}

.c-message__sender a {
    color: #e6e6e6
}

.c-message__sender .c-emoji__text_mode_icon {
    color: #949494
}

.c-message__body {
    color: #e6e6e6
}

.c-message__body--unknown {
    background: rgba(84, 84, 84, 0.1)
}

.c-message__body--automated {
    color: #949494
}

.c-message__body--tombstone {
    color: #949494
}

.c-message__label {
    color: #949494
}

.c-message__label__highlight_title {
    color: #e6e6e6
}

.c-message__label__highlight_negative,
.c-message__label__highlight_positive {
    color: #949494
}

.c-message__label__highlight_negative--active,
.c-message__label__highlight_positive--active {
    color: #e6e6e6
}

.c-message__resend_controls {
    color: #949494
}

.c-message__resend_column {
    background-color: rgba(84, 84, 84, 0.1)
}

.c-message__cancel,
.c-message__resend {
    color: #e6e6e6
}

.c-message__edited_label {
    color: #949494
}

.c-message__tombstone_icon {
    background: rgba(84, 84, 84, 0.1);
    color: #949494
}

.c-message__bot_label {
    background: rgba(84, 84, 84, 0.1);
    color: #949494
}

.c-message__comment:before {
    color: #949494
}

.c-message__call_attachment {
    background: #222;
    border-color: rgba(84, 84, 84, 0.1)
}

.c-message__call_icon {
    color: #e6e6e6
}

.c-message__call--ended .c-message__call_icon {
    color: #949494
}

.c-message__call_info {
    color: #e6e6e6
}

.c-message__call_name--linked {
    color: #e6e6e6
}

.c-message__call_name+.c-message__call_description::before {
    color: #949494
}

.c-message__call_sub {
    color: #949494
}

.c-message_actions__container {
    background: #222;
    border-color: #363636
}

.c-message_actions__container:hover {
    border-color: #545454;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25)
}

.c-message_actions__button {
    border-right-color: #363636;
    color: #949494
}

.c-message_actions__button:hover {
    color: #e6e6e6
}

.c-message_actions__button:active {
    background: #363636
}

.c-message_group {
    background-color: #222;
    border-color: #363636
}

.c-message_group:hover .c-message_group__header {
    color: #949494
}

.c-message_group__header {
    color: #e6e6e6
}

.c-message_group__divider_text {
    background-color: #222;
    color: #e6e6e6
}

.c-message_list__unread_divider__separator {
    border-color: #545454
}

.c-message_list__unread_divider__label {
    background: #222;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    color: #545454
}

.c-message_list__spinner {
    color: #949494
}

.c-message_list .c-scrollbar__bar {
    background: #424242
}

.c-virtual_list__item--focus:focus .c-message_list__focus_indicator {
    box-shadow: inset 0 0 0 3px rgba(130, 130, 130, 0.8)
}

ts-message {
    color: #e6e6e6
}

ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply),
ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply),
ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply) {
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 1px 0 0 0 #222
}

ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned),
ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned),
ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned) {
    background: rgba(0, 0, 0, 0.2)
}

ts-message.active .edited,
ts-message.active .reply_bar .last_reply_at,
ts-message.active .timestamp,
ts-message.active.automated .message_body,
ts-message.message--focus .edited,
ts-message.message--focus .reply_bar .last_reply_at,
ts-message.message--focus .timestamp,
ts-message.message--focus.automated .message_body,
ts-message:hover .edited,
ts-message:hover .reply_bar .last_reply_at,
ts-message:hover .timestamp,
ts-message:hover.automated .message_body {
    color: #949494
}

ts-message.active .meta,
ts-message.message--focus .meta,
ts-message:hover .meta {
    color: #949494 !important
}

ts-message.active .meta.msg_inline_file_preview_toggler a,
ts-message.message--focus .meta.msg_inline_file_preview_toggler a,
ts-message:hover .meta.msg_inline_file_preview_toggler a {
    color: #949494 !important
}

ts-message.is_pinned {
    background: rgba(0, 0, 0, 0.15)
}

ts-message .timestamp {
    color: #949494
}

ts-message .temp_msg_controls {
    color: #949494
}

ts-message .edited {
    color: rgba(148, 148, 148, 0.8)
}

ts-message:hover .edited {
    color: #949494
}

ts-message .only_visible_to_user {
    color: #949494
}

ts-message.ephemeral {
    color: #e6e6e6
}

ts-message .bot_label {
    background: #000;
    color: #949494
}

ts-message .in_reply_to {
    background: #000;
    color: #949494
}

ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display) {
    border: 1px solid #363636
}

ts-message.unprocessed {
    color: rgba(230, 230, 230, 0.75)
}

ts-message.highlight {
    background: rgba(191, 54, 12, 0.4)
}

ts-message.highlight:hover {
    background: rgba(191, 54, 12, 0.4)
}

ts-message .is_highlights_holder {
    color: #949494
}

ts-message .is_highlights_holder ts-icon {
    color: #949494
}

ts-message .is_highlights_holder .highlights_feedback_link {
    color: #949494
}

ts-message .is_highlights_holder .highlights_feedback a:not(.highlights_feedback_link) {
    color: #e6e6e6
}

ts-message .recap_highlight {
    background: rgba(191, 54, 12, 0.4)
}

ts-message .recap_highlight a {
    color: #e6e6e6
}

ts-message.delete_mode,
ts-message.multi_delete_mode {
    background: rgba(191, 54, 12, 0.75)
}

ts-message.automated .message_body {
    color: rgba(230, 230, 230, 0.8)
}

ts-message .action_hover_container {
    border: 1px solid #363636
}

ts-message .action_hover_container:hover {
    border-color: #545454;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25)
}

ts-message .action_hover_container:hover a {
    background: #363636;
    border-right: 1px solid #545454
}

ts-message .action_hover_container .btn_msg_action {
    background: #222;
    border-right: 1px solid #363636;
    color: #949494
}

ts-message .action_hover_container .btn_msg_action:hover {
    color: #e6e6e6
}

ts-message .action_hover_container .btn_msg_action.active,
ts-message .action_hover_container .btn_msg_action:active {
    background: #363636;
    color: #e6e6e6
}

ts-message.selected {
    background: #222
}

ts-message.selected:not(.delete_mode) {
    background: #222
}

ts-message.selected:hover {
    background: rgba(0, 0, 0, 0.15)
}

ts-message .meta {
    color: #949494
}

ts-message .meta.msg_inline_file_preview_toggler .member,
ts-message .meta.msg_inline_file_preview_toggler .service_link,
ts-message .meta.msg_inline_img_toggler .member,
ts-message .meta.msg_inline_img_toggler .service_link {
    color: #949494 !important
}

ts-message .meta.msg_inline_file_preview_toggler .msg_inline_media_toggler,
ts-message .meta.msg_inline_file_preview_toggler .ts_icon_dropbox,
ts-message .meta.msg_inline_file_preview_toggler a,
ts-message .meta.msg_inline_img_toggler .msg_inline_media_toggler,
ts-message .meta.msg_inline_img_toggler .ts_icon_dropbox,
ts-message .meta.msg_inline_img_toggler a {
    color: #949494 !important
}

ts-message .pinned_item_message_header {
    color: #949494
}

ts-message .mention {
    background: #828282 !important;
    color: #e6e6e6 !important
}

ts-message .internal_member_link {
    background: #222 !important;
    border: 0;
    color: #949494 !important
}

ts-message .internal_member_link:hover {
    color: #c7c7c7 !important
}

ts-message.show_recap:not(.is_pinned) {
    background: rgba(0, 0, 0, 0.15)
}

ts-message.show_recap:not(.is_pinned):hover {
    background: rgba(0, 0, 0, 0.15)
}

.ephemeral.message .message_content {
    color: #e6e6e6
}

ts-mention {
    background: rgba(130, 130, 130, 0.1) !important;
    color: #e6e6e6 !important
}

.selecting_messages ts-message:hover {
    background: #000
}

.selecting_messages ts-message.multi_delete_mode:hover {
    background: rgba(191, 54, 12, 0.75)
}

#convo_container {
    background-color: #222
}

#convo_container #message_edit_container {
    border-bottom: 1px solid #545454;
    border-top: 1px solid #545454
}

#convo_container ts-conversation::after {
    background: rgba(0, 0, 0, 0.08);
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, transparent), color-stop(1, rgba(0, 0, 0, 0.08)));
    background: -moz-linear-gradient(center bottom, transparent 0, rgba(0, 0, 0, 0.08) 100%)
}

#convo_container ts-conversation::before {
    background: transparent;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(0, 0, 0, 0.08)), color-stop(1, transparent));
    background: -moz-linear-gradient(center bottom, rgba(0, 0, 0, 0.08) 0, transparent 100%)
}

#convo_container ts-conversation ts-message.selected {
    background: #222
}

#convo_container ts-conversation ts-relatives::after {
    background: #545454
}

#convo_container ts-conversation ts-relatives ts-message.deleted .message_icon i {
    background-color: #545454;
    color: #949494
}

#convo_container ts-conversation ts-relatives ts-message.deleted .message_content {
    color: #e6e6e6
}

#convo_container ts-conversation ts-relatives ts-message:not(.selected):not(.highlight):not(.delete_mode) {
    background-color: #222
}

#convo_container ts-conversation ts-relatives ts-message:not(.selected):not(.highlight):not(.delete_mode).new {
    background-color: #2f2f2f
}

#msgs_div .unread_divider hr {
    border-top: 1px solid #545454
}

#msgs_div .unread_divider .divider_label {
    background: #222;
    color: #545454
}

#msgs_div .unread_divider.no_unreads hr {
    border-top-color: #363636
}

#msgs_div .unread_divider.no_unreads .divider_label {
    color: #949494
}

.channel_archive_messages.card .col:first-child {
    border-right: 1px solid #545454
}

.star {
    color: #949494
}

.star_item {
    border-bottom: 1px solid #000
}

.star_item .star_meta {
    color: #949494
}

.bot_message .message_sender {
    color: #e6e6e6
}

.bot_message .message_sender a {
    color: #e6e6e6
}

#col_channels ul li:not(.active):not(.away)>.color_USLACKBOT:not(.nuc),
#col_channels:not(.show_presence) ul li>.color_USLACKBOT:not(.nuc),
.color_USLACKBOT:not(.nuc) {
    color: #e6e6e6
}

#msgs_scroller_div #end_display_div #end_display_status {
    color: #949494
}

#msgs_scroller_div #end_display_div #end_display_meta {
    color: #949494
}

#msgs_scroller_div #end_display_div #end_display_meta h1 {
    color: #e6e6e6
}

#msgs_scroller_div #end_display_div p {
    color: #e6e6e6
}

.member_mentions_options {
    background-color: #000;
    border-top: 1px solid #363636
}

.dm_badge .dm_badge_meta {
    color: #e6e6e6
}

.dm_badge a {
    color: #949494
}

.dm_badge a.member_preview_link {
    color: #949494
}

.dm_badge .dm_badge:hover a {
    color: #949494
}

.dm_badge .hint {
    color: #949494
}

#toggle-subscription-status .subscription_desc {
    color: #949494
}

.bot_label {
    background: #000;
    color: #949494
}

@keyframes to-grey {
    0% {
        color: inherit
    }

    100% {
        color: #949494
    }
}

@keyframes fade-background-highlight {
    0% {
        background: #545454
    }

    100% {
        background: transparent
    }
}

@keyframes border_focus_animation {
    0% {
        box-shadow: 0 0 4px 0.25px #545454, 0 0 0 0.5px #828282
    }

    100% {
        box-shadow: 0 0 4px 0 #545454, 0 0 0 0 #828282
    }
}

.c-message_attachment {
    color: #e6e6e6
}

.c-message_attachment__border {
    background-color: #545454
}

.c-message_attachment__delete {
    color: #949494
}

.c-message_attachment__delete:hover {
    color: #c7c7c7
}

.c-message_attachment__pretext {
    color: #e6e6e6
}

.c-message_attachment__part+.c-message_attachment__part::before {
    color: #545454
}

.c-message_attachment__author .c-message_attachment__autor--distinct {
    color: #949494
}

.c-message_attachment__author_link+.c-message_attachment__author_link {
    color: #949494
}

.c-message_attachment__title_link span {
    color: #e6e6e6
}

.c-message_attachment__text_expander {
    color: #949494
}

.c-message_attachment__footer {
    color: #949494
}

.c-message_attachment__image,
.c-message_attachment__thumb,
.c-message_attachment__video_thumb {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset
}

.c-message_attachment__video_html {
    background-color: rgba(34, 34, 34, 0.4)
}

.c-message_attachment__video_buttons {
    background: rgba(0, 0, 0, 0.4)
}

.c-message_attachment__video_link:link,
.c-message_attachment__video_link:visited {
    color: #e6e6e6
}

.c-message_attachment__video_link,
.c-message_attachment__video_play {
    color: #e6e6e6;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5)
}

.c-message_attachment__video_link:hover,
.c-message_attachment__video_play:hover {
    color: #e6e6e6
}

.c-message_attachment__media_trigger .c-expandable_trigger {
    color: #949494
}

.c-message_attachment__media_trigger--too_large {
    color: #949494
}

.c-message_attachment__select {
    border-color: #000
}

.c-message_attachment__select:active,
.c-message_attachment__select:hover {
    border-color: #545454
}

.c-message__reply_bar--focus,
.c-message__reply_bar:hover {
    background-color: #222;
    border-color: #000
}

.c-message__reply_bar--focus .c-message__reply_bar_arrow,
.c-message__reply_bar:hover .c-message__reply_bar_arrow {
    color: #949494
}

.c-message__reply_bar--focus .c-message__reply_bar_view_thread,
.c-message__reply_bar:hover .c-message__reply_bar_view_thread {
    background-color: #545454
}

.c-message__reply_bar_description {
    color: #949494
}

.c-message__file_meta {
    color: #949494
}

.c-message__image_container {
    background: rgba(0, 0, 0, 0.1)
}

.c-message__image_wrapper:after {
    border-color: transparent
}

.attachment_group.has_container {
    background: #222;
    border: 1px solid #363636
}

.attachment_group.has_container .inline_attachment::after {
    background-color: #363636
}

.attachment_group.has_container.has_link:hover {
    border-bottom-color: #363636;
    border-left-color: #363636;
    border-right-color: #363636;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)
}

.attachment_group .media_caret {
    color: #949494
}

.attachment_group .attachment_source span {
    color: #949494 !important
}

.attachment_group .attachment_source .attachment_source_name+.attachment_author_name::before {
    color: #949494
}

.attachment_group .inline_attachment.reply_broadcast+.attachment_rule {
    color: #949494
}

.attachment_group .inline_attachment.reply_broadcast+.attachment_rule::after {
    border-bottom: 1px solid #363636
}

.attachment_group .inline_attachment.message_unfurl .attachment_source .attachment_source_name a,
.attachment_group .inline_attachment.message_unfurl .attachment_source .attachment_source_name span {
    color: #949494
}

.attachment_group .attachment_title a {
    color: #e6e6e6
}

.attachment_group .attachment_footer_text+.attachment_ts::before {
    color: #949494
}

.attachment_group .delete_attachment_link ts-icon::before {
    color: #949494
}

.attachment_group .delete_attachment_link:hover ts-icon::before {
    color: #c7c7c7
}

.attachment_still_pending ts-inline-saver {
    color: #949494
}

.msg_inline_attachment_column.column_border {
    background-color: #545454
}

.msg_inline_img_holder .msg_inline_img {
    box-shadow: inset 0 0 0 1px #000
}

.msg_inline_attachment_collapser,
.msg_inline_attachment_expander,
.msg_inline_img_collapser,
.msg_inline_img_expander,
.msg_inline_media_toggler,
.msg_inline_room_preview_collapser,
.msg_inline_room_preview_expander {
    color: #949494
}

.msg_inline_attachment_collapser:hover,
.msg_inline_attachment_expander:hover,
.msg_inline_img_collapser:hover,
.msg_inline_img_expander:hover,
.msg_inline_media_toggler:hover,
.msg_inline_room_preview_collapser:hover,
.msg_inline_room_preview_expander:hover {
    color: #c7c7c7
}

.msg_inline_img {
    background: #545454
}

.msg_inline_room_preview_collapser {
    color: #949494
}

.msg_inline_room_preview_collapser:hover {
    color: #949494
}

.inline_attachment span.attachment_author_name {
    color: #949494
}

.inline_attachment span.attachment_author_subname,
.inline_attachment span.attachment_service_name {
    color: #949494
}

.inline_attachment a span:active,
.inline_attachment a span:hover {
    color: #c7c7c7 !important
}

.inline_attachment .attachment_footer,
.inline_attachment .attachment_ts {
    color: #949494
}

.inline_attachment .attachment_footer a,
.inline_attachment .attachment_ts a {
    color: #949494
}

.inline_attachment .attachment_footer a:active,
.inline_attachment .attachment_footer a:hover {
    color: #c7c7c7 !important
}

.inline_attachment .attachment_ts a:active,
.inline_attachment .attachment_ts a:hover {
    color: #c7c7c7 !important
}

.inline_attachment .iframe_placeholder,
.inline_attachment iframe {
    background-color: #000
}

.dense_meta.msg_inline_file_preview_toggler,
.dense_meta.msg_inline_img_toggler,
.meta.msg_inline_file_preview_toggler,
.meta.msg_inline_img_toggler {
    color: #949494 !important
}

.dense_meta.msg_inline_file_preview_toggler a[data-file-id],
.dense_meta.msg_inline_img_toggler a[data-file-id],
.meta.msg_inline_file_preview_toggler a[data-file-id],
.meta.msg_inline_img_toggler a[data-file-id] {
    color: #949494 !important
}

.dense_meta.msg_inline_file_preview_toggler:hover,
.dense_meta.msg_inline_img_toggler:hover,
.meta.msg_inline_file_preview_toggler:hover,
.meta.msg_inline_img_toggler:hover {
    color: #c7c7c7 !important
}

.dense_meta.msg_inline_file_preview_toggler:hover a[data-file-id],
.dense_meta.msg_inline_img_toggler:hover a[data-file-id],
.meta.msg_inline_file_preview_toggler:hover a[data-file-id],
.meta.msg_inline_img_toggler:hover a[data-file-id] {
    color: #c7c7c7 !important
}

.dense_meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title,
.dense_meta.msg_inline_img_toggler .msg_inline_file_preview_title,
.meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title,
.meta.msg_inline_img_toggler .msg_inline_file_preview_title {
    color: #e6e6e6
}

.dense_meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title:hover,
.dense_meta.msg_inline_img_toggler .msg_inline_file_preview_title:hover,
.meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title:hover,
.meta.msg_inline_img_toggler .msg_inline_file_preview_title:hover {
    color: #949494
}

.dense_meta.msg_inline_file_preview_toggler .ts_icon.msg_inline_media_toggler:hover,
.dense_meta.msg_inline_img_toggler .ts_icon.msg_inline_media_toggler:hover,
.meta.msg_inline_file_preview_toggler .ts_icon.msg_inline_media_toggler:hover,
.meta.msg_inline_img_toggler .ts_icon.msg_inline_media_toggler:hover {
    color: #c7c7c7 !important
}

.dense_meta.meta_feature_fix_files .file_new_window_link:hover,
.meta.meta_feature_fix_files .file_new_window_link:hover {
    color: #c7c7c7 !important
}

.dense_meta.meta_feature_fix_files .file_new_window_link:hover .file_inline_icon,
.meta.meta_feature_fix_files .file_new_window_link:hover .file_inline_icon {
    color: #c7c7c7 !important
}

.dense_meta.meta_feature_fix_files .member,
.meta.meta_feature_fix_files .member {
    color: #949494 !important
}

.delete_attachment_link {
    color: #949494
}

.delete_attachment_link:hover {
    color: #c7c7c7
}

.c-file_container,
.file_container {
    background: #000;
    border: 1px solid #363636;
    color: #e6e6e6
}

.c-file_container.file_menu_open,
.c-file_container:focus,
.c-file_container:hover,
.file_container.file_menu_open,
.file_container:focus,
.file_container:hover {
    border-bottom-color: #363636;
    border-left-color: #363636;
    border-right-color: #363636
}

.c-file_container.post_container::after,
.c-file_container::after,
.file_container.post_container::after,
.file_container::after {
    background-image: -webkit-linear-gradient(top, rgba(34, 34, 34, 0) 0, #222 100%);
    background-image: -moz-linear-gradient(top, rgba(34, 34, 34, 0) 0, #222 100%);
    background-image: -o-linear-gradient(top, rgba(34, 34, 34, 0) 0, #222 100%);
    background-image: linear-gradient(top, rgba(34, 34, 34, 0) 0, #222 100%)
}

.c-file_container.generic_container .file_header_icon .ts_icon,
.file_container.generic_container .file_header_icon .ts_icon {
    background: #222;
    box-shadow: 0 0 0 3px #222;
    color: #e6e6e6
}

.c-file_container.generic_container .file_header_icon .ts_icon.snippet,
.file_container.generic_container .file_header_icon .ts_icon.snippet {
    background: #363636
}

.c-file_container.generic_container .file_header_meta .meta_hover,
.file_container.generic_container .file_header_meta .meta_hover {
    background: #000;
    color: #e6e6e6
}

.c-file_container .file_header .file_header_meta,
.file_container .file_header .file_header_meta {
    color: #949494
}

.c-file_container .file_header+.file_body,
.file_container .file_header+.file_body {
    border-top: 1px solid #000
}

.c-file_container .preview_actions .btn,
.file_container .preview_actions .btn {
    background-color: #363636;
    color: #e6e6e6 !important
}

.c-file_container .preview_actions .btn::after,
.file_container .preview_actions .btn::after {
    border-color: #000
}

.c-file_container .preview_actions .btn.preview_show_less_header,
.file_container .preview_actions .btn.preview_show_less_header {
    background-color: rgba(130, 130, 130, 0.9);
    color: #e6e6e6 !important
}

.c-file_container .preview_actions .btn.preview_show_less_header::after,
.file_container .preview_actions .btn.preview_show_less_header::after {
    border: 2px solid #000
}

.c-file_container .preview_actions .btn.preview_show_less_header:focus,
.c-file_container .preview_actions .btn.preview_show_less_header:hover,
.file_container .preview_actions .btn.preview_show_less_header:focus,
.file_container .preview_actions .btn.preview_show_less_header:hover {
    background-color: #363636
}

.c-file_container .preview_actions .btn.preview_show_less_header:focus::after,
.c-file_container .preview_actions .btn.preview_show_less_header:hover::after,
.file_container .preview_actions .btn.preview_show_less_header:focus::after,
.file_container .preview_actions .btn.preview_show_less_header:hover::after {
    border-color: #363636
}

.c-file_container.image_container .image_body,
.file_container.image_container .image_body {
    background-color: #222
}

.c-file_container.image_container .preview_actions .btn,
.file_container.image_container .preview_actions .btn {
    background-color: rgba(130, 130, 130, 0.9)
}

.c-file_container.image_container .preview_actions .btn:focus,
.c-file_container.image_container .preview_actions .btn:hover,
.file_container.image_container .preview_actions .btn:focus,
.file_container.image_container .preview_actions .btn:hover {
    background-color: #363636
}

.c-file_container.image_container .preview_actions.overflow_preview_actions,
.file_container.image_container .preview_actions.overflow_preview_actions {
    background: rgba(130, 130, 130, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.1)
}

.c-file_container .preview_show .preview_show_btn,
.file_container .preview_show .preview_show_btn {
    background: linear-gradient(rgba(84, 84, 84, 0.8), rgba(84, 84, 84, 0.8)), linear-gradient(rgba(130, 130, 130, 0.3), rgba(130, 130, 130, 0.3));
    color: #e6e6e6
}

.c-file_container.file_menu_open .preview_show_less .preview_show_btn,
.c-file_container:focus .preview_show_less .preview_show_btn,
.c-file_container:hover .preview_show_less .preview_show_btn,
.file_container.file_menu_open .preview_show_less .preview_show_btn,
.file_container:focus .preview_show_less .preview_show_btn,
.file_container:hover .preview_show_less .preview_show_btn {
    background: rgba(84, 84, 84, 0.8);
    color: #e6e6e6
}

.c-file_container .c-file__title,
.file_container .c-file__title {
    color: #e6e6e6
}

.message--focus .file_container .preview_show.preview_show_less .preview_show_btn {
    background: #545454;
    color: #e6e6e6
}

.msg_inline_video_buttons_div {
    background-color: rgba(34, 34, 34, 0.4)
}

.msg_inline_video_buttons_div a {
    color: #e6e6e6;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5)
}

.msg_inline_video_buttons_div a:visited {
    color: #e6e6e6;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5)
}

.post_body ul.checklist {
    background-color: #363636
}

.post_body ul.checklist li::before {
    background: #363636
}

.post_body ul.checklist li.checked {
    color: #949494
}

.post_body ul.list.checklist li {
    border-bottom: 1px solid #545454
}

.post_body ul.list.checklist li.checked {
    color: #949494
}

.post_body .message {
    background-color: #e6e6e6
}

.post_body code,
.post_body pre {
    background: #363636
}

ts-message .reply_bar .last_reply_at,
ts-message .reply_bar .reply_bar_caret,
ts-message .reply_bar .view_conv_hover {
    color: #949494
}

ts-message .reply_bar:hover {
    background: #222;
    border-color: #000
}

.inline_color_block {
    border-color: #545454
}

.p-message_pane .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider {
    background: #222
}

.p-message_pane .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider::before {
    background: #222;
    border-bottom: 1px solid #222
}

.p-message_pane .p-message_pane__top_banners:not(:empty)+div .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider:before,
.p-message_pane .p-message_pane__top_banners:not(:empty)+div .c-message_list:not(.c-virtual_list--scrollbar):before {
    box-shadow: 0 32px #222
}

.p-message_pane__foreword__description,
.p-message_pane__limited_history_alert {
    color: #e6e6e6
}

.p-message_pane__limited_history_foreword {
    background: #363636;
    background-image: none;
    color: #e6e6e6
}

.p-message_pane__unread_banner__banner {
    background: #545454;
    text-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

.messages_banner {
    color: #e6e6e6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

.messages_banner a {
    color: #e6e6e6
}

.messages_banner a:hover {
    color: #e6e6e6
}

#connection_div {
    background: #bf360c
}

#archives_return {
    background: padding-box #828282;
    color: #e6e6e6
}

#archives_return.warning {
    background: #bf360c
}

#archives_return a {
    color: #e6e6e6
}

#archives_return a:hover {
    color: rgba(230, 230, 230, 0.8)
}

#messages_unread_status {
    background: #545454
}

#messages_unread_status:hover {
    background: #828282
}

#messages_unread_status:hover .clear_unread_messages {
    background: #828282
}

#messages_unread_status:hover .clear_unread_messages:hover {
    background: #545454
}

#messages_unread_status.quiet {
    background: #828282;
    color: #e6e6e6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

#messages_unread_status.quiet a {
    color: #e6e6e6
}

.clear_unread_messages {
    border-left: 1px solid rgba(0, 0, 0, 0.15)
}

#messages_container.has_top_messages_banner::before {
    background: none
}

.end_div_msg_lim {
    background-color: #363636;
    background-image: none
}

#archives_end_div_msg_lim h1,
#end_display_msg_lim h1 {
    color: #e6e6e6
}

#archives_end_div_msg_lim h2,
#end_display_msg_lim h2 {
    color: rgba(230, 230, 230, 0.8)
}

code {
    background-color: #000;
    border: 1px solid #363636;
    color: #e6e6e6
}

.file_list_item.snippet .snippet_preview {
    background: #000
}

.snippet_body,
.snippet_preview {
    background: #000
}

.snippet_body pre,
.snippet_preview pre {
    color: #e6e6e6 !important
}

.c-file_container .CodeMirror .CodeMirror-code>div::before,
.c-file_container .CodeMirror .sssh-line::before,
.c-file_container .sssh-code .CodeMirror-code>div::before,
.c-file_container .sssh-code .sssh-line::before,
.file_container .CodeMirror .CodeMirror-code>div::before,
.file_container .CodeMirror .sssh-line::before,
.file_container .sssh-code .CodeMirror-code>div::before,
.file_container .sssh-code .sssh-line::before {
    background-color: #363636;
    border-right: 1px solid #363636;
    color: #949494
}

.c-snippet .c-file_container {
    background-color: #222
}

.c-snippet .c-file_container.c-file_container--gradient::after {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0), #222);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

.CodeMirror {
    background: #000;
    border: 1px solid #363636;
    color: #e6e6e6 !important
}

.CodeMirror pre {
    background: transparent !important
}

.CodeMirror div.CodeMirror-cursor {
    border-left: 1px solid #e6e6e6
}

.CodeMirror.cm-fat-cursor div.CodeMirror-cursor {
    background: #e6e6e6
}

.CodeMirror .CodeMirror-gutters {
    background-color: #363636;
    border-right: 1px solid #222
}

.CodeMirror-gutter-filler,
.CodeMirror-scrollbar-filler {
    background-color: #363636
}

.CodeMirror-linenumber {
    color: #949494 !important
}

.CodeMirror-guttermarker {
    color: #949494
}

.CodeMirror-guttermarker-subtle {
    color: #949494
}

.CodeMirror-ruler {
    border-left: 1px solid #828282
}

.cm-s-default .cm-keyword {
    color: #ce93d8
}

.cm-s-default .cm-atom {
    color: #9fa8da
}

.cm-s-default .cm-number {
    color: #a5d6a7
}

.cm-s-default .cm-def {
    color: #536dfe
}

.cm-s-default .cm-variable-2 {
    color: #9fa8da
}

.cm-s-default .cm-variable-3 {
    color: #c5e1a5
}

.cm-s-default .cm-comment {
    color: #ffcc80
}

.cm-s-default .cm-string {
    color: #ef9a9a
}

.cm-s-default .cm-string-2 {
    color: #ffab91
}

.cm-s-default .cm-meta {
    color: #eee
}

.cm-s-default .cm-qualifier {
    color: #eee
}

.cm-s-default .cm-builtin {
    color: #b39ddb
}

.cm-s-default .cm-bracket {
    color: #e6ee9c
}

.cm-s-default .cm-tag {
    color: #a5d6a7
}

.cm-s-default .cm-attribute {
    color: #40c4ff
}

.cm-s-default .cm-header {
    color: #80cbc4
}

.cm-s-default .cm-quote {
    color: #b0bec5
}

.cm-s-default .cm-hr {
    color: #363636
}

.cm-s-default .cm-link {
    color: #949494
}

.cm-negative {
    color: #bf360c
}

.cm-positive {
    color: #0cbf72
}

.cm-invalidchar,
.cm-s-default .cm-error {
    color: #bf360c
}

div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0cbf72
}

div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #bf360c
}

.CodeMirror-matchingtag {
    background: #000
}

.CodeMirror-activeline-background {
    background: #828282
}

.CodeMirror-selected {
    background: #828282
}

.CodeMirror-focused .CodeMirror-selected {
    background: #828282
}

.cm-searching {
    background: #828282
}

.sssh-keyword {
    color: #ce93d8
}

.sssh-atom {
    color: #9fa8da
}

.sssh-number {
    color: #a5d6a7
}

.sssh-def {
    color: #536dfe
}

.sssh-variable {
    color: #9fa8da
}

.sssh-variable-2 {
    color: #c5e1a5
}

.sssh-variable-3 {
    color: #c1a5e1
}

.sssh-operator {
    color: #e6e6e6
}

.sssh-property {
    color: #e6e6e6
}

.sssh-comment {
    color: #ffcc80
}

.sssh-string {
    color: #ef9a9a
}

.sssh-string-2 {
    color: #ffab91
}

.sssh-meta {
    color: #eee
}

.sssh-error {
    color: #bf360c
}

.sssh-qualifier {
    color: #eee
}

.sssh-builtin {
    color: #b39ddb
}

.sssh-bracket {
    color: #e6ee9c
}

.sssh-tag {
    color: #a5d6a7
}

.sssh-attribute {
    color: #40c4ff
}

.sssh-header {
    color: #80cbc4
}

.sssh-quote {
    color: #b0bec5
}

.sssh-hr {
    color: #363636
}

.sssh-link {
    color: #949494
}

.c-message--dense .c-timestamp__label {
    color: #949494
}

.c-message--dense .c-message__content_header .c-custom_status {
    border-color: #363636
}

.dense_theme ts-message {
    color: #e6e6e6
}

.dense_theme ts-message.first .message_gutter .timestamp,
.dense_theme ts-message.selected .message_gutter .timestamp {
    color: #949494
}

.dense_theme ts-message .message_content .message_current_status {
    border-color: #363636
}

.c-message--light .c-message__sender .c-message__sender_link {
    color: #e6e6e6
}

.light_theme ts-message {
    color: #e6e6e6
}

.light_theme ts-message .message_content .message_sender,
.light_theme ts-message .message_content .meta .message_sender:hover {
    color: #e6e6e6 !important
}

.light_theme ts-message .comment::before {
    color: #949494
}

.channel_overlay {
    border-color: #363636;
    color: #949494
}

.channel_overlay.channel_overlay_redesign .channel_overlay_title {
    color: #e6e6e6
}

.channel_overlay.channel_overlay_redesign li {
    color: #949494
}

.channel_overlay_title_wrap {
    border-color: #363636
}

.channel_overlay_title_shared {
    color: #e6e6e6
}

pre {
    background: #000;
    border: 1px solid #363636;
    color: #e6e6e6
}

pre span.mention {
    padding: 2px 0 !important
}

#page pre,
body>pre {
    background: #000;
    color: #e6e6e6 !important
}

body>pre {
    background: #828282
}

.special_formatting_quote .quote_bar {
    background-color: #545454
}

#threads_msgs_scroller_div {
    background: #222
}

#threads_msgs_scroller_div:not(.loading)::before {
    background: #222
}

#threads_msgs_scroller_div.loading::before {
    color: #949494
}

#threads_msgs_scroller_div .threads_caught_up_divider .divider_line {
    border-top: 1px solid #363636
}

#threads_msgs_scroller_div .threads_caught_up_divider .divider_label {
    background: #545454;
    color: #e6e6e6
}

#threads_msgs_scroller_div.loading {
    background: none
}

#threads_msgs_scroller_div.loading::before {
    color: #e6e6e6
}

#threads_view_banner.messages_banner {
    background: #363636
}

#threads_view_banner.messages_banner:hover {
    background: #545454
}

#threads_view_banner.messages_banner:hover .clear_unread_messages {
    background: #545454
}

#threads_msgs.new_banner_is_showing::before {
    background: #222
}

ts-thread {
    background: #222
}

ts-thread .reply_input_container .inline_message_input_container form textarea {
    border-color: #363636;
    color: #e6e6e6
}

ts-thread .reply_input_container .collapsed_input_placeholder,
ts-thread .reply_input_container .join_channel_from_thread_container,
ts-thread .reply_input_container .reply_limited_in_general {
    background: #363636;
    border-color: #363636
}

ts-thread .thread_messages {
    background: #363636;
    border-color: #363636
}

ts-thread ts-message.new_reply {
    background: #222
}

ts-thread ts-message.new_reply:hover {
    background: #363636
}

ts-thread .thread_header .thread_channel_name a {
    color: #e6e6e6
}

ts-thread .thread_header .thread_action_btns button {
    color: #949494
}

ts-thread .new_reply_indicator .blue_dot {
    color: #bf360c
}

#convo_tab .thread_participants,
ts-thread .thread_participants {
    color: #949494
}

#convo_loading_indicator {
    background-image: none
}

.reply_input_container .inline_message_input_container .ql-container {
    background-color: #545454;
    border: 1px solid #363636
}

.reply_input_container .inline_message_input_container .ql-container .ql-editor::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15)
}

.reply_input_container .inline_message_input_container .ql-container .ql-editor::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.25)
}

.reply_input_container .inline_message_input_container .ql-container.focus {
    border-color: rgba(0, 0, 0, 0.15)
}

.reply_input_container .inline_message_input_container .ql-container.focus~.emo_menu {
    color: #e6e6e6
}

.reply_input_container .inline_message_input_container .ql-container~.emo_menu {
    color: #949494
}

#file_reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
#reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
.reply_input_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container {
    color: #949494
}

#unread_msgs_scroller_div::after {
    background: transparent
}

#unread_msgs_scroller_div.loading {
    background-image: none
}

#unread_msgs_scroller_div.loading::before {
    color: #949494
}

#unread_msgs_div .day_divider .day_divider_line {
    border-top-color: #363636
}

.unread_group.marked_as_read .unread_group_header {
    background: #222
}

.unread_group .unread_group_header {
    background: #363636;
    border-top-color: #545454;
    color: #e6e6e6
}

.unread_group .unread_group_header .unread_group_collapse_toggle:hover ts-icon {
    color: #e6e6e6
}

.unread_group .unread_group_header .unread_group_collapse_caret .ts_icon_caret_down {
    color: #949494
}

.unread_group .unread_group_header .unread_group_mark,
.unread_group .unread_group_header .unread_keyboard {
    background: #222
}

.unread_group.active .unread_group_header {
    background: #000;
    border-top-color: #545454;
    color: #e6e6e6
}

.collapsed .unread_group_header .ts_icon_caret_right,
.collapsing .unread_group_header .ts_icon_caret_right {
    color: #949494
}

.mark_as_read_checkmark {
    color: #949494
}

.bottom_mark_all_read {
    border-top-color: #363636
}

.unread_group_header_name a {
    color: #e6e6e6
}

.unread_group_footer .unread_group_new .unread_group_new_text {
    color: #949494
}

.unread_group_footer .unread_group_new:hover .unread_group_new_text {
    color: #949494
}

.unread_empty_state_message {
    color: #949494
}

.unread_empty_state_undo_inner {
    background: #000;
    color: #e6e6e6
}

.unread_empty_state_undo_action {
    color: #e6e6e6
}

.unread_empty_state_refresh {
    background: rgba(34, 34, 34, 0.97)
}

.unread_msgs_loading {
    background: #222;
    background-image: none
}

#col_flex {
    background: transparent
}

#flex_contents {
    background: #222
}

#flex_contents .heading {
    background: #151515;
    border-bottom-color: #363636;
    color: #949494
}

#flex_contents .heading a {
    color: #949494
}

#flex_contents .heading a:hover {
    color: #c7c7c7
}

#flex_contents .heading a.close_flexpane {
    color: #949494
}

#flex_contents .heading .cancel_link {
    color: #949494
}

#flex_contents .heading .menu_heading:hover {
    color: #e6e6e6
}

#flex_contents .heading .menu_icon {
    color: #949494
}

#flex_contents .heading .menu_icon:hover {
    color: #c7c7c7
}

#flex_contents .heading_text {
    color: #949494
}

#flex_contents .subheading:not(.empty) {
    background: #222;
    border-top: 1px solid #000;
    color: #949494
}

#flex_contents .subheading:not(.empty) p a {
    color: #e6e6e6
}

#flex_contents .subheading:not(.empty) .filter_menu_label.active .arrow_down {
    color: #949494
}

#flex_contents .toolbar_container {
    background: #222
}

#flex_contents .flexpane_tab_bar li .tab,
#flex_contents .flexpane_tab_bar li a {
    color: #949494
}

#flex_contents .flexpane_tab_bar li:hover {
    border-bottom: 4px solid #363636
}

#flex_contents .flexpane_tab_bar li:hover .tab,
#flex_contents .flexpane_tab_bar li:hover a {
    color: #949494
}

#flex_contents .flexpane_tab_bar li.active {
    border-bottom: 4px solid #363636
}

#flex_contents .flexpane_tab_bar li.active .tab,
#flex_contents .flexpane_tab_bar li.active a {
    color: #949494
}

#flex_contents .help {
    border-top: 5px solid #000;
    color: #e6e6e6
}

#flex_contents i.callout {
    color: #949494
}

.close_flexpane {
    color: #949494
}

.close_flexpane:focus,
.close_flexpane:hover {
    color: #e6e6e6
}

#client-ui.flex_pane_showing #col_flex {
    border-left-color: #363636
}

.toolbar_container {
    background: #222;
    border-bottom: 1px solid #000;
    color: #e6e6e6
}

.msg_right_link {
    color: #949494
}

.message_location_label {
    color: #949494
}

.p-flexpane_header {
    background: #363636;
    border-color: #545454;
    color: #e6e6e6
}

#client_body:not(.onboarding):not(.feature_global_nav_layout):before {
    background: #363636
}

#details_tab .heading {
    background: #151515
}

#details_tab .heading a.close_flexpane {
    color: #949494
}

#details_tab .heading a.close_flexpane:hover {
    color: #c7c7c7
}

#details_tab hr {
    border-top-color: #363636
}

#details_tab .conversation_details .member_name:hover {
    color: #949494
}

#details_tab .conversation_details .member_username:hover {
    color: #e6e6e6
}

#details_tab .conversation_details .member_info_timezone {
    border-top-color: #545454
}

#details_tab .channel_page_section {
    background: #222;
    border-top: 1px solid #363636
}

#details_tab .channel_page_section .section_header:hover .disclosure_triangle {
    color: #c7c7c7
}

#details_tab .channel_page_section .section_header a {
    color: #949494
}

#details_tab .channel_page_section .section_title {
    color: #e6e6e6
}

#details_tab .channel_page_section .disclosure_triangle {
    color: #949494
}

#details_tab .channel_page_section .channel_page_members_highlighter,
#details_tab .channel_page_section .channel_page_pinned_items_highlighter {
    background: rgba(191, 54, 12, 0.25) !important
}

#details_tab .created_by {
    color: #e6e6e6
}

#details_tab .channel_page_member_tabs .icon_member_header {
    color: #949494
}

#details_tab .pinned_item:hover {
    border-color: #545454
}

#details_tab .channel_page_action .leave_link {
    color: #949494
}

#details_tab .channel_page_action .leave_link:hover {
    color: #c7c7c7
}

#details_tab .channel_section_label .ts_icon_info_circle {
    color: #949494
}

#details_tab .feature_sli_channel_insights .channel_created_section .creator_link,
#details_tab .feature_sli_channel_insights .channel_purpose_section .channel_purpose_text {
    color: #949494
}

.channel_page_member_row {
    color: #e6e6e6
}

.channel_page_member_row a {
    color: #949494
}

.channel_page_member_row.away {
    color: #e6e6e6
}

.channel_page_member_row.away a {
    color: #949494
}

.channel_page_member_row:hover {
    background-color: #545454;
    border-color: #363636
}

.pinned_item {
    color: #e6e6e6
}

.pinned_item .pin_file_title {
    color: #949494
}

.pinned_item .pin_member_name a {
    color: #949494 !important
}

.pinned_item .pin_metadata {
    color: #949494
}

.pinned_item .remove_pin {
    color: #949494
}

.pinned_item .remove_pin:hover {
    color: #c7c7c7
}

.pinned_item .pinned_message_text .pin_truncate_fade {
    background: #222
}

.pinned_item.delete_mode {
    border-color: #bf360c !important
}

.c-channel_insights__title {
    color: #e6e6e6
}

.c-channel_insights__section:not(.c-channel_insights__section--no_border) {
    border-color: #545454
}

.c-channel_insights__drawer_title {
    color: #949494
}

.c-channel_insights__item--user .member_preview_link,
.c-channel_insights__item--user .message_sender {
    color: #e6e6e6 !important
}

.c-channel_insights__user_title {
    color: #949494
}

.c-channel_insights__channel .channel_link {
    color: #e6e6e6
}

.c-channel_insights__member_count {
    color: #949494
}

.c-channel_insights__member_count .ts_icon_user {
    color: #949494
}

.c-channel_insights .c-member__title {
    color: #949494
}

.c-channel_insights__activity {
    border-color: #545454
}

.c-channel_insights_activity_bar_container:hover {
    background-color: rgba(0, 0, 0, 0.05)
}

.c-channel_insights_activity_bar_container:hover .c-channel_insights__activity_bar {
    background-color: #545454
}

.c-channel_insights__activity_bar {
    background-color: rgba(84, 84, 84, 0.5)
}

.c-channel_insights__message ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display) {
    background-color: #222;
    border-color: #545454
}

.c-channel_insights__message--truncate::before {
    background: linear-gradient(180deg, transparent, #222 90%)
}

.c-channel_insights__highlights_description {
    color: #949494
}

.c-channel_insights__date_heading span {
    background-color: #222;
    color: #e6e6e6
}

.c-channel_insights__date_heading::before {
    background-color: #545454
}

#file_list_toggle_users {
    color: #949494
}

#file_list_toggle_users.active:hover,
#file_list_toggle_users:hover {
    color: #c7c7c7
}

#file_list_toggle_users.active {
    color: #949494
}

.file_list_item .icon,
.file_reference .icon {
    background: #828282;
    border: 1px solid #545454;
    color: #e6e6e6 !important
}

.filetype_button {
    background: #828282;
    border: 1px solid #545454;
    color: #e6e6e6 !important
}

.filetype_button:hover {
    background: #828282
}

.filetype_button:hover .file_download_label {
    background: #545454;
    color: #e6e6e6
}

.filetype_button .file_title {
    color: #e6e6e6
}

.filetype_button .file_download_label {
    background: #828282;
    border-top: 1px solid #545454
}

a.filetype_button_web {
    background: #828282;
    border: 1px solid #545454;
    color: #e6e6e6
}

a.filetype_button_web .filetype_icon {
    background-color: #545454
}

a.file_download_link {
    color: #949494
}

a.file_download_link:hover {
    color: #c7c7c7
}

a:hover .file_inline_icon {
    color: #949494
}

a.gsheet img,
a.pdf img {
    background: #222 !important
}

html.no_touch a.filetype_button_web:hover {
    border-color: #545454
}

html.no_touch a.filetype_button_web:hover .file_title {
    color: #e6e6e6
}

.file_header_detailed {
    color: #949494
}

.file_header_detailed .member {
    color: #e6e6e6 !important
}

.file_inline_icon {
    color: #949494
}

.file_header .member {
    color: #949494 !important
}

.file_header .title {
    color: #e6e6e6
}

.file_header .title a {
    color: #949494
}

.file_header .title a:hover {
    color: #c7c7c7
}

.flexpane_file_title .member,
.flexpane_file_title .service_link {
    color: #949494 !important
}

.flexpane_file_title .file_action_list a,
.flexpane_file_title .title a {
    color: #949494
}

.flexpane_file_title .file_action_list a:hover,
.flexpane_file_title .title a:hover {
    color: #c7c7c7
}

.file_actions_cog {
    color: #949494 !important
}

.file_actions_cog:hover {
    color: #c7c7c7 !important
}

.file_list_item {
    color: #e6e6e6
}

.file_list_item a {
    color: #949494
}

.file_list_item a.member {
    color: #c7c7c7
}

.file_list_item .bullet {
    color: #949494
}

.file_list_item .icon {
    background: #828282;
    border-color: #545454
}

.file_list_item .ts_icon_comment {
    color: #949494
}

.file_list_item .file_comment_link:hover {
    color: #949494
}

.file_list_item .file_comment_link:hover .ts_icon_comment {
    color: #949494
}

.file_list_item .title a {
    color: #949494
}

.file_list_item .share_info .unshare_link {
    color: #949494
}

.file_list_item .share_info .unshare_link:hover {
    color: #c7c7c7
}

.file_list_item .actions a,
.file_list_item .actions span {
    background-color: #363636;
    border: 1px solid #828282;
    color: #949494
}

.file_list_item .actions a:hover {
    background-color: #222 !important;
    border-color: #828282;
    color: #c7c7c7
}

.file_list_item.post .preview,
.file_list_item.space .preview {
    color: #e6e6e6
}

.file_list_item #share_dialog,
.file_list_item.active,
.file_list_item:active,
.file_list_item:hover {
    background-color: #363636;
    border-color: #545454
}

.file_list_item #share_dialog .title a,
.file_list_item.active .title a,
.file_list_item:active .title a,
.file_list_item:hover .title a {
    color: #949494
}

.file_list_item #share_dialog .actions,
.file_list_item.active .actions,
.file_list_item:active .actions,
.file_list_item:hover .actions {
    background-color: transparent
}

.file_list_item #share_dialog .actions a,
.file_list_item #share_dialog .actions span,
.file_list_item.active .actions a,
.file_list_item.active .actions span,
.file_list_item:active .actions a,
.file_list_item:active .actions span,
.file_list_item:hover .actions a,
.file_list_item:hover .actions span {
    background-color: #363636
}

.unshare_link {
    color: #949494 !important
}

.unshare_link i::before {
    color: #949494 !important
}

.unshare_link i.ts_icon_minus_circle_small:hover::before {
    color: #bf360c !important
}

.snippet_preview pre {
    color: #e6e6e6
}

.file_preview_wrapper .file_preview {
    background: #222
}

.file_preview_wrapper .file_preview:hover {
    background: #363636
}

#file_preview_container .file_meta {
    color: #949494
}

.file_page_meta {
    color: #949494
}

#file_page_preview img {
    background: #222;
    border: 1px solid #000
}

#file_page_preview img:hover {
    background: #363636
}

.comment_meta {
    color: #949494
}

.comment .special_formatting_quote .content {
    color: #e6e6e6
}

.comment .member {
    color: #e6e6e6 !important
}

.comment_body {
    color: #e6e6e6
}

.comment_actions {
    color: #949494
}

.comment_actions:hover {
    color: #e6e6e6
}

.icon_quote {
    color: #e6e6e6
}

.comment_form .texty_comment_input,
.edit_comment_form .texty_comment_input {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.comment_form .texty_comment_input.focus,
.comment_form .texty_comment_input:hover,
.edit_comment_form .texty_comment_input.focus,
.edit_comment_form .texty_comment_input:hover {
    border-color: #363636
}

.tab_container .file_comment_item .actions .btn_icon,
.tab_container .file_comment_item .actions .star_jump,
.tab_container .file_list_item .actions .btn_icon,
.tab_container .file_list_item .actions .star_jump,
.tab_container .star_item .message .actions .btn_icon,
.tab_container .star_item .message .actions .star_jump,
.tab_container .star_item ts-message .actions .btn_icon,
.tab_container .star_item ts-message .actions .star_jump {
    background-color: #222
}

.tab_container .file_comment_item .actions .btn::after,
.tab_container .file_list_item .actions .btn::after,
.tab_container .star_item .message .actions .btn::after,
.tab_container .star_item ts-message .actions .btn::after {
    border-color: #363636
}

.tab_container .star_item ts-message .timestamp {
    color: #949494
}

.tab_container .file_list_item:focus,
.tab_container .file_list_item:hover {
    background-color: #222;
    border-color: #363636
}

.tab_container .file_list_item .star {
    color: #949494
}

.tab_container .file_list_item .contents .file_comment_link {
    color: #949494
}

.tab_container .file_list_item .contents .file_comment_link .ts_icon {
    color: #949494
}

.tab_container .file_list_item .contents .file_comment_link:focus,
.tab_container .file_list_item .contents .file_comment_link:hover {
    color: #c7c7c7
}

.tab_container .file_list_item .contents .file_comment_link:focus .ts_icon,
.tab_container .file_list_item .contents .file_comment_link:hover .ts_icon {
    color: #c7c7c7
}

.tab_container .file_list_item .contents .member,
.tab_container .file_list_item .contents .service_link,
.tab_container .file_list_item .contents .share_info,
.tab_container .file_list_item .contents .time {
    color: #949494
}

.tab_container .file_list_item .filetype_image {
    background-color: #000
}

.active .tab_container .file_list_item {
    background-color: #222
}

.c-file__actions {
    background: #545454
}

.c-file__action_button,
.c-file__action_button:focus,
.c-file__action_button:hover,
.c-file__action_button:link {
    background: #545454;
    border-color: #363636;
    color: #fff
}

.p-file_details__name,
.p-file_details__share_channel {
    color: #e6e6e6
}

.p-file_details__meta_container .c-file__action_button {
    color: #fff
}

.c-pillow_file_container {
    background: #545454;
    border-color: #363636;
    color: #e6e6e6
}

.c-pillow_file__description,
.c-pillow_file__title {
    color: #e6e6e6
}

#user_groups_pane .mention {
    background: rgba(191, 54, 12, 0.25);
    border: 0;
    border-radius: 3px;
    padding: 2px
}

#user_groups_container .info_panel {
    background: #222;
    border: 1px solid #545454
}

#user_groups_container .mention {
    background-color: rgba(191, 54, 12, 0.25) !important
}

#user_groups_header .user_groups_search .icon_search {
    color: #949494
}

#user_groups_header a.icon_close {
    color: #949494
}

#user_groups_header a.icon_close:hover {
    color: #c7c7c7
}

.user_group_item {
    border-bottom: 1px solid #545454
}

.user_group_item a {
    color: #949494
}

#flex_contents .user_group_item:hover {
    background-color: #222
}

#flex_contents .user_group_item:hover h4 {
    color: #e6e6e6
}

#flex_contents .flexpane_tab_toolbar #user_group_edit {
    background-color: #222
}

#flex_contents .flexpane_tab_toolbar #user_group_edit.user_group_edit--flexpane .tab_action_button {
    color: #e6e6e6
}

.user_group_invite_member_small .add_icon {
    color: #949494
}

#user_group_member_invite_div .disabled .lfs_item.lfs_token {
    background-color: #828282;
    border-color: #828282
}

#flex_contents .subheading:not(.empty)#mentions_options {
    background-color: #222;
    border-bottom-color: #363636;
    color: #e6e6e6
}

.mention_day_container_div .day_divider::before {
    background: none;
    border-color: #363636
}

#member_mentions h3 a {
    color: #949494
}

a.internal_member_link {
    background: #363636;
    color: #e6e6e6
}

.c-member_slug--link,
.c-mrkdwn__subteam--link,
a.c-member_slug {
    background: #363636;
    border: 1px solid #545454;
    color: #e6e6e6
}

.c-member_slug--link.active,
.c-member_slug--link:hover,
.c-mrkdwn__subteam--link.active,
.c-mrkdwn__subteam--link:hover,
a.c-member_slug.active,
a.c-member_slug:hover {
    background: #424242;
    color: #e6e6e6
}

.mention_rxn .mention_rxn_summary {
    color: #e6e6e6
}

.mention_rxn .mention_rxn_summary .member_preview_link,
.mention_rxn .mention_rxn_summary .mention_rxn_summary_members {
    color: #949494
}

.search_message_result {
    background: #222 !important;
    border-color: #363636 !important;
    color: #e6e6e6 !important
}

.search_message_result .search_message_result_meta {
    color: #949494
}

.search_message_result .search_message_result_meta a {
    color: #949494
}

.search_message_result .search_message_result_meta .date_links a {
    color: #949494
}

.search_message_result_text .result_msg_format a {
    color: #949494
}

span.match {
    background: rgba(191, 54, 12, 0.25)
}

#search_filters .tab {
    background: #222;
    color: #e6e6e6
}

#search_filters .tab:hover {
    border-bottom: 4px solid #363636
}

#search_filters.files #filter_files,
#search_filters.messages #filter_messages {
    border-bottom: 4px solid #363636;
    color: #e6e6e6
}

#search_file_list_toggle_users.active:hover {
    border: 2px solid #c7c7c7;
    color: #c7c7c7 !important
}

.no_results {
    color: #e6e6e6
}

#search_results_team .team_results_heading {
    color: #e6e6e6
}

#search_results_team .team_result {
    background-color: #545454;
    border-color: #828282;
    color: #e6e6e6
}

#search_results_team .team_result a {
    color: #949494
}

#search_results_team .team_result:hover a {
    color: #c7c7c7
}

#search_results_team .team_result a:hover {
    color: #c7c7c7
}

#search_results_team .member_name {
    color: #e6e6e6 !important
}

.suggestion {
    color: #e6e6e6
}

.suggestion.active,
.suggestion:hover {
    background: #545454
}

#paging_in_options .search_paging {
    color: #949494
}

#search_results_items .search_paging {
    color: #e6e6e6
}

.search_paging i.disabled {
    color: #949494
}

.search_paging a {
    color: #949494
}

.search_paging a:hover {
    color: #c7c7c7
}

.search_sort_prefix {
    color: #e6e6e6
}

.search_segmented_control {
    border-color: #363636;
    color: #949494 !important
}

.search_segmented_control:hover {
    color: #c7c7c7 !important
}

.search_segmented_control.active {
    background: #000;
    color: #c7c7c7 !important
}

.search_result_with_extract {
    background: #363636;
    border-color: #545454;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15)
}

.search_result_with_extract:hover {
    border-color: #828282
}

.search_result_for_context::after {
    background: rgba(34, 34, 34, 0.1)
}

.extract_expand_icons,
.extract_expand_text {
    color: #949494
}

.search_result_with_extract:hover .extract_expand_icons,
.search_result_with_extract:hover .extract_expand_text {
    color: #c7c7c7
}

.search_module_header {
    color: #e6e6e6
}

.search_module_footer {
    background-color: #363636;
    border-bottom-color: #545454;
    border-left-color: #545454;
    border-right-color: #545454
}

.search_module_footer p {
    color: #e6e6e6
}

.search_module_footer #see_more {
    color: #e6e6e6
}

.search_module_footer #see_more a {
    color: #e6e6e6
}

.search_module_footer .top_results_feedback a {
    color: #e6e6e6
}

.search_module_footer ts-icon {
    color: #e6e6e6
}

.top_results_search_message_result {
    background-color: #363636;
    border-bottom-color: #545454;
    border-left-color: #545454;
    border-right-color: #545454
}

.top_results_search_message_result.duplicate {
    background-color: #363636
}

.top_results_search_message_result .timestamp {
    color: #949494
}

.top_results_search_message_result .channel {
    color: #949494
}

.top_results_search_message_result .channel a {
    color: #949494
}

.top_results_search_message_result .jump {
    color: #e6e6e6
}

.top_results_search_message_result:hover {
    border-color: rgba(130, 130, 130, 0.6) !important;
    border-top: 2px solid #545454 !important
}

.top_results_search_message_result:first-child {
    border-top: 2px solid #545454
}

.sli_expert_search {
    background-color: #222;
    color: #e6e6e6
}

.sli_expert_search__result {
    border-color: #545454
}

.sli_expert_search__result .app_preview_link,
.sli_expert_search__result .member_preview_link {
    color: #e6e6e6 !important
}

.sli_expert_search__fg_face::before {
    background-color: #222
}

.sli_expert_search_cta {
    border-color: #545454
}

.sli_expert_search_cta:hover {
    border-color: #828282
}

.sli_expert_search_cta__text {
    color: #e6e6e6
}

.sli_expert_search_cta__text:hover {
    color: #e6e6e6
}

.sli_expert_search__plus_sign_overlay {
    background-color: #363636;
    color: #949494
}

.sli_expert_search__arrow {
    color: #949494
}

.sli_expert_search_cta:hover .sli_expert_search__arrow,
.sli_expert_search_header:hover .sli_expert_search__arrow {
    color: #949494
}

.sli_expert_search__partial_terms {
    color: #949494
}

.feature_sli_file_search #search_filters.all #filter_all {
    border-bottom-color: #363636;
    color: #e6e6e6
}

.feature_sli_file_search #search_results .file_list_item {
    background-color: #222;
    border-color: #545454
}

.feature_sli_file_search #search_results.all,
.feature_sli_file_search #search_results.messages {
    background-color: #222
}

.feature_sli_file_search #search_results.all .search_message_result,
.feature_sli_file_search #search_results.messages .search_message_result {
    background-color: #222;
    border-color: #545454
}

.feature_sli_file_search #search_results.all .search_result_with_extract.first_extract_message_in_group,
.feature_sli_file_search #search_results.all .search_result_with_extract:first-child,
.feature_sli_file_search #search_results.messages .search_result_with_extract.first_extract_message_in_group,
.feature_sli_file_search #search_results.messages .search_result_with_extract:first-child {
    border-top-color: #545454
}

.feature_sli_file_search #search_results.all .search_result_with_extract.first_extract_message_in_group:hover,
.feature_sli_file_search #search_results.all .search_result_with_extract:first-child:hover,
.feature_sli_file_search #search_results.messages .search_result_with_extract.first_extract_message_in_group:hover,
.feature_sli_file_search #search_results.messages .search_result_with_extract:first-child:hover {
    border-top-color: #545454
}

.feature_sli_file_search #search_results.all .search_result_with_extract.last_extract_message_in_group,
.feature_sli_file_search #search_results.messages .search_result_with_extract.last_extract_message_in_group {
    border-bottom-color: #545454
}

.feature_sli_file_search #search_results.all .search_result_with_extract.last_extract_message_in_group:hover,
.feature_sli_file_search #search_results.messages .search_result_with_extract.last_extract_message_in_group:hover {
    border-bottom-color: #545454
}

.feature_sli_file_search #search_results.all .search_message_result_meta,
.feature_sli_file_search #search_results.messages .search_message_result_meta {
    color: #949494
}

.feature_sli_file_search #search_results.all .channel_link,
.feature_sli_file_search #search_results.messages .channel_link {
    color: #949494
}

.feature_sli_file_search #search_results.all .sli_expert_search .channel_link,
.feature_sli_file_search #search_results.messages .sli_expert_search .channel_link {
    color: #e6e6e6
}

.feature_sli_file_search #search_results.all .new_jump_link,
.feature_sli_file_search #search_results.messages .new_jump_link {
    color: #e6e6e6
}

.feature_sli_file_search #search_results.all {
    background-color: #222
}

.feature_sli_file_search #search_results.all .top_search_results .search_message_result {
    background-color: #222;
    border-color: #545454
}

.feature_sli_file_search #search_results.all .top_search_results .search_message_result__channel a {
    color: #949494
}

.feature_sli_file_search #search_results.all .sli_expert_search_cta {
    border-color: #545454
}

.feature_sli_file_search #search_results.all .sli_expert_search_cta:hover {
    border-color: #828282
}

.feature_sli_file_search #search_results.all .sli_expert_search__result {
    border-color: #828282
}

.feature_sli_file_search #search_results.all .team_result {
    background-color: #222;
    border-color: #545454
}

.feature_sli_file_search #search_results.files {
    background-color: #222
}

.feature_sli_file_search #search_results.files #search_file_list_clear_filter,
.feature_sli_file_search #search_results.files #search_file_list_heading {
    color: #e6e6e6
}

.feature_sli_file_search #search_results_loading {
    background-color: #222
}

.feature_sli_file_search #search_results_container #search_options {
    background-color: #222
}

.feature_sli_file_search #search_results_container .heading {
    background-color: #222
}

#client-ui .file_list_item.file_list_item--redesign {
    border-color: #545454
}

#client-ui .file_list_item.file_list_item--redesign .file_list_item__channel {
    color: #949494
}

#client-ui .file_list_item.file_list_item--redesign .message_sender {
    color: #949494
}

.p-shortcuts_flexpane__shortcut {
    border-color: #000
}

.p-shortcuts_flexpane__shortcut:last-of-type {
    border-bottom-color: #000
}

.p-shortcuts_flexpane__shortcut_hoverable .p-shortcuts_flexpane__shortcut_title {
    color: #e6e6e6
}

.p-shortcuts_flexpane__shortcut_title {
    color: #949494
}

.p-shortcuts_flexpane__title {
    color: #e6e6e6
}

.p-shortcuts_flexpane__tip {
    color: #949494
}

.p-shortcuts_flexpane__section_description {
    color: #949494
}

.p-shortcuts_flexpane__sub_heading {
    color: #949494
}

.c-keyboard_key {
    background: #545454;
    border-color: #828282;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    color: #e6e6e6
}

.tab_container .star_item .message .timestamp,
.tab_container .star_item ts-message .timestamp {
    color: #949494
}

#member_preview_scroller a:not(.member_name):not(.current_status_preset_option),
.team_list_item a:not(.member_name):not(.current_status_preset_option) {
    color: #949494
}

#member_preview_scroller a:not(.member_name):not(.current_status_preset_option):hover,
.team_list_item a:not(.member_name):not(.current_status_preset_option):hover {
    color: #c7c7c7
}

#member_preview_scroller .member_data_table a,
#team_list .member_data_table a {
    color: #949494
}

#member_preview_scroller .member_data_table a:hover,
#team_list .member_data_table a:hover {
    color: #c7c7c7
}

#member_preview_scroller a.member_action_button,
#team_list a.member_action_button {
    color: #949494 !important
}

#member_preview_scroller a.member_action_button:hover,
#team_list a.member_action_button:hover {
    border-color: #828282 !important;
    color: #c7c7c7 !important
}

#member_preview_scroller .member_data_table tr,
#member_preview_web_container .member_data_table tr,
#team_list .member_data_table tr,
.menu_member_header .member_data_table tr {
    color: #e6e6e6
}

#member_preview_scroller .member_data_table a,
#member_preview_web_container .member_data_table a,
#team_list .member_data_table a,
.menu_member_header .member_data_table a {
    color: #949494 !important
}

#member_preview_scroller .member_data_table a:hover,
#member_preview_web_container .member_data_table a:hover,
#team_list .member_data_table a:hover,
.menu_member_header .member_data_table a:hover {
    color: #c7c7c7 !important
}

#member_preview_scroller .member_data_table .bot_label,
#member_preview_web_container .member_data_table .bot_label,
#team_list .member_data_table .bot_label,
.menu_member_header .member_data_table .bot_label {
    background: #000;
    color: #949494
}

#member_preview_scroller {
    background-color: #363636
}

#member_preview_scroller .member_data_table .current_status_cell .current_status_container .current_status_cover:hover {
    border-color: #363636
}

#member_preview_scroller .member_data_table .current_status_cell .current_status_container:not(.active) .current_status_cover.without_status_set .current_status_placeholder {
    color: rgba(230, 230, 230, 0.35) !important
}

#team_tab #member_preview_scroller {
    background-color: #222
}

#member_preview_scroller .member_details .member_name_and_presence .member_name,
#member_preview_web_container .member_details .member_name_and_presence .member_name,
.menu_member_header .member_details .member_name_and_presence .member_name {
    color: #e6e6e6
}

#member_preview_scroller .member_details .member_title,
#member_preview_web_container .member_details .member_title,
.menu_member_header .member_details .member_title {
    color: #e6e6e6
}

#member_preview_scroller .member_details .member_current_status,
#member_preview_scroller .member_details .member_restriction,
#member_preview_scroller .member_details .member_timezone_value,
#member_preview_web_container .member_details .member_current_status,
#member_preview_web_container .member_details .member_restriction,
#member_preview_web_container .member_details .member_timezone_value,
.menu_member_header .member_details .member_current_status,
.menu_member_header .member_details .member_restriction,
.menu_member_header .member_details .member_timezone_value {
    color: #949494
}

#member_preview_scroller .member_details .member_current_status a,
#member_preview_scroller .member_details .member_restriction a,
#member_preview_scroller .member_details .member_timezone_value a,
#member_preview_web_container .member_details .member_current_status a,
#member_preview_web_container .member_details .member_restriction a,
#member_preview_web_container .member_details .member_timezone_value a,
.menu_member_header .member_details .member_current_status a,
.menu_member_header .member_details .member_restriction a,
.menu_member_header .member_details .member_timezone_value a {
    color: #949494
}

#member_preview_scroller .member_details .member_current_status a:hover,
#member_preview_scroller .member_details .member_restriction a:hover,
#member_preview_scroller .member_details .member_timezone_value a:hover,
#member_preview_web_container .member_details .member_current_status a:hover,
#member_preview_web_container .member_details .member_restriction a:hover,
#member_preview_web_container .member_details .member_timezone_value a:hover,
.menu_member_header .member_details .member_current_status a:hover,
.menu_member_header .member_details .member_restriction a:hover,
.menu_member_header .member_details .member_timezone_value a:hover {
    color: #c7c7c7
}

#member_preview_scroller .member_details .member_current_status .ts_icon_question_circle:focus,
#member_preview_scroller .member_details .member_current_status .ts_icon_question_circle:hover,
#member_preview_scroller .member_details .member_restriction .ts_icon_question_circle:focus,
#member_preview_scroller .member_details .member_restriction .ts_icon_question_circle:hover,
#member_preview_scroller .member_details .member_timezone_value .ts_icon_question_circle:focus,
#member_preview_scroller .member_details .member_timezone_value .ts_icon_question_circle:hover,
#member_preview_web_container .member_details .member_current_status .ts_icon_question_circle:focus,
#member_preview_web_container .member_details .member_current_status .ts_icon_question_circle:hover,
#member_preview_web_container .member_details .member_restriction .ts_icon_question_circle:focus,
#member_preview_web_container .member_details .member_restriction .ts_icon_question_circle:hover,
#member_preview_web_container .member_details .member_timezone_value .ts_icon_question_circle:focus,
#member_preview_web_container .member_details .member_timezone_value .ts_icon_question_circle:hover,
.menu_member_header .member_details .member_current_status .ts_icon_question_circle:focus,
.menu_member_header .member_details .member_current_status .ts_icon_question_circle:hover,
.menu_member_header .member_details .member_restriction .ts_icon_question_circle:focus,
.menu_member_header .member_details .member_restriction .ts_icon_question_circle:hover,
.menu_member_header .member_details .member_timezone_value .ts_icon_question_circle:focus,
.menu_member_header .member_details .member_timezone_value .ts_icon_question_circle:hover {
    color: #949494
}

#member_preview_scroller .member_details_divider,
#member_preview_web_container .member_details_divider,
.menu_member_header .member_details_divider {
    border-color: #363636
}

#disabled_members_tab a {
    color: #949494
}

#disabled_members_tab a:hover {
    background: #424242;
    color: #c7c7c7
}

#disabled_members_tab.active a {
    color: #949494
}

.team_list_item {
    border-top: 1px solid #545454;
    color: #949494
}

.team_list_item .member_name {
    color: #e6e6e6
}

#client-ui #team_list .team_list_item a,
#client-ui .searchable_member_list .team_list_item a,
#member_preview_scroller .team_list_item a {
    color: #e6e6e6 !important
}

#client-ui #team_list .team_list_item.expanded,
#client-ui .searchable_member_list .team_list_item.expanded,
#member_preview_scroller .team_list_item.expanded {
    border-color: #363636 !important
}

#client-ui #team_list .team_list_item:hover,
#client-ui .searchable_member_list .team_list_item:hover,
#member_preview_scroller .team_list_item:hover {
    border-color: #545454 !important
}

#client-ui .searchable_member_list .team_list_item {
    border-bottom-color: #000
}

#client-ui .searchable_member_list .team_list_item:hover {
    background: #545454
}

.c-unified_member__display-name,
.c-unified_member__other-names,
.c-unified_member__other-names,
.c-unified_member__secondary-name,
.c-unified_member__title {
    color: #e6e6e6 !important
}

#convo_tab #convo_tab_btns .close_flexpane:focus,
#convo_tab #convo_tab_btns .close_flexpane:hover {
    color: #e6e6e6
}

#convo_tab textarea.message_input {
    color: #e6e6e6
}

#reply_container .inline_message_input_container .message_input div,
#reply_container .inline_message_input_container textarea,
.reply_input_container .inline_message_input_container .message_input div,
.reply_input_container .inline_message_input_container textarea {
    border-color: #363636;
    color: #e6e6e6
}

#reply_container .inline_message_input_container .message_input div:active,
#reply_container .inline_message_input_container .message_input div:focus,
#reply_container .inline_message_input_container textarea:active,
#reply_container .inline_message_input_container textarea:focus,
.reply_input_container .inline_message_input_container .message_input div:active,
.reply_input_container .inline_message_input_container .message_input div:focus,
.reply_input_container .inline_message_input_container textarea:active,
.reply_input_container .inline_message_input_container textarea:focus {
    border-color: #000
}

#reply_container .reply_broadcast_buttons_container .reply_broadcast_label_container,
.reply_input_container .reply_broadcast_buttons_container .reply_broadcast_label_container {
    color: #e6e6e6
}

#reply_container .reply_broadcast_buttons_container .reply_broadcast_label_container ts-icon.ts_icon_question_circle,
.reply_input_container .reply_broadcast_buttons_container .reply_broadcast_label_container ts-icon.ts_icon_question_circle {
    color: #949494 !important
}

#reply_container .reply_limited_in_general,
.reply_input_container .reply_limited_in_general {
    background: #222;
    color: #949494
}

#convo_container .convo_flexpane_divider {
    border-top-color: #363636;
    color: #949494
}

#convo_container .convo_flexpane_divider .reply_count {
    background: #222
}

#convo_container ts-conversation ts-message.selected .message_content .thread_channel_link {
    color: #949494
}

#convo_tab .message_input,
#convo_tab textarea#msg_text {
    color: #e6e6e6
}

ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator),
ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator),
ts-message.message:active,
ts-message.message:hover,
ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator) {
    background-color: #222222
}

ts-thread .collapse_inline_thread_container:hover,
ts-thread .view_all_replies_container:hover {
    background-color: #222222
}

#whats_new_tab p {
    color: #e6e6e6
}

#whats_new_tab .flex_heading_controls label {
    color: #949494
}

.c-member__display-name,
.c-team__display-name,
.c-usergroup__handle {
    color: #e6e6e6
}

.c-member__current-status--small::before,
.c-member__secondary-name--large+.c-member__current-status--large::before,
.c-member__secondary-name--medium+.c-member__current-status--medium::before {
    color: #e6e6e6
}

.c-member .external_team_badge {
    background-color: #545454;
    box-shadow: 0 0 0 2px #545454
}

.c-member .external_team_badge.default {
    background-color: #949494;
    color: #e6e6e6;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)
}

.c-member .external_team_badge::after {
    box-shadow: inset 0 0 0 1px #545454
}

.c-member__name--small,
.c-team__name--small,
.c-usergroup__name--small {
    color: #e6e6e6
}

.c-member--small .presence {
    color: #949494
}

.c-member--small .team_image.icon_16 {
    border-color: #363636
}

.c-member--small .team_image.default {
    background-color: #949494;
    color: #e6e6e6;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15)
}

.c-member--dark .c-member__current-status {
    color: #949494
}

.c-member--dark .c-member__current-status::before {
    color: #949494
}

.c-member--dark .c-member__name,
.c-member--dark .c-member__secondary-name {
    color: #949494
}

.c-member--dark .c-member__display-name,
.c-member--dark .presence {
    color: #e6e6e6
}

.c-member--medium {
    color: #949494
}

.c-member--medium .presence {
    color: #949494
}

.c-member__secondary-name--medium {
    color: #e6e6e6
}

.c-member--large {
    color: #949494
}

.c-member__display-name--large,
.c-member__title--large {
    color: #e6e6e6
}

.c-member__other-names--large {
    color: #949494
}

.c-usergroup--small .c-usergroup__icon {
    background-color: #949494;
    color: #e6e6e6
}

.c-usergroup__not-in-channel-context--small {
    color: #949494
}

.p-emoji_picker {
    background: #000 !important;
    color: #e6e6e6 !important
}

.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="0"].key_selection {
    background: rgba(183, 232, 135, 0.5)
}

.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="1"].key_selection {
    background: rgba(181, 224, 254, 0.5)
}

.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="2"].key_selection {
    background: rgba(249, 239, 103, 0.5)
}

.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="3"].key_selection {
    background: rgba(243, 193, 253, 0.5)
}

.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="4"].key_selection {
    background: rgba(255, 225, 174, 0.5)
}

.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="5"].key_selection {
    background: rgba(224, 223, 255, 0.5)
}

.p-emoji_picker__list_item {
    text-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

.p-emoji_picker__list_item[data-color-index="0"]:hover,
.p-emoji_picker__list_item[data-color-index="0"].key_selection {
    background: rgba(183, 232, 135, 0.5)
}

.p-emoji_picker__list_item[data-color-index="1"]:hover,
.p-emoji_picker__list_item[data-color-index="1"].key_selection {
    background: rgba(181, 224, 254, 0.5)
}

.p-emoji_picker__list_item[data-color-index="2"]:hover,
.p-emoji_picker__list_item[data-color-index="2"].key_selection {
    background: rgba(249, 239, 103, 0.5)
}

.p-emoji_picker__list_item[data-color-index="3"]:hover,
.p-emoji_picker__list_item[data-color-index="3"].key_selection {
    background: rgba(243, 193, 253, 0.5)
}

.p-emoji_picker__list_item[data-color-index="4"]:hover,
.p-emoji_picker__list_item[data-color-index="4"].key_selection {
    background: rgba(255, 225, 174, 0.5)
}

.p-emoji_picker__list_item[data-color-index="5"]:hover,
.p-emoji_picker__list_item[data-color-index="5"].key_selection {
    background: rgba(224, 223, 255, 0.5)
}

.p-emoji_picker__heading,
.p-emoji_picker__input_container,
.p-emoji_picker__list_container {
    background: #222
}

.p-emoji_picker__group_tabs {
    border-bottom-color: #424242
}

.p-emoji_picker__group_tab {
    color: #949494
}

.p-emoji_picker__group_tab:hover {
    background: #363636;
    color: #c7c7c7
}

.p-emoji_picker__group_tab--active {
    background: #545454;
    border-bottom-color: #424242;
    color: #e6e6e6
}

.p-emoji_picker__icon_search {
    color: #949494
}

.p-emoji_picker__content:hover .p-emoji_picker__skintone_btn_container {
    background: #222;
    border-color: #222
}

.p-emoji_picker__skintone_options {
    background: #222
}

.p-emoji_picker__no_results i,
.p-emoji_picker__tip i {
    color: #949494
}

.p-emoji_picker__tip {
    color: #e6e6e6
}

.p-emoji_picker__no_results {
    color: #949494
}

.p-emoji_picker__preview_text {
    background: #000;
    color: #e6e6e6
}

.p-emoji_picker__footer {
    background: #000;
    border-top-color: #363636
}

.p-emoji_picker__footer .p-emoji_picker__heading {
    background: #000
}

.p-emoji_picker__emoji_deluxe_label {
    color: #949494
}

input[type="text"].p-emoji_picker__input:focus {
    border-color: #545454;
    box-shadow: none
}

#message_edit_form .current_status_empty_emoji,
#message_edit_form .current_status_empty_emoji_cover,
#message_edit_form .emo_menu,
#msg_form .current_status_empty_emoji,
#msg_form .current_status_empty_emoji_cover,
#msg_form .emo_menu,
.current_status_container .current_status_empty_emoji,
.current_status_container .current_status_empty_emoji_cover,
.current_status_container .emo_menu,
.current_status_input_container .current_status_empty_emoji,
.current_status_input_container .current_status_empty_emoji_cover,
.current_status_input_container .emo_menu,
.inline_message_input_container .current_status_empty_emoji,
.inline_message_input_container .current_status_empty_emoji_cover,
.inline_message_input_container .emo_menu,
.share_channel_modal_contents .current_status_empty_emoji,
.share_channel_modal_contents .current_status_empty_emoji_cover,
.share_channel_modal_contents .emo_menu {
    color: #949494
}

#message_edit_form .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji,
#msg_form .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji,
.current_status_container .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji,
.current_status_input_container .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji,
.inline_message_input_container .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji,
.share_channel_modal_contents .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji {
    color: #e6e6e6
}

#message_edit_form #msg_input.focus~#primary_file_button:not(:hover):not(.active),
#message_edit_form #msg_input.focus~.emo_menu,
#message_edit_form #msg_input:focus~#primary_file_button:not(:hover):not(.active),
#message_edit_form #msg_input:focus~.emo_menu,
#msg_form #msg_input.focus~#primary_file_button:not(:hover):not(.active),
#msg_form #msg_input.focus~.emo_menu,
#msg_form #msg_input:focus~#primary_file_button:not(:hover):not(.active),
#msg_form #msg_input:focus~.emo_menu,
.current_status_container #msg_input.focus~#primary_file_button:not(:hover):not(.active),
.current_status_container #msg_input.focus~.emo_menu,
.current_status_container #msg_input:focus~#primary_file_button:not(:hover):not(.active),
.current_status_container #msg_input:focus~.emo_menu,
.current_status_input_container #msg_input.focus~#primary_file_button:not(:hover):not(.active),
.current_status_input_container #msg_input.focus~.emo_menu,
.current_status_input_container #msg_input:focus~#primary_file_button:not(:hover):not(.active),
.current_status_input_container #msg_input:focus~.emo_menu,
.inline_message_input_container #msg_input.focus~#primary_file_button:not(:hover):not(.active),
.inline_message_input_container #msg_input.focus~.emo_menu,
.inline_message_input_container #msg_input:focus~#primary_file_button:not(:hover):not(.active),
.inline_message_input_container #msg_input:focus~.emo_menu,
.share_channel_modal_contents #msg_input.focus~#primary_file_button:not(:hover):not(.active),
.share_channel_modal_contents #msg_input.focus~.emo_menu,
.share_channel_modal_contents #msg_input:focus~#primary_file_button:not(:hover):not(.active),
.share_channel_modal_contents #msg_input:focus~.emo_menu {
    color: #e6e6e6
}

#message_edit_form .message_input:focus~#primary_file_button:not(:hover):not(.active),
#message_edit_form .message_input:focus~.emo_menu,
#msg_form .message_input:focus~#primary_file_button:not(:hover):not(.active),
#msg_form .message_input:focus~.emo_menu,
.current_status_container .message_input:focus~#primary_file_button:not(:hover):not(.active),
.current_status_container .message_input:focus~.emo_menu,
.current_status_input_container .message_input:focus~#primary_file_button:not(:hover):not(.active),
.current_status_input_container .message_input:focus~.emo_menu,
.inline_message_input_container .message_input:focus~#primary_file_button:not(:hover):not(.active),
.inline_message_input_container .message_input:focus~.emo_menu,
.share_channel_modal_contents .message_input:focus~#primary_file_button:not(:hover):not(.active),
.share_channel_modal_contents .message_input:focus~.emo_menu {
    color: #e6e6e6
}

.current_status_emoji_picker {
    border-right-color: #363636
}

.current_status_input_for_team_menu .current_status_presets {
    border-top: 1px solid #000
}

.current_status_input_for_team_menu .current_status_presets .current_status_presets_section_header .header_label {
    color: #949494
}

.c-member_slug,
.c-reaction,
.c-reaction_add,
.rxn {
    background: #363636;
    border: 1px solid #545454
}

.c-member_slug.active,
.c-member_slug:hover,
.c-reaction.active,
.c-reaction:hover,
.c-reaction_add.active,
.c-reaction_add:hover,
.rxn.active,
.rxn:hover {
    background: #424242
}

.c-member_slug.active .emoji_rxn_count,
.c-member_slug:hover .emoji_rxn_count,
.c-reaction.active .emoji_rxn_count,
.c-reaction:hover .emoji_rxn_count,
.c-reaction_add.active .emoji_rxn_count,
.c-reaction_add:hover .emoji_rxn_count,
.rxn.active .emoji_rxn_count,
.rxn:hover .emoji_rxn_count {
    color: #e6e6e6
}

.c-member_slug.c-reaction--reacted,
.c-reaction.c-reaction--reacted,
.c-reaction_add.c-reaction--reacted,
.rxn.c-reaction--reacted {
    background-color: rgba(66, 66, 66, 0.08);
    border-color: rgba(130, 130, 130, 0.4) !important
}

.c-member_slug.c-reaction--reacted .c-reaction__count,
.c-member_slug.c-reaction--reacted .emoji_rxn_count,
.c-reaction.c-reaction--reacted .c-reaction__count,
.c-reaction.c-reaction--reacted .emoji_rxn_count,
.c-reaction_add.c-reaction--reacted .c-reaction__count,
.c-reaction_add.c-reaction--reacted .emoji_rxn_count,
.rxn.c-reaction--reacted .c-reaction__count,
.rxn.c-reaction--reacted .emoji_rxn_count {
    color: #e6e6e6
}

.c-member_slug .c-reaction__count,
.c-member_slug .emoji_rxn_count,
.c-reaction .c-reaction__count,
.c-reaction .emoji_rxn_count,
.c-reaction_add .c-reaction__count,
.c-reaction_add .emoji_rxn_count,
.rxn .c-reaction__count,
.rxn .emoji_rxn_count {
    color: #e6e6e6
}

.c-member_slug.menu_rxn .ts_icon,
.c-reaction.menu_rxn .ts_icon,
.c-reaction_add.menu_rxn .ts_icon,
.rxn.menu_rxn .ts_icon {
    color: rgba(230, 230, 230, 0.25)
}

a.c-member_slug--mention,
a.c-member_slug--mention:hover {
    background-color: #fff6d1;
    color: #363636
}

.modal {
    background-color: #222;
    border: 0;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5)
}

.modal .close,
.modal label {
    color: #e6e6e6
}

.input_note_special,
.modal_input_note,
.modal_input_note_full_width {
    color: #949494
}

.modal-footer {
    background: padding-box #222;
    border-top: 1px solid transparent;
    box-shadow: none
}

.modal-header {
    background: padding-box #000;
    border-bottom: 1px solid #363636;
    color: #e6e6e6
}

.modal-backdrop {
    background-color: #222
}

.close {
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5)
}

#fs_modal_bg {
    background: #222
}

#fs_modal {
    background: #222
}

#fs_modal h1,
#fs_modal h2,
#fs_modal h3,
#fs_modal h4,
#fs_modal h5,
#fs_modal h6 {
    color: #e6e6e6
}

#fs_modal #fs_modal_sidebar a {
    color: #e6e6e6
}

#fs_modal #fs_modal_sidebar a:hover {
    background: #363636
}

#fs_modal #fs_modal_sidebar a.active {
    background: #000;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

#fs_modal .fs_modal_btn {
    color: rgba(230, 230, 230, 0.5)
}

#fs_modal .fs_modal_btn:hover {
    background: #828282;
    color: #e6e6e6
}

#fs_modal .fs_modal_btn:active {
    background: #828282;
    color: #e6e6e6
}

#fs_modal.fs_modal_header .fs_modal_btn:active {
    color: #e6e6e6
}

#fs_modal #fs_modal_footer {
    background-color: #363636
}

.p-apps_browser__apps_list--loading::before {
    background-color: #363636
}

.p-apps_browser__category_section--tutorial .p-apps_browser__app {
    border-color: #545454;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15)
}

.p-apps_browser__category_section--tutorial .p-apps_browser__app--selected {
    background: #363636;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25)
}

.p-apps_browser__category_header {
    background: #222;
    color: #949494
}

.p-apps_browser__app {
    border-top-color: #545454
}

.p-apps_browser__app--selected {
    background: #363636;
    border-color: #828282
}

.p-apps_browser__app_info {
    color: #e6e6e6
}

.p-apps_browser__app_action,
.p-apps_browser__browse_apps {
    background-color: #545454;
    border-color: #828282;
    color: #e6e6e6
}

.p-apps_browser__app_action:focus,
.p-apps_browser__app_action:hover,
.p-apps_browser__browse_apps:focus,
.p-apps_browser__browse_apps:hover {
    background-color: #828282;
    color: #e6e6e6
}

.p-apps_browser__app_action:active,
.p-apps_browser__browse_apps:active {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15)
}

.p-apps_browser__app_description {
    color: #949494
}

#fs_modal.p-apps_browser_modal .contents_container .contents .links_container a {
    color: #949494
}

#fs_modal.p-apps_browser_modal .contents_container .contents .links_container a:active,
#fs_modal.p-apps_browser_modal .contents_container .contents .links_container a:hover,
#fs_modal.p-apps_browser_modal .contents_container .contents .links_container a:visited {
    color: #e6e6e6
}

#incoming_call {
    background-color: rgba(0, 0, 0, 0.97);
    color: #e6e6e6
}

#fs_modal.channel_options_modal .channel_options_header {
    border-bottom-color: #363636
}

#fs_modal.channel_options_modal .convert_to_shared label {
    color: #949494
}

#fs_modal.channel_options_modal .channel_option_item {
    border-top-color: #363636
}

#fs_modal.channel_options_modal .channel_option_item .channel_option_open {
    color: #e6e6e6
}

#fs_modal.channel_options_modal .channel_option_item:hover {
    background: rgba(0, 0, 0, 0.75);
    border-color: #363636
}

#channel_invite_container .lfs_list_container .lfs_item {
    border-top-color: #363636
}

#channel_invite_container .lfs_list_container .lfs_item.active {
    border-color: #363636
}

#channel_invite_container.page_needs_enterprise .channel_invite_row {
    border-top-color: #363636
}

#channel_invite_container.page_needs_enterprise .channel_invite_row.disabled {
    color: #949494
}

#channel_invite_modal #channel_invite_container:not(.keyboard_active).not_scrolling .channel_invite_row:not(.disabled):hover,
#channel_invite_modal .channel_invite_row.highlighted:not(.disabled) {
    background: #222;
    border-color: #363636
}

#channel_prefs_dialog {
    color: #e6e6e6
}

#at_channel_warning_dialog {
    background-color: #222
}

#at_channel_warning_dialog.fullsize {
    background-color: #222
}

#at_channel_warning_dialog.fullsize .modal-body {
    background-color: #222
}

.channel_prefs_modal_header {
    color: #e6e6e6
}

.channel_prefs_body__section_header_title {
    color: #e6e6e6
}

.channel_prefs_body__section_header_icon::before {
    color: #e6e6e6
}

.channel_prefs_body__mute_help_text {
    color: #949494
}

.channel_prefs_notifications_table {
    border-bottom-color: #363636;
    color: #e6e6e6
}

.channel_prefs_notifications_table__large_cell,
.channel_prefs_notifications_table__row_title,
.channel_prefs_notifications_table__small_cell {
    border-bottom-color: #545454 !important
}

.channel_prefs__muting_checkbox_label {
    color: #e6e6e6
}

.channel_prefs__muting_checkbox_label:not(.subtle_silver) {
    color: #e6e6e6 !important
}

.notification_prefs_icon::before {
    color: #e6e6e6
}

.channel_modal_header {
    color: #e6e6e6
}

#channel_browser .channel_browser_row {
    border-top: 1px solid #363636;
    color: #e6e6e6
}

#channel_browser .channel_browser_row_header {
    color: #e6e6e6
}

#channel_browser .channel_browser_creator_name {
    color: #949494
}

#channel_browser .channel_browser_open,
#channel_browser .channel_browser_preview {
    color: #949494
}

#channel_browser #channel_list_container:not(.keyboard_active).not_scrolling .channel_browser_row:hover,
#channel_browser .channel_browser_row.highlighted {
    background: #000;
    border: 1px solid #545454
}

#channel_browser .channel_browser_divider {
    background: transparent;
    color: #949494
}

#channel_browser .channel_browser_sort_container::after {
    color: #e6e6e6
}

#channel_browser .channel_browser_channel_purpose {
    color: #e6e6e6
}

.channel_invite_member .add_icon,
.channel_invite_member_small .add_icon {
    color: #949494
}

.channel_invite_member .name_container .not_in_token,
.channel_invite_member_small .name_container .not_in_token {
    color: #949494 !important
}

.channel_invite_member .invite_user_group_avatar,
.channel_invite_member_small .invite_user_group_avatar {
    background-color: #000;
    color: #e6e6e6
}

#invite_members_container .lfs_input_container {
    background: #545454
}

#notifications_not_working p.highlight_yellow_bg a {
    color: #e6e6e6
}

#im_browser .im_browser_row {
    border-top: 1px solid #545454
}

#im_browser .im_browser_row.multiparty {
    color: #e6e6e6
}

#im_browser .im_browser_row.multiparty .member_image+.member_image:not(.ra):not(.ura) {
    border: 2px solid #000
}

#im_browser .im_browser_row .im_unread_cnt {
    background: #bf360c;
    color: #e6e6e6
}

#im_browser .im_browser_row.disabled {
    color: #949494
}

#im_browser #im_browser .im_browser_row.highlighted,
#im_browser #im_list_container:not(.keyboard_active).not_scrolling .im_browser_row:not(.disabled_dm):hover {
    background: #000 !important;
    border: 1px solid #545454 !important
}

#im_browser_tokens {
    background: #545454;
    border: 1px solid #828282
}

#im_browser_tokens.active {
    border-color: #828282;
    box-shadow: 0 0 7px rgba(130, 130, 130, 0.15)
}

#im_browser_tokens .member_token {
    background: #222;
    border: 1px solid #000;
    color: #e6e6e6
}

#im_browser_tokens .member_token.ra {
    background: #bf360c
}

.fs_modal_file_viewer_header {
    background-color: #363636;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5)
}

.fs_modal_file_viewer_header .btn {
    color: #e6e6e6
}

.fs_modal_file_viewer_header .star {
    color: #949494
}

.fs_modal_file_viewer_header .control_btn,
.fs_modal_file_viewer_header a.control_btn {
    color: #e6e6e6
}

.fs_modal_file_viewer_header .control_btn:link,
.fs_modal_file_viewer_header .control_btn:visited,
.fs_modal_file_viewer_header a.control_btn:link,
.fs_modal_file_viewer_header a.control_btn:visited {
    color: #e6e6e6
}

.fs_modal_file_viewer_header .control_btn:focus,
.fs_modal_file_viewer_header .control_btn:hover,
.fs_modal_file_viewer_header a.control_btn:focus,
.fs_modal_file_viewer_header a.control_btn:hover {
    color: #949494
}

.fs_modal_file_viewer_header .control_btn.active,
.fs_modal_file_viewer_header .control_btn:active,
.fs_modal_file_viewer_header a.control_btn.active,
.fs_modal_file_viewer_header a.control_btn:active {
    background: #545454
}

.fs_modal_file_viewer_header .file_size,
.fs_modal_file_viewer_header .muted_tooltip_info {
    color: #949494
}

.fs_modal_file_viewer_header .close_btn::after {
    border-right: 1px solid #545454
}

.fs_modal_file_viewer_content .viewer {
    background-color: #000;
    color: #e6e6e6 !important
}

.fs_modal_file_viewer_content .viewer .next_btn ts-icon,
.fs_modal_file_viewer_content .viewer .previous_btn ts-icon {
    background: #545454;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25)
}

.fs_modal_file_viewer_content .viewer .next_btn:focus:not([disabled]),
.fs_modal_file_viewer_content .viewer .next_btn:hover:not([disabled]),
.fs_modal_file_viewer_content .viewer .previous_btn:focus:not([disabled]),
.fs_modal_file_viewer_content .viewer .previous_btn:hover:not([disabled]) {
    background: rgba(130, 130, 130, 0.25);
    color: #e6e6e6
}

.fs_modal_file_viewer_content .viewer .next_btn[disabled]:focus,
.fs_modal_file_viewer_content .viewer .next_btn[disabled]:hover,
.fs_modal_file_viewer_content .viewer .previous_btn[disabled]:focus,
.fs_modal_file_viewer_content .viewer .previous_btn[disabled]:hover {
    color: rgba(148, 148, 148, 0.8)
}

.fs_modal_file_viewer_content .aside_panel {
    background-color: #222;
    box-shadow: -1px 0 0 rgba(0, 0, 0, 0.25)
}

.fs_modal_file_viewer_content .comment_header {
    background-color: transparent;
    border-bottom: 1px solid #000
}

.fs_modal_file_viewer_content .no_comment {
    background-color: #222;
    color: #949494
}

.fs_modal_file_viewer_content .aside_close_btn {
    color: #e6e6e6
}

.fs_modal_file_viewer_content #file_comment {
    color: #e6e6e6
}

#file_comment_textarea.texty_comment_input {
    background: #222;
    border-color: #363636;
    color: #e6e6e6
}

#file_comment_textarea.texty_comment_input.focus,
#file_comment_textarea.texty_comment_input:hover {
    border-color: #363636
}

#fs_modal.help_modal #fs_modal_footer .help_modal_status #no_open_issues {
    color: #949494
}

#fs_modal.help_modal .help_modal_header {
    background-color: #363636;
    border-color: #545454
}

#fs_modal.help_modal .help_modal_header a {
    color: #e6e6e6
}

#fs_modal.help_modal .help_modal_divider {
    color: #949494
}

#fs_modal.help_modal .help_modal_article_row {
    border-top: 1px solid #363636
}

#fs_modal.help_modal .help_modal_article_row .channel_browser_open {
    color: #949494
}

#fs_modal.help_modal #help_modal_list_container:not(.keyboard_active).not_scrolling .help_modal_article_row:hover,
#fs_modal.help_modal .help_modal_article_row.highlighted {
    background-color: #363636;
    border-color: #000
}

.admin_invites_account_type_option {
    border-bottom: 1px solid #363636
}

.admin_invites_account_type_option p {
    color: #e6e6e6
}

.admin_invites_account_type_option .option_arrow {
    color: #949494
}

.admin_invites_account_type_option:hover:not(.disabled) h3 {
    color: #e6e6e6
}

.admin_invites_account_type_option.disabled .account_type_disabled_hover {
    background: rgba(255, 255, 255, 0)
}

.admin_invites_account_type_option.disabled:hover .account_type_disabled_hover {
    background: rgba(34, 34, 34, 0.95)
}

.admin_invite_row .delete_row,
.admin_invite_row .hide_custom_message,
.admin_invites_custom_message_container .delete_row,
.admin_invites_custom_message_container .hide_custom_message {
    color: #949494
}

.admin_invite_row .delete_row:hover,
.admin_invite_row .hide_custom_message:hover,
.admin_invites_custom_message_container .delete_row:hover,
.admin_invites_custom_message_container .hide_custom_message:hover {
    color: #bf360c
}

.admin_invite_row.delete_highlight,
.admin_invites_custom_message_container.delete_highlight {
    background: rgba(191, 54, 12, 0.4)
}

#admin_invites_channel_picker_container {
    border-bottom: 1px solid #363636
}

#admin_invites_add_row {
    background: #545454;
    border: 1px solid #363636
}

#admin_invites_workflow .lazy_filter_select .lfs_input_container {
    background-color: #545454
}

#channel_invite_tokens {
    background-color: #545454;
    border-color: #828282
}

#channel_invite_tokens.active {
    border-color: #949494;
    box-shadow: 0 0 7px rgba(148, 148, 148, 0.15)
}

#channel_invite_tokens .member_token {
    background: #222;
    color: #e6e6e6
}

#channel_invite_tokens .member_token.ra {
    background: rgba(191, 54, 12, 0.4)
}

#admin_invites_alert {
    background: #545454;
    border-color: #828282
}

.channel_invite_member .add_icon,
.channel_invite_member_small .add_icon,
.channel_invite_pending_user_small .add_icon {
    color: #e6e6e6
}

.channel_invite_member .invite_user_group_avatar,
.channel_invite_member_small .invite_user_group_avatar,
.channel_invite_pending_user_small .invite_user_group_avatar {
    background-color: #222;
    color: #e6e6e6
}

#shortcuts_dialog {
    background: rgba(34, 34, 34, 0.95);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.7)
}

#shortcuts_dialog.modal .modal-body,
#shortcuts_dialog.modal h1,
#shortcuts_dialog.modal h3 {
    color: #e6e6e6
}

#shortcuts_dialog.modal ul ul {
    border-left-color: #545454
}

#shortcuts_dialog.modal .info_block {
    color: #949494
}

#shortcuts_dialog.modal .close {
    background: #545454;
    border-color: #828282;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    color: #e6e6e6
}

#shortcuts_dialog.modal .close:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9)
}

#fs_modal.prefs_modal label.sound_option:hover:not(.disabled) ts-icon {
    color: #949494
}

#fs_modal.prefs_modal #prefs_sidebar .theme_thumb {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25)
}

#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .custom_theme_label {
    border: 1px solid #363636
}

#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .custom_theme_label .color_swatch {
    border: 1px solid #363636
}

#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .colpick {
    background: #424242;
    border: 1px solid #363636
}

#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after {
    background: #bf360c;
    border-radius: 3px;
    content: "Light sidebar themes (e.g. Hoth) will break this Stylish theme.";
    display: block;
    font-size: 14px;
    line-height: 18px;
    margin: 12px 0 6px;
    padding: 6px;
    width: 100%
}

#fs_modal.prefs_modal legend {
    color: #e6e6e6
}

#fs_modal.prefs_modal .global_notification_block {
    background: #222;
    border-color: #000
}

#fs_modal.prefs_modal .global_notification_block.selected {
    background: #363636;
    border-color: #000
}

#fs_modal.prefs_modal .channel_overrides_row {
    border-top-color: #000
}

#fs_modal.prefs_modal .channel_overrides_row:hover {
    background: #363636;
    border-color: #000
}

#fs_modal.prefs_modal .channel_overrides_row .channel_overrides_summary {
    color: #e6e6e6
}

#fs_modal.prefs_modal .notification_example.mac {
    background: #000;
    box-shadow: 0 1px 8px 2px #363636
}

#fs_modal.prefs_modal .notification_example.linux,
#fs_modal.prefs_modal .notification_example.windows {
    background: #000;
    color: #e6e6e6
}

#fs_modal.prefs_modal .badge_example {
    background: #bf360c
}

#fs_modal.prefs_modal .message_theme_preview {
    border-bottom-color: #000;
    border-top-color: #000
}

#fs_modal.prefs_modal .display_real_names_block_sample {
    background: #222
}

.sidebar_menu_list_item {
    border: 0;
    color: #e6e6e6
}

.sidebar_menu_list_item.is_active {
    background-color: #000;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

.sidebar_menu_list_item:not(.is_active):hover {
    background-color: #363636
}

.jumbomoji_pref_disabled {
    color: #949494
}

.jumbomoji_disabled_note {
    color: rgba(148, 148, 148, 0.6)
}

#edit_team_profile_container input:disabled,
#edit_team_profile_container select:disabled {
    background: #545454;
    border: 1px solid #000
}

#edit_team_profile_container .lazy_filter_select.disabled {
    background: #545454
}

#edit_team_profile_container .lazy_filter_select.disabled input {
    background: #545454
}

#edit_team_profile_add .row,
#edit_team_profile_list .row {
    border-top: 1px solid #363636
}

#edit_team_profile_list .row:nth-last-child(2):hover {
    border-color: #363636 !important
}

#edit_team_profile_list .row:nth-child(n+5).active,
#edit_team_profile_list .row:nth-child(n+5):hover {
    background: #363636;
    border: 1px solid #000
}

#edit_team_profile_list .row:nth-child(n+5).active .edit_team_profile_list_controls i.ts_icon_cog_o {
    color: #949494
}

#edit_team_profile_list .edit_team_profile_list_controls i {
    color: #e6e6e6
}

#edit_team_profile_list .edit_team_profile_list_controls i.ts_icon_cog_o:hover {
    color: #949494
}

#edit_team_profile_list .edit_team_profile_list_controls i.ts_icon_grabby_patty:hover {
    color: #949494
}

#edit_team_profile_list .sortable-placeholder::before {
    border-top: 1px solid #545454
}

#edit_team_profile_add .row:last-child {
    border-bottom: 1px solid #545454
}

#edit_team_profile_add .row:not(.header_row):hover {
    background: #363636;
    border: 1px solid #000
}

#edit_team_profile_add .row:not(.header_row):hover .col:first-child {
    color: #e6e6e6
}

#edit_team_profile_add .row:not(.header_row):hover i {
    border-color: #000;
    color: #e6e6e6
}

#edit_team_profile_add i {
    color: #949494
}

#edit_team_profile_edit .profile_field_preview_protector label.select::after,
#edit_team_profile_edit .profile_field_preview_protector label.select:hover::after {
    color: #949494
}

#edit_team_profile_edit .row.option_row.show_remove_action i {
    border: 1px solid #000
}

#edit_team_profile_edit .row.option_row.show_remove_action i:hover {
    background-color: #bf360c;
    border-color: #bf360c !important;
    color: #e6e6e6
}

#edit_team_profile_edit .row i {
    border: 1px solid #000;
    color: #e6e6e6
}

#edit_team_profile_custom .row .col .profile_field_preview {
    background: #363636;
    border: 2px solid #000
}

#edit_team_profile_custom .row .col .profile_field_preview:active,
#edit_team_profile_custom .row .col .profile_field_preview:hover {
    border-color: #363636
}

#edit_team_profile_custom .row .col .profile_field_preview:active span,
#edit_team_profile_custom .row .col .profile_field_preview:hover span {
    color: #949494
}

#edit_team_profile_custom .row .col input {
    background: #545454;
    border: 1px solid #000
}

#edit_team_profile_custom .row .col[data-type=options_list] span::after {
    color: #949494
}

#edit_team_profile_custom .row .col[data-type=options_list] input {
    border-right: 1px solid #000
}

.profile_field_preview_protector .profile_field_preview {
    background: #222;
    border: 1px solid #545454
}

.profile_field_preview_protector .profile_field_preview::after {
    background-color: #222;
    box-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.25)
}

.profile_field_preview_protector .profile_field_preview::before {
    background-color: #222;
    box-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.25)
}

.profile_field_preview_protector .profile_field_preview input:disabled,
.profile_field_preview_protector .profile_field_preview select:disabled {
    background: #545454;
    color: #949494
}

.profile_field_preview_protector .profile_field_preview .profile_field_preview_fade_out_mask {
    background: linear-gradient(to left, #000, rgba(255, 255, 255, 0))
}

.profile_field_preview_protector .profile_field_preview .profile_field_preview_ribbon::before {
    border-color: transparent transparent transparent #000
}

.profile_field_preview_protector .profile_field_preview .profile_field_preview_ribbon::after {
    border-color: #000 transparent transparent
}

ts-jumper ts-jumper-container {
    background: #222;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5)
}

ts-jumper .p-jumper__help,
ts-jumper ts-jumper-help {
    background: #222;
    color: #949494
}

ts-jumper input[type=text] {
    border: 1px solid #000 !important;
    color: #e6e6e6
}

ts-jumper input[type=text]:focus {
    border: 1px solid rgba(54, 54, 54, 0.8) !important;
    color: #e6e6e6
}

ts-jumper input[type=text]::-moz-placeholder,
ts-jumper input[type=text]::-webkit-input-placeholder,
ts-jumper input[type=text]:focus::-moz-placeholder,
ts-jumper input[type=text]:focus::-webkit-input-placeholder {
    color: #e6e6e6
}

ts-jumper ol li {
    color: #e6e6e6
}

ts-jumper ol li .channel_name,
ts-jumper ol li .member_real_name,
ts-jumper ol li .member_username,
ts-jumper ol li .team_username {
    color: #949494
}

ts-jumper ol li .channel_not_member,
ts-jumper ol li .member_real_name+.member_username,
ts-jumper ol li .member_username+.member_real_name,
ts-jumper ol li .team_username,
ts-jumper ol li ts-icon {
    color: #949494
}

ts-jumper ol li .unread_count {
    background: #bf360c;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25)
}

ts-jumper ol li.highlighted {
    background: #828282 !important;
    color: #e6e6e6 !important
}

ts-jumper ol:not(.keyboard_active) li:hover {
    background: #828282 !important;
    color: #e6e6e6 !important
}

ts-jumper ol li.highlighted .channel_not_member,
ts-jumper ol li.highlighted .member_real_name+.member_username,
ts-jumper ol li.highlighted .member_username+.member_real_name,
ts-jumper ol li.highlighted i.presence_icon,
ts-jumper ol li.highlighted ts-icon,
ts-jumper ol:not(.keyboard_active) li:hover .channel_not_member,
ts-jumper ol:not(.keyboard_active) li:hover .member_real_name+.member_username,
ts-jumper ol:not(.keyboard_active) li:hover .member_username+.member_real_name,
ts-jumper ol:not(.keyboard_active) li:hover i.presence_icon,
ts-jumper ol:not(.keyboard_active) li:hover ts-icon {
    color: #e6e6e6
}

.basic_share_dialog .share_dialog_divider {
    border-top-color: transparent
}

.share_dialog_attachment_container {
    color: #e6e6e6
}

#share_dialog .file_list_item {
    border-color: #000
}

#generic_dialog.basic_share_dialog .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon),
#share_dialog .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon) {
    color: #949494
}

#share_dialog_input_container #file_comment_textarea.ql-container {
    border-color: #363636
}

#share_dialog_input_container #file_comment_textarea.ql-container.focus {
    border-color: #545454
}

#share_dialog_input_container #file_comment_textarea.ql-container.focus~.emo_menu {
    color: #e6e6e6
}

.ts_tip .ts_tip_multiline_inner,
.ts_tip:not(.ts_tip_multiline) .ts_tip_tip {
    background: #545454
}

.ts_tip .ts_tip_tip {
    color: #e6e6e6
}

.ts_tip.ts_tip_left .ts_tip_tip::after {
    border-left-color: #545454
}

.ts_tip.ts_tip_right .ts_tip_tip::after {
    border-right-color: #545454
}

.ts_tip.ts_tip_top .ts_tip_tip::after {
    border-top-color: #545454
}

.ts_tip.ts_tip_bottom .ts_tip_tip::after {
    border-bottom-color: #545454
}

.ts_tip.success .ts_tip_tip {
    background: #828282
}

.ts_tip.success.ts_tip_left .ts_tip_tip::after {
    border-left-color: #828282
}

.ts_tip.success.ts_tip_right .ts_tip_tip::after {
    border-right-color: #828282
}

.ts_tip.success.ts_tip_top .ts_tip_tip::after {
    border-top-color: #828282
}

.ts_tip.success.ts_tip_bottom .ts_tip_tip::after {
    border-bottom-color: #828282
}

.c-tooltip__tip {
    background-color: #545454;
    color: #e6e6e6
}

.c-tooltip__tip--top .c-tooltip__tip__arrow {
    border-top-color: #545454
}

.c-tooltip__tip--top-left .c-tooltip__tip__arrow {
    border-top-color: #545454
}

.c-tooltip__tip--top-right .c-tooltip__tip__arrow {
    border-top-color: #545454
}

.c-tooltip__tip--right .c-tooltip__tip__arrow {
    border-right-color: #545454
}

.c-tooltip__tip--bottom .c-tooltip__tip__arrow {
    border-bottom-color: #545454
}

.c-tooltip__tip--bottom-left .c-tooltip__tip__arrow {
    border-bottom-color: #545454
}

.c-tooltip__tip--bottom-right .c-tooltip__tip__arrow {
    border-bottom-color: #545454
}

.c-tooltip__tip--left .c-tooltip__tip__arrow {
    border-left-color: #545454
}

.c-tooltip__tip--success {
    background-color: #0cbf72
}

.c-tooltip__tip--success.c-tooltip__tip--top-left::after,
.c-tooltip__tip--success.c-tooltip__tip--top-right::after,
.c-tooltip__tip--success.c-tooltip__tip--top::after {
    border-top-color: #0cbf72
}

.c-tooltip__tip--success.c-tooltip__tip--right::after {
    border-right-color: #0cbf72
}

.c-tooltip__tip--success.c-tooltip__tip--bottom-left::after,
.c-tooltip__tip--success.c-tooltip__tip--bottom-right::after,
.c-tooltip__tip--success.c-tooltip__tip--bottom::after {
    border-bottom-color: #0cbf72
}

.c-tooltip__tip--success.c-tooltip__tip--left::after {
    border-left-color: #0cbf72
}

#coachmark.calls_interactive_mas_migration_coachmark_div,
#coachmark.calls_iss_window_coachmark_div,
#coachmark.calls_ss_main_coachmark_div,
#coachmark.calls_ss_window_coachmark_div,
#coachmark.calls_video_beta_coachmark_div,
#coachmark.calls_video_ga_coachmark_div,
#coachmark.channels_coachmark_div,
#coachmark.direct_messages_coachmark_div,
#coachmark.enterprise_analytics_usage_callouts_coachmark_div,
#coachmark.gdrive_coachmark_div,
#coachmark.highlights_arrows_coachmark_div,
#coachmark.highlights_feedback_coachmark_div,
#coachmark.highlights_message_coachmark_div,
#coachmark.intl_channel_names_coachmark_div,
#coachmark.invites_coachmark_div,
#coachmark.name_tagging_coachmark_div,
#coachmark.onboarding_coachmark_div,
#coachmark.recent_mentions_coachmark_div,
#coachmark.replies_coachmark_div,
#coachmark.screenhero_deprecation_coachmark_div,
#coachmark.starred_items_coachmark_div,
#coachmark.unread_view_coachmark_div {
    background: #545454
}

#coachmark.calls_interactive_mas_migration_coachmark_div #coachmark_callout,
#coachmark.calls_interactive_mas_migration_coachmark_div #coachmark_interior,
#coachmark.calls_iss_window_coachmark_div #coachmark_callout,
#coachmark.calls_iss_window_coachmark_div #coachmark_interior,
#coachmark.calls_ss_main_coachmark_div #coachmark_callout,
#coachmark.calls_ss_main_coachmark_div #coachmark_interior,
#coachmark.calls_ss_window_coachmark_div #coachmark_callout,
#coachmark.calls_ss_window_coachmark_div #coachmark_interior,
#coachmark.calls_video_beta_coachmark_div #coachmark_callout,
#coachmark.calls_video_beta_coachmark_div #coachmark_interior,
#coachmark.calls_video_ga_coachmark_div #coachmark_callout,
#coachmark.calls_video_ga_coachmark_div #coachmark_interior,
#coachmark.channels_coachmark_div #coachmark_callout,
#coachmark.channels_coachmark_div #coachmark_interior,
#coachmark.direct_messages_coachmark_div #coachmark_callout,
#coachmark.direct_messages_coachmark_div #coachmark_interior,
#coachmark.enterprise_analytics_usage_callouts_coachmark_div #coachmark_callout,
#coachmark.enterprise_analytics_usage_callouts_coachmark_div #coachmark_interior,
#coachmark.gdrive_coachmark_div #coachmark_callout,
#coachmark.gdrive_coachmark_div #coachmark_interior,
#coachmark.highlights_arrows_coachmark_div #coachmark_callout,
#coachmark.highlights_arrows_coachmark_div #coachmark_interior,
#coachmark.highlights_feedback_coachmark_div #coachmark_callout,
#coachmark.highlights_feedback_coachmark_div #coachmark_interior,
#coachmark.highlights_message_coachmark_div #coachmark_callout,
#coachmark.highlights_message_coachmark_div #coachmark_interior,
#coachmark.intl_channel_names_coachmark_div #coachmark_callout,
#coachmark.intl_channel_names_coachmark_div #coachmark_interior,
#coachmark.invites_coachmark_div #coachmark_callout,
#coachmark.invites_coachmark_div #coachmark_interior,
#coachmark.name_tagging_coachmark_div #coachmark_callout,
#coachmark.name_tagging_coachmark_div #coachmark_interior,
#coachmark.onboarding_coachmark_div #coachmark_callout,
#coachmark.onboarding_coachmark_div #coachmark_interior,
#coachmark.recent_mentions_coachmark_div #coachmark_callout,
#coachmark.recent_mentions_coachmark_div #coachmark_interior,
#coachmark.replies_coachmark_div #coachmark_callout,
#coachmark.replies_coachmark_div #coachmark_interior,
#coachmark.screenhero_deprecation_coachmark_div #coachmark_callout,
#coachmark.screenhero_deprecation_coachmark_div #coachmark_interior,
#coachmark.starred_items_coachmark_div #coachmark_callout,
#coachmark.starred_items_coachmark_div #coachmark_interior,
#coachmark.unread_view_coachmark_div #coachmark_callout,
#coachmark.unread_view_coachmark_div #coachmark_interior {
    background: #545454
}

#coachmark_footer .coachmark_done,
#coachmark_footer .coachmark_got_it,
#coachmark_footer .coachmark_next_tip,
#coachmark_footer .coachmark_ok {
    background: rgba(130, 130, 130, 0.5) !important
}

#coachmark_interior {
    color: #e6e6e6
}

#coachmark_interior .coachmark_close_btn {
    color: #e6e6e6
}

.menu_member_header {
    background: #000
}

.menu_member_header .member_details .member_name_and_presence {
    color: #e6e6e6
}

.menu_member_header .member_details .member_name_and_presence .member_name {
    color: #e6e6e6
}

.menu_member_header .member_details .member_name_and_presence .presence.away {
    color: #fff
}

.menu_member_header .member_details .member_title {
    color: #949494
}

.menu_member_header .member_details .member_restriction,
.menu_member_header .member_details .member_timezone_value {
    color: #949494
}

.menu_member_header .member_details .member_restriction a,
.menu_member_header .member_details .member_timezone_value a {
    color: #949494
}

.menu_member_header .member_details .member_restriction a:hover,
.menu_member_header .member_details .member_timezone_value a:hover {
    color: #c7c7c7
}

.menu_member_header .member_details_divider {
    border-color: #545454
}

.menu_member_footer {
    background: #000;
    border-top: 1px solid #545454
}

.menu_member_footer p {
    color: #949494
}

.member_meta {
    color: #949494
}

.blue_fill,
.blue_link,
.charcoal_grey,
.dull_grey,
.flat_grey,
.indifferent_grey,
.mini,
.slate_blue,
.ts_tip_tip .subtle_silver {
    color: #e6e6e6 !important
}

.burnt_violet,
.cloud_silver,
.greigh,
.havana_blue,
.old_petunia_grey,
.plastic_grey,
.severe_grey,
.sk_dark_gray,
.sk_dark_grey,
.sky_blue,
.subtle_silver {
    color: #949494 !important
}

.clear_blue {
    color: #949494 !important
}

.candy_red_on_hover:hover,
.moscow_red,
.moscow_red_on_hover:hover,
.mustard_yellow,
.yolk_orange {
    color: #bf360c !important
}

.seafoam_green {
    color: #0cbf72 !important
}

.candy_red_bg {
    background-color: #bf360c !important
}

.neutral_white_bg,
.off_white_bg {
    background-color: #363636 !important
}

.burnt_violet_bg,
.flexpane_grey_bg,
.yolk_orange_bg {
    background-color: #424242 !important
}

.clear_blue_bg,
.seafoam_green_bg,
.sky_blue_bg {
    background-color: #545454 !important
}

.sk_black {
    color: inherit
}

.monkey_scroll_bar {
    z-index: 99
}

.client_header_icon {
    -moz-filter: brightness(0.6) contrast(3) invert(1) sepia(0.5);
    -webkit-filter: brightness(0.6) contrast(3) invert(1) sepia(0.5);
    filter: brightness(0.6) contrast(3) invert(1) sepia(0.5)
}

nav.top.persistent {
    background: #363636
}

nav.top.persistent .logo {
    background-position: 50% 0 !important
}

.widescreen #header_team_name a i {
    margin-left: 1.5em
}

.widescreen #user_menu {
    border-right: none
}

header #menu_toggle {
    color: #949494
}

header #header_team_nav {
    background: #363636;
    border: 1px solid #000
}

header #header_team_nav li.active a {
    background: #222;
    color: #e6e6e6
}

header .header_btns a {
    color: #949494
}

header .header_btns a .label {
    color: #949494
}

header .vert_divider {
    border-left: 1px solid #000
}

#autocomplete_menu.search_menu footer.unified,
footer {
    background-color: #363636;
    border-color: #000;
    color: #e6e6e6
}

#autocomplete_menu.search_menu footer.unified ul a,
footer ul a {
    color: #e6e6e6
}

#autocomplete_menu.search_menu footer.unified ul a:link,
#autocomplete_menu.search_menu footer.unified ul a:visited,
footer ul a:link,
footer ul a:visited {
    color: #e6e6e6
}

.plastic_row h3 {
    color: #e6e6e6
}

.plastic_row h4 a {
    color: #e6e6e6
}

.plastic_row .icon {
    color: #e6e6e6
}

.plastic_row .chevron {
    color: #949494
}

.plastic_row .description {
    color: #e6e6e6
}

.plastic_row:active {
    background: #222;
    border-color: #000
}

.plastic_row:active .chevron {
    color: #e6e6e6
}

html.no_touch .plastic_row:hover {
    background: #222;
    border-color: #000
}

html.no_touch .plastic_row:hover .chevron {
    color: #e6e6e6
}

html.no_touch .pagination ul>li>a:hover {
    background-color: #000
}

html.no_touch .pagination ul>.disabled>a:hover {
    background: #363636;
    color: #949494
}

html.no_touch .pager li>a:focus,
html.no_touch .pager li>a:hover {
    color: #c7c7c7
}

.card,
.tab_pane {
    background: #363636;
    border: 1px solid #000;
    color: #e6e6e6
}

.card h3 a {
    color: #e6e6e6
}

#page_contents .card {
    background: rgba(54, 54, 54, 0.8) !important
}

#page_contents .card p {
    color: #e6e6e6
}

.tab_set a.secondary {
    color: #949494
}

.tab_set a.secondary.selected,
.tab_set a.selected {
    background: #363636;
    border: 1px solid #000;
    border-bottom-color: #363636;
    color: #c7c7c7
}

.tab_actions {
    background: #363636;
    border: 1px solid #000;
    border-color: #000
}

.accordion_section {
    border-bottom-color: #222
}

.accordion_section h4 {
    color: #e6e6e6
}

.accordion_section h4 a {
    color: #e6e6e6
}

.no_touch .accordion_section h4 a:hover {
    color: #e6e6e6
}

.accordion_section_fixed {
    border-bottom-color: #222 !important
}

.pager li>a,
.pager li>span {
    background-color: #222;
    background-image: none;
    border-color: #363636;
    color: #949494
}

.pager li.previous>a,
.pager li.previous>span {
    background-position: 0;
    padding-right: 0;
    text-align: center
}

.pager li.next>a,
.pager li.next>span {
    background-position: 0;
    padding-left: 0;
    text-align: center
}

.pager .disabled>a,
.pager .disabled>span {
    color: #949494
}

.pagination ul>li>a,
.pagination ul>li>span {
    background: #363636;
    border: 1px solid #000;
    color: #e6e6e6
}

.pagination ul>li>a:focus {
    background-color: #000
}

.pagination ul>.active>a,
.pagination ul>.active>span {
    background-color: #000
}

.pagination ul>.disabled>span {
    background: #363636;
    color: #949494
}

.pagination ul>.disabled>a {
    background: #363636;
    color: #949494
}

.pagination ul>.disabled>a:focus {
    background: #363636;
    color: #c7c7c7
}

.loading_hash_animation img {
    display: none
}

.icon_search_close {
    color: #949494
}

.icon_search_close:hover {
    color: #c7c7c7
}

.help {
    border-top-color: #000;
    color: #949494
}

.configure-step1,
.configure-step3,
.two_factor_option_app,
.two_factor_option_sms {
    display: none
}

.two_factor_choice {
    background-color: #363636;
    border: 1px solid #545454;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25)
}

.two_factor_choice:hover {
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.15)
}

.two_factor_choice:hover .two_factor_link {
    color: #e6e6e6
}

a.two_factor_choice {
    background-color: #363636;
    border: 1px solid #545454;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25)
}

a.two_factor_choice:link {
    background-color: #363636;
    border: 1px solid #545454;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25)
}

a.two_factor_choice:hover,
a.two_factor_choice:link:hover {
    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.15)
}

a.two_factor_choice:hover .two_factor_link,
a.two_factor_choice:link:hover .two_factor_link {
    color: #e6e6e6
}

.backup_codes {
    background: #000;
    border-color: #545454;
    color: #e6e6e6
}

#channel_specific_settings tr {
    border-top-color: #222
}

#channel_specific_settings tr.channel_override_row.muted td {
    background: rgba(34, 34, 34, 0.5)
}

#channel_specific_settings .extra_left_border {
    border-left-color: #222
}

#channel_specific_settings .extra_right_border {
    border-right-color: #222
}

#channel_specific_settings .revert_to_default {
    color: #949494
}

#channel_specific_settings .revert_to_default:hover {
    color: #bf360c
}

.admin_list_item {
    border-bottom-color: #222;
    color: #949494
}

.admin_list_item:hover {
    background-color: #363636
}

.admin_list_item .admin_member_full_name,
.admin_list_item .admin_member_real_name {
    color: #e6e6e6
}

.admin_list_item .admin_member_caret,
.admin_list_item .admin_member_type {
    color: #949494
}

.admin_list_item .pill.group {
    background: #424242
}

.admin_list_item .two_factor_auth_badge:hover {
    background: #424242
}

.admin_list_item .inline_email:hover,
.admin_list_item .inline_name:hover,
.admin_list_item .inline_username:hover {
    background: none !important
}

.admin_list_item.invite_item.bouncing {
    background: #828282
}

.admin_list_item.invite_item.bouncing .email {
    color: #bf360c
}

.admin_list_item.error,
.admin_list_item.expanded,
.admin_list_item.processing,
.admin_list_item.success {
    background-color: #222
}

.admin_list_item.expanded .btn_outline {
    border-color: #222;
    color: #e6e6e6 !important
}

.admin_list_item.expanded .btn_outline:hover {
    border-color: #363636;
    color: #e6e6e6 !important
}

.admin_list_item.expanded .sub_action {
    color: #949494
}

.admin_list_item.expanded .sub_action:hover {
    color: #c7c7c7
}

@media screen and (max-width: 768px) {

    .admin_list_item.expanded .sub_action+.sub_action:hover::after,
    .admin_list_item.expanded .sub_action+.sub_action:hover::before {
        color: #949494
    }
}

.billing_selection {
    border-color: #000;
    color: #e6e6e6 !important;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5)
}

.billing_selection:hover {
    border-color: #828282
}

.billing_selection.active {
    background: #545454;
    border-color: #828282
}

.billing_selection.billing_selection--refactor {
    border-color: #545454;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5)
}

.billing_selection.billing_selection--refactor:hover {
    border-color: #828282
}

.billing_selection.billing_selection--refactor.active {
    background: #545454;
    border-color: #828282
}

.billing_selection .billing_selection__price {
    color: #e6e6e6
}

#billing_contacts_container {
    background: #363636;
    border-top: 1px solid #000
}

.billing_contact {
    border-bottom: 1px solid #222
}

table.billing tr:hover td {
    background: #363636
}

.link_billing_statement {
    color: #e6e6e6 !important
}

.link_invoice_id,
.link_statement_id {
    color: #949494 !important
}

.billing_invoice tbody tbody tr {
    color: #e6e6e6 !important
}

.billing_settings_label_name {
    color: #e6e6e6
}

table tr {
    border-bottom-color: #222
}

table tr:first-child th:not(:only-of-type) {
    border-bottom-color: #000
}

.slackbot_response_fieldset .delete_response {
    color: #949494
}

.slackbot_response_fieldset .delete_response:hover {
    color: #bf360c
}

.author_cell {
    color: #e6e6e6
}

.message_cell.disabled {
    color: #949494
}

#message_container #msg_limit {
    color: #e6e6e6
}

.statuses_container .current_status_cell .current_status_container .current_status_cover,
.statuses_container .current_status_cell .current_status_container:not(.active).with_status_set .current_status_cover {
    border-color: #545454
}

.statuses_container .current_status_cell .current_status_container .current_status_emoji_picker_cover,
.statuses_container .current_status_cell .current_status_container:not(.active).with_status_set .current_status_emoji_picker_cover {
    border-right: 1px solid #545454
}

.inactive {
    background-image: none
}

.c3 line,
.c3 path {
    stroke: #828282
}

.c3-chart-arc .c3-gauge-value {
    fill: #828282
}

.c3-chart-arc path {
    stroke: #363636
}

.c3-chart-arc text {
    fill: #363636
}

.c3-chart-arcs .c3-chart-arcs-background {
    fill: #545454
}

.c3-chart-arcs .c3-chart-arcs-gauge-max,
.c3-chart-arcs .c3-chart-arcs-gauge-min {
    fill: #363636
}

.c3-chart-arcs .c3-chart-arcs-gauge-unit {
    fill: #828282
}

.c3-circle._expanded_ {
    stroke: #363636
}

.c3-grid line {
    stroke: #828282
}

.c3-grid text {
    fill: #e6e6e6
}

.c3-legend-background {
    fill: #363636;
    stroke: #545454
}

.c3-region {
    fill: #545454
}

.c3-selected-circle {
    fill: #363636
}

.c3-tooltip {
    background-color: #363636;
    box-shadow: 7px 7px 12px -9px rgba(0, 0, 0, 0.5)
}

.c3-tooltip td {
    background-color: #363636;
    border-left-color: #545454
}

.c3-tooltip th {
    background-color: #363636;
    color: #e6e6e6
}

.c3-tooltip tr {
    border-color: #545454
}

.ent_alert a {
    color: #949494
}

.ent_alert a:link,
.ent_alert a:visited {
    color: #c7c7c7
}

.ent_alert_page.ent_alert_error {
    background: #bf360c
}

.ent_alert_page.ent_alert_success {
    background: #0cbf72
}

.ent_analytics__disclaimer {
    border-top-color: #828282;
    color: #949494
}

.ent_analytics_overview__header {
    box-shadow: 0 1px rgba(0, 0, 0, 0.25)
}

.ent_avatar--bordered::before {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.15)
}

.ent_avatar {
    background-color: #545454
}

.ent_callout__difference--increase {
    color: #0cbf72
}

.ent_callout__icon_border {
    background-color: #363636;
    border-color: #828282
}

.ent_callout__icon--filled,
.ent_callout__icon_image {
    border-color: #828282
}

.ent_callout__icon--empty,
.ent_callout__icon--hidden {
    border-color: #545454
}

.ent_callout__icon--limit_reached {
    border-color: #828282
}

.ent_callout__insight {
    color: #949494
}

.ent_callout__limit {
    color: #949494
}

.ent_callout__meter_bar_container {
    background: #222
}

.ent_callout__meter_bar_border {
    border-color: #222
}

.ent_callout__meter_bar_fill--empty {
    background: #828282;
    border-color: #828282
}

.ent_callout__meter_bar_fill--filled {
    background: #828282;
    border-color: #828282
}

.ent_callout__meter_bar_fill--limit_reached {
    background: #bf360c;
    border-color: #bf360c
}

.ent_callout__meter_bar_gleam {
    background: rgba(130, 130, 130, 0.5)
}

.ent_callout__title {
    color: #e6e6e6
}

.ent_copy_muted {
    color: #949494
}

.ent_copy {
    color: #e6e6e6
}

.ent_csv_popover__footer_text {
    color: #949494
}

.ent_csv_popover__footer {
    background: #363636;
    border-top-color: #828282
}

.ent_csv_popover__subtitle {
    color: #949494
}

.ent_csv_popover__title {
    color: #e6e6e6
}

.ent_data_table__cell--header {
    color: #949494
}

.ent_data_table__cell--positive {
    color: #e6e6e6
}

.ent_data_table__cell--sortable:hover {
    background-color: #363636
}

.ent_data_table__cell--sorting {
    color: #949494
}

.ent_data_table__cell {
    border-bottom-color: #828282;
    color: #e6e6e6
}

.ent_data_table__column_group--pinned .ent_data_table__row,
.ent_data_table__column_group--right_border {
    border-right-color: #828282
}

.ent_data_table__column_group {
    background-color: #363636
}

.ent_data_table__data_link,
a.ent_data_table__data_link {
    color: #e6e6e6
}

.ent_data_table__row--hovered {
    background-color: #222
}

.ent_data_table__scrollable--left_shadow::before {
    box-shadow: inset -14px 0 14px -14px transparent, inset 14px 0 14px -14px rgba(0, 0, 0, 0.25)
}

.ent_data_table__scrollable--left_shadow.ent_data_table__scrollable--right_shadow::before {
    box-shadow: inset -14px 0 14px -14px rgba(0, 0, 0, 0.25), inset 14px 0 14px -14px rgba(0, 0, 0, 0.25)
}

.ent_data_table__scrollable--right_shadow::before {
    box-shadow: inset -14px 0 14px -14px rgba(0, 0, 0, 0.25), inset 14px 0 14px -14px transparent
}

.ent_data_table__secondary_text {
    color: #949494
}

.ent_data_table--empty_state_wrapper,
.ent_data_table__thead {
    background-color: #363636
}

.ent_data_table--fix_borders .ent_data_table__row,
.ent_data_table--fix_borders .ent_data_table__thead {
    border-bottom-color: #828282
}

.ent_data_table--rounded_top {
    border-top-color: #828282
}

.ent_data_table {
    border-bottom-color: #828282;
    border-left-color: #828282;
    border-right-color: #828282
}

.ent_empty_state_overlay__content_heading,
.ent_empty_state_overlay__content_main_heading {
    color: #e6e6e6
}

.ent_graph__data_summary_date_label,
.ent_graph__data_summary_point::after {
    color: #949494
}

.ent_graph__legend_item--defocus {
    fill: #949494 !important
}

.ent_graph__legend_text {
    fill: #e6e6e6
}

.ent_graph__svg_container .c3-axis path {
    stroke: #828282
}

.ent_graph__svg_container .c3-grid line {
    stroke: #828282
}

.ent_graph__svg_container .c3-grid .ent_xgrid_month_divider line,
.ent_graph__svg_container .c3-grid .ent_xgrid_week_divider line,
.ent_graph__svg_container .c3-grid .ent_xgrid_year_divider line {
    stroke: #828282
}

.ent_graph__svg_container .c3-tooltip {
    border-color: #828282;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5)
}

.ent_graph__svg_container .c3-tooltip td,
.ent_graph__svg_container .c3-tooltip th,
.ent_graph__svg_container .c3-tooltip tr {
    background-color: #363636;
    color: #e6e6e6
}

.ent_graph__svg_container .c3-tooltip th {
    border-bottom-color: #828282
}

.ent_graph__svg_container .c3-xgrid-focus line {
    stroke: #949494
}

.ent_graph__svg_container .ent_graph__point:not(._expanded_) {
    fill: #363636 !important
}

.ent_graph__svg_container .ent_graph__point._expanded_ {
    stroke: #363636 !important
}

.ent_graph__svg_container text {
    fill: #949494
}

.ent_graph__tooltip {
    color: #949494
}

.ent_graph_empty__overlay {
    background: #363636
}

.ent_graph_empty__text {
    color: #e6e6e6
}

.ent_graph_header--primary {
    color: #e6e6e6
}

.ent_graph_header--secondary {
    color: #949494
}

.ent_graph_tabs__tab--selected {
    color: #e6e6e6
}

.ent_graph_tabs__tab--selected_ent_violet::after,
.ent_graph_tabs__tab--selected_fill_blue::after,
.ent_graph_tabs__tab--selected_seafoam_green::after {
    background-color: #828282
}

.ent_graph_tabs__tab {
    color: #949494
}

.ent_graph_tabs {
    border-bottom-color: #828282
}

.ent_header {
    color: #e6e6e6
}

.ent_icon_button {
    color: #949494
}

.ent_icon_button:hover {
    color: #e6e6e6
}

.ent_infographic_container {
    border-top-color: #828282
}

.ent_loading__overlay {
    background-image: linear-gradient(to bottom, rgba(54, 54, 54, 0.8), #363636)
}

.ent_modal__title--small {
    color: #e6e6e6
}

.ent_modal_background {
    background-color: #222
}

.ent_modal_breadcrumb_animated_step {
    background: #545454
}

.ent_modal_breadcrumb_circle_icon {
    background: #222
}

.ent_modal_breadcrumb_line {
    background: #545454
}

.ent_modal_breadcrumb_text {
    color: #949494
}

.ent_modal_footer {
    background-color: #363636
}

.ent_modal_title {
    color: #e6e6e6
}

.ent_table__header--title {
    color: #e6e6e6
}

.ent_table__header {
    background-color: #222;
    border-color: #828282
}

.ent_table_banner__contents {
    background: #222;
    border-top-color: #828282;
    box-shadow: 0 -5px 15px 0 rgba(0, 0, 0, 0.15)
}

.ent_table_banner__header {
    color: #e6e6e6
}

.ent_table_banner__secondary_text {
    color: #949494
}

.ent_table_customizer__header_subtitle {
    color: #949494
}

.ent_table_customizer_disabled_list_header {
    color: #949494
}

.ent_table_customizer_footer {
    background-color: #222;
    border-top-color: #000;
    color: #949494
}

.ent_table_customizer_header {
    border-bottom-color: #222
}

.ent_table_customizer_list_item--disabled {
    color: #949494
}

.ent_updated_at {
    color: #949494
}

.enterprise {
    background-color: #363636
}

.enterprise .btn.candy_red {
    color: #bf360c !important
}

.enterprise_analytics {
    background-color: #363636
}

.enterprise_org {
    background-color: #363636
}

.enterprise_search_bar .ent_clear_search_icon {
    color: #949494
}

.enterprise_search_bar::before {
    color: #e6e6e6
}

@keyframes color_fade {
    from {
        color: #949494
    }

    to {
        color: #e6e6e6
    }
}

.file_header .title a {
    color: #949494
}

.file_header .title a:hover {
    color: #c7c7c7
}

.file_actions_cog {
    color: #949494 !important
}

.file_actions_cog:hover {
    color: #c7c7c7 !important
}

.file_list_item .icon,
.file_preview,
.file_reference .icon {
    border: 2px solid #000
}

.action_cog {
    color: #949494
}

.action_cog i {
    color: #949494
}

html.no_touch .action_cog:hover {
    color: #c7c7c7
}

html.no_touch .action_cog:hover i {
    color: #c7c7c7
}

.help_pages.help_pages p {
    color: #e6e6e6
}

.help_pages.help_pages a {
    border-bottom-color: #545454
}

.help_pages.help_pages .o-hero,
.help_pages.help_pages .o-hero__header {
    background-color: #222
}

.help_pages.help_pages .o-hero__header {
    color: #e6e6e6
}

.help_pages.help_pages .o-section--feature {
    background-color: #363636;
    border-top-color: #545454
}

.help_pages.help_pages .c-form__container .c-form__feedback {
    color: #bf360c
}

.help_pages.help_pages .c-form__input,
.help_pages.help_pages .c-input {
    background-color: #222;
    border-color: #545454;
    color: #e6e6e6
}

.help_pages.help_pages .drop_zone {
    background: #222;
    border-color: #828282
}

.help_pages.help_pages .drop_zone_attachment {
    border-bottom-color: #545454
}

.help_pages.help_pages .drop_zone_remove_attachment {
    background-color: #222
}

.help_pages.help_pages .c-form__notice {
    background-color: #545454;
    border-color: #828282;
    color: #e6e6e6
}

.help_pages.help_pages .c-form__notice.is-error {
    border-left-color: #bf360c
}

.help_pages.help_pages .c-nav--footer {
    border-top-color: #545454
}

@media screen and (min-width: 48rem) {
    .help_pages.help_pages .o-hero {
        background-color: #222
    }
}

.widescreen:not(.nav_open) {
    color: #e6e6e6
}

@media only screen and (min-width: 1441px) {
    .widescreen:not(.nav_open) nav#site_nav {
        background: rgba(34, 34, 34, 0.9)
    }
}

.widescreen:not(.nav_open) nav#site_nav h3 {
    color: #e6e6e6
}

.widescreen:not(.nav_open) nav#site_nav ul a {
    color: #949494
}

.widescreen:not(.nav_open) nav#site_nav ul a:active,
.widescreen:not(.nav_open) nav#site_nav ul a:hover,
.widescreen:not(.nav_open) nav#site_nav ul a:link,
.widescreen:not(.nav_open) nav#site_nav ul a:visited {
    color: #c7c7c7
}

.widescreen:not(.nav_open) nav#site_nav #user_menu_name {
    color: #949494
}

nav#site_nav {
    background: #363636
}

nav#site_nav #user_menu_contents:hover {
    background: #222;
    color: #e6e6e6
}

header {
    background: #363636
}

header #header_team_nav li a {
    color: #e6e6e6
}

header #header_team_nav li a:hover {
    background: #222;
    color: #e6e6e6
}

header #header_team_nav li a .team_icon.ts_icon_plus {
    background: #000;
    color: #949494
}

header #header_team_nav #add_team_option {
    border-top: 1px solid #000
}

html.no_touch header #header_team_nav li a {
    color: #e6e6e6
}

html.no_touch header #header_team_nav li a:hover {
    background: #222;
    color: #e6e6e6
}

html.no_touch header #header_team_name a:hover,
html.no_touch header #menu_toggle:hover {
    color: #c7c7c7
}

html.no_touch header .header_btns a:hover {
    color: #c7c7c7
}

html.no_touch header .header_btns a:hover .label {
    color: #949494
}

#header_team_name,
header #header_team_name a,
nav#site_nav h3 {
    color: #949494
}

#header_team_name:hover .fa-caret-down,
.widescreen:not(.nav_open) nav#site_nav #footer_nav a,
nav#site_nav #footer_nav a {
    color: #c7c7c7
}

#home_footer a {
    color: #c7c7c7
}

.admin_pref:not(:first-of-type) {
    border-top-color: #222
}

.admin_pref.locked {
    background-color: rgba(191, 54, 12, 0.2)
}

.admin_pref .admin_pref_locked_label {
    color: #949494
}

.tooltip-inner {
    background-color: #828282;
    color: #e6e6e6
}

.tooltip.top .tooltip-arrow,
.tooltip.top-left .tooltip-arrow {
    border-top-color: #828282
}

.tooltip.right .tooltip-arrow {
    border-right-color: #828282
}

.tooltip.left .tooltip-arrow {
    border-left-color: #828282
}

.tooltip.bottom .tooltip-arrow {
    border-bottom-color: #828282
}

.api #header_logo img {
    display: none
}

body.api header .header_links a {
    color: #e6e6e6
}

body.api header .header_links a.active {
    background: #545454
}

body.api .reverse_header {
    background-color: #000;
    color: #e6e6e6
}

body.api pre {
    overflow-x: auto
}

body.api pre code {
    color: #e6e6e6
}

body.api #page_contents .card {
    background: #363636
}

body.api .scopes_to_methods code {
    color: #e6e6e6
}

body.api .scopes_to_methods .selected code {
    color: #bf360c
}

body.api .scopes_to_methods li {
    color: #e6e6e6
}

body.api .scopes_to_methods .selected li {
    color: #e6e6e6
}

body.api .section_title {
    border-bottom: 2px solid #222
}

body.api .example {
    border: 1px solid #000
}

body.api .example h5 {
    background-color: #000;
    color: #e6e6e6
}

body.api .alert {
    background: #545454
}

body.api .hljs {
    background-image: none
}

body.api .hljs-keyword,
body.api .hljs-selector-tag,
body.api .hljs-subst {
    color: #ce93d8
}

body.api .hljs-number {
    color: #a5d6a7
}

body.api .hljs-literal,
body.api .hljs-tag .hljs-attr {
    color: #536dfe
}

body.api .hljs-variable {
    color: #9fa8da
}

body.api .hljs-template-variable {
    color: #c5e1a5
}

body.api .hljs-comment {
    color: #ffcc80
}

body.api .hljs-doctag,
body.api .hljs-string {
    color: #ef9a9a
}

body.api .hljs-section,
body.api .hljs-selector-id,
body.api .hljs-title {
    color: #ffab91
}

body.api .hljs-meta {
    color: #eee
}

body.api .hljs-class .hljs-title,
body.api .hljs-type {
    color: #eee
}

body.api .hljs-built_in,
body.api .hljs-builtin-name {
    color: #b39ddb
}

body.api .hljs-tag {
    color: #a5d6a7
}

body.api .hljs-attribute,
body.api .hljs-name {
    color: #40c4ff
}

body.api .hljs-bullet,
body.api .hljs-symbol {
    color: #9fa8da
}

body.api .hljs-quote {
    color: #b0bec5
}

body.api .hljs-link,
body.api .hljs-regexp {
    color: #949494
}

body.api span.btn {
    background-color: #222
}

body.api span.deprecation,
body.api span.warning {
    background-color: #bf360c;
    border-color: #bf360c
}

nav#api_nav {
    background: transparent;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25)
}

#api_nav .footer_nav a {
    color: #949494
}

#api_nav .footer_nav a:hover {
    color: #c7c7c7
}

#api_nav .footer_nav .footer_signature {
    color: #bf360c
}

.api_articles .api_articles_section {
    border-bottom-color: #222
}

.api_articles .article_tag_count {
    color: #949494
}

.api.feature_related_content #api_related_content h2 {
    color: #e6e6e6
}

.api.feature_related_content #api_related_content .article_link_title_wrapper {
    color: #949494
}

.tab_menu {
    background-color: #363636
}

.tab_menu.grey {
    background-color: #363636
}

.tab_menu .tab {
    color: #e6e6e6
}

.tab_menu .tab:hover {
    box-shadow: inset 0 -4px 0 0 rgba(191, 54, 12, 0.4)
}

.tab_menu .tab.active,
.tab_menu .tab:active,
.tab_menu .tab:focus {
    box-shadow: inset 0 -4px 0 0 #bf360c;
    color: #e6e6e6
}

.tab_menu .tab:disabled {
    color: #949494
}

.page_faq h3,
.page_scim h3 {
    background-color: #222
}

.application_config aside {
    color: #949494
}

.page_apps_directory_home {
    background-color: #222 !important
}

.page_apps_directory_home .nav_title {
    color: #e6e6e6 !important
}

.page_apps_directory_home__search .apps_search_input::placeholder,
.page_apps_directory_home__search .apps_search_input:focus::placeholder {
    color: #949494
}

.page_apps_directory_home__search .apps_search_input__body {
    box-shadow: 0 1px 10px #828282
}

.splash_container__background {
    background-color: #363636
}

.splash_container__background--center,
.splash_container__background--left,
.splash_container__background--right {
    display: none
}

.splash_interactive__button {
    border-color: #545454
}

.splash_interactive__button--active {
    box-shadow: 0 0 10px 1px #828282
}

.splash_interactive__window {
    background-color: #222;
    border-color: #545454
}

.splash_interactive__window:hover .splash_interactive__window_headline {
    color: #e6e6e6
}

.splash_interactive__window::after {
    background: linear-gradient(to bottom, rgba(34, 34, 34, 0) 0, #222 100%)
}

.splash_interactive__window_response {
    background-color: #fff
}

a.splash_interactive__window_link {
    color: #e6e6e6
}

.splash_interactive__window_message_content_text--drive {
    color: #949494
}

.search_input.apps_search_input {
    border-color: #828282
}

.menu_launcher,
.menu_launcher_large {
    background-color: #545454;
    border-color: #222 !important;
    color: #e6e6e6
}

.menu_launcher_large {
    border-color: #222
}

.menu.avatar_menu ul li:hover ts-icon {
    background: #545454;
    color: #e6e6e6
}

.menu.avatar_menu ul li a {
    color: #e6e6e6
}

.menu.avatar_menu ul li a img,
.menu.avatar_menu ul li a ts-icon {
    background-color: #545454;
    color: #949494
}

.menu.avatar_menu:not(.keyboard_active) ul li:hover:not(.disabled) a ts-icon {
    color: #e6e6e6
}

#page .media_list {
    background-color: #363636;
    border: 1px solid #545454
}

#page .media_list>li+li::before {
    border-top-color: #545454
}

#page .media_list>li.interactive a {
    color: #e6e6e6
}

#page .media_list>li.interactive a:focus,
#page .media_list>li.interactive a:hover {
    background: #545454;
    border-color: #828282
}

#page .media_list>li .media_list_text {
    color: #e6e6e6
}

#page .media_list.media_list_with_arrows a::before {
    color: #949494
}

#page .media_list_title {
    color: #e6e6e6
}

#page .media_list_subtitle {
    color: #949494
}

#page .sidebar_menu_list_item {
    color: #e6e6e6
}

#page .sidebar_menu_list_item.is_active {
    background-color: #222;
    border-color: #222;
    color: #e6e6e6;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15)
}

#page .sidebar_menu_list_item.is_active a {
    color: #e6e6e6
}

#page .sidebar_menu_list_item:not(.is_active):hover {
    background-color: #222;
    border-color: #222
}

#page .sidebar_menu_list_item a {
    color: #e6e6e6
}

#page ul.breadcrumbs li {
    color: #949494
}

#page ul.breadcrumbs li:not(:first-child)::before {
    color: #949494
}

#page ul.navigation_list li a {
    color: #e6e6e6
}

#page ul.navigation_list li a:hover {
    background-color: #545454
}

#page ul.navigation_list li a::after {
    color: #e6e6e6
}

#page ul.navigation_list li+li a {
    border-top: 1px solid transparent
}

#page .tag {
    background-color: #000;
    border: 1px solid #363636
}

#page .tag:hover {
    background-color: #545454 !important
}

#page .app_desc_btn {
    background-color: #545454;
    color: #e6e6e6
}

#page .app_desc_expand_showing .app_profile_desc_fade {
    background: linear-gradient(180deg, rgba(34, 34, 34, 0) 0, #222 100%)
}

#page .service_panel {
    background-color: #363636
}

#page .service_card {
    background-color: #222;
    border: 1px solid #424242
}

.app_card,
.large_app_card {
    background-color: #222;
    border: 1px solid #363636
}

nav.top.persistent ul a {
    color: #e6e6e6
}

nav.top.apps_nav {
    background: transparent
}

nav.top.apps_nav.persistent .nav_title {
    border-color: #828282
}

nav.top.apps_nav.clear_nav .nav_title a {
    color: #e6e6e6
}

nav.top.apps_nav .nav_title a {
    color: #e6e6e6
}

nav.top.apps_nav ul a.active {
    color: #c7c7c7
}

.plastic_typeahead {
    background: #363636;
    border: 1px solid #363636;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25)
}

.plastic_typeahead_item {
    color: #e6e6e6
}

.plastic_typeahead_item+.plastic_typeahead_item {
    border-top: 1px solid #545454
}

.plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active {
    background-color: #222;
    border-top-color: #363636;
    color: #e6e6e6
}

.plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active ts-icon {
    color: #949494
}

.plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover {
    background: #000;
    border-color: #545454
}

.plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover+.plastic_typeahead_item {
    border-color: #545454
}

a.plastic_typeahead_item {
    color: #e6e6e6
}

.apps_typeahead_item_media {
    background: #000
}

.search_input_container .search_input:focus~.icon_search_input {
    color: #e6e6e6
}

.icon_search_input {
    color: #949494
}

.quote_block {
    color: #e6e6e6
}

.quote_block::before {
    background-color: #545454
}

.well {
    background: #000;
    border-color: black;
    color: #e6e6e6;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5)
}

.service_breadcrumbs li .ts_icon,
.service_breadcrumbs li span {
    color: #949494
}

.c-tabs__tab_menu {
    background-color: transparent;
    box-shadow: inset 0 -2px 0 0 #545454
}

.c-tabs__tab {
    color: #949494
}

.c-tabs__tab:hover {
    color: #e6e6e6
}

.c-tabs__tab.c-tabs__tab--active,
.c-tabs__tab:active,
.c-tabs__tab:focus {
    box-shadow: inset 0 -2px 0 0 #828282;
    color: #e6e6e6
}

.c-tabs__tab_menu--plastic {
    background-color: transparent;
    box-shadow: inset 0 -2px 0 0 #545454
}

a.c-tabs__tab--plastic {
    color: #949494
}

a.c-tabs__tab--plastic:hover {
    color: #e6e6e6
}

a.c-tabs__tab--plastic.c-tabs__tab--active,
a.c-tabs__tab--plastic:active,
a.c-tabs__tab--plastic:focus {
    box-shadow: inset 0 -2px 0 0 #828282;
    color: #e6e6e6
}

.p-detail_scope {
    box-shadow: inset 0 1px 0 0 #545454
}

.p-detail_scope:last-child {
    border-bottom-color: #545454
}

.p-detail_dangerous_scope {
    border-left-color: #bf360c;
    border-right-color: #545454
}

.p-detail_arrow_icon {
    color: #949494
}

.p-detail_arrow_icon:hover {
    color: #e6e6e6
}

.p-detail_permissions {
    background: #363636;
    border-color: #545454
}

table.gray_header_border tr:first-child th:not(:only-of-type) {
    border-bottom-color: #545454
}

.section_rollup {
    border-bottom-color: #222
}

.section_rollup:first-of-type {
    border-top-color: #222
}

.section_rollup:hover:not(.is_active) {
    background: rgba(34, 34, 34, 0.5);
    color: #e6e6e6
}

.is_completed_section .section_rollup_header::before,
.is_failed_section .section_rollup_header::before {
    background-color: #0cbf72;
    color: #000
}

.developer_apps_functionality_link:hover {
    border-color: #545454;
    box-shadow: 0 0 6px 0 rgba(130, 130, 130, 0.25)
}

.developer_apps_functionality_link::before {
    background-color: #545454
}

.developer_apps_functionality_link_enabled::before {
    background-color: #0cbf72
}

.legal-hero {
    background-color: #222
}

.legal-hero .o-hero__header,
.legal-hero.v--no-switch {
    background-color: #222
}

.legal-hero .o-hero__header__headline--larger {
    color: #e6e6e6
}

.legal-main {
    background-color: #363636
}

.legal-main.v--no-switch {
    background-color: #363636;
    border-bottom-color: #545454;
    border-top-color: #545454
}

.legal-main p {
    color: #e6e6e6
}

.legal-main a {
    border-bottom-color: #545454
}

@media screen and (min-width: 67.8125rem) {
    .legal-main .c-nav--sidebar__listheader {
        color: #e6e6e6
    }

    .legal-main .c-nav--sidebar__listitem a.is-selected {
        color: #949494
    }
}

.legal-main .t-contains-subtle-links a:not(.c-button) {
    color: #e6e6e6
}

.legal-main .t-contains-subtle-links a:not(.c-button):active,
.legal-main .t-contains-subtle-links a:not(.c-button):focus,
.legal-main .t-contains-subtle-links a:not(.c-button):hover {
    color: #949494
}

@media screen and (min-width: 67.8125rem) {
    .t-no-header .legal-main {
        background-color: #363636
    }
}

.t-no-header .legal-hero.o-hero.v--short {
    background-color: #363636
}

.c-oauth_scope_info__spacer_icon {
    color: #bf360c
}

.c-oauth_scope_info__dangerous_scopes,
.c-oauth_scope_info__safe_scopes {
    border-bottom-color: #545454
}

.c-oauth_scope_info__dangerous_scopes {
    border-left-color: #bf360c;
    border-right-color: #545454;
    border-top-color: #545454
}

.c-oauth_scope_info__dangerous_scope:not(:first-child),
.c-oauth_scope_info__safe_scope {
    border-top-color: #545454
}

a.p-oauth_nav__anchor {
    color: #949494
}

.p-oauth_nav__team-switcher .menu_launcher {
    border-color: #363636
}

.p-oauth_nav__team-switcher .menu_launcher:hover {
    border: #545454
}

.p-oauth_page,
.p-oauth_page--error {
    background: #222
}

.p-oauth_page__title {
    color: #e6e6e6
}

.p-oauth_page_single_channel_picker {
    border-bottom-color: #363636
}

ts-rocket {
    color: #e6e6e6
}

ts-rocket a {
    color: #949494
}

ts-rocket a caret::before {
    background-color: #363636;
    border-color: #363636
}

ts-rocket hr {
    border-color: #363636
}

ts-rocket .pre.text,
ts-rocket>div>pre,
ts-rocket code {
    background-color: #000
}

ts-rocket .blockquote.text::before,
ts-rocket>div>blockquote::before {
    background-color: #000
}

ts-rocket .cl.text {
    background-color: #000;
    border-bottom: 1px solid #363636
}

ts-rocket .cl.text .checkbox.checked+li {
    color: #949494
}

ts-rocket>div>.checklist {
    background-color: #000;
    border-bottom: 1px solid #363636
}

ts-rocket>div>.checklist .checkbox.checked+li {
    color: #949494
}

ts-rocket>div>.checklist li::before {
    background: #363636
}

ts-rocket>div>.checklist li.checked {
    color: #949494
}

ts-rocket .unfurl .unfurl-container {
    background-color: #000
}

ts-rocket .unfurl .unfurl-container.unfurl-render-failed {
    background-color: rgba(191, 54, 12, 0.1)
}

ts-rocket .unfurl .attachment_bar {
    background-color: #363636 !important
}

ts-rocket .unfurl .unfurl-remove::before {
    color: #949494
}

ts-rocket .unfurl .unfurl-remove:hover::before {
    color: #e6e6e6
}

ts-rocket .unfurl.selected .unfurl-container {
    background-color: rgba(130, 130, 130, 0.5)
}

ts-rocket .unfurl.selected .unfurl-container .attachment_bar {
    background-color: rgba(130, 130, 130, 0.5) !important
}

ts-rocket caret::before {
    background-color: #363636;
    border: 1px solid #363636
}

ts-rocket carriage {
    background-color: rgba(130, 130, 130, 0.5)
}

ts-rocket selection {
    background-color: rgba(130, 130, 130, 0.5)
}

ts-rocket selection::after,
ts-rocket selection::before {
    background-color: rgba(130, 130, 130, 0.5)
}

ts-rocket ime {
    background-color: rgba(130, 130, 130, 0.5)
}

ts-rocket .hr.selected hr {
    box-shadow: 0 0 0 5px rgba(130, 130, 130, 0.5)
}

.focusing_input_field space.inactive .unfurl.selected .unfurl-container {
    background-color: #000
}

nav {
    background: #363636
}

nav .space {
    background-color: #363636;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25), 0 2px rgba(0, 0, 0, 0.15), 0 3px rgba(0, 0, 0, 0.15)
}

nav .space::after {
    border-left: 1px solid #545454
}

nav .comments {
    background-color: #363636
}

nav .space_buttons .btn_outline {
    background-color: #424242
}

nav .space_buttons .btn_outline::after {
    border-color: #545454
}

nav .space_btn_star {
    background: none;
    border: 0
}

nav .space_btn_star:hover {
    background: none !important
}

nav .space_btn_edit {
    background: #545454
}

nav .space_btn_edit.editing {
    background: #828282
}

nav .star_info {
    color: #949494
}

nav #space_status {
    border-left: 1px solid #545454;
    color: #949494
}

nav #space_status.slightly_concerned {
    color: #bf360c
}

nav #edit_status {
    color: #949494
}

nav .comments_open.unread span.notif {
    background-color: #bf360c;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15)
}

nav .comments_close {
    color: #949494
}

nav .comments_close:hover::before {
    color: #949494 !important
}

ts-space header {
    background: transparent
}

ts-space header .owner_detail .file_title_header,
ts-space header .owner_detail .inline-edit {
    color: #e6e6e6
}

ts-space header .owner_detail .inline-edit {
    background: none
}

ts-space header .owner_detail .inline-edit::-webkit-input-placeholder {
    color: #e6e6e6
}

ts-space header .owner_detail .inline-edit::-moz-placeholder {
    color: #e6e6e6
}

ts-space header .owner_detail .inline-edit:focus::-webkit-input-placeholder {
    color: #949494
}

ts-space header .owner_detail .inline-edit:focus::-moz-placeholder {
    color: #949494
}

ts-space header .owner_detail ::-moz-selection,
ts-space header .owner_detail::selection {
    background-color: rgba(130, 130, 130, 0.5)
}

ts-space header .owner_detail small {
    color: #949494
}

ts-space header .divider {
    border-top: 1px solid #545454
}

ts-space a.feedback {
    color: #e6e6e6;
    text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000
}

ts-space a.feedback:hover {
    background-color: #363636;
    color: #e6e6e6
}

comments {
    box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25)
}

#space_alert {
    background-color: #000;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25)
}

#space_alert.error {
    background-color: #bf360c
}

#space_alert span#space_alert_text {
    color: #e6e6e6
}

#space_alert a {
    color: #949494
}

#space_alert button#space_alert_close::before {
    color: #949494
}

#space_alert button#space_alert_close:hover::before {
    color: #949494
}

#space_alert .btn_outline.btn_transparent {
    background-color: #424242 !important;
    color: #e6e6e6 !important
}

#space_alert .btn_outline.btn_transparent::after {
    border-color: #545454
}

#space_find_bar {
    background-color: #363636;
    border-bottom: 1px solid rgba(130, 130, 130, 0.1);
    border-left: 1px solid rgba(130, 130, 130, 0.07);
    border-right: 1px solid rgba(130, 130, 130, 0.07);
    box-shadow: 0 1px rgba(0, 0, 0, 0.15)
}

#space_find_bar #space_find_info.no_matches {
    color: #bf360c
}

#space_find_bar #space_find_next .ts_icon {
    background-color: #545454
}

#space_find_bar #space_find_next .ts_icon::before,
#space_find_bar #space_find_next .ts_icon:hover::before {
    color: #e6e6e6
}

#space_find_bar #space_find_next:hover .ts_icon {
    background-color: #828282
}

#space_find_bar #space_find_close::before {
    color: #949494
}

#space_find_bar #space_find_close:hover::before {
    color: #949494
}

#connected_members .connected_members_count {
    color: #e6e6e6;
    text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000
}

#connected_members .toggle_more_members_popover {
    background: #222;
    color: #949494
}

#connected_members_overflow_popover {
    border-bottom: 1px solid #363636;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    border-right: 1px solid rgba(0, 0, 0, 0.11);
    border-top: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5)
}

#connected_members_overflow_popover .arrow::after {
    background-color: #363636
}

#connected_members_overflow_popover .arrow_shadow::after {
    background-color: #363636;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5)
}

#connected_members_overflow_popover .monkey_scroll_wrapper {
    background: #363636
}

#connection_status #connection_label {
    color: #e6e6e6;
    text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000
}

#shortcuts_spaces_dialog {
    background-color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 1px rgba(54, 54, 54, 0.7)
}

#shortcuts_spaces_dialog .modal-body {
    color: #e6e6e6
}

#shortcuts_spaces_dialog .col .keyboard {
    background-color: #828282;
    border-bottom: 2px solid #424242;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    color: #e6e6e6
}

#shortcuts_spaces_dialog .close:hover {
    background-color: #828282
}

#shortcuts_spaces_dialog .close .ts_icon::before {
    color: #949494 !important
}

.textstyle_menu .arrow-shadow::after {
    background-color: #363636;
    box-shadow: 0 0 0 1px #363636
}

.textstyle_menu .arrow::after {
    background-color: #363636
}

.textstyle_menu .content {
    background-color: #363636;
    box-shadow: 0 0 0 1px #363636, 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25)
}

.textstyle_menu.link .arrow-shadow::after {
    background-color: #363636
}

.textstyle_menu.link .arrow::after {
    background-color: #363636
}

.textstyle_menu.link .content {
    background-color: #363636;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25)
}

.textstyle_menu.link .content input[type=text] {
    background-color: #545454
}

.textstyle_menu.link .content>a.link {
    color: #949494
}

.textstyle_menu.link .content ::-moz-placeholder,
.textstyle_menu.link .content::-webkit-input-placeholder {
    color: #949494
}

.textstyle_menu.link .content .buttons a.item.active,
.textstyle_menu.link .content .buttons a.item:hover {
    background-color: #363636
}

.textstyle_menu .buttons a:hover,
.textstyle_menu.style a:hover {
    border: 1px solid #545454
}

.textstyle_menu .buttons a.active,
.textstyle_menu.style a.active {
    background-color: #545454;
    border: 1px solid #828282
}

.textstyle_menu.style a.deformat::before {
    border-left: 1px solid #545454
}

.textstyle_menu .buttons a.link_unfurl:not(.unfurl_pending) span::before {
    color: #949494
}

.para_menu .insert .tip {
    color: #949494
}

.para_menu .insert .tooltip .arrow-shadow::after {
    background-color: #363636;
    box-shadow: 0 0 0 1px #545454
}

.para_menu .insert .tooltip .arrow::after {
    background-color: #363636
}

.para_menu .insert .tooltip .content {
    background-color: #363636;
    box-shadow: 0 0 0 1px #545454, 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25)
}

.para_menu .format .options .arrow-shadow::after {
    background-color: #363636;
    box-shadow: 0 0 0 1px #545454
}

.para_menu .format .options .arrow::after {
    background-color: #363636
}

.para_menu .format .options .arrow-shadow.bottom::after {
    box-shadow: 1px 1px 0 0 #545454
}

.para_menu .format .options .content {
    background-color: #363636;
    box-shadow: 0 0 0 1px #545454, 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25)
}

.para_menu .format .options .content ul:first-child {
    border-bottom: 1px solid #363636
}

.para_menu .format .options.show .tooltip>div {
    background-color: #363636;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
    color: #e6e6e6
}

.para_menu .format .options.show .tooltip span {
    background-color: #545454
}

.para_menu .options a:hover {
    border: 1px solid #545454
}

.para_menu .options a.active {
    background-color: #424242;
    border: 1px solid #363636
}

.para_menu .options a.active span {
    filter: grayscale(2) brightness(2)
}

.para_menu .options a span {
    filter: grayscale(2) brightness(5)
}

.para_menu a.trigger.pilcrow {
    filter: grayscale(2) brightness(1.8)
}

.para_menu a.trigger.pilcrow.active,
.para_menu a.trigger.pilcrow:hover {
    filter: grayscale(2) brightness(2)
}

#channel_topic_text,
#footer,
.channel_header,
.channel_title_info,
body {
    background: rgb(0, 43, 54)
}

.c-message__body {
    color: rgb(153, 174, 177)
}

#team_menu,
.p-channel_sidebar {
    background: #023f4e !important
}

.c-presence--active {
    color: rgb(177, 202, 17) !important
}

.c-message_list__day_divider__label__pill,
.p-channel_sidebar__link--selected,
.p-message_pane .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider:before,
nav.p-channel_sidebar .p-channel_sidebar__channel--selected {
    color: #eee !important;
    background: rgb(27, 139, 210) !important
}

.c-message_list__day_divider__line {
    border-top-color: rgb(27, 139, 210) !important
}

#msg_input,
#primary_file_button {
    background: rgb(2, 55, 68) !important
}

#msg_form #msg_input {
    border-color: transparent
}

.menu ul li a:not(.inline_menu_link),
.c-menu_item__header {
    color: #fff !important
}
`;$("<style></style>").appendTo("head").html(tt__customCss);});
