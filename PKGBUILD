# Maintainer : nyyu <mail@nyyu.tk>

_npmname=generator-jhipster
pkgname=nodejs-generator-jhipster
pkgver=4.14.0
pkgrel=1
pkgdesc="JHipster is a fully Open Source, widely used application generator. Easily create high-quality Spring Boot + AngularJS projects!"
arch=('any')
url="https://jhipster.github.io/"
license=('APACHE')
source=("http://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz")
noextract=($_npmname-$pkgver.tgz)
sha256sums=('c7cec8c46c1df36fe3b8ed7b5ec7851f68f6ef6108a72d62aae8a3212cdd13dd')

package() {
  npm install -g --user root --prefix "$pkgdir"/usr "$srcdir"/$_npmname-$pkgver.tgz
  rmdir "$pkgdir"/usr/etc
  find "$pkgdir"/usr/lib/node_modules/$_npmname/node_modules -type d -exec chmod 755 {} \;
}

