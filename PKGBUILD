# Maintainer: Daniel M. Capella <polyzen@archlinux.org>

pkgname=xandikos-git
pkgver=0.1.0.r35.gc73be18
pkgrel=1
pkgdesc='Lightweight yet complete CardDAV/CalDAV server that backs onto a Git repository'
arch=('any')
url=https://www.xandikos.org/
license=('GPL3')
depends=('python-aiohttp' 'python-defusedxml' 'python-dulwich' 'python-icalendar' 'python-jinja')
makedepends=('git' 'python-setuptools')
optdepends=('python-prometheus_client: for metrics with regular server (not uWSgi)'
            'uwsgi-plugin-python: to run in production')
provides=('xandikos')
conflicts=('xandikos')
source=('git+https://www.jelmer.uk/code/xandikos/')
sha512sums=('SKIP')

pkgver() {
  cd xandikos
  git describe --long --tags --match v\* | sed 's/v//;s/-/.r/;s/-/./'
}

build() {
  cd xandikos
  python setup.py build
}

check() {
  cd xandikos
  python -m unittest xandikos.tests.test_suite
}

package() {
  cd xandikos
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 -t "$pkgdir"/usr/share/doc/xandikos README.rst
  install -Dm644 -t "$pkgdir"/usr/share/doc/xandikos/examples examples/*
  install -Dm644 -t "$pkgdir"/usr/share/man/man1 xandikos.1
}

# vim:set ts=2 sw=2 et:
