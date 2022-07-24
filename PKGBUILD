# Maintainer: Maik93 <michael.mugnai@gmail.com>
# Contributor: AUTplayed <fips.hem@gmail.com>
# Contributor: pavanjadhaw <pavanjadhaw96@gmail.com>

_pkgname=betterlockscreen
pkgname=${_pkgname}-git
provides=("betterlockscreen")
conflicts=("betterlockscreen")
pkgver=v4.0.4.r0.ge6c5530
pkgrel=2
pkgdesc="A simple lock script for i3lock-color"
arch=('any')
url="https://github.com/betterlockscreen/betterlockscreen"
_git_branch="main"
license=('MIT')
makedepends=('git')
depends=('i3lock-color>=2.13.c.3-1' 'imagemagick' 'xorg-xrandr' 'xorg-xdpyinfo' 'bc')
optdepends=('feh: Allows setting wallpaper')
source=("${_pkgname}::git+${url}.git#branch=$_git_branch")
md5sums=('SKIP')

pkgver() {
	cd "$_pkgname"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
	# install executable
	_srcdir="$srcdir/$_pkgname"
	install -Dm 755 "$_srcdir/$_pkgname" "$pkgdir/usr/bin/$_pkgname"

	# install systemd user service
	_serviceloc="$pkgdir/usr/lib/systemd/system"
	_servicename="$_pkgname@.service"
    sed -i 's,usr/local,usr,' "$_srcdir/system/$_servicename"
#    sed -i '/^User/d' "$_srcdir/system/$_servicename"
	install -Dm 644 "$_srcdir/system/$_servicename" "$_serviceloc/$_servicename"

	# add config example and LICENCE files
	install -Dm 644 "$_srcdir/examples/${_pkgname}rc" "$pkgdir/usr/share/doc/$_pkgname/examples/${_pkgname}rc"
	install -Dm 644 "$_srcdir/LICENSE" "$pkgdir/usr/share/licenses/$_pkgname"
}
