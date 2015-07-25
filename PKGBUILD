# Maintainer: lilydjwg <lilydjwg@gmail.com>

_pkgname=tldextract
pkgname=python-$_pkgname
pkgver=1.6
pkgrel=1
pkgdesc="Accurately separate the TLD from the registered domain and subdomains of a URL, using the Public Suffix List."
arch=('any')
url="https://github.com/john-kurkowski/tldextract"
license=('BSD')
depends=('python' 'python-setuptools')
source=(https://pypi.python.org/packages/source/t/tldextract/tldextract-1.6.tar.gz)
md5sums=(1acede27a897c123d4c8cf6c9483702e)

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python3 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"

  python3 setup.py install --root=$pkgdir --optimize=1

  _pyver=$(python -c 'import sysconfig; print(sysconfig.get_python_version())')
  # use the snapshot version, because generating a new one requires Internat access and root permission
  ln -s .tld_set_snapshot "$pkgdir/usr/lib/python$_pyver/site-packages/tldextract/.tld_set"
}

# vim:set sw=2 et:
