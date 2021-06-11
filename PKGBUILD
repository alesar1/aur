# This is just the package from the linuxmint repositories modified to work with wayland
# Maintainer: Maël <alemswaj+tutanota+com>

pkgname=hypnotix-wayland
pkgver=1.8
pkgrel=1
pkgdesc="An IPTV streaming application. (With Wayland support). It's the package from the linux mint's github modified to work with wayland as it's whrote on the hypnotix's github repository. IT WORK GREAT EVEN IF YOU USE X11"
arch=(any)
url="https://github.com/linuxmint/hypnotix"
license=(GPL3)
depends=(dconf hicolor-icon-theme python-cairo python-imdbpy python-requests python-setproctitle mpv xapp)
conflicts=(hypnotix hypnotix-git)
source=(https://codeload.github.com/linuxmint/hypnotix/tar.gz/refs/tags/${pkgver})
sha256sums=('9a552d6dd1b27f2203e5e6d54578c444bda98ef58d036cbb2016a1672ec059a0')
prepare() {
	cd hypnotix-$pkgver
	sed -i "s/__DEB_VERSION__/$pkgver/g" usr/lib/hypnotix/hypnotix.py
}

build() {
	cd hypnotix-$pkgver
	sed -i '2d' usr/bin/hypnotix
	sh -c "echo 'if [ \$WAYLAND_DISPLAY=wayland-0 ]
then
GDK_BACKEND=x11 /usr/lib/hypnotix/hypnotix.py &
else
/usr/lib/hypnotix/hypnotix.py &
fi'" >> usr/bin/hypnotix 
	sed -i '1245a \        options["vo"] = "x11"' usr/lib/hypnotix/hypnotix.py
}

package() {
	cd hypnotix-$pkgver
	cp -a usr/ "$pkgdir"/usr/
}

