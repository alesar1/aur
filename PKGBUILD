# Maintainer: luxcem <a@luxcem.fr>
# Contributor: Andrejs Mivreņiks <gim at fastmail dot fm>
# Contributor: Apkawa <apkawa at gmail dot com>
pkgname=django-docs
pkgver=3.2
pkgrel=1
pkgdesc="Docs for Django's release"
arch=('any')
url='https://docs.djangoproject.com/en/'
license=('GPL')
makedepends=('unzip')
source=("https://media.djangoproject.com/docs/django-docs-${pkgver}-en.zip")
noextract=("django-docs-${pkgver}-en.zip")
# We check sha256 but we will see if it does change even if pkgver doesnt
sha256sums=('cb4aa75eacbea181e8ff505a8c253077f28dd89795d20e0e7bf3b9d665cb49a0')

prepare() {
  unzip -oq "django-docs-${pkgver}-en.zip" -d "$srcdir/html"
}

package() {
  install -d "${pkgdir}/usr/share/doc/django/"
  cp -r "$srcdir/html" "${pkgdir}/usr/share/doc/django/"
}
