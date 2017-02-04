# Maintainer: Dylan Baker <dylan@pnwbakers.com>

pkgname=msmtpqd
pkgver=0.1.0
pkgrel=1
pkgdesc="A queueing daemon for msmtp"
arch=('any')
url="https://github.com/dcbaker/msmtpqd"
license=('GPL3')
depends=()
depends=('python-pydbus' 'python-attrs' 'python-appdirs')
makedepends=('python-setuptools')
options=(!emptydirs)
source=('https://pypi.python.org/packages/8f/55/4b8fe4f3ce3c78d9f571c767be3e38427263fc70b4756462765a64afae56/msmtpqd-0.1.0.tar.gz'
        'https://pypi.python.org/packages/8f/55/4b8fe4f3ce3c78d9f571c767be3e38427263fc70b4756462765a64afae56/msmtpqd-0.1.0.tar.gz.asc')
sha256sums=('90cd92cf726b4b4c59ca2803e75d37c1ec3f1ef97a96fe1d7053c253a6a61cfd'
            'SKIP')
validpgpkeys=('5303CCAA8FFEE5A1472F3538089E1696140688EF')  # Dylan Baker <dylan@pnwbakers.com>

package() {
  cd "$srcdir/${pkgname}-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
