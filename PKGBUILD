# Maintainer: Joermungand <joermungand at gmail dot com>
pkgname=lsp-plugins-lxvst-bin
pkgver=1.1.2
pkgrel=1
pkgdesc="Linux Studio Plugins: VST format"
arch=('i686' 'x86_64')
url="http://lsp-plug.in"
license=('custom')
depends=('libsndfile' 'cairo')
optdepends=('lsp-plugins-doc: HTML documentation')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source_i686=("http://downloads.sourceforge.net/project/lsp-plugins/lsp-plugins/${pkgver}/${pkgname%-*}-$pkgver-i586.tar.gz")
source_x86_64=("http://downloads.sourceforge.net/project/lsp-plugins/lsp-plugins/${pkgver}/${pkgname%-*}-$pkgver-x86_64.tar.gz")
sha1sums_i686=('13e65fbbc10833a9a2fe755401e446e36f86beb3')
sha1sums_x86_64=('9b696678fa2d76f27509587d36f07f4986b0c449')

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
