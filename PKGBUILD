# Maintainer: Simon Kronberg <Simon.Kronberg@gmail.com>
pkgname=waterfox-current-bin
pkgver=2020.01.1
pkgrel=1
pkgdesc="64-bit Firefox fork; no telemetry; supports XUL & XPCOM (incl. unsigned) add-ons."
arch=('x86_64')
url="https://www.waterfoxproject.org/"
license=('MPL')
depends=('libxt' 'libnotify' 'mime-types' 'nss' 'gtk2' 'gtk3' 'sqlite' 'dbus-glib')
optdepends=('alsa-lib' 'pulseaudio')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=('waterfox-current.desktop' 'https://storage-waterfox.netdna-ssl.com/releases/linux64/installer/waterfox-current-'"${pkgver}"'.en-US.linux-x86_64.tar.bz2')

package() {
	# Create the necessary directories.
	install -d "${pkgdir}"/{usr/{bin,share/{applications,pixmaps}},opt}

	# Move the .desktop file and the icon.
	install -m644 "${srcdir}"/waterfox-current.desktop "${pkgdir}"/usr/share/applications/
	install -m644 "${srcdir}"/waterfox/browser/chrome/icons/default/default128.png "${pkgdir}"/usr/share/pixmaps/waterfox-current-icon.png

	# Copy the extracted directory to /opt/.
	cp -r waterfox "${pkgdir}"/opt/waterfox-current

	# Symlink the binary to /usr/bin/.
	ln -s /opt/waterfox-current/waterfox "${pkgdir}"/usr/bin/waterfox-current
}

sha256sums=('4935fc30e327cbb665b6a98ed21a3f0d27b5a1407bbb9988bb7b607a85e0065d'
            '53ad9853f403887cb7d7bd051e008b2beebbf45fdc84f0fd24ad4b7024629f82')
