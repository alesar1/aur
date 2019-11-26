# Maintainer: Whezzel <whezzel at gmail dot com>
# Contributor: Karel Louwagie <karel at louwagie dot net>
# Contributor: Samuel Walladge <samuel at swalladge dot id dot au>
# Contributor: Yurii Kolesnykov <root at yurikoles dot com>

pkgname=toggldesktop-bin
_pkgname=toggldesktop
pkgver=7.4.528
pkgrel=5
pkgdesc="Time Tracking Software."
arch=('x86_64')
provides=('toggldesktop')
conflicts=('toggldesktop')

depends=('libxss'
	 'openssl'
	 'qt5-base'
	 'qt5-declarative'
	 'qt5-location'
	 'qt5-sensors'
	 'qt5-svg'
	 'qt5-webchannel'
	 'qt5-webengine'
	 'qt5-webkit'
	 'qt5-x11extras')
url='https://toggl.com/'
source=("toggldesktop.deb::https://github.com/toggl-open-source/toggldesktop/releases/download/v${pkgver}/toggldesktop_${pkgver}_amd64.deb"
	'toggldesktop.bin'
	'toggldesktop.desktop')

sha512sums=('d15b3801cd7eae8af245b2b57f42d510fe4b0e0a8e9c3f7a2e67fc253e3bbc04c86a56e955e0addb398447d4f08035f1cdfbf239849341a8ce7bae1ed368ebef'
            'f14c5734925424cd1f415094733233f28d26f893513d6a059a1b4f254b058b3113e2ee5d0aa7ab1b88ecad10e7f6bb171fd1eaf94529f0c0feb43a4565d389b6'
            'b75b3aef72bb978b721dbc0376556247fbbeffd34aef42bb9304116b3d9bfa7dccff57eed35fb43f76285102c4abf663ebd6ff4bc2c02bc6f674069943b1600f')
prepare() {
  tar -xf data.tar.xz
}

package() {
  cp -a "$srcdir/usr" "$pkgdir"
  install -D -m 0755 toggldesktop.bin "$pkgdir/usr/bin/toggldesktop"
  install -D -m 0755 toggldesktop.desktop "$pkgdir/usr/share/applications/com.toggl.TogglDesktop.desktop"
}
