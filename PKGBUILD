# Contributor: 3ED <krzysztofas (a) protonmail>

pkgname=bash-completion-xmms2
pkgver=20051023
pkgrel=3
pkgdesc="bash-completion for xmms2"
depends=('bash-completion' 'xmms2')
arch=('any')
license=('GPL2')
source=(http://aspellfr.free.fr/xmms2/xmms2_completion)
url="http://aspellfr.free.fr/"
sha512sums=('256bff1d751cc68348c8010cf2f028642829cd20d487862b6aae78d8791ca04bed426746e358a4165b3f27593bbfe5861e5f9b70fd8e53e72bb1262d97d3f22f')

package() {
  install -Dm644 \
	"$srcdir/xmms2_completion" \
	"$pkgdir/usr/share/bash-completion/completions/xmms2"
}
