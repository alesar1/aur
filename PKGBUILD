# Maintainer: Joermungand <joermungand at gmail dot com>
pkgname=lsp-plugins-lxvst-bin
pkgver=1.0.22
pkgrel=1
pkgdesc="Linux Studio Plugins: VST format"
arch=('i686' 'x86_64')
url="http://lsp-plug.in"
license=('custom')
depends=('libsndfile' 'gtk2')
optdepends=('lsp-plugins-doc: HTML documentation')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source_i686=("http://downloads.sourceforge.net/project/lsp-plugins/v${pkgver}/${pkgname%-*}-$pkgver-i586.tar.gz")
source_x86_64=("http://downloads.sourceforge.net/project/lsp-plugins/v${pkgver}/${pkgname%-*}-$pkgver-x86_64.tar.gz")
sha1sums_i686=('5f2aeedabe0091305282cc1c5a46ecb815200337')
sha1sums_x86_64=('918a43e3ee0c8f54bc1771d77a635869ec8ead83')

package() {
	cd $srcdir
	for i in */; do
		install -dm755 "$pkgdir/usr/lib/vst"
		install -Dm755 $i/*.so "$pkgdir/usr/lib/vst/"
		install -Dm644 $i/CHANGELOG.txt "$pkgdir/usr/share/doc/${pkgname%-*}/CHANGELOG"
		install -Dm644 $i/README.txt "$pkgdir/usr/share/doc/${pkgname%-*}/README"
		install -Dm644 $i/LICENSE.txt "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
	done
}
