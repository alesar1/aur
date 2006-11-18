/* (C)opyright MMVI Anselm R. Garbe <garbeam at gmail dot com>
 * See LICENSE file for license details.
 */

#define TAGS \
const char *tags[] = { "dev", "work", "net", "fnord", NULL };

#define DEFMODE			dotile		/* dofloat */
#define FLOATSYMBOL		"><>"
#define TILESYMBOL		"[]="

#define FONT			"-*-terminus-medium-*-*-*-14-*-*-*-*-*-*-*"
#define NORMBGCOLOR		"#555753"
#define NORMFGCOLOR		"#ffffff"
#define SELBGCOLOR		"#888a85"
#define SELFGCOLOR		"#ffffff"
#define STATUSBGCOLOR		"#2e3436"
#define STATUSFGCOLOR		"#ffffff"

#define MASTER			600 /* per thousand */
#define MODKEY			Mod1Mask
#define SNAP			40 /* pixel */

#define KEYS \
static Key key[] = { \
	/* modifier			key		function	arguments */ \
	{ MODKEY|ShiftMask,		XK_Return,	spawn, \
		{ .cmd = "exec urxvtc -tr -bg black -fg '#eeeeee' -cr '#eeeeee' +sb -fn '"FONT"'" } }, \
	{ MODKEY,			XK_p,		spawn, \
		{ .cmd = "exe=\"$(lsx `echo $PATH | sed 's/:/ /g'` | sort -u " \
			" | dmenu -font '"FONT"' -normbg '"NORMBGCOLOR"' -normfg '"NORMFGCOLOR"' " \
			"-selbg '"SELBGCOLOR"' -selfg '"SELFGCOLOR"')\" && exec $exe" } }, \
	{ MODKEY,			XK_j,		focusnext,	{ 0 } }, \
	{ MODKEY,			XK_k,		focusprev,	{ 0 } }, \
	{ MODKEY,			XK_Return,	zoom,		{ 0 } }, \
	{ MODKEY,			XK_g,		resizemaster,	{ .i = 15 } }, \
	{ MODKEY,			XK_s,		resizemaster,	{ .i = -15 } }, \
	{ MODKEY|ShiftMask,		XK_1,		tag,		{ .i = 0 } }, \
	{ MODKEY|ShiftMask,		XK_2,		tag,		{ .i = 1 } }, \
	{ MODKEY|ShiftMask,		XK_3,		tag,		{ .i = 2 } }, \
	{ MODKEY|ShiftMask,		XK_4,		tag,		{ .i = 3 } }, \
	{ MODKEY|ControlMask|ShiftMask,	XK_1,		toggletag,	{ .i = 0 } }, \
	{ MODKEY|ControlMask|ShiftMask,	XK_2,		toggletag,	{ .i = 1 } }, \
	{ MODKEY|ControlMask|ShiftMask,	XK_3,		toggletag,	{ .i = 2 } }, \
	{ MODKEY|ControlMask|ShiftMask,	XK_4,		toggletag,	{ .i = 3 } }, \
	{ MODKEY|ShiftMask,		XK_c,		killclient,	{ 0 } }, \
	{ MODKEY,			XK_space,	togglemode,	{ 0 } }, \
	{ MODKEY,			XK_0,		viewall,	{ 0 } }, \
	{ MODKEY,			XK_1,		view,		{ .i = 0 } }, \
	{ MODKEY,			XK_2,		view,		{ .i = 1 } }, \
	{ MODKEY,			XK_3,		view,		{ .i = 2 } }, \
	{ MODKEY,			XK_4,		view,		{ .i = 3 } }, \
	{ MODKEY|ControlMask,		XK_1,		toggleview,	{ .i = 0 } }, \
	{ MODKEY|ControlMask,		XK_2,		toggleview,	{ .i = 1 } }, \
	{ MODKEY|ControlMask,		XK_3,		toggleview,	{ .i = 2 } }, \
	{ MODKEY|ControlMask,		XK_4,		toggleview,	{ .i = 3 } }, \
	{ MODKEY|ShiftMask,		XK_q,		quit,		{ 0 } }, \
};

#define RULES \
static Rule rule[] = { \
	/* class:instance:title regex	tags regex	isfloat */ \
	{ "Firefox.*",			"net",		False }, \
	{ "Gimp.*",			NULL,		True }, \
	{ "MPlayer.*",			NULL,		True }, \
	{ "Acroread.*",			NULL,		True }, \
};
