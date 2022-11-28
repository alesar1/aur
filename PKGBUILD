# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Maz <m47h4r at gmail dot com>

pkgname=nekoray
pkgver=2.6
pkgrel=1
epoch=
pkgdesc="Qt based cross-platform GUI proxy configuration manager (backend: v2ray / sing-box)"
arch=('x86_64')
url="https://github.com/MatsuriDayo/nekoray"
license=('GPL 3.0')
groups=()
depends=('qt5-base>=5.15' 'qt5-svg' 'qt5-tools' 'qt5-x11extras')
makedepends=('unzip')
provides=('nekoray')
conflicts=('nekoray')
noextract=("${pkgname}-${pkgver}.zip")
source=(
	"${pkgname}-${pkgver}.zip::${url}/releases/download/${pkgver}/nekoray-${pkgver}-2022-11-27-linux64.zip"
	"nekoray.desktop"
	"launcher-script"
)
sha256sums=(
	'1540a5b8f0258ec67434ca918ba9b0f606603f59a9e7915f5b330fe4fb2c6e68'
	'dd7083c3992d35ad51beb73bfb3ef42f82ebee6c3ab9a25e9dfe8c6bd95096ce'
	'13986ecce89ddaac4b25fc5e78e1208e2f69bfd3fb86acf2308f218c06e6f5ad'
)

package() {
	cd $srcdir
	unzip "${pkgname}-${pkgver}.zip"
	chown -R "$USER":"$USER" "nekoray"
	install -dm700 "${pkgdir}${HOME}"
	install -dm700 "${pkgdir}${HOME}/.local"
	install -dm755 "${pkgdir}${HOME}/.local/opt"
	cp -p -r "nekoray" "${pkgdir}${HOME}/.local/opt"
	# Launcher script
	install -dm755 "${pkgdir}/usr/bin"
	cp -p "launcher-script" "${pkgdir}/usr/bin/nekoray"
	# Desktop file
	install -dm700 "${pkgdir}${HOME}/.local/share"
	install -dm755 "${pkgdir}${HOME}/.local/share/applications"
	sed "s,~,$HOME," "nekoray.desktop" > \
		"${pkgdir}${HOME}/.local/share/applications/nekoray.desktop"
	# Icon
	install -d -m755 "${pkgdir}/usr/share/icons/hicolor/128x128/apps"
	ln -s "${HOME}/.local/opt/nekoray/nekoray.png" \
		"${pkgdir}/usr/share/icons/hicolor/128x128/apps/nekoray.png"
}
