pkgname=google-translate
pkgver=0.2
pkgrel=3
pkgdesc="A simple CLI google translator (command-line)."
arch=('any')
url="http://dun.ai"
license=('GPL2')
depends=('python2' 'python2-mechanize' 'python2-beautifulsoup4')
options=('!strip')
source=('google-translate')

package() {
    install -Dm755 ${srcdir}/${pkgname} ${pkgdir}/usr/bin/${pkgname}
}

md5sums=('5c1ab8eaca293ed22280c7844bb9d29d')
