pkgname=('starlabstheme-backgrounds-git' 
	'starlabstheme-extensions-git' 
	'starlabstheme-font-git' 
	'starlabstheme-gnome-shell-git' 
	'starlabstheme-grub-git' 
	'starlabstheme-gtk-git' 
	'starlabstheme-icons-git' 
	'starlabstheme-plymouth-git' 
	'starlabstheme-session-git' 
	'starlabstheme-sounds-git')
pkgbase=starlabstheme-git
pkgver=r314.b4d7cbd
pkgrel=1
pkgdesc="Star Labs GNOME Shell and GTK Theme"
arch=('any')
url="https://github.com/StarLabsLtd/StarLabsTheme"
license=('GPL')
makedepends=('git' 'meson' 'sassc')
provides=("${pkgbase%-git}")
conflicts=("${pkgbase%-git}")
source=('git+https://github.com/StarLabsLtd/StarLabsTheme.git')
sha256sums=('SKIP')

pkgver() {
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd StarLabsTheme
	git submodule init
	git pull --recurse-submodules
}

build() {
	cd StarLabsTheme
	
	echo '  _____ _             _           _'
	echo ' /  ___| |           | |         | |'
	echo ' \ `--.| |_ __ _ _ __| |     __ _| |__  ___'
	echo '  `--. \ __/ _` | '"'"'__| |    / _` | '"'"'_ \/ __|'
	echo ' /\__/ / || (_| | |  | |___| (_| | |_) \__ \'
	echo ' \____/ \__\__,_|_|  \_____/\__,_|_.__/|___/'
	echo
	echo '************** Star Labs Theme *************'
	
	meson build
	ninja -C build
}

package_starlabstheme-backgrounds-git() {
	pkgdesc="Star Labs Desktop Wallpapers"
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")
	
	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{gnome-shell,glib-2.0,fonts,icons,plymouth,sounds,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}
}

package_starlabstheme-extensions-git() {
	pkgdesc="Star Labs GNOME extensions"
	depends=('dconf')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell/extensions/ubuntu-dock@ubuntu.com,gnome-shell/theme,gnome-shell/modes,fonts,icons,plymouth,sounds,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}
	rm -f "$pkgdir/"usr/share/glib-2.0/schemas/99_StarLabs.gschema.override
}

package_starlabstheme-font-git() {
	pkgdesc="Star Labs Font"
	depends=('fontconfig')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell,glib-2.0,icons,plymouth,sounds,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}	
}

package_starlabstheme-gnome-shell-git() {
	pkgdesc="Star Labs GNOME Shell Theme"
	depends=('gnome-shell' 'starlabstheme-session')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell/extensions,gnome-shell/modes,glib-2.0,fonts,icons,plymouth,sounds,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}
}

package_starlabstheme-grub-git() {
	pkgdesc="Star Labs GRUB Theme"
	depends=('grub')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr
}

package_starlabstheme-gtk-git() {
	pkgdesc="Star Labs GTK Theme"
	depends=('gtk3')
	optdepends=('starlabstheme-font' 'starlabstheme-icons' 'starlabstheme-sounds')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell,glib-2.0,fonts,icons,plymouth,sounds,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}
}

package_starlabstheme-icons-git() {
	pkgdesc="Star Labs Icon Set & Cursor Theme"
	depends=('gtk-update-icon-cache' 'hicolor-icon-theme')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell,glib-2.0,fonts,plymouth,sounds,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}	
}

package_starlabstheme-plymouth-git() {
	pkgdesc="Star Labs Plymouth Theme"
	depends=('plymouth')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell,glib-2.0,fonts,icons,sounds,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}	
}

package_starlabstheme-session-git() {
	pkgdesc="Star Labs Session"
	depends=('dconf' 'starlabstheme-backgrounds' 'starlabstheme-gnome-shell' 'starlabstheme-gtk' 'starlabstheme-icons' 'starlabtheme-sounds')
	optdepends=('starlabstheme-extensions' 'gnome-shell-extension-appindicator' 'gnome-shell-extension-desktop-icons' 'gnome-shell-extension-dash-to-dock' 'starlabstheme-font')
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")
	
	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	# Comment out Ubuntu-specific dconf entry
	sed -i '26,27 s/^/#/' "$pkgdir/"usr/share/glib-2.0/schemas/99_StarLabs.gschema.override
	
	# Replace Ubuntu Dock with Dash to Dock
	install -d $pkgdir/usr/gnome-shell/extensions/dash-to-dock@micxgx.gmail.com
	cp $pkgdir/usr/share/gnome-shell/extensions/ubuntu-dock@ubuntu.com/starlabs.css $pkgdir/usr/gnome-shell/extensions/dash-to-dock@micxgx.gmail.com/
	sed -i 's/ubuntu-dock@ubuntu.com/dash-to-dock@micxgx.gmail.com/g' "$pkgdir/"usr/share/gnome-shell/modes/starlabs.json
	
	# Replace Ubuntu Appindicators with AppIndicator Support
	sed -i 's/ubuntu-appindicators@ubuntu.com/appindicatorsupport@rgcjonas.gmail.com/g' "$pkgdir/"usr/share/gnome-shell/modes/starlabs.json
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell/extensions/ubuntu-dock@ubuntu.com,gnome-shell/extensions/lockkeys@vaina.lt,gnome-shell/theme,fonts,icons,plymouth,sounds,themes}
	rm -r "$pkgdir/"{boot,etc}
	rm -f "$pkgdir/"usr/share/glib-2.0/schemas/org.gnome.shell.extensions.lockkeys.gschema.xml
}

package_starlabstheme-sounds-git() {
	pkgdesc="Star Labs Sound Theme"
	provides=("${pkgname%-git}")
	conflicts=("${pkgname%-git}")

	cd StarLabsTheme
	DESTDIR="$pkgdir" ninja -C build install
	
	rm -r "$pkgdir/"usr/share/{backgrounds,gnome-background-properties,gnome-shell,glib-2.0,fonts,icons,plymouth,themes,wayland-sessions,xsessions}
	rm -r "$pkgdir/"{boot,etc}
}
