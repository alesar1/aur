# Maintainer: Sonic-Y3k <sonic.y3k@googlemail.com>
# Based on package by: Denis Saintilma <1068des@gmail.com>
pkgname=plexpy
pkgver=1.3.9
pkgrel=1
pkgdesc="A Python based monitoring and tracking tool for Plex Media Server."
arch=('any')
url="https://github.com/drzoidberg33/plexpy"
license=('GPL')
depends=('python2')
conflicts=('plexpy-git')
provides=("plexpy")
install='plexpy.install'
source=("$pkgname-$pkgver.tar.gz::https://github.com/drzoidberg33/plexpy/archive/v$pkgver.tar.gz" 'plexpy.service' 'plexpy.install' 'welcome.html.patch')
sha256sums=('30c2285ab8ee59ed393d2ce607113513b3db89809fff82172e6d91432e4c29bb'
         '58300f84762f1362ae4d81aab9bbdf48425735b886807fea847ec256082524a0'
         '447c8e08beca653775a7a5d8743c395e058c4c149f864b14a084ff684f6081f8'
         'e8203e18bb168ae50401cb7afacbc5e0e9b0adc9fa1322c7744018b9f8ac1d32')

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	patch -p0 < "${srcdir}/welcome.html.patch"
}

package() {
        cd "${srcdir}/${pkgname}-${pkgver}"
        install -Dm755 PlexPy.py "${pkgdir}/opt/plexpy/PlexPy.py"
        install -Dm644 pylintrc  "${pkgdir}/opt/plexpy/"
	install -Dm644 CHANGELOG.md "${pkgdir}/opt/plexpy/"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/plexpy/LICENSE"

        cp -a data/ lib/ plexpy/ "${pkgdir}/opt/plexpy/"

        install -Dm644 "${srcdir}/plexpy.service" "${pkgdir}/usr/lib/systemd/system/plexpy.service"
}

